import type { ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";
import { GoogleIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Stars } from "@/components/ui/stars";
import { siteConfig } from "@/lib/site-config";

type ServiceHeroProps = {
  eyebrow: string;
  title: ReactNode;
  copy: string;
  image: { src: StaticImageData; alt: string; tag?: string };
};

/* Mirrors the home hero's structure and spacing exactly (badge pill, h1 scale,
   trust row, overlays) with a still image standing in for the background video. */
export function ServiceHero({ eyebrow, title, copy, image }: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 nav:py-[104px]">
      {/* Background image — gradient base shows until the image loads */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(120%_90%_at_78%_18%,rgba(255,255,255,.10),rgba(255,255,255,0)_45%),radial-gradient(80%_70%_at_72%_122%,rgba(187,34,34,.32),rgba(187,34,34,0)_55%),linear-gradient(135deg,#26262b_0%,#131316_55%,#0a0a0c_100%)]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          className="object-cover"
        />
      </div>
      {/* Readability overlay */}
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(8,8,10,.94)_0%,rgba(8,8,10,.74)_40%,rgba(8,8,10,.30)_72%,rgba(8,8,10,.55)_100%),linear-gradient(0deg,rgba(8,8,10,.85),rgba(8,8,10,0)_36%)]" />

      {image.tag && (
        <span className="absolute right-5 bottom-5 z-[2] text-[.72rem] tracking-[.06em] uppercase bg-black/45 border border-line backdrop-blur-[6px] px-3 py-[7px] rounded text-[#d9d6d0] max-sm:hidden">
          {image.tag}
        </span>
      )}

      <Container>
        <div className="relative z-[2] max-w-[640px] text-left">
          <span className="inline-flex items-center gap-2.5 text-[.82rem] tracking-[.04em] uppercase text-[#e6e3dd] bg-white/7 border border-line px-[15px] py-2 rounded mb-[22px] backdrop-blur-[6px]">
            <span className="w-2 h-2 rounded-full bg-crimson-soft shadow-[0_0_0_4px_rgba(214,58,58,.18)]" />
            {eyebrow}
          </span>
          <h1 className="text-[clamp(2.6rem,5.4vw,4.3rem)] font-bold">{title}</h1>
          <p className="text-[#cdcac4] text-[1.12rem] mt-[22px] mb-[30px] max-w-[30em]">{copy}</p>
          <div className="flex gap-3.5 flex-wrap items-center">
            <Button href="#quote">Get a free quote</Button>
            <Button variant="ghost" href={siteConfig.contact.phoneHref}>
              📞 {siteConfig.contact.phone}
            </Button>
          </div>
          <div className="flex items-center gap-[22px] mt-[38px] flex-wrap text-muted text-[.9rem]">
            <div className="flex items-center gap-3">
              <GoogleIcon size={32} className="shrink-0" aria-label="Google" />
              <div>
                <Stars />
                <span className="text-muted text-[.82rem]">140+ reviews · Google</span>
              </div>
            </div>
            <div className="w-px h-[38px] bg-line max-sm:hidden" />
            <div>
              <b className="text-ink">100%</b> satisfaction
              <br />
              guarantee
            </div>
            <div className="w-px h-[38px] bg-line max-sm:hidden" />
            <div>
              <b className="text-ink">Fully mobile</b>
              <br />
              we come to you
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
