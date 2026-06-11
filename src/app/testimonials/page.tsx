import { MessageSquareQuote, ShieldCheck } from "lucide-react";

import { PageCTA } from "@/components/layout/PageCTA";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/metadata";

const description =
  "Learn how NCLEX Prep Nation will publish authentic, permission-based student feedback without invented pass claims or reviews.";

export const metadata = createPageMetadata({
  title: "Student Testimonials",
  description,
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        description="Student feedback will be shared only when it is authentic, permission has been confirmed, and the original meaning is preserved."
        eyebrow="Testimonials"
        primaryHref="/request-access"
        primaryLabel="Explore Preparation Options"
        secondaryHref="/about"
        secondaryLabel="About the Platform"
        title="Real student experiences, published responsibly."
      />
      <Section>
        <Card className="mx-auto max-w-3xl border-clinical/20 p-7 text-center sm:p-10">
          <MessageSquareQuote
            aria-hidden
            className="mx-auto text-clinical"
            size={32}
          />
          <h2 className="mt-5 text-2xl font-bold text-navy">
            Student feedback will be added after verified reviews are
            collected.
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            NCLEX Prep Nation does not use invented reviews, fake student
            photos, unsupported pass claims, or testimonials published without
            permission.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-success">
            <ShieldCheck aria-hidden size={19} />
            Real testimonials only
          </div>
          <Button className="mt-7" href="/resources">
            View Prep Resources
          </Button>
        </Card>
      </Section>
      <PageCTA
        description="Explore the preparation resources and support options currently available while verified feedback is collected."
        primaryHref="/resources"
        primaryLabel="View Prep Resources"
        secondaryHref="/about"
        secondaryLabel="About the Platform"
        title="Review the platform directly."
      />
    </>
  );
}
