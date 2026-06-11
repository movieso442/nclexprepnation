import { MailCheck, MessageCircle, ShieldCheck } from "lucide-react";

import { RequestAccessForm } from "@/components/forms/RequestAccessForm";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

const description =
  "Request NCLEX Prep Nation materials, certificate details, score improvement support, Premium access, or Guided Support.";

export const metadata = createPageMetadata({
  title: "Request NCLEX Prep Access",
  description,
  path: "/request-access",
});

export default function RequestAccessPage() {
  return (
    <>
      <PageHero
        description="Tell us what you are preparing for and which service interests you. The team will follow up through your preferred contact method."
        eyebrow="Request access"
        primaryHref="#request-form"
        primaryLabel="Complete the Form"
        title="Request your preparation package."
      />
      <Section id="request-form">
        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <Card className="p-6 sm:p-8">
            <RequestAccessForm />
          </Card>

          <aside className="space-y-5">
            <Card className="p-6">
              <MailCheck aria-hidden className="text-clinical" size={25} />
              <h2 className="mt-4 font-bold text-navy">
                What happens after submission
              </h2>
              <ol className="mt-4 space-y-3 text-sm leading-6 text-muted">
                <li>1. We review your exam type and package interest.</li>
                <li>2. We contact you by WhatsApp, email, or both.</li>
                <li>3. You receive package and payment instructions.</li>
                <li>4. Access is activated after confirmation.</li>
              </ol>
            </Card>
            <Card className="p-6">
              <MessageCircle aria-hidden className="text-teal" size={25} />
              <h2 className="mt-4 font-bold text-navy">Personal follow-up</h2>
              <p className="mt-3 text-sm leading-6 text-muted">
                The request process is designed to help you choose the right
                level of access before package confirmation. You can also email{" "}
                <a
                  className="font-semibold text-clinical hover:underline"
                  href={`mailto:${siteConfig.emails.support}`}
                >
                  {siteConfig.emails.support}
                </a>
                .
              </p>
            </Card>
            <Card className="p-6">
              <ShieldCheck aria-hidden className="text-success" size={25} />
              <h2 className="mt-4 font-bold text-navy">Trust note</h2>
              <p className="mt-3 text-sm leading-6 text-muted">
                NCLEX Prep Nation provides original educational preparation
                materials and does not provide real or leaked exam questions.
              </p>
            </Card>
          </aside>
        </div>
      </Section>
    </>
  );
}
