import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export const GlassPanel = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & { children: ReactNode }>(function GlassPanel({ className, children, ...props }, ref) {
  return (
    <div ref={ref} className={cn("glass-panel", className)} {...props}>
      {children}
    </div>
  );
});
