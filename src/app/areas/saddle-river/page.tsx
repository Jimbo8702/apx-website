import { pageMetadata } from "@/lib/page-metadata";
import rollsRoyceCeramic from "@public/media/images/black-rolls-royce-ghost-black-badge-front.jpeg";
import astonMartinInterior from "@public/media/images/image_4.jpg";
import lotusEmiraDriveway from "@public/media/images/black-lotus-emira-front.jpeg";
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
  title: "Mobile Detailing in Saddle River, NJ",
  description:
    "Mobile ceramic coating, paint correction, and detailing for Saddle River, NJ estates. APX brings show-quality finishes and collector care to your garage.",
  path: "/areas/saddle-river",
};

export const metadata = pageMetadata(META);

const SERVICE_CARDS: AreaServiceCard[] = [
  {
    title: "Ceramic Coating",
    image: rollsRoyceCeramic,
    alt: "Black Rolls-Royce Ghost with a deep-gloss ceramic coated finish",
    bullets: [
      "Show-ready depth on prized paint",
      "Shrugs off dust on long drives",
      "Coating packages to 10 years",
    ],
    cta: "See packages & pricing →",
    href: "/services/ceramic-coating",
  },
  {
    title: "Detailing",
    image: astonMartinInterior,
    alt: "Deep-cleaned red leather interior of an Aston Martin V8 Vantage after a full detail",
    bullets: [
      "Auction-ready interior and exterior",
      "Hand work on every panel and seam",
      "Sealed and protected before we go",
    ],
    cta: "See packages & pricing →",
    href: "/services/detailing",
  },
  {
    title: "Paint Correction",
    image: bmwX5Corrected,
    alt: "Dark blue BMW X5 with mirror-finish corrected paint",
    bullets: [
      "Erase swirls before a showing",
      "Single and multi-stage polishing",
      "Concours-level groundwork for coatings",
    ],
    cta: "See correction levels →",
    href: "/services/paint-correction",
  },
  {
    title: "Maintenance Plans",
    image: lotusEmiraDriveway,
    alt: "Black Lotus Emira kept in showroom condition on a brick paver driveway",
    bullets: [
      "Quiet standing visits to the estate",
      "Garage queens stay show fresh",
      "Members reserved first on the calendar",
    ],
    cta: "See plans →",
    href: "/services/maintenance-plans",
  },
];

const STEPS = [
  {
    title: "We arrive at your Saddle River estate",
    text: "Schedule online or by phone and tell us where on the property to set up. Matt and the APX team navigate long private drives and gated entries without fuss, and we keep a low profile the whole time.",
  },
  {
    title: "Our rig carries everything we need",
    text: "The van is fully self-contained, so nothing on your property gets touched. Ample space near the garage lets us work through a single car or a row of them in one unhurried visit.",
  },
  {
    title: "Each car leaves concours clean",
    text: "We walk the finished work with you, go over aftercare for any coating or interior treatment, and hand back vehicles ready for a show field or a private sale.",
  },
];

// Placeholder reviews pending owner sign-off, same status as the service-page reviews.
const REVIEWS: Review[] = [
  {
    quote:
      "“They prepped my 911 for a concours weekend and the judges noticed. Calm, meticulous work done right on the estate without any commotion.”",
    initials: "CB",
    name: "Charles B.",
    town: "Saddle River, NJ",
    color: "#7a1f1f",
  },
  {
    quote:
      "“Two collector cars coated in my own garage over an afternoon. They worked quietly, respected the property, and the results are flawless.”",
    initials: "VL",
    name: "Vivian L.",
    town: "Saddle River, NJ",
    color: "#1f4d7a",
  },
  {
    quote:
      "“I don't let just anyone near the convertible. After one visit Matt and the team have my full confidence, and the paint has never looked deeper.”",
    initials: "RK",
    name: "Roger K.",
    town: "Saddle River, NJ",
    color: "#2f6e4a",
  },
  {
    quote:
      "“Full correction on my coupe before a private auction. The finish photographed beautifully and helped close the sale above where I'd hoped.”",
    initials: "SD",
    name: "Simone D.",
    town: "Waldwick, NJ",
    color: "#5a2f6e",
  },
  {
    quote:
      "“They keep the whole garage on a quiet rotation. The cars stay ready to drive or show and I never have to think about it.”",
    initials: "HW",
    name: "Hank W.",
    town: "Woodcliff Lake, NJ",
    color: "#6a4d1f",
  },
  {
    quote:
      "“Detailed a long-stored roadster down to the door jambs and wheel wells. It came back looking like it just left the dealership.”",
    initials: "AM",
    name: "Audrey M.",
    town: "Ridgewood, NJ",
    color: "#7a1f1f",
  },
];

