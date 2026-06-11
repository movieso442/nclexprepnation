import { BookCheck, BrainCircuit, CheckCircle2, LockKeyhole } from "lucide-react";

import { PageCTA } from "@/components/layout/PageCTA";
import { PageHero } from "@/components/layout/PageHero";
import { TrustNotice } from "@/components/layout/TrustNotice";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/metadata";

const description =
  "Practice original NCLEX-style questions by topic, review detailed rationales, preview NGN-style cases, and compare free and premium access.";

export const metadata = createPageMetadata({
  title: "NCLEX Practice Questions",
  description,
  path: "/practice-questions",
});

export default function PracticeQuestionsPage() {
  return (
    <>
      <PageHero
        description="Practice with original NCLEX-style questions designed to improve reasoning, expose weak areas, and make each rationale part of your study process."
        eyebrow="Practice questions"
        primaryHref="/free-diagnostic"
        primaryLabel="Start Free Diagnostic"
        secondaryHref="/request-access"
        secondaryLabel="Request Full Access"
        title="Practice with purpose, then learn from the rationale."
      />

      <Section>
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-navy">Practice by topic</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {[
              "Pharmacology",
              "Prioritization",
              "Safety and Infection Control",
              "Lab Values",
              "Maternity",
              "Pediatrics",
              "Mental Health",
              "Medical-Surgical Nursing",
              "NGN Case Studies",
            ].map((topic) => (
              <Badge
                className="border-line bg-white normal-case tracking-normal text-ink"
                key={topic}
              >
                {topic}
              </Badge>
            ))}
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2">
              <Badge>Safety</Badge>
              <Badge className="border-line bg-white text-muted">Multiple choice</Badge>
            </div>
            <h2 className="mt-6 text-xl font-bold text-navy">
              Sample question preview
            </h2>
            <p className="mt-4 leading-7 text-ink">
              A nurse is reviewing care priorities for several clients. Which
              client should the nurse assess first?
            </p>
            <div className="mt-6 grid gap-3">
              {[
                "A client requesting discharge instructions",
                "A client with a new change in breathing",
                "A client due for a routine dressing change",
                "A client asking about tomorrow's procedure",
              ].map((option, index) => (
                <div
                  className="flex gap-3 rounded-md border border-line px-4 py-3 text-sm text-ink"
                  key={option}
                >
                  <span className="font-semibold text-clinical">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  {option}
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs leading-5 text-muted">
              Sample content is illustrative and intended for educational
              preparation only.
            </p>
          </Card>

          <div className="grid gap-5">
            {[
              { title: "Detailed rationales", text: "Understand why an answer is correct and what principle to review next.", icon: BookCheck },
              { title: "Clinical judgment focus", text: "Practice recognizing cues, prioritizing needs, and selecting safer actions.", icon: BrainCircuit },
              { title: "Topic-based review", text: "Organize practice around the areas that need the most attention.", icon: CheckCircle2 },
            ].map(({ icon: Icon, text, title }) => (
              <Card className="p-5" key={title}>
                <Icon aria-hidden className="text-clinical" size={22} />
                <h3 className="mt-3 font-bold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-y border-line bg-soft" id="access-levels">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <Badge>Diagnostic foundation</Badge>
            <h2 className="mt-4 text-3xl font-bold text-navy">
              Discover which topics need a closer review.
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-muted">
              Free access is designed for sample questions and a diagnostic
              preview. Premium access is planned for the full question bank,
              NGN-style cases, detailed rationales, mock exams, and progress
              review.
            </p>
          </div>
          <Button href="/free-diagnostic">Start Free Diagnostic</Button>
        </div>
      </Section>

      <Section>
        <Card className="mb-8 flex items-start gap-4 border-line bg-white p-6">
          <LockKeyhole aria-hidden className="shrink-0 text-clinical" size={24} />
          <div>
            <h2 className="font-bold text-navy">Premium question bank preview</h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              Full access is planned to include topic practice, NGN-style case
              studies, mock exams, saved questions, and progress tracking.
            </p>
          </div>
        </Card>
        <TrustNotice />
      </Section>
      <PageCTA
        description="Start with the free diagnostic or request access to deeper topic practice, NGN-style cases, and rationale review."
        primaryHref="/free-diagnostic"
        primaryLabel="Start Free Diagnostic"
        secondaryHref="/request-access?service=practice-questions"
        secondaryLabel="Request Full Access"
        title="Use each question to guide your next review."
      />
    </>
  );
}
