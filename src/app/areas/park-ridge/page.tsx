import { pageMetadata } from "@/lib/page-metadata";
import rollsRoyceCeramic from "@public/media/images/black-rolls-royce-ghost-black-badge-front.jpeg";
import astonMartinInterior from "@public/media/images/aston-martin-vantage-red-interior.jpeg";
import porsche911BrownInterior from "@public/media/images/porsche-911-turbo-s-brown-interior.jpeg";
import lotusEmiraDriveway from "@public/media/images/black-lotus-emira-front.jpeg";
import bmwX5Corrected from "@public/media/images/blue-bmw-x5-front.jpeg";
import { ServiceFaq, type Faq } from "@/app/services/_components/service-faq";
import { ServiceHero } from "@/app/services/_components/service-hero";
import { ServiceProcess } from "@/app/services/_components/service-process";
import { JsonLd } from "@/components/json-ld";
import { Quote } from "@/components/sections/quote";
import { ServiceAreas } from "@/components/sections/service-areas";
import { Testimonials } from "@/components/sections/testimonials";
import { breadcrumbSchema, serviceSchema, webPageSchema } from "@/lib/schema";
import { AreaServices, type AreaServiceCard } from "../_components/area-services";

const META = {
  title: "Mobile Detailing in Park Ridge, NJ",
  description:
    "Mobile detailing, ceramic coating, and paint correction in Park Ridge, NJ. APX details your car in the driveway midweek while you work from home.",
  path: "/areas/park-ridge",
};

export const metadata = pageMetadata(META);

const SERVICE_CARDS: AreaServiceCard[] = [
  {
    title: "Ceramic Coating",
    image: rollsRoyceCeramic,
    alt: "Black Rolls-Royce Ghost with a deep-gloss ceramic coated finish",
    bullets: [
      "Long gloss with little upkeep",
      "Wash days get shorter for years",
      "2, 5, or 10 year longevity",
    ],
    cta: "See packages & pricing →",
    href: "/services/ceramic-coating",
  },
  {
    title: "Detailing",
    image: astonMartinInterior,
    alt: "Deep-cleaned red leather interior of an Aston Martin V8 Vantage after a full detail",
    bullets: [
      "Cabin, exterior, or full package",
      "Hand-cleaned while you work inside",
      "Protection sealed before we pack up",
    ],
    cta: "See packages & pricing →",
    href: "/services/detailing",
  },
  {
    title: "Paint Correction",
    image: bmwX5Corrected,
    alt: "Dark blue BMW X5 with mirror-finish corrected paint",
    bullets: [
      "Clears swirls and fine scratches",
      "Single or dual stage polish",
      "The right base for a coating",
    ],
    cta: "See correction levels →",
    href: "/services/paint-correction",
  },
  {
    title: "Maintenance Plans",
    image: lotusEmiraDriveway,
    alt: "Black Lotus Emira kept in showroom condition on a brick paver driveway",
    bullets: [
      "Standing midweek slots that fit your day",
      "Car stays sharp between appointments",
      "Members get the dates they want",
    ],
    cta: "See plans →",
    href: "/services/maintenance-plans",
  },
];

const STEPS = [
  {
    title: "We slip into your Park Ridge driveway",
    text: "Set a midweek time online or by phone and Matt and the APX team show up at the hour you picked. You stay on your calls inside while we get to work just outside the door.",
  },
  {
    title: "We work quietly off our own supply",
    text: "Water, power, and products all come from the van, so there's nothing to plug in or hand over. We keep the noise down and stay out of your way through the whole appointment.",
  },
  {
    title: "Your car is ready by sign-off",
    text: "By the time you close the laptop, we've finished a final walkaround, covered any coating or interior aftercare, and parked a fresh car back where you left it.",
  },
];

const FAQS: Faq[] = [
  {
    question: "Is there a surcharge for a trip out to Park Ridge?",
    answer:
      "There isn't. APX works out of nearby Dumont, and Park Ridge sits well inside our range, so no travel fee gets added on. The same goes for neighboring towns such as Woodcliff Lake, Hillsdale, and Emerson.",
  },
  {
    question: "Can you come during the workday while I'm on calls?",
    answer:
      "That's exactly how a lot of our Park Ridge appointments run. Book a midweek slot, and we'll handle the car in your driveway while you keep working from home. You only need to step out for the quick walkaround at the end.",
  },
  {
    question: "Will the visit interrupt my workday?",
    answer:
      "We keep it as low-key as possible. Everything runs from the van, we stay out of your way, and we hold the noise down. Most clients carry on with their meetings and barely notice we're there until the car's done.",
  },
  {
    question: "Do I need to set out water or an outlet?",
    answer:
      "No. The van is fully self-contained with its own water and power, so you don't have to provide anything. If you'd rather we use your spigot we can, but it's never a requirement.",
  },
  {
    question: "How much notice do you need for a midweek date?",
    answer:
      "A few days ahead usually secures the weekday slot you want for a detail or maintenance visit, and coatings or correction are best reserved about a week out. Send your details through the quote form and we'll confirm same day.",
  },
];

export default function ParkRidgePage() {
  return (
    <main>
      <JsonLd data={webPageSchema(META)} />
      <JsonLd
        data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: META.title }])}
      />
      <JsonLd
        data={serviceSchema({
          name: META.title,
          description: META.description,
          path: META.path,
          serviceType: "Mobile Detailing",
          areaServed: ["Park Ridge"],
        })}
      />
      <ServiceHero
        eyebrow="Park Ridge, NJ"
        title={
          <>
            Mobile detailing in Park Ridge, <span className="text-crimson-soft">during the workday.</span>
          </>
        }
        copy="Park Ridge keeps a quiet, work-from-home pace, and so do we. Ceramic coating, paint correction, and detailing handled in your driveway midweek while you stay on your calls inside."
        image={{
          // Placeholder pending a real Park Ridge job photo from the owner.
          src: porsche911BrownInterior,
          alt: "Brown leather Porsche 911 interior freshly conditioned in Park Ridge",
          tag: "Park Ridge, NJ · Fully mobile",
        }}
      />
      <AreaServices
        eyebrow="What we do"
        heading="Detailing, ceramic coating, and paint correction in Park Ridge"
        copy="Every service is hand-done in your driveway with professional-grade, non-toxic products. Choose one to see the full packages and pricing."
        cards={SERVICE_CARDS}
      />
      <ServiceProcess
        eyebrow="How it works"
        heading="A detail that fits a Park Ridge workday"
        steps={STEPS}
      />
      <Testimonials
        heading="What clients around Park Ridge say"
        subtext="Recent Google reviews from drivers APX serves nearby."
      />
      <ServiceFaq heading="Common questions" faqs={FAQS} />
      <ServiceAreas
        eyebrow="Nearby areas"
        heading="Serving Park Ridge and the boroughs nearby"
        copy="Our base in nearby Dumont keeps Park Ridge and the towns around it within easy reach. We also look after Woodcliff Lake, Hillsdale, Saddle River, and Emerson. Wondering if your street qualifies? Enter your zip in the quote form and we'll let you know the same day."
      />
      <Quote />
    </main>
  );
}
