import { Check } from "lucide-react";

import { PageCTA } from "@/components/layout/PageCTA";
import { PageHero } from "@/components/layout/PageHero";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { prepPackages } from "@/data/packages";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

const description =
  "Compare Free, Starter, Premium, and Guided Support NCLEX preparation packages and request access through WhatsApp or email.";

export const metadata = createPageMetadata({
  title: "NCLEX Prep Packages",
  description,
  path: "/packages",
});

export default function PackagesPage() {
  return (
    <>
      <PageHero
        description="Compare preparation levels, decide how much structure and support you need, and submit a request for personalized next steps."
        eyebrow="Packages"
        primaryLabel="Send Package Request"
        secondaryHref="/contact"
        secondaryLabel="Ask a Question"
        title="Preparation options for different study needs."
      />
      <Section>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {prepPackages.map((item) => (
            <Card
              className={cn(
                "flex h-full flex-col p-6",
                item.featured && "border-clinical ring-1 ring-clinical",
              )}
              key={item.slug}
            >
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-xl font-bold text-navy">{item.name}</h2>
                {item.featured ? <Badge>Popular</Badge> : null}
              </div>
              <p className="mt-3 text-sm font-semibold text-clinical">
                Best for: {item.bestFor}
              </p>
              <p className="mt-3 text-sm leading-6 text-muted">
                {item.description}
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {item.features.map((feature) => (
                  <li className="flex gap-2.5 text-sm text-ink" key={feature}>
                    <Check
                      aria-hidden
                      className="mt-0.5 shrink-0 text-success"
                      size={17}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className="mt-7 w-full"
                href={
                  item.slug === "free"
                    ? "/free-diagnostic"
                    : `/request-access?package=${item.slug}`
                }
                variant={item.featured ? "primary" : "outline"}
              >
                {item.cta}
              </Button>
            </Card>
          ))}
        </div>

        <Card className="mt-10 border-clinical/20 bg-soft p-6 sm:p-8">
          <h2 className="font-bold text-navy">How package access works</h2>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-muted">
            Payments are handled through a manual request process. After
            submitting a request, our team will contact you by WhatsApp or email
            with package details, payment instructions, and access confirmation.
            Email questions to{" "}
            <a
              className="font-semibold text-clinical hover:underline"
              href={`mailto:${siteConfig.emails.support}`}
            >
              {siteConfig.emails.support}
            </a>
            .
          </p>
        </Card>
      </Section>
      <PageCTA
        description="Share your exam type and study needs before confirming a package. There is no automated checkout in this phase."
        primaryLabel="Send Package Request"
        secondaryHref={`mailto:${siteConfig.emails.support}`}
        secondaryLabel="Email Support"
        title="Need help choosing a package?"
      />
    </>
  );
}
