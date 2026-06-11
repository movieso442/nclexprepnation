import { Check } from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { prepPackages } from "@/data/packages";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function PackagePreview() {
  return (
    <Section>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clinical">
            Preparation packages
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Choose the Support That Fits Your Preparation
          </h2>
        </div>
        <Button href="/packages" variant="outline">
          Compare All Packages
        </Button>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {prepPackages.map((item) => (
          <Card
            className={cn(
              "flex h-full flex-col p-6",
              item.featured && "border-clinical ring-1 ring-clinical",
            )}
            key={item.slug}
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-xl font-bold text-navy">{item.name}</h3>
              {item.featured ? <Badge>Most complete</Badge> : null}
            </div>
            <p className="mt-3 text-sm font-semibold text-clinical">
              {item.bestFor}
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
      <p className="mt-8 border-l-3 border-clinical bg-soft px-5 py-4 text-sm leading-7 text-muted">
        Payments are handled through a manual request process. After submitting
        a request, our team will contact you by WhatsApp or email with package
        details, payment instructions, and access confirmation. Questions can
        also be sent to{" "}
        <a
          className="font-semibold text-clinical hover:underline"
          href={`mailto:${siteConfig.emails.support}`}
        >
          {siteConfig.emails.support}
        </a>
        .
      </p>
    </Section>
  );
}
