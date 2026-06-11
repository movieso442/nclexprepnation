import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { getWhatsAppHref } from "@/data/site";

export function FinalCTA() {
  return (
    <Section className="bg-navy text-white">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
            Start your preparation
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Prepare With Structure?
          </h2>
          <p className="mt-4 leading-7 text-slate-300">
            Start with a free diagnostic test or request the preparation
            materials that match your exam goals.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button
            className="border-white bg-white text-navy hover:border-teal hover:bg-teal"
            href="/free-diagnostic"
          >
            Start Free Diagnostic
          </Button>
          <Button
            className="border-white/40 bg-transparent text-white hover:border-white hover:bg-white hover:text-navy"
            href="/request-access"
            variant="outline"
          >
            Request Access
          </Button>
          <Button href={getWhatsAppHref()} variant="whatsapp">
            <MessageCircle aria-hidden size={18} />
            Contact Us on WhatsApp
          </Button>
        </div>
      </div>
    </Section>
  );
}
