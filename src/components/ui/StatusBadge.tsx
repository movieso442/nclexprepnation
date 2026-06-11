import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";
import type { StatusTone } from "@/types";

type StatusBadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: StatusTone;
};

const tones: Record<StatusTone, string> = {
  neutral: "border-line bg-slate-50 text-muted",
  info: "border-clinical/20 bg-soft text-clinical",
  success: "border-success/20 bg-green-50 text-success",
  warning: "border-warning/25 bg-amber-50 text-amber-700",
  error: "border-error/20 bg-red-50 text-error",
};

export function StatusBadge({
  className,
  tone = "neutral",
  ...props
}: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border px-2.5 py-1 text-xs font-semibold",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
