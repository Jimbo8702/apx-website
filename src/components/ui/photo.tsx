import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/cn";

type PhotoProps = {
  src: StaticImageData;
  alt: string;
  tag?: string;
  sizes?: string;
  className?: string;
};

/* The mock's `.photo` wrapper: layered-gradient base, sheen, card shadow, optional corner tag. */
export function Photo({ src, alt, tag, sizes, className }: PhotoProps) {
  return (
    <div
      className={cn(
        "relative rounded-lg overflow-hidden shadow-card",
        "bg-[radial-gradient(120%_80%_at_75%_15%,rgba(255,255,255,.10),rgba(255,255,255,0)_45%),radial-gradient(80%_60%_at_20%_110%,rgba(187,34,34,.30),rgba(187,34,34,0)_55%),linear-gradient(135deg,#26262b_0%,#121215_55%,#0b0b0d_100%)]",
        className,
      )}
    >
      <Image src={src} alt={alt} fill sizes={sizes} placeholder="blur" className="object-cover" />
      {tag && (
        <span className="absolute left-4 bottom-4 z-[2] text-[.72rem] tracking-[.06em] uppercase bg-black/45 border border-line backdrop-blur-[6px] px-3 py-[7px] rounded text-[#d9d6d0]">
          {tag}
        </span>
      )}
    </div>
  );
}
