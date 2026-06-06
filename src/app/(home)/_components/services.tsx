import Image from "next/image";
import rollsRoyceCeramic from "@public/media/images/black-rolls-royce-ghost-black-badge-front.jpeg";
import porscheCayenneDetail from "@public/media/images/silver-porsche-cayenne-front.jpeg";
import bmwX5Corrected from "@public/media/images/blue-bmw-x5-front.jpeg";
import { CheckIcon } from "@/components/icons";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

const SERVICES = [
  {
    title: "Ceramic Coating",
    image: rollsRoyceCeramic,
    alt: "Black Rolls-Royce Ghost with a deep-gloss ceramic coated finish",
    bullets: [
      "Deep gloss & “wet look” finish",
      "Hydrophobic, so water & grime slide off",
      "Backed by a written warranty",
    ],
    cta: "See packages & pricing →",
    href: "/services/ceramic-coating",
  },
  {
    title: "Detailing",
    image: porscheCayenneDetail,
    alt: "Silver Porsche Cayenne after a full detail with the APX van behind it",
    bullets: [
      "Interior, exterior & full detail packages",
      "Deep clean, sanitize & decontaminate",
      "Sealed-in gloss & lasting protection",
    ],
    cta: "See packages & pricing →",
    href: "/services/detailing",
  },
  {
    title: "Paint Correction",
    image: bmwX5Corrected,
    alt: "Dark blue BMW X5 with mirror-finish corrected paint",
    bullets: [
      "Removes swirls, scratches & haze",
      "Restores depth before coating",
      "Up to 95% of defects corrected",
    ],
    cta: "See correction levels →",
    href: "/services/paint-correction",
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 nav:py-[104px]">
      <Container>
        <div className="max-w-[40em] mb-[38px] sm:mb-[52px]">
          <Eyebrow>What we do</Eyebrow>
          <h2 className="text-[clamp(2rem,3.6vw,2.9rem)] font-bold">
            Detailing, ceramic coating, and paint correction
          </h2>
          <p className="text-muted mt-3.5 text-[1.05rem]">
            Every detail is hand-done with pro-grade, non-toxic products. Here&apos;s where most
            clients start.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="bg-panel border border-line rounded-lg overflow-hidden flex flex-col transition-colors duration-[250ms] hover:border-crimson/45"
            >
              <div className="relative h-[280px]">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  placeholder="blur"
                  className="object-cover"
                />
              </div>
              <div className="px-6 pt-[26px] pb-7 flex flex-col flex-1">
                <h3 className="text-[1.4rem] mb-2">{service.title}</h3>
                <ul className="text-muted text-[.95rem] grid gap-[9px] mb-[22px]">
                  {service.bullets.map((bullet) => (
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
                  href={service.href}
                  className="mt-auto font-bold text-ink inline-flex gap-2 items-center hover:text-crimson-soft"
                >
                  {service.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-[34px] text-muted">
          Also offering maintenance plans, motorcycle details, headlight restoration &amp; more.{" "}
          <a href="/services" className="text-crimson-soft font-bold">
            See all services →
          </a>
        </p>
      </Container>
    </section>
  );
}
