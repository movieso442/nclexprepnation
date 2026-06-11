import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border border-clinical/20 bg-soft px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-clinical",
        className,
      )}
      {...props}
    />
  );
}
