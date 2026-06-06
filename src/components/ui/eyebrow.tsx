import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

export function Eyebrow({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "text-crimson-soft font-bold tracking-[.14em] uppercase text-[.78rem] mb-3.5",
        className,
      )}
      {...props}
    />
  );
}
