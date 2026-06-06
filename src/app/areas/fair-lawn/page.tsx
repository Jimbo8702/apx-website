import { pageMetadata } from "@/lib/page-metadata";
import rollsRoyceCeramic from "@public/media/images/black-rolls-royce-ghost-black-badge-front.jpeg";
import astonMartinInterior from "@public/media/images/image_4.jpg";
import lotusEmiraDriveway from "@public/media/images/black-lotus-emira-front.jpeg";
import bmwX5Corrected from "@public/media/images/blue-bmw-x5-front.jpeg";
import audiQ5Interior from "@public/media/images/image_13.jpg";
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
  title: "Mobile Detailing in Fair Lawn, NJ",
  description:
    "Mobile detailing and ceramic coating for Fair Lawn, NJ commuters. We strip highway film, brake dust, and salt spray off your daily driver right in the driveway.",
  path: "/areas/fair-lawn",
};

export const metadata = pageMetadata(META);

const SERVICE_CARDS: AreaServiceCard[] = [
  {
    title: "Ceramic Coating",
    image: rollsRoyceCeramic,
    alt: "Black Rolls-Royce Ghost with a deep-gloss ceramic coated finish",
    bullets: [
      "Shrugs off road salt and grime",
      "Bug splatter rinses off easy",
      "Coatings rated 2 to 10 years",
    ],
    cta: "See packages & pricing →",
    href: "/services/ceramic-coating",
  },
  {
    title: "Detailing",
    image: astonMartinInterior,
    alt: "Deep-cleaned red leather interior of an Aston Martin V8 Vantage after a full detail",
    bullets: [
      "Commuter grime washed off by hand",
      "Cabin freshened after long drives",
      "Sealant added before we pack up",
    ],
    cta: "See packages & pricing →",
    href: "/services/detailing",
  },
  {
    title: "Paint Correction",
    image: bmwX5Corrected,
    alt: "Dark blue BMW X5 with mirror-finish corrected paint",
    bullets: [
      "Etched brake dust polished out",
      "Highway sandblasting smoothed over",
      "1 or 2 stage defect removal",
    ],
    cta: "See correction levels →",
    href: "/services/paint-correction",
  },
  {
    title: "Maintenance Plans",
    image: lotusEmiraDriveway,
    alt: "Black Lotus Emira kept in showroom condition on a brick paver driveway",
    bullets: [
      "Standing washes for daily miles",
      "Stays ahead of road buildup",
      "Standing visits, locked-in slots",
    ],
    cta: "See plans →",
    href: "/services/maintenance-plans",
  },
];

const STEPS = [
  {
    title: "We roll into Fair Lawn to you",
    text: "Pick a time online or by phone and Matt and the APX team meet you at home or near your office off Route 4 or 208. Whatever the commute has thrown at the car, we'll be there to undo it.",
  },
  {
    title: "Our van carries everything",
    text: "Self-contained water and power means we plug into nothing of yours. We just need a parking spot with a little room around the car, and the rest stays in our hands.",
  },
  {
    title: "You drive off film-free",
    text: "We finish with a walkaround, flag any spots the highway hit hardest, and explain how to keep the protection going. The car leaves looking nothing like its morning-commute self.",
  },
];

// Placeholder reviews pending owner sign-off, same status as the service-page reviews.
const REVIEWS: Review[] = [
  {
    quote:
      "“My Accord lives on Route 208 and the front end was caked in bug guts and tar. After their wash and decon it looked like it had never seen a highway.”",
    initials: "BK",
    name: "Boris K.",
    town: "Fair Lawn, NJ",
    color: "#7a1f1f",
  },
  {
    quote:
      "“The brake dust on my wheels had basically welded itself on. They lifted every bit of it and sealed the wheels so it wipes right off now.”",
    initials: "TM",
    name: "Tara M.",
    town: "Fair Lawn, NJ",
    color: "#1f4d7a",
  },
  {
    quote:
      "“Winter salt had my black sedan looking gray. One visit and a coating later, the slush slides off and I'm barely cleaning it through the season.”",
    initials: "FR",
    name: "Felix R.",
    town: "Fair Lawn, NJ",
    color: "#2f6e4a",
  },
  {
    quote:
      "“They knocked out a two-step correction in my driveway after years of highway sandblasting dulled the clear coat. The shine is honestly unreal.”",
    initials: "JD",
    name: "Joanne D.",
    town: "Glen Rock, NJ",
    color: "#5a2f6e",
  },
  {
    quote:
      "“Put both commuter cars on a recurring plan and the road grime never gets a chance to build up anymore. Easiest decision I've made for them.”",
    initials: "SW",
    name: "Sam W.",
    town: "Saddle Brook, NJ",
    color: "#6a4d1f",
  },
  {
    quote:
      "“Came straight to my office lot at lunch and handled the whole detail while I worked. No detour off the highway, no waiting room. Brilliant setup.”",
    initials: "IV",
    name: "Irene V.",
    town: "Ridgewood, NJ",
    color: "#1f4d7a",
  },
];

