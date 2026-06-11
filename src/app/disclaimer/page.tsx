import { LegalPage } from "@/components/layout/LegalPage";
import { contentIntegrityStatement } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

const description =
  "Read the NCLEX Prep Nation independent platform, trademark, educational purpose, content integrity, and results disclaimers.";

export const metadata = createPageMetadata({
  title: "Disclaimer",
  description,
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <LegalPage
      description="Important information about our independent status, educational materials, and responsible preparation claims."
      eyebrow="Legal"
      sections={[
        {
          title: "Independent platform",
          paragraphs: [
            "NCLEX Prep Nation is an independent educational preparation platform. It is not affiliated with, sponsored by, or endorsed by NCSBN, Pearson VUE, or any nursing regulatory body.",
          ],
        },
        {
          title: "Trademark notice",
          paragraphs: [
            "NCLEX\u00ae is a registered trademark of the National Council of State Boards of Nursing, Inc. Trademark references are used only to describe the exams for which candidates may be preparing.",
          ],
        },
        {
          title: "Original educational content",
          paragraphs: [contentIntegrityStatement],
        },
        {
          title: "No guarantee",
          paragraphs: [
            "NCLEX Prep Nation provides study tools and preparation support but does not guarantee a passing result. Exam outcomes depend on each candidate's preparation, eligibility, knowledge, performance, and exam conditions.",
          ],
        },
        {
          title: "Official information",
          paragraphs: [
            "Candidates should use official NCLEX, NCSBN, Pearson VUE, and nursing regulatory body sources for registration, eligibility, scheduling, test plans, rules, and current policies.",
          ],
        },
      ]}
      title="Disclaimer"
    />
  );
}
