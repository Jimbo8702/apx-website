import { pageMetadata } from "@/lib/page-metadata";
import rollsRoyceCeramic from "@public/media/images/black-rolls-royce-ghost-black-badge-front.jpeg";
import astonMartinInterior from "@public/media/images/image_4.jpg";
import lotusEmiraDriveway from "@public/media/images/black-lotus-emira-front.jpeg";
import teslaModelY from "@public/media/images/gray-tesla-model-y-rear-2.jpeg";
import bmwX5Corrected from "@public/media/images/blue-bmw-x5-front.jpeg";
import { ServiceFaq, type Faq } from "@/app/services/_components/service-faq";
import { ServiceHero } from "@/app/services/_components/service-hero";
import { ServiceProcess } from "@/app/services/_components/service-process";
import { JsonLd } from "@/components/json-ld";
import { Quote } from "@/components/sections/quote";
import { ServiceAreas } from "@/components/sections/service-areas";
import { Testimonials, type Review } from "@/components/sections/testimonials";
import { breadcrumbSchema, serviceSchema, webPageSchema } from "@/lib/schema";
import { AreaServices, type AreaServiceCard } from "../_components/area-services";

const META = {
  title: "Mobile Detailing in New Milford, NJ",
  description:
    "Mobile detailing, ceramic coating, and paint correction for New Milford, NJ. Based next door in Dumont, APX details at your home with water and power aboard.",
  path: "/areas/new-milford",
};

export const metadata = pageMetadata(META);

const SERVICE_CARDS: AreaServiceCard[] = [
  {
    title: "Ceramic Coating",
    image: rollsRoyceCeramic,
    alt: "Black Rolls-Royce Ghost with a deep-gloss ceramic coated finish",
    bullets: [
      "Long-term gloss with real protection",
      "Salt and grime wipe away faster",
      "Lasts 2, 5, or 10 years by package",
    ],
    cta: "See packages & pricing →",
    href: "/services/ceramic-coating",
  },
  {
    title: "Detailing",
    image: astonMartinInterior,
    alt: "Deep-cleaned red leather interior of an Aston Martin V8 Vantage after a full detail",
    bullets: [
      "Interior-only, exterior-only, or full",
      "Great for kid and pet messes",
      "We seal the finish before we pack up",
    ],
    cta: "See packages & pricing →",
    href: "/services/detailing",
  },
  {
    title: "Paint Correction",
    image: bmwX5Corrected,
    alt: "Dark blue BMW X5 with mirror-finish corrected paint",
    bullets: [
      "Lift out swirls, scratches, and haze",
      "Single-stage or multi-stage polish",
      "The clean slate a coating needs",
    ],
    cta: "See correction levels →",
    href: "/services/paint-correction",
  },
  {
    title: "Maintenance Plans",
    image: lotusEmiraDriveway,
    alt: "Black Lotus Emira kept in showroom condition on a brick paver driveway",
    bullets: [
      "We come back on a set schedule",
      "Your daily driver stays sharp",
      "Members get first pick of slots",
    ],
    cta: "See plans →",
    href: "/services/maintenance-plans",
  },
];

const STEPS = [
  {
    title: "Pick a time, we head over",
    text: "Book online or call to grab a slot. Since our base is right over the line in Dumont, getting to New Milford takes Matt and the APX team just a few minutes, which makes scheduling easy to fit around your week.",
  },
  {
    title: "Everything arrives in the van",
    text: "Our van is fully self-contained, carrying its own water and power. You don't need a hose, an outlet, or anything else ready. A spot in the driveway or along the curb is plenty.",
  },
  {
    title: "We finish and walk you through it",
    text: "Before we leave, we go over the car together, point out the work, and explain how to care for any fresh coating or interior treatment so it holds up between visits.",
  },
];

