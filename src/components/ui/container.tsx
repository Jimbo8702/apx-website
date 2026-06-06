import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

export function Container({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={cn("max-w-[1180px] mx-auto px-6", className)} {...props} />;
}