const FAQS: Faq[] = [
  {
    question: "Will a Saddle River address add a travel fee?",
    answer:
      "It won't. APX runs out of nearby Dumont, and Saddle River sits comfortably inside the area we serve, so there's no surcharge for the distance. The neighboring towns we cover are all included at the same rate.",
  },
  {
    question: "Are you comfortable handling collector and show cars?",
    answer:
      "Very. Show prep and concours-level work are a regular part of what we do, and we treat every collector car accordingly. Tell us the goal, whether it's a judging field or a private sale, and we'll tailor the approach to match.",
  },
  {
    question: "Can you work behind a gate or on a long private drive?",
    answer:
      "Absolutely. Gated entries and lengthy drives are common where we work, and they simply give us more room. Let us know how to reach the parking area and where you'd like us, and we take it from there.",
  },
  {
    question: "How many cars can you handle in one visit?",
    answer:
      "As many as the day allows. Daily drivers, weekend cars, and garaged classics can all be covered in a single appointment. Share the list and what each one needs, and we'll plan an unhurried schedule around it.",
  },
  {
    question: "How far out should I plan a visit?",
    answer:
      "A few days ahead suits most details and maintenance visits, while coatings and correction are best booked roughly a week out so we can give the car the time it deserves. Add your details to the quote form and we'll confirm availability the same day.",
  },
];

export default function SaddleRiverPage() {
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
          areaServed: ["Saddle River"],
        })}
      />
      <ServiceHero
        eyebrow="Saddle River, NJ"
        title={
          <>
            Mobile detailing in Saddle River, <span className="text-crimson-soft">quiet and careful.</span>
          </>
        }
        copy="Saddle River estates deserve careful, private work. APX brings ceramic coating, paint correction, and show-ready detailing to your garage, from the daily to the collector kept under cover."
        image={{
          // Placeholder pending a real Saddle River job photo from the owner.
          src: rollsRoyceCeramic,
          alt: "Black Rolls-Royce Ghost with a deep-gloss finish in the driveway of a Saddle River home",
          tag: "Saddle River, NJ · Fully mobile",
        }}
      />
      <AreaServices
        eyebrow="What we do"
        heading="Ceramic coating, paint correction, and detailing in Saddle River"
        copy="Each service is performed by hand at your property using professional-grade, non-toxic products. Choose a service to view its full packages and pricing."
        cards={SERVICE_CARDS}
      />
      <ServiceProcess
        eyebrow="How it works"
        heading="Mobile detailing in Saddle River, the unhurried way"
        steps={STEPS}
      />
      <Testimonials
        heading="What Saddle River owners say"
        subtext="Words from estate owners in Saddle River and the towns around it."
        reviews={REVIEWS}
      />
      <ServiceFaq heading="Common questions" faqs={FAQS} />
      <ServiceAreas
        eyebrow="Nearby areas"
        heading="Looking after Saddle River and its neighbors"
        copy="Home base is a short drive away in Dumont, which keeps Saddle River and the towns nearby well within reach. We also serve Waldwick, Ridgewood, Woodcliff Lake, Park Ridge, and Hillsdale. Wondering if your address qualifies? Pop your zip into the quote form and we'll reply the same day."
      />
      <Quote />
    </main>
  );
}
