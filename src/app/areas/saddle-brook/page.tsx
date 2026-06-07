import { pageMetadata } from "@/lib/page-metadata";
import rollsRoyceCeramic from "@public/media/images/black-rolls-royce-ghost-black-badge-front.jpeg";
import astonMartinInterior from "@public/media/images/aston-martin-vantage-red-interior.jpeg";
import lotusEmiraDriveway from "@public/media/images/black-lotus-emira-front.jpeg";
import bmwX5Corrected from "@public/media/images/blue-bmw-x5-front.jpeg";
import fordF150Lifted from "@public/media/images/black-ford-f150-lifted-front.jpeg";
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
  title: "Mobile Detailing in Saddle Brook, NJ",
  description:
    "Mobile detailing, ceramic coating, and paint correction in Saddle Brook, NJ. APX defends highway cars from road salt and brake dust in your driveway.",
  path: "/areas/saddle-brook",
};

export const metadata = pageMetadata(META);

const SERVICE_CARDS: AreaServiceCard[] = [
  {
    title: "Ceramic Coating",
    image: rollsRoyceCeramic,
    alt: "Black Rolls-Royce Ghost with a deep-gloss ceramic coated finish",
    bullets: [
      "A barrier against salt and road film",
      "Winter grime rinses off easily",
      "Coatings built to outlast winters",
    ],
    cta: "See packages & pricing →",
    href: "/services/ceramic-coating",
  },
  {
    title: "Detailing",
    image: astonMartinInterior,
    alt: "Deep-cleaned red leather interior of an Aston Martin V8 Vantage after a full detail",
    bullets: [
      "Inside-only, outside-only, or both",
      "Strips salt spray and grime by hand",
      "Sealed for protection before we go",
    ],
    cta: "See packages & pricing →",
    href: "/services/detailing",
  },
  {
    title: "Paint Correction",
    image: bmwX5Corrected,
    alt: "Dark blue BMW X5 with mirror-finish corrected paint",
    bullets: [
      "Removes highway swirls and etching",
      "A cut for every defect level",
      "Bare paint ready for sealing",
    ],
    cta: "See correction levels →",
    href: "/services/paint-correction",
  },
  {
    title: "Maintenance Plans",
    image: lotusEmiraDriveway,
    alt: "Black Lotus Emira kept in showroom condition on a brick paver driveway",
    bullets: [
      "Seasonal washes and decon visits",
      "Protection kept ahead of the salt",
      "Members lock in priority dates",
    ],
    cta: "See plans →",
    href: "/services/maintenance-plans",
  },
];

const STEPS = [
  {
    title: "We reach you in Saddle Brook",
    text: "Book online or by phone and Matt and the APX team arrive at your home or office. With I-80 and Route 46 running right through town, we know what the daily commute leaves on your paint.",
  },
  {
    title: "We bring water, power, and decon",
    text: "The van is fully self-contained, so nothing has to be set up on your end. We carry the wash, decontamination, and protection products that road grime calls for, ready to go on arrival.",
  },
  {
    title: "Your car leaves defended for the season",
    text: "We finish with a walkaround, explain how to keep the protection working through salt season, and hand back a car ready for another stretch of highway miles.",
  },
];

const FAQS: Faq[] = [
  {
    question: "Will there be a travel fee for Saddle Brook?",
    answer:
      "No. APX is based in nearby Dumont, and Saddle Brook is well inside our service area, so there's no surcharge for the trip. Nearby towns like Fair Lawn, Maywood, and Hackensack are included at no extra cost too.",
  },
  {
    question: "Can you deal with road salt and winter buildup?",
    answer:
      "Yes, and it's one of the main reasons Saddle Brook drivers call. A proper wash and decontamination pulls off the salt, road film, and brake dust the highways leave behind, and a sealant or coating keeps the next round from bonding to your paint.",
  },
  {
    question: "How often should highway cars be detailed through the year?",
    answer:
      "For cars on I-80 or Route 46 daily, a seasonal rhythm works well: a thorough decon and fresh protection going into winter, then a deeper reset in spring once the salt is done. A maintenance plan keeps that cadence on autopilot.",
  },
  {
    question: "Where do you set up when you get here?",
    answer:
      "Wherever it's easiest: your driveway, a curb spot, or your office lot. We just need room to work safely around the car, and we leave the area clean before we go.",
  },
  {
    question: "Do you need my water or electricity?",
    answer:
      "No. The van runs on its own water tank and power, so we're fully self-sufficient from the moment we park. You're welcome to offer your spigot, but nothing is required on your end.",
  },
];

export default function SaddleBrookPage() {
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
          areaServed: ["Saddle Brook"],
        })}
      />
      <ServiceHero
        eyebrow="Saddle Brook, NJ"
        title={
          <>
            Mobile detailing in Saddle Brook, <span className="text-crimson-soft">salt off, gloss on.</span>
          </>
        }
        copy="Saddle Brook sits where I-80 meets Route 46, and the road shows on your paint. Ceramic coating, paint correction, and detailing that strip away salt, film, and brake dust season after season."
        image={{
          // Placeholder pending a real Saddle Brook job photo from the owner.
          src: fordF150Lifted,
          alt: "Lifted black Ford F-150 with a deep-gloss finish in a Saddle Brook driveway",
          tag: "Saddle Brook, NJ · Fully mobile",
        }}
      />
      <AreaServices
        eyebrow="What we do"
        heading="Ceramic coating, paint correction, and detailing in Saddle Brook"
        copy="Every service is hand-done at your home or office with professional-grade, non-toxic products. Pick one to view the full packages and pricing."
        cards={SERVICE_CARDS}
      />
      <ServiceProcess
        eyebrow="How it works"
        heading="Keeping Saddle Brook highway cars defended"
        steps={STEPS}
      />
      <Testimonials
        heading="What drivers near Saddle Brook say"
        subtext="Verbatim from Google: clients on APX quality and care."
      />
      <ServiceFaq heading="Common questions" faqs={FAQS} />
      <ServiceAreas
        eyebrow="Nearby areas"
        heading="Serving Saddle Brook and the towns off the highway"
        copy="Our home base in nearby Dumont keeps Saddle Brook and its neighbors an easy run for the team. We also cover Fair Lawn, Maywood, Hackensack, and Paramus. Not sure your street is in range? Add your zip to the quote form and we'll confirm the same day."
      />
      <Quote />
    </main>
  );
}
