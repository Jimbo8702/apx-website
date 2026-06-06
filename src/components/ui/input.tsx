import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

export const fieldStyles =
  "w-full bg-night border border-line rounded px-[15px] py-[13px] text-ink text-[.97rem] transition-colors duration-200 focus:outline-none focus:border-crimson-soft";

export function Input({ className, ...props }: ComponentPropsWithoutRef<"input">) {
  return <input className={cn(fieldStyles, className)} {...props} />;
}

export function Select({ className, ...props }: ComponentPropsWithoutRef<"select">) {
  return <select className={cn(fieldStyles, className)} {...props} />;
}

export function Textarea({ className, ...props }: ComponentPropsWithoutRef<"textarea">) {
  return <textarea className={cn(fieldStyles, className)} {...props} />;
}
