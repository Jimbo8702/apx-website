import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type BadgeProps = { accent?: boolean } & ComponentPropsWithoutRef<"span">;

export function Badge({ accent = false, className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center bg-night border rounded px-[18px] py-2.5 text-[.92rem]",
        accent ? "border-crimson/40 text-crimson-soft" : "border-line text-[#d9d6d0]",
        className,
      )}
      {...props}
    />
  );
}
