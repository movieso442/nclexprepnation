import { z } from "zod";

import {
  buildRequestAccessWhatsAppMessage,
  formatExamType,
  formatPackageInterest,
  formatPreferredContact,
  getRequestAccessWhatsAppHref,
} from "@/data/site";

const contactSchema = z.object({
  type: z.literal("contact"),
  name: z.string().trim().min(2).max(120),
  email: z.email().max(160),
  subject: z.string().trim().min(2).max(160),
  message: z.string().trim().min(2).max(2000),
  sourcePage: z.string().optional(),
  honeypot: z.string().optional(),
});

const requestAccessSchema = z.object({
  type: z.literal("request-access"),
  fullName: z.string().trim().min(2).max(120),
  email: z.email().max(160),
  whatsapp: z.string().trim().min(7).max(60),
  country: z.string().trim().min(2).max(100),
  examType: z.string().trim().min(1).max(80),
  packageInterest: z.string().trim().min(1).max(120),
  message: z.string().trim().max(1000).optional().default(""),
  preferredContact: z.enum(["whatsapp", "email", "both"]),
  sourcePage: z.string().optional(),
  honeypot: z.string().optional(),
});

const submissionSchema = z.discriminatedUnion("type", [
  contactSchema,
  requestAccessSchema,
]);

