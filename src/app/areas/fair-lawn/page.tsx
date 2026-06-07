import { pageMetadata } from "@/lib/page-metadata";
import rollsRoyceCeramic from "@public/media/images/black-rolls-royce-ghost-black-badge-front.jpeg";
import astonMartinInterior from "@public/media/images/aston-martin-vantage-red-interior.jpeg";
import lotusEmiraDriveway from "@public/media/images/black-lotus-emira-front.jpeg";
import bmwX5Corrected from "@public/media/images/blue-bmw-x5-front.jpeg";
import whiteMercedesCla from "@public/media/images/white-mercedes-benz-cla-front.jpeg";
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

// Real Google reviews from the APX profile; some also appear on one other area page.
const REVIEWS: Review[] = [
  {
    quote: "“Matt and his team came by and cleaned up my truck. And anyone who knows me knows i don’t just let anyone touch my vehicles. I felt confident my vehicle was going to be taken care of just by the way my questions were being answered. Top notch professional and I’m pretty anal and specific. Matt walked me through the process to ensure satisfaction. I couldn’t have been more happy with my full detail and ceramic coating. If your like me ask for his top shelf package. You will not be disappointed”",
    initials: "SP",
    name: "Samuel Pena",
    date: "March 2025",
    color: "#7a1f1f",
  },
  {
    quote: "“The car looks fabulous and it’s amazing. I would recommend to my family and friends.”",
    initials: "JR",
    name: "Jacqueline Ramirez",
    date: "May 2025",
    color: "#1f4d7a",
  },
  {
    quote: "“Brought in my daughter's 2024 Audi RS 7 for a Luxury Detailing, I am so impressed by Matt's eye for details!! The car looks brand new! I will definitely be back with my vehicle. Thanks for your hard work!!”",
    initials: "M",
    name: "Milly",
    date: "March 2025",
    color: "#2f6e4a",
  },
  {
    quote: "“Had my vehicle detailed by APX and everything came out great! Very affordable and fantastic customer service. Highly recommend!”",
    initials: "N",
    name: "NMedina90",
    date: "January 2025",
    color: "#6a4d1f",
  },
  {
    quote: "“Professional meticulous and very fair My cars look amazing and I will continue to work with Matt!! Arrived on time and hustle management is amazing! I had two cars done and he finished both cars, but in the timeframe that he told me it would take.”",
    initials: "EH",
    name: "Eileen Hannon",
    date: "November 2025",
    color: "#5a2f6e",
  },
  {
    quote: "“Had a great experience with APX got my truck cleaned inside and out as well as a ceramic coating and my truck looks like new. Definitely would recommend them!!”",
    initials: "MR",
    name: "Matt Ruglio",
    date: "March 2025",
    color: "#7a1f1f",
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
          src: whiteMercedesCla,
          alt: "White Mercedes-Benz CLA freshly washed and detailed in a Fair Lawn driveway",
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
        heading="Feedback from the Fair Lawn area"
        subtext="Real reviews from real clients across our Bergen County coverage."
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
