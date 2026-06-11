import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { faqs } from "@/data/faqs";

export function FAQPreview() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clinical">
            Common questions
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy">
            Clear answers before you begin.
          </h2>
          <p className="mt-4 leading-7 text-muted">
            Understand the platform, its content standards, and the manual
            access process.
          </p>
          <Button className="mt-7" href="/faq" variant="outline">
            View All FAQs
          </Button>
        </div>

        <div className="divide-y divide-line border-y border-line">
          {faqs.map((item) => (
            <div className="py-6" key={item.question}>
              <h3 className="font-semibold text-navy">{item.question}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
