import { pageMetadata } from "@/lib/page-metadata";
import rollsRoyceCeramic from "@public/media/images/black-rolls-royce-ghost-black-badge-front.jpeg";
import porsche911RearSpoiler from "@public/media/images/blue-porsche-911-turbo-s-rear-spoiler.jpeg";
import astonMartinInterior from "@public/media/images/aston-martin-vantage-red-interior.jpeg";
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
  title: "Mobile Detailing in Haworth, NJ",
  description:
    "Hand car detailing, ceramic coating, and paint correction in Haworth, NJ. We drive over from neighboring Dumont and work right in your driveway.",
  path: "/areas/haworth",
};

export const metadata = pageMetadata(META);

const SERVICE_CARDS: AreaServiceCard[] = [
  {
    title: "Ceramic Coating",
    image: rollsRoyceCeramic,
    alt: "Black Rolls-Royce Ghost with a deep-gloss ceramic coated finish",
    bullets: [
      "Hard shield against sap and bird droppings",
      "Pollen and fallout wipe away easily",
      "2, 5, and 10 year coverage options",
    ],
    cta: "See packages & pricing →",
    href: "/services/ceramic-coating",
  },
  {
    title: "Detailing",
    image: astonMartinInterior,
    alt: "Deep-cleaned red leather interior of an Aston Martin V8 Vantage after a full detail",
    bullets: [
      "Cabin-only, paint-only, or both",
      "Gentle hand wash, no harsh machines",
      "We lock in protection before we pack up",
    ],
    cta: "See packages & pricing →",
    href: "/services/detailing",
  },
  {
    title: "Paint Correction",
    image: bmwX5Corrected,
    alt: "Dark blue BMW X5 with mirror-finish corrected paint",
    bullets: [
      "Erases swirls, scratches, and dull spots",
      "One-step and two-step levels available",
      "Sets up paint perfectly for a coating",
    ],
    cta: "See correction levels →",
    href: "/services/paint-correction",
  },
  {
    title: "Maintenance Plans",
    image: lotusEmiraDriveway,
    alt: "Black Lotus Emira kept in showroom condition on a brick paver driveway",
    bullets: [
      "Regular visits keep tree fallout at bay",
      "Your car stays detail-fresh all year",
      "Priority booking for plan members",
    ],
    cta: "See plans →",
    href: "/services/maintenance-plans",
  },
];

const STEPS = [
  {
    title: "Pick a time that suits you",
    text: "Book online or call us and choose a slot. Matt and the APX team load up the van and head over to your place in Haworth, a quick hop from our base next door in Dumont.",
  },
  {
    title: "We work quietly in your driveway",
    text: "The van carries its own water and power, so there's nothing for you to plug in or hook up. Our small team keeps things calm and tidy, with respect for the neighborhood while we work.",
  },
  {
    title: "We walk you through the results",
    text: "Before we leave we go over the finish with you and explain any care for fresh coatings or cleaned interiors. Your car heads back into the trees protected and gleaming.",
  },
];

const FAQS: Faq[] = [
  {
    question: "Is there an extra charge to come out to Haworth?",
    answer:
      "Never. We're based just next door in Dumont, so Haworth is right in our backyard. Travel is always free across our eight-town service area, with nothing added for the short drive over.",
  },
  {
    question: "Where will the team work on my car?",
    answer:
      "Wherever the car can be safely reached: your own driveway, a spot at the curb, or a parking space at your office. We tuck our gear in neatly and leave the area exactly as we found it.",
  },
  {
    question: "Do you need me to supply water or an outlet?",
    answer:
      "Not at all. The van is fully self-contained with its own water supply and power on board. You don't have to hook up a hose or hunt for an outdoor plug for us.",
  },
  {
    question: "How early should I reserve a slot?",
    answer:
      "For details and plan visits, a few days' notice usually does it. Coatings and paint correction take longer, so aim for roughly a week ahead. Send us your details and we'll confirm openings the same day.",
  },
  {
    question: "What if the weather turns on my appointment day?",
    answer:
      "Under Haworth's heavy tree canopy, sap and pollen are a year-round battle, so we keep a close eye on the forecast. Garage or covered work like interiors and coatings can usually proceed; otherwise we'll move you to the next open slot at no cost and reach out ahead of time.",
  },
];

export default function HaworthPage() {
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
          areaServed: ["Haworth"],
        })}
      />
      <ServiceHero
        eyebrow="Haworth, NJ"
        title={
          <>
            Mobile detailing in Haworth, <span className="text-crimson-soft">at your front door.</span>
          </>
        }
        copy="Haworth's mature trees keep dropping sap, pollen, and bird droppings on your paint. We come over from neighboring Dumont with water and power on board and handle it all by hand."
        image={{
          // Placeholder pending a real Haworth job photo from the owner.
          src: porsche911RearSpoiler,
          alt: "Rear wing of a blue Porsche 911 Turbo S detailed in Haworth with the APX van on site",
          tag: "Haworth, NJ · Fully mobile",
        }}
      />
      <AreaServices
        eyebrow="What we do"
        heading="Detailing, ceramic coating, and paint correction in Haworth"
        copy="Every job is done by hand at your place with pro-grade, non-toxic products, built to stand up to the tree fallout around town. Choose a service to see packages and exact pricing."
        cards={SERVICE_CARDS}
      />
      <ServiceProcess
        eyebrow="How it works"
        heading="Mobile detailing in Haworth, step by step"
        steps={STEPS}
      />
      <Testimonials
        heading="Feedback from drivers near Haworth"
        subtext="Every quote below is a real Google review from an APX client."
      />
      <ServiceFaq heading="Common questions" faqs={FAQS} />
      <ServiceAreas
        eyebrow="Nearby areas"
        heading="Covering Haworth and the towns around it"
        copy="Our home base sits next door in Dumont, which puts Haworth minutes away. We also look after drivers in Demarest, Cresskill, Alpine, Tenafly, Bergenfield, and New Milford. Unsure if your street is in range? Pop your zip into the quote form and we'll let you know the same day."
      />
      <Quote />
    </main>
  );
}
