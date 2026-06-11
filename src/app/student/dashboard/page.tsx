import type { Metadata } from "next";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  CircleAlert,
  ClipboardCheck,
} from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Student Dashboard",
  description: "NCLEX Prep Nation student preparation dashboard.",
  robots: { index: false, follow: false },
};

export default function StudentDashboardPage() {
  return (
    <Section className="min-h-[70vh] bg-soft">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Badge>Student area</Badge>
          <h1 className="mt-4 text-3xl font-bold text-navy">
            Your preparation dashboard
          </h1>
          <p className="mt-2 text-muted">
            A foundation for your access, practice, results, and resources.
          </p>
        </div>
        <Button href="/practice-questions">
          Continue Practice
          <ArrowRight aria-hidden size={18} />
        </Button>
      </div>

      <div className="mt-9 grid gap-5 lg:grid-cols-3">
        <Card className="p-6 lg:col-span-2">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-clinical">
                Current access status
              </p>
              <h2 className="mt-2 text-2xl font-bold text-navy">Free plan</h2>
            </div>
            <Badge className="border-success/20 bg-green-50 text-success">
              Active
            </Badge>
          </div>
          <p className="mt-4 text-sm leading-7 text-muted">
            Free practice and introductory resources will appear here. Request
            package access to unlock expanded practice, mock exams, and guided
            support.
          </p>
          <Button className="mt-6" href="/request-access" variant="outline">
            Request Premium Access
          </Button>
        </Card>

        <Card className="p-6">
          <ClipboardCheck aria-hidden className="text-clinical" size={25} />
          <p className="mt-4 text-sm font-semibold text-muted">
            Diagnostic result
          </p>
          <h2 className="mt-2 text-xl font-bold text-navy">Not completed yet</h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            Complete the diagnostic to populate your topic summary.
          </p>
        </Card>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-3">
        <Card className="p-6">
          <BarChart3 aria-hidden className="text-clinical" size={24} />
          <h2 className="mt-4 font-bold text-navy">Continue practice</h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            Your latest question set and progress will appear here.
          </p>
        </Card>
        <Card className="p-6">
          <CircleAlert aria-hidden className="text-clinical" size={24} />
          <h2 className="mt-4 font-bold text-navy">Weak topics</h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            Topic accuracy and recommended review areas will appear here.
          </p>
        </Card>
        <Card className="p-6">
          <BookOpen aria-hidden className="text-clinical" size={24} />
          <h2 className="mt-4 font-bold text-navy">Resources</h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            Study plans and resources available to your package will appear here.
          </p>
        </Card>
      </div>
    </Section>
  );
}
