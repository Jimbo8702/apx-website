import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost";

const base =
  "inline-flex items-center gap-[9px] font-bold leading-[1.6] rounded px-6 py-[13px] text-[.95rem] cursor-pointer transition-[box-shadow,background,border-color] duration-200";

const variants: Record<Variant, string> = {
  primary:
    "bg-crimson text-white shadow-[0_12px_30px_-12px_rgba(187,34,34,.7)] hover:bg-crimson-soft hover:shadow-[0_16px_36px_-12px_rgba(187,34,34,.85)]",
  ghost:
    "bg-transparent text-ink border border-line hover:bg-panel hover:border-white/20",
};

type ButtonProps = { variant?: Variant } & (
  | ({ href: string } & ComponentPropsWithoutRef<"a">)
  | ({ href?: undefined } & ComponentPropsWithoutRef<"button">)
);

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  const classes = cn(base, variants[variant], className);
  if (props.href !== undefined) {
    return <a className={classes} {...(props as ComponentPropsWithoutRef<"a">)} />;
  }
  return <button className={classes} {...(props as ComponentPropsWithoutRef<"button">)} />;
}
