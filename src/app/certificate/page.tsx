import { Award, CheckSquare, FileCheck2 } from "lucide-react";

import { InfoGrid } from "@/components/layout/InfoGrid";
import { PageCTA } from "@/components/layout/PageCTA";
import { PageHero } from "@/components/layout/PageHero";
import { TrustNotice } from "@/components/layout/TrustNotice";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

const description =
  "Learn about the NCLEX Prep Nation course and preparation completion certificate, eligibility activities, and important credential limitations.";

export const metadata = createPageMetadata({
  title: "Certificate Program",
  description,
  path: "/certificate",
});

export default function CertificatePage() {
  return (
    <>
      <PageHero
        description="NCLEX Prep Nation may issue a course/preparation completion certificate to students who complete selected preparation activities."
        eyebrow="Certificate program"
        primaryHref="/request-access?service=certificate"
        primaryLabel="Request Certificate Details"
        secondaryHref={`mailto:${siteConfig.emails.certificate}`}
        secondaryLabel="Email Certificate Support"
        title="Document your preparation program completion."
      />

      <Section>
        <div className="mb-10 max-w-4xl">
          <h2 className="text-3xl font-bold text-navy">
            A preparation completion certificate
          </h2>
          <p className="mt-4 leading-8 text-muted">
            NCLEX Prep Nation may issue a course/preparation completion
            certificate to students who complete selected preparation
            activities. This certificate is not an official NCLEX certificate
            and does not replace exam registration, eligibility, or official
            licensing requirements.
          </p>
        </div>
        <InfoGrid
          items={[
            {
              title: "Selected activities",
              description:
                "Eligibility may include completing assigned preparation modules, practice work, or guided review activities.",
              icon: CheckSquare,
            },
            {
              title: "Completion record",
              description:
                "The certificate records participation in an NCLEX Prep Nation preparation pathway.",
              icon: FileCheck2,
            },
            {
              title: "Clear limitations",
              description:
                "It is not a nursing license, exam result, official NCLEX credential, or proof of regulatory eligibility.",
              icon: Award,
            },
          ]}
        />
        <div className="mt-8">
          <TrustNotice
            text={`Certificate questions can be sent to ${siteConfig.emails.certificate}. Official exam and licensing requirements must be confirmed with the relevant nursing regulator and official NCLEX sources.`}
            title="Certificate clarification"
          />
        </div>
      </Section>

      <PageCTA
        description="Ask which preparation activities are included and what must be completed before a certificate may be issued."
        primaryHref="/request-access?service=certificate"
        primaryLabel="View Certificate Program"
        secondaryHref={`mailto:${siteConfig.emails.certificate}`}
        secondaryLabel="Email Certificate Support"
        title="Need the completion requirements?"
      />
    </>
  );
}
