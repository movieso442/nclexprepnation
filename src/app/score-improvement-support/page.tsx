import { BookCheck, ChartNoAxesCombined, ListChecks, Target } from "lucide-react";

import { InfoGrid } from "@/components/layout/InfoGrid";
import { PageCTA } from "@/components/layout/PageCTA";
import { PageHero } from "@/components/layout/PageHero";
import { TrustNotice } from "@/components/layout/TrustNotice";
import { Section } from "@/components/ui/Section";
import { getWhatsAppHref } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

const description =
  "Get structured NCLEX score improvement support focused on weak areas, mistake review, better practice habits, and stronger preparation confidence.";

export const metadata = createPageMetadata({
  title: "Score Improvement Support",
  description,
  path: "/score-improvement-support",
});

export default function ScoreImprovementSupportPage() {
  return (
    <>
      <PageHero
        description="Score Improvement Support helps students review weak areas, understand mistakes, practice with better structure, and prepare with more confidence. It does not change official exam scores."
        eyebrow="Preparation support"
        primaryHref="/request-access?service=score-improvement"
        primaryLabel="Request Score Improvement Support"
        secondaryHref={getWhatsAppHref()}
        secondaryLabel="Contact Us on WhatsApp"
        title="Turn weak areas into a focused review plan."
      />

      <Section>
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-bold text-navy">
            Support for a stronger preparation process
          </h2>
          <p className="mt-3 leading-7 text-muted">
            The focus is on how you study, review, and respond to mistakes
            before test day. Recommendations are educational and tailored to
            the preparation information you share.
          </p>
        </div>
        <InfoGrid
          columns={4}
          items={[
            {
              title: "Identify weak areas",
              description:
                "Organize review around topics and question types that need more attention.",
              icon: Target,
            },
            {
              title: "Review mistakes",
              description:
                "Use rationales to understand why an answer was missed and what principle to revisit.",
              icon: BookCheck,
            },
            {
              title: "Practice with structure",
              description:
                "Build a practical schedule for topic review, questions, and follow-up practice.",
              icon: ListChecks,
            },
            {
              title: "Track preparation",
              description:
                "Watch for learning patterns and improved consistency without implying an official score change.",
              icon: ChartNoAxesCombined,
            },
          ]}
        />
        <div className="mt-8">
          <TrustNotice
            text="This service supports preparation only. It cannot alter, appeal, replace, or guarantee any official NCLEX result."
            title="Important score clarification"
          />
        </div>
      </Section>

      <PageCTA
        description="Share your exam type, current challenges, and preferred contact method so the team can recommend a practical support path."
        primaryHref="/request-access?service=score-improvement"
        primaryLabel="Request Support"
        secondaryHref={getWhatsAppHref()}
        secondaryLabel="Contact Us on WhatsApp"
        secondaryVariant="whatsapp"
        title="Ready for a more focused review plan?"
      />
    </>
  );
}
