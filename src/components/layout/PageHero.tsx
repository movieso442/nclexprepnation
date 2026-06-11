import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryLabel = "Request Access",
  primaryHref = "/request-access",
  secondaryLabel,
  secondaryHref,
}: PageHeroProps) {
  return (
    <Section className="border-b border-line bg-soft">
      <div className="max-w-3xl">
        <Badge>{eyebrow}</Badge>
        <h1 className="mt-5 text-4xl font-bold tracking-tight text-navy sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted">{description}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href={primaryHref}>{primaryLabel}</Button>
          {secondaryLabel && secondaryHref ? (
            <Button href={secondaryHref} variant="outline">
              {secondaryLabel}
            </Button>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
