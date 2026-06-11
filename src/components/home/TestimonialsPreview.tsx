import { MessageSquareQuote } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function TestimonialsPreview() {
  return (
    <Section className="border-y border-line bg-soft">
      <div className="mx-auto max-w-3xl text-center">
        <MessageSquareQuote
          aria-hidden
          className="mx-auto text-clinical"
          size={30}
        />
        <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-clinical">
          Student feedback
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy">
          Testimonials
        </h2>
        <p className="mt-4 text-lg leading-8 text-muted">
          Student feedback will be added after verified reviews are collected.
        </p>
        <p className="mt-3 text-sm leading-6 text-muted">
          NCLEX Prep Nation will publish real feedback only, with permission and
          without unsupported pass claims.
        </p>
        <Button className="mt-7" href="/testimonials" variant="outline">
          View Testimonials Policy
        </Button>
      </div>
    </Section>
  );
}
