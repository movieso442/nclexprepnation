import { PageCTA } from "@/components/layout/PageCTA";
import { PageHero } from "@/components/layout/PageHero";
import { TrustNotice } from "@/components/layout/TrustNotice";
import { Section } from "@/components/ui/Section";
import { faqs } from "@/data/faqs";
import { createPageMetadata } from "@/lib/metadata";

const description =
  "Find clear answers about NCLEX Prep Nation, original materials, certificates, score improvement support, packages, and access.";

export const metadata = createPageMetadata({
  title: "NCLEX Prep FAQ",
  description,
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        description="Review clear answers about content, preparation support, access requests, and the platform's independent status."
        eyebrow="FAQ"
        primaryLabel="Ask About Access"
        secondaryHref="/contact"
        secondaryLabel="Contact Us"
        title="Questions about the platform and preparation process."
      />
      <Section>
        <div className="mx-auto max-w-4xl divide-y divide-line border-y border-line">
          {faqs.map((item) => (
            <div className="py-6" key={item.question}>
              <h2 className="font-bold text-navy">{item.question}</h2>
              <p className="mt-2 text-sm leading-7 text-muted">{item.answer}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-4xl">
          <TrustNotice />
        </div>
      </Section>
      <PageCTA
        description="Send a package request or contact the team if your question is not answered here."
        primaryLabel="Request Access"
        secondaryHref="/contact"
        secondaryLabel="Contact Support"
        title="Still deciding where to begin?"
      />
    </>
  );
}
