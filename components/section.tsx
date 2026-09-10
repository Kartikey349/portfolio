import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type SectionProps = HTMLAttributes<HTMLElement> & {
  id?: string;
};

export function Section({ id, className, children, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("border-b border-border/60", className)}
      {...props}
    >
      <div className="mx-auto w-full max-w-shell px-6 py-section md:px-8">
        {children}
      </div>
    </section>
  );
}