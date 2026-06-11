import { ArrowRight } from "lucide-react";

import { PageCTA } from "@/components/layout/PageCTA";
import { PageHero } from "@/components/layout/PageHero";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/metadata";

const description =
  "Explore practical NCLEX-RN, NCLEX-PN, NGN, prioritization, rationale review, and study planning guidance from NCLEX Prep Nation.";

export const metadata = createPageMetadata({
  title: "NCLEX Prep Blog",
  description,
  path: "/blog",
});

const posts = [
  {
    category: "NCLEX-RN",
    title: "How to Prepare for NCLEX-RN",
    excerpt:
      "Build a practical review plan around content, questions, rationales, and clinical judgment.",
  },
  {
    category: "Prioritization",
    title: "How to Answer NCLEX Prioritization Questions",
    excerpt:
      "Review urgency, stability, safety, scope, and the nursing process before selecting an answer.",
  },
  {
    category: "Clinical Judgment",
    title: "What Are NGN Case Studies?",
    excerpt:
      "Understand how case information, cues, actions, and outcomes work together in NGN-style practice.",
  },
  {
    category: "Study Plans",
    title: "NCLEX Study Plan for Working Nurses",
    excerpt:
      "Create a sustainable schedule that balances shifts, topic review, practice, and recovery time.",
  },
  {
    category: "Rationales",
    title: "How to Review NCLEX Rationales",
    excerpt:
      "Turn each missed question into a focused note, concept review, and better follow-up practice.",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        description="Practical articles are being prepared to help candidates study with more structure and understand the reasoning behind common NCLEX question patterns."
        eyebrow="Blog"
        primaryHref="/free-diagnostic"
        primaryLabel="Start Free Diagnostic"
        secondaryHref="/resources"
        secondaryLabel="Browse Resources"
        title="NCLEX preparation guidance you can apply."
      />
      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card className="flex h-full flex-col p-6" key={post.title}>
              <Badge className="w-fit">{post.category}</Badge>
              <h2 className="mt-5 text-xl font-bold text-navy">{post.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-7 text-muted">
                {post.excerpt}
              </p>
              <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-clinical">
                Article coming soon
                <ArrowRight aria-hidden size={16} />
              </p>
            </Card>
          ))}
        </div>
      </Section>
      <PageCTA
        description="Use the current preparation pages while the full article library is being developed."
        primaryHref="/resources"
        primaryLabel="Browse Study Resources"
        secondaryHref="/request-access"
        secondaryLabel="Request Study Materials"
        title="Put the guidance into a study plan."
      />
    </>
  );
}
