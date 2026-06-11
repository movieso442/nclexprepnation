import { PageHero } from "@/components/layout/PageHero";
import { PageCTA } from "@/components/layout/PageCTA";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/data/site";

type LegalSection = {
  title: string;
  paragraphs: string[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  sections: LegalSection[];
};

export function LegalPage({
  description,
  eyebrow,
  sections,
  title,
}: LegalPageProps) {
  return (
    <>
      <PageHero
        description={description}
        eyebrow={eyebrow}
        primaryHref="/contact"
        primaryLabel="Contact Us"
        title={title}
      />
      <Section>
        <Card className="mx-auto max-w-4xl p-6 sm:p-10">
          <div className="space-y-9">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-bold text-navy">{section.title}</h2>
                <div className="mt-3 space-y-3">
                  {section.paragraphs.map((paragraph) => (
                    <p className="text-sm leading-7 text-muted" key={paragraph}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </Card>
      </Section>
      <PageCTA
        description={`Questions about this policy can be sent to ${siteConfig.emails.support}.`}
        primaryHref={`mailto:${siteConfig.emails.support}`}
        primaryLabel="Email Support"
        secondaryHref="/contact"
        secondaryLabel="Contact Page"
        title="Need clarification?"
      />
    </>
  );
}
