import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="inline-flex flex-col leading-none" aria-label="APX Car Solutions">
      <span className="font-display font-extrabold text-[1.55rem] tracking-[-.01em]">
        AP<span className="text-crimson-soft">X</span>
      </span>
      <span className="text-[.52rem] tracking-[.42em] text-muted mt-[3px] pl-[2px]">
        CAR SOLUTIONS
      </span>
    </Link>
  );
}