// Placeholder reviews pending owner sign-off, same status as the service-page reviews.
const REVIEWS: Review[] = [
  {
    quote:
      "“Our minivan takes a beating from three kids and a dog. Matt and the team got the interior looking like the dealership lot again without me leaving the house.”",
    initials: "MB",
    name: "Monica B.",
    town: "New Milford, NJ",
    color: "#2f6e4a",
  },
  {
    quote:
      "“They're basically around the corner, so booking was painless and they showed up right on time. My Highlander hasn't looked this good since the day I bought it.”",
    initials: "MD",
    name: "Mike D.",
    town: "New Milford, NJ",
    color: "#7a1f1f",
  },
  {
    quote:
      "“Had a ceramic coating put on my daily driver to fight the road salt all winter. Beads water like crazy now and the rinse-offs take half the time.”",
    initials: "KT",
    name: "Karen T.",
    town: "Dumont, NJ",
    color: "#1f4d7a",
  },
  {
    quote:
      "“Paint correction on my SUV erased years of scratches I figured were permanent. They worked it panel by panel right in my driveway and the gloss is unreal.”",
    initials: "OF",
    name: "Omar F.",
    town: "Bergenfield, NJ",
    color: "#6a4d1f",
  },
  {
    quote:
      "“We signed both cars up for the maintenance plan. They circle back like clockwork and the cars always look freshly done. Easiest decision we've made.”",
    initials: "LC",
    name: "Lauren C.",
    town: "Haworth, NJ",
    color: "#5a2f6e",
  },
  {
    quote:
      "“No spigot at my place and they didn't blink. Water, power, all of it came off the van and the wash still turned out spotless. Truly nothing to set up.”",
    initials: "DN",
    name: "David N.",
    town: "Tenafly, NJ",
    color: "#2f6e4a",
  },
];

const FAQS: Faq[] = [
  {
    question: "Is there an extra charge to come to New Milford?",
    answer:
      "Not at all. We're based in neighboring Dumont, and travel is free across every town in our area, New Milford included. The price you see is the price you pay, with no add-on for the trip.",
  },
  {
    question: "Where do you do the work when you show up?",
    answer:
      "Wherever there's safe room around the vehicle. Most jobs happen in the driveway, but a curbside spot out front or a space at your workplace works just as well. We tidy up and leave the area as we found it.",
  },
  {
    question: "Will I need to supply water or power?",
    answer:
      "Nope. The van is fully self-contained and brings its own water tank and electricity, so we never depend on your home's supply. You can offer your outdoor tap if you prefer, but it's never required.",
  },
  {
    question: "How much notice do you need for a booking?",
    answer:
      "For a detail or a maintenance visit, a couple of days of notice usually does it. Ceramic coating and paint correction run longer, so aim for about a week ahead. Send your details through the quote form and we'll confirm openings the same day.",
  },
  {
    question: "What happens if it rains when you're scheduled?",
    answer:
      "A garage or covered driveway lets interior work and coatings move ahead in almost any weather. If it's open-air and the forecast won't cooperate, we'll move you to the next open slot at no cost and reach out ahead of time so it's never a surprise.",
  },
];

export default function NewMilfordPage() {
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
          areaServed: ["New Milford"],
        })}
      />
      <ServiceHero
        eyebrow="New Milford, NJ"
        title={
          <>
            Mobile detailing in New Milford, <span className="text-crimson-soft">just minutes away.</span>
          </>
        }
        copy="APX is based just next door in Dumont, so New Milford is a quick trip for our small team. Ceramic coatings, paint correction, and full details at your home or office. No waiting room."
        image={{
          // Placeholder pending a real New Milford job photo from the owner.
          src: teslaModelY,
          alt: "Gray Tesla Model Y freshly detailed in a New Milford driveway with the APX van on site",
          tag: "New Milford, NJ · Fully mobile",
        }}
      />
      <AreaServices
        eyebrow="What we do"
        heading="Detailing, ceramic coating, and paint correction in New Milford"
        copy="Every job is done by hand at your place with pro-grade, non-toxic products. Choose a service below to view packages and exact pricing."
        cards={SERVICE_CARDS}
      />
      <ServiceProcess
        eyebrow="How it works"
        heading="Mobile detailing in New Milford, step by step"
        steps={STEPS}
      />
      <Testimonials
        heading="What New Milford drivers say"
        subtext="Notes from families and daily drivers around New Milford and the towns nearby."
        reviews={REVIEWS}
      />
      <ServiceFaq heading="Common questions" faqs={FAQS} />
      <ServiceAreas
        eyebrow="Nearby areas"
        heading="Covering New Milford from right next door"
        copy="Our home base sits just over the line in Dumont, which keeps New Milford close at hand. We also look after drivers in Bergenfield, Haworth, Tenafly, Cresskill, Demarest, and Alpine. Not certain we reach your block? Add your zip to the quote form and we'll let you know the same day."
      />
      <Quote />
    </main>
  );
}