const FAQS: Faq[] = [
  {
    question: "Will I get charged extra for a Fair Lawn address?",
    answer:
      "No. Our base is just over in Dumont, and Fair Lawn falls squarely within the area we cover, so nothing for travel ever lands on your quote. The same goes for nearby towns like Glen Rock and Ridgewood.",
  },
  {
    question: "Do you carry your own water and power?",
    answer:
      "We do. The van runs entirely on its own tank and electrical supply, so you won't need a hose, a spigot, or an outdoor outlet. We arrive ready to work the moment we park.",
  },
  {
    question: "Can the daily highway grime really come all the way off?",
    answer:
      "In most cases, yes. Bug residue, tar, and embedded brake dust get a proper decontamination wash that lifts what a regular rinse leaves behind. Where the highway has actually etched the clear coat, paint correction takes it the rest of the way.",
  },
  {
    question: "Does a coating help with salt and winter spray?",
    answer:
      "It makes a real difference. A ceramic coating gives road salt and slush far less to cling to, so winter buildup rinses away with much less effort and your paint stays better protected through the worst months.",
  },
  {
    question: "How soon should I book before the appointment?",
    answer:
      "Most washes, details, and maintenance visits only need a few days' notice, while correction and coatings are best reserved about a week ahead. Fill out the quote form and we'll lock in a time that fits around your commute.",
  },
];

export default function FairLawnPage() {
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
          areaServed: ["Fair Lawn"],
        })}
      />
      <ServiceHero
        eyebrow="Fair Lawn, NJ"
        title={
          <>
            Mobile detailing in Fair Lawn, <span className="text-crimson-soft">minus the highway film.</span>
          </>
        }
        copy="Route 4 and 208 leave their mark in brake dust, tar, and salt spray. APX brings detailing, paint correction, and ceramic coating to your Fair Lawn driveway to wipe the daily grind away."
        image={{
          // Placeholder pending a real Fair Lawn job photo from the owner.
          src: audiQ5Interior,
          alt: "Detailed tan leather interior and wood trim of an Audi Q5 cleaned on site in Fair Lawn",
          tag: "Fair Lawn, NJ · Fully mobile",
        }}
      />
      <AreaServices
        eyebrow="What we do"
        heading="Detailing, ceramic coating, and paint correction in Fair Lawn"
        copy="Each service is done by hand at your home or office with pro-grade, non-toxic products. Pick a service to view the packages and full pricing."
        cards={SERVICE_CARDS}
      />
      <ServiceProcess
        eyebrow="How it works"
        heading="Mobile detailing in Fair Lawn, step by step"
        steps={STEPS}
      />
      <Testimonials
        heading="What Fair Lawn commuters report"
        subtext="Notes from drivers in Fair Lawn and the towns up and down the line."
        reviews={REVIEWS}
      />
      <ServiceFaq heading="Common questions" faqs={FAQS} />
      <ServiceAreas
        eyebrow="Nearby areas"
        heading="Covering Fair Lawn and the towns around it"
        copy="We work out of nearby Dumont, which keeps Fair Lawn and the surrounding corridor within easy reach. We also cover Glen Rock, Paramus, Saddle Brook, and Ridgewood. Wondering if your block makes the list? Pop your zip into the quote form and we'll let you know the same day."
      />
      <Quote />
    </main>
  );
}
