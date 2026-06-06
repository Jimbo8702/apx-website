import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type FieldProps = { label: string } & ComponentPropsWithoutRef<"label">;

export function Field({ label, className, children, ...props }: FieldProps) {
  return (
    <label className={cn("block", className)} {...props}>
      <span className="block text-[.85rem] text-muted mb-[7px] font-semibold">{label}</span>
      {children}
    </label>
  );
}
