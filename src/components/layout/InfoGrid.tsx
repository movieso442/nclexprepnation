import type { LucideIcon } from "lucide-react";

import { Card } from "@/components/ui/Card";

type InfoItem = {
  title: string;
  description: string;
  icon?: LucideIcon;
};

type InfoGridProps = {
  items: InfoItem[];
  columns?: 2 | 3 | 4;
};

const columnClasses = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-2 lg:grid-cols-3",
  4: "md:grid-cols-2 xl:grid-cols-4",
};

export function InfoGrid({ columns = 3, items }: InfoGridProps) {
  return (
    <div className={`grid gap-5 ${columnClasses[columns]}`}>
      {items.map(({ description, icon: Icon, title }) => (
        <Card className="p-6" key={title}>
          {Icon ? <Icon aria-hidden className="text-clinical" size={24} /> : null}
          <h3 className={Icon ? "mt-5 font-bold text-navy" : "font-bold text-navy"}>
            {title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-muted">{description}</p>
        </Card>
      ))}
    </div>
  );
}
