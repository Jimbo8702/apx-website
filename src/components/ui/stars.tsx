import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type StarsProps = { count?: number } & ComponentPropsWithoutRef<"div">;

export function Stars({ count = 5, className, ...props }: StarsProps) {
  return (
    <div className={cn("text-gold tracking-[2px]", className)} aria-label={`${count} stars`} {...props}>
      {"★".repeat(count)}
    </div>
  );
}
