import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type SectionProps = HTMLAttributes<HTMLElement> & {
  containerClassName?: string;
};

export function Section({
  children,
  className,
  containerClassName,
  ...props
}: SectionProps) {
  return (
    <section className={cn("py-16 sm:py-20", className)} {...props}>
      <div
        className={cn(
          "mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8",
          containerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
