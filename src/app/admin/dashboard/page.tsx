import type { Metadata } from "next";
import {
  BookOpenCheck,
  CheckCheck,
  ContactRound,
  CreditCard,
  KeyRound,
} from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "NCLEX Prep Nation administration dashboard.",
  robots: { index: false, follow: false },
};

const adminAreas = [
  {
    title: "Package requests",
    description: "Review new requests and track contact status.",
    icon: ContactRound,
    value: "0 new",
  },
  {
    title: "Leads",
    description: "Organize future diagnostic, resource, and contact leads.",
    icon: CheckCheck,
    value: "0 leads",
  },
  {
    title: "Manual payment confirmation",
    description: "Record payment details and confirmation status.",
    icon: CreditCard,
    value: "0 pending",
  },
  {
    title: "Access granting",
    description: "Activate package permissions after confirmation.",
    icon: KeyRound,
    value: "0 awaiting",
  },
  {
    title: "Content management",
    description: "Prepare questions, resources, FAQs, and blog content.",
    icon: BookOpenCheck,
    value: "Foundation",
  },
];

export default function AdminDashboardPage() {
  return (
    <Section className="min-h-[70vh] bg-[#f7f8fa]">
      <div>
        <Badge>Admin area</Badge>
        <h1 className="mt-4 text-3xl font-bold text-navy">
          Operations dashboard
        </h1>
        <p className="mt-2 max-w-2xl text-muted">
          A placeholder foundation for managing requests, leads, access, manual
          payment confirmation, and preparation content.
        </p>
      </div>

      <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {adminAreas.map(({ description, icon: Icon, title, value }) => (
          <Card className="p-6" key={title}>
            <div className="flex items-start justify-between gap-4">
              <Icon aria-hidden className="text-clinical" size={24} />
              <span className="text-sm font-semibold text-muted">{value}</span>
            </div>
            <h2 className="mt-5 font-bold text-navy">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
          </Card>
        ))}
      </div>

      <Card className="mt-5 border-amber-200 bg-amber-50 p-6">
        <h2 className="font-bold text-navy">Authentication required before launch</h2>
        <p className="mt-2 text-sm leading-6 text-muted">
          This route is a visual placeholder. Supabase authentication,
          role-based protection, activity logging, and real data queries must be
          connected before the admin area is used in production.
        </p>
      </Card>
    </Section>
  );
}
