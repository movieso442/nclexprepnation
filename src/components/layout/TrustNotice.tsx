import { ShieldCheck } from "lucide-react";

import { Card } from "@/components/ui/Card";
import { contentIntegrityStatement } from "@/data/site";

type TrustNoticeProps = {
  text?: string;
  title?: string;
};

export function TrustNotice({
  text = contentIntegrityStatement,
  title = "Our content commitment",
}: TrustNoticeProps) {
  return (
    <Card className="border-clinical/25 bg-soft p-6 sm:p-8">
      <div className="flex gap-4">
        <ShieldCheck
          aria-hidden
          className="mt-0.5 shrink-0 text-clinical"
          size={25}
        />
        <div>
          <h2 className="font-bold text-navy">{title}</h2>
          <p className="mt-2 text-sm leading-7 text-muted">{text}</p>
        </div>
      </div>
    </Card>
  );
}
