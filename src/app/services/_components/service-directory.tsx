import Image, { type StaticImageData } from "next/image";
import porscheCayenneDetail from "@public/media/images/silver-porsche-cayenne-front.jpeg";
import lotusEmiraDriveway from "@public/media/images/black-lotus-emira-front.jpeg";
import dodgeCharger from "@public/media/images/silver-dodge-charger-scat-pack-rear.jpeg";
import porsche911Coated from "@public/media/images/blue-porsche-911-turbo-s-cabriolet-front.jpeg";
import bmwX5Corrected from "@public/media/images/blue-bmw-x5-front.jpeg";
import { CheckIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

type DirectoryCard = {
  title: string;
  image: StaticImageData;
  alt: string;
  description: string;
  bullets: string[];
  cta: string;
  href: string;
};

const SERVICES: DirectoryCard[] = [
  {
    title: "Ceramic Coating",
    image: porsche911Coated,
    alt: "Freshly ceramic coated dark blue Porsche 911 Turbo S parked in a driveway",
    description:
      "Professional-grade coatings applied panel by panel after full decontamination prep, each backed by a written warranty.",
    bullets: [
      "2-year, 5-year & 10-year System X options",
      "Deep gloss with a hydrophobic, self-cleaning finish",
      "Coverage on paint, headlights & tail lights",
      "Packages from $499",
    ],
    cta: "Compare coating packages",
    href: "/services/ceramic-coating",
  },
  {
    title: "Detailing",
    image: porscheCayenneDetail,
    alt: "Silver Porsche Cayenne gleaming after a complete APX detail",
    description:
      "Interior, exterior, and full premium packages, plus our signature Interior Deep Clean & Reset for cabins that need extra love.",
    bullets: [
      "Deep cleaned, sanitized & decontaminated",
      "Clay treatment & sealed-in exterior gloss",
      "Every crack & crevice cleaned by hand",
      "Interior details from $195, full details from $295",
    ],
    cta: "See detailing packages",
    href: "/services/detailing",
  },
  {
    title: "Paint Correction",
    image: bmwX5Corrected,
    alt: "Corrected paint on a dark blue BMW X5 holding a crisp mirror reflection",
    description:
      "From a quick gloss-boosting polish to two-step correction and wet sanding, matched to what your paint actually needs.",
    bullets: [
      "1-step removes roughly 50–60% of defects",
      "2-step removes roughly 80–95% of defects",
      "The ideal prep before a ceramic coating",
      "Targeted spot fixes from $75",
    ],
    cta: "Explore correction levels",
    href: "/services/paint-correction",
  },
  {
    title: "Paint Protection Film",
    image: lotusEmiraDriveway,
    alt: "Black Lotus Emira with a film-protected front end parked on a paver driveway",
    description:
      "Self-healing urethane film that absorbs rock chips and scratches before they reach your paint, while staying nearly invisible.",
    bullets: [
      "Partial front, full front & full body coverage",
      "Self-healing top coat erases light scratches",
      "Stops rock chips a coating can't",
      "Custom quoted to your vehicle & coverage",
    ],
    cta: "Explore PPF coverage",
    href: "/services/ppf",
  },
];

const MAINTENANCE: DirectoryCard = {
  title: "Maintenance Plans",
  image: dodgeCharger,
  alt: "Silver Dodge Charger kept spotless on a recurring APX maintenance plan",
  description:
    "Scheduled visits that keep the car spotless between full details, inside and out. Both plans run on a simple 3-month commitment.",
  bullets: [
    "Bi-weekly visits from $125",
    "Monthly visits from $150",
    "Hand wash & interior refresh every visit",
    "Spray sealant touch-ups for ongoing protection",
  ],
  cta: "See plan pricing",
  href: "/services/maintenance-plans",
};

function Bullet({ children }: { children: string }) {
  return (
    <li className="flex gap-2.5 items-start">
      <CheckIcon
        size={18}
        strokeWidth={3}
        className="shrink-0 mt-[3px] rounded-full bg-crimson/18 p-[3px] text-crimson-soft"
      />
      {children}
    </li>
  );
}

/* /services-only expanded version of the services grid: three full cards for
   the core services plus a wide maintenance-plans card, each routing to its
   service page. */
export function ServiceDirectory() {
  return (
    <section className="py-16 sm:py-20 nav:py-[104px]">
      <Container>
        <div className="max-w-[40em] mb-[38px] sm:mb-[52px]">
          <Eyebrow>Where most clients start</Eyebrow>
          <h2 className="text-[clamp(2rem,3.6vw,2.9rem)] font-bold">
            The five services most clients book
          </h2>
          <p className="text-muted mt-3.5 text-[1.05rem]">
            Each one has its own page with packages, pricing details, and answers to common
            questions. Start here and go as deep as your car needs.
          </p>
        </div>
        {/* 2×2 from sm: up — owner found 4-across squished, and a 3-up row
            would leave the fourth card stranded on its own row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="bg-panel border border-line rounded-lg overflow-hidden flex flex-col transition-colors duration-[250ms] hover:border-crimson/45"
            >
              <div className="relative h-[260px]">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  placeholder="blur"
                  className="object-cover"
                />
              </div>
              <div className="px-6 pt-[26px] pb-7 flex flex-col flex-1">
                <h3 className="text-[1.4rem] mb-2">{service.title}</h3>
                <p className="text-muted text-[.95rem] mb-4">{service.description}</p>
                <ul className="text-muted text-[.95rem] grid gap-[9px] mb-[26px]">
                  {service.bullets.map((bullet) => (
                    <Bullet key={bullet}>{bullet}</Bullet>
                  ))}
                </ul>
                <Button
                  variant="ghost"
                  href={service.href}
                  className="mt-auto w-full justify-center hover:border-crimson/45"
                >
                  {service.cta} →
                </Button>
              </div>
            </div>
          ))}
          {/* Maintenance plans: wide card on its own row below the 2×2 grid */}
          <div className="sm:col-span-2 bg-panel border border-line rounded-lg overflow-hidden flex flex-col lg:flex-row transition-colors duration-[250ms] hover:border-crimson/45">
            <div className="relative h-[260px] lg:h-auto lg:w-[38%] shrink-0">
              <Image
                src={MAINTENANCE.image}
                alt={MAINTENANCE.alt}
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                placeholder="blur"
                className="object-cover"
              />
            </div>
            <div className="px-6 pt-[26px] pb-7 lg:p-[34px] flex flex-col flex-1">
              <h3 className="text-[1.4rem] mb-2">{MAINTENANCE.title}</h3>
              <p className="text-muted text-[.95rem] mb-4 max-w-[44em]">
                {MAINTENANCE.description}
              </p>
              <ul className="text-muted text-[.95rem] grid sm:grid-cols-2 gap-x-8 gap-y-[9px] mb-[26px]">
                {MAINTENANCE.bullets.map((bullet) => (
                  <Bullet key={bullet}>{bullet}</Bullet>
                ))}
              </ul>
              <div className="mt-auto">
                <Button variant="ghost" href={MAINTENANCE.href} className="hover:border-crimson/45">
                  {MAINTENANCE.cta} →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
