import Image, { type StaticImageData } from "next/image";
import { CheckIcon } from "@/components/icons";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

export type AreaServiceCard = {
  title: string;
  image: StaticImageData;
  alt: string;
  bullets: string[];
  cta: string;
  href: string;
};

type AreaServicesProps = {
  eyebrow: string;
  heading: string;
  copy: string;
  cards: AreaServiceCard[];
  id?: string;
};

/* Town-page services overview: mirrors the home Services section's card styling
   but is props-driven and links each card to its /services page. */
export function AreaServices({ eyebrow, heading, copy, cards, id }: AreaServicesProps) {
  return (
    <section id={id} className="py-16 sm:py-20 nav:py-[104px]">
      <Container>
        <div className="max-w-[40em] mb-[38px] sm:mb-[52px]">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="text-[clamp(2rem,3.6vw,2.9rem)] font-bold">{heading}</h2>
          <p className="text-muted mt-3.5 text-[1.05rem]">{copy}</p>
        </div>
        {/* lg: (not nav:) for the 4-col step — the px-based nav breakpoint sorts
            before sm: in the compiled CSS, so sm:grid-cols-2 would win on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-panel border border-line rounded-lg overflow-hidden flex flex-col transition-colors duration-[250ms] hover:border-crimson/45"
            >
              <div className="relative h-[240px]">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(min-width: 920px) 25vw, (min-width: 640px) 50vw, 100vw"
                  placeholder="blur"
                  className="object-cover"
                />
              </div>
              <div className="px-6 pt-[26px] pb-7 flex flex-col flex-1">
                <h3 className="text-[1.4rem] mb-2">{card.title}</h3>
                <ul className="text-muted text-[.95rem] grid gap-[9px] mb-[22px]">
                  {card.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2.5 items-start">
                      <CheckIcon
                        size={18}
                        strokeWidth={3}
                        className="shrink-0 mt-[3px] rounded-full bg-crimson/18 p-[3px] text-crimson-soft"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <a
                  href={card.href}
                  className="mt-auto font-bold text-ink inline-flex gap-2 items-center hover:text-crimson-soft"
                >
                  {card.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