type EmailField = {
  label: string;
  value: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatFieldsAsText(fields: EmailField[], disclaimer: string) {
  const details = fields.map((field) => `${field.label}:\n${field.value}`).join("\n\n");
  return `Submission Details\n\n${details}\n\n------------------\n${disclaimer}`;
}

function formatFieldsAsHtml(fields: EmailField[], disclaimer: string, whatsappLink?: string) {
  const rows = fields
    .map(
      (field) => `
        <tr>
          <th align="left" style="padding:12px 14px;border-bottom:1px solid #e2e8f0;color:#0b1f3a;width:220px;font-size:14px;vertical-align:top;background-color:#f8fafc;">
            ${escapeHtml(field.label)}
          </th>
          <td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;color:#334155;font-size:14px;white-space:pre-wrap;">${escapeHtml(field.value)}</td>
        </tr>`,
    )
    .join("");

  let quickLinkBlock = "";
  if (whatsappLink) {
    quickLinkBlock = `
      <div style="margin-top:24px;padding:16px;background-color:#ecfdf5;border-radius:8px;border:1px solid #a7f3d0;text-align:center;">
        <h4 style="margin:0 0 6px;color:#065f46;font-size:14px;font-weight:bold;">WhatsApp Actions</h4>
        <p style="margin:0;font-size:13px;">
          <a href="${whatsappLink}" target="_blank" style="color:#047857;font-weight:bold;text-decoration:none;">Click here to start chat with prefilled message &rarr;</a>
        </p>
      </div>`;
  }

  return `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;line-height:1.6;color:#334155;max-width:650px;margin:0 auto;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;">
      <div style="background-color:#0b1f3a;padding:24px;text-align:center;color:#ffffff;">
        <h2 style="margin:0;font-size:22px;font-weight:bold;letter-spacing:0.5px;">NCLEX Prep Nation</h2>
        <p style="margin:4px 0 0;font-size:11px;color:#94a3b8;text-transform:uppercase;letter-spacing:1.5px;">New Candidate Submission</p>
      </div>
      <div style="padding:24px;background-color:#ffffff;">
        <h3 style="margin:0 0 16px;color:#0b1f3a;font-size:16px;border-bottom:2px solid #f1f5f9;padding-bottom:8px;font-weight:bold;">Submission Details</h3>
        <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;border:1px solid #e2e8f0;">
          ${rows}
        </table>
        ${quickLinkBlock}
      </div>
      <div style="background-color:#f8fafc;padding:20px;text-align:center;font-size:11px;color:#64748b;border-top:1px solid #e2e8f0;">
        <p style="margin:0;">This is an automated transactional notification sent because a candidate submitted a form on the NCLEX Prep Nation website.</p>
        <p style="margin:8px 0 0;font-style:italic;">${disclaimer}</p>
      </div>
    </div>`;
}

async function sendResendEmail({
  fields,
  replyTo,
  subject,
  whatsappLink,
}: {
  fields: EmailField[];
  replyTo: string;
  subject: string;
  whatsappLink?: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  const from =
    process.env.RESEND_FROM_EMAIL ||
    "NCLEX Prep Nation <support@nclexprepnation.com>";
  const to =
    process.env.RESEND_TO_EMAIL ||
    process.env.CONTACT_TO_EMAIL ||
    process.env.SUPPORT_EMAIL ||
    "support@nclexprepnation.com";

  const disclaimer =
    "NCLEX Prep Nation is an independent educational preparation platform. NCLEX® is a registered trademark of the National Council of State Boards of Nursing, Inc. NCLEX Prep Nation is not affiliated with or endorsed by NCSBN or Pearson VUE.";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      subject,
      reply_to: replyTo,
      text: formatFieldsAsText(fields, disclaimer),
      html: formatFieldsAsHtml(fields, disclaimer, whatsappLink),
    }),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Resend email failed: ${message}`);
  }
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const result = submissionSchema.safeParse(payload);

    if (!result.success) {
      return Response.json(
        { message: "Please check the form and try again." },
        { status: 400 },
      );
    }

    // Anti-spam Honeypot Protection Check
    if (result.data.honeypot) {
      console.warn("Spam submission blocked via honeypot.");
      // Return 200 success to confuse spam bot and prevent retries
      return Response.json({ message: "Message sent." });
    }

    const timestamp = new Date().toLocaleString("en-US", { timeZone: "UTC" }) + " UTC";
    const userAgent = request.headers.get("user-agent") || "Unknown";

    if (result.data.type === "contact") {
      const sourcePage = result.data.sourcePage || "/contact";
      const fields: EmailField[] = [
        { label: "Full Name", value: result.data.name },
        { label: "Email", value: result.data.email },
        { label: "Subject", value: result.data.subject },
        { label: "Message", value: result.data.message },
        { label: "Source Page", value: sourcePage },
        { label: "Submitted At", value: timestamp },
        { label: "User Agent", value: userAgent },
      ];

      await sendResendEmail({
        fields,
        replyTo: result.data.email,
        subject: `New NCLEX Prep Nation Request: General Inquiry - ${result.data.name}`,
      });

      return Response.json({ message: "Message sent." });
    }

    // Handle "request-access"
    const sourcePage = result.data.sourcePage || "/request-access";
    const packageLabel = formatPackageInterest(result.data.packageInterest);
    const prefilledWhatsAppMessage = buildRequestAccessWhatsAppMessage(result.data);
    const whatsappLink = getRequestAccessWhatsAppHref(result.data);

    const fields: EmailField[] = [
      { label: "Full Name", value: result.data.fullName },
      { label: "Email", value: result.data.email },
      { label: "WhatsApp Number", value: result.data.whatsapp },
      { label: "Country", value: result.data.country },
      { label: "Exam Type", value: formatExamType(result.data.examType) },
      { label: "Interested Service or Package", value: packageLabel },
      { label: "Preferred Contact Method", value: formatPreferredContact(result.data.preferredContact) },
      { label: "Message", value: result.data.message || "No extra message provided." },
      { label: "Source Page", value: sourcePage },
      { label: "Submitted At", value: timestamp },
      { label: "User Agent", value: userAgent },
      { label: "WhatsApp Prefilled Message", value: prefilledWhatsAppMessage },
    ];

    await sendResendEmail({
      fields,
      replyTo: result.data.email,
      subject: `New NCLEX Prep Nation Request: ${packageLabel} - ${result.data.fullName}`,
      whatsappLink,
    });

    return Response.json({ message: "Request sent." });
  } catch (error) {
    console.error("API contact route error:", error);

    return Response.json(
      {
        message:
          "We could not send the request right now. Please try again or contact support directly.",
      },
      { status: 500 },
    );
  }
}
