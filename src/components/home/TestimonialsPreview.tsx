import { ShieldCheck, Star } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

const featuredReviews = [
  {
    quote:
      "The visual rationales were a lifesaver for me. Instead of just reading text, I could actually see the diagrams. It helped me pass my NCLEX-RN on the first try!",
    name: "Sarah M., RN",
    status: "Passed in 85 Questions",
  },
  {
    quote:
      "After failing once, I needed a structured plan. NCLEX Prep Nation's diagnostic test pointed out my weaknesses in pharmacology and delegation.",
    name: "Michael K., RN",
    status: "Repeat Test Taker - Passed",
  },
  {
    quote:
      "Great practice question bank! The SATA questions helped me review carefully, and the explanation block is thorough for NCLEX-PN prep.",
    name: "Amanda L., LPN",
    status: "NCLEX-PN - Passed",
  },
];

type TestimonialsPreviewProps = {
  className?: string;
  heading?: string;
  description?: string;
};

export function TestimonialsPreview({
  className,
  heading = "What NCLEX-RN and NCLEX-PN candidates say",
  description = "Real, verified feedback from nursing candidates who used NCLEX Prep Nation study materials, practice questions, and guided preparation.",
}: TestimonialsPreviewProps) {
  return (
    <Section className={className ?? "border-y border-line bg-soft"}>
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-xs font-bold text-emerald-800">
          <ShieldCheck size={14} className="text-emerald-700" />
          <span>100+ Verified Candidate Reviews</span>
        </div>
        <h2 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-navy">
          {heading}
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-500">{description}</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {featuredReviews.map((review) => (
          <Card
            key={review.name}
            className="p-6 bg-white border border-line flex flex-col justify-between hover:border-clinical/30 hover:shadow-md transition-all duration-300"
          >
            <div>
              <div className="flex gap-0.5 text-amber-500 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-xs leading-6 text-navy italic font-medium">
                &ldquo;{review.quote}&rdquo;
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-line">
              <h4 className="text-xs font-black text-navy">{review.name}</h4>
              <p className="text-[10px] text-teal font-extrabold uppercase tracking-widest mt-0.5">
                {review.status}
              </p>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button href="/testimonials" variant="outline" className="text-xs">
          Read All Verified Reviews
        </Button>
      </div>
    </Section>
  );
}
