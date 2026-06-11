import { HelpCircle, Mail, MessageCircle } from "lucide-react";

import { ContactForm } from "@/components/forms/ContactForm";
import { InfoGrid } from "@/components/layout/InfoGrid";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { getWhatsAppHref, siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

const description =
  "Contact NCLEX Prep Nation by support email, WhatsApp, or the inquiry form for packages, materials, access, and preparation questions.";

export const metadata = createPageMetadata({
  title: "Contact NCLEX Prep Nation",
  description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        description="Reach out for package guidance, access questions, or help deciding which preparation path fits your current needs."
        eyebrow="Contact"
        primaryLabel="Request Access"
        secondaryHref="/faq"
        secondaryLabel="Read FAQs"
        title="Talk with the NCLEX Prep Nation team."
      />
      <Section>
        <InfoGrid
          items={[
            { title: "Email support", description: siteConfig.emails.support, icon: Mail },
            { title: "WhatsApp guidance", description: "Ask about preparation options, package requests, and access steps through WhatsApp.", icon: MessageCircle },
            { title: "Common questions", description: "Review answers about content, package requests, access, and platform independence.", icon: HelpCircle },
          ]}
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-navy">
              Send a general inquiry
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              This form is a public interface preview. Online delivery will be
              connected in a later phase.
            </p>
            <div className="mt-7">
              <ContactForm />
            </div>
          </Card>
          <Card className="p-6 sm:p-8">
            <h2 className="text-xl font-bold text-navy">Direct contact</h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              For package and access questions, use the official support
              address or the WhatsApp contact link.
            </p>
            <div className="mt-6 grid gap-3">
              <Button href={getWhatsAppHref()} variant="whatsapp">
                Contact Us on WhatsApp
              </Button>
              <Button
                href={`mailto:${siteConfig.emails.support}`}
                variant="outline"
              >
                {siteConfig.emails.support}
              </Button>
              <Button href="/faq" variant="ghost">
                Read Frequently Asked Questions
              </Button>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}
