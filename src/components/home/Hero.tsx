import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  MessageCircle,
} from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { getWhatsAppHref } from "@/data/site";

const readinessItems = [
  "Original NCLEX-style practice",
  "NCLEX-RN and NCLEX-PN paths",
  "Detailed learning rationales",
];

export function Hero() {
  const whatsappHref = getWhatsAppHref();

  return (
    <Section className="overflow-hidden bg-white py-18 sm:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <Badge>Independent NCLEX Preparation Platform</Badge>
          <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-navy sm:text-5xl lg:text-6xl">
            Prepare Smarter for NCLEX-RN and NCLEX-PN
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            NCLEX Prep Nation helps nursing candidates prepare with exam prep
            materials, practice questions, study resources, diagnostic testing,
            certificate support, and score improvement guidance.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="/free-diagnostic">
              Start Free Diagnostic
              <ArrowRight aria-hidden size={18} />
            </Button>
            <Button href="/resources" variant="outline">
              View Prep Materials
            </Button>
            <Button href={whatsappHref} variant="whatsapp">
              <MessageCircle aria-hidden size={18} />
              Contact Us on WhatsApp
            </Button>
          </div>
          <p className="mt-5 text-sm leading-6 text-muted">
            Original educational materials. No real or leaked exam questions.
          </p>
        </div>

        <Card className="relative border-clinical/20 p-5 sm:p-7">
          <div className="flex items-start justify-between border-b border-line pb-5">
            <div>
              <p className="text-sm font-semibold text-clinical">
                Preparation overview
              </p>
              <p className="mt-1 text-xl font-bold text-navy">
                A clearer place to begin
              </p>
            </div>
            <div className="rounded-md bg-soft p-2.5 text-clinical">
              <ClipboardCheck aria-hidden size={24} />
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-md border border-line bg-soft p-4">
              <BarChart3 aria-hidden className="text-clinical" size={22} />
              <p className="mt-3 text-sm text-muted">Diagnostic focus</p>
              <p className="mt-1 font-semibold text-navy">
                Identify topics to review
              </p>
            </div>
            <div className="rounded-md border border-line p-4">
              <p className="text-sm font-semibold text-muted">Study direction</p>
              <p className="mt-2 text-2xl font-bold text-navy">Step by step</p>
              <div className="mt-3 h-2 overflow-hidden rounded-sm bg-line">
                <div className="h-full w-2/3 bg-teal" />
              </div>
            </div>
          </div>

          <ul className="mt-6 space-y-3">
            {readinessItems.map((item) => (
              <li className="flex items-center gap-3 text-sm text-ink" key={item}>
                <CheckCircle2
                  aria-hidden
                  className="shrink-0 text-success"
                  size={18}
                />
                {item}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  );
}
