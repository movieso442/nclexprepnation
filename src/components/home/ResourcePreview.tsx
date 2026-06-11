import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

const topics = [
  "Pharmacology",
  "Prioritization",
  "Safety and Infection Control",
  "Lab Values",
  "Maternity",
  "Pediatrics",
  "Mental Health",
  "Medical-Surgical Nursing",
  "NGN Case Studies",
];

export function ResourcePreview() {
  return (
    <Section className="border-y border-line bg-soft">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clinical">
            Practice questions and resources
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Practice by Topic and Review With Clear Rationales
          </h2>
          <p className="mt-4 leading-7 text-muted">
            Study across major nursing topics, review the reasoning behind each
            answer, and connect weak areas with focused resources.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button href="/practice-questions">
              View Practice Questions
              <ArrowRight aria-hidden size={18} />
            </Button>
            <Button href="/resources" variant="outline">
              View Study Resources
            </Button>
          </div>
        </div>

        <Card className="grid gap-px overflow-hidden bg-line sm:grid-cols-2">
          {topics.map((topic) => (
            <div className="flex items-center gap-3 bg-white p-4" key={topic}>
              <CheckCircle2
                aria-hidden
                className="shrink-0 text-success"
                size={18}
              />
              <span className="text-sm font-semibold text-navy">{topic}</span>
            </div>
          ))}
        </Card>
      </div>
    </Section>
  );
}
