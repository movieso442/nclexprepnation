import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

type PageCTAProps = {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  secondaryVariant?: "outline" | "whatsapp";
};

export function PageCTA({
  description,
  primaryHref = "/request-access",
  primaryLabel = "Request Access",
  secondaryHref,
  secondaryLabel,
  secondaryVariant = "outline",
  title,
}: PageCTAProps) {
  return (
    <Section className="border-t border-line bg-soft">
      <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-navy">
            {title}
          </h2>
          <p className="mt-3 leading-7 text-muted">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={primaryHref}>{primaryLabel}</Button>
          {secondaryHref && secondaryLabel ? (
            <Button href={secondaryHref} variant={secondaryVariant}>
              {secondaryLabel}
            </Button>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
