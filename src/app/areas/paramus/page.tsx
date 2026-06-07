import { pageMetadata } from "@/lib/page-metadata";
import rollsRoyceCeramic from "@public/media/images/black-rolls-royce-ghost-black-badge-front.jpeg";
import astonMartinInterior from "@public/media/images/aston-martin-vantage-red-interior.jpeg";
import lotusEmiraDriveway from "@public/media/images/black-lotus-emira-front.jpeg";
import bmwX5Corrected from "@public/media/images/blue-bmw-x5-front.jpeg";
import whiteAudiEtronGt from "@public/media/images/white-audi-etron-gt-front.jpeg";
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
  title: "Mobile Detailing in Paramus, NJ",
  description:
    "Mobile detailing, ceramic coating, and paint correction in Paramus, NJ. APX protects lot-parked cars from swirls and door dings, right in your driveway.",
  path: "/areas/paramus",
};

export const metadata = pageMetadata(META);

const SERVICE_CARDS: AreaServiceCard[] = [
  {
    title: "Ceramic Coating",
    image: rollsRoyceCeramic,
    alt: "Black Rolls-Royce Ghost with a deep-gloss ceramic coated finish",
    bullets: [
      "A hard shield over your clear coat",
      "Shrugs off lot grime and bird drops",
      "Protection out to ten years",
    ],
    cta: "See packages & pricing →",
    href: "/services/ceramic-coating",
  },
  {
    title: "Detailing",
    image: astonMartinInterior,
    alt: "Deep-cleaned red leather interior of an Aston Martin V8 Vantage after a full detail",
    bullets: [
      "Inside and out, fully by hand",
      "Lifts dust and parking-lot film",
      "Sealed and protected before we leave",
    ],
    cta: "See packages & pricing →",
    href: "/services/detailing",
  },
  {
    title: "Paint Correction",
    image: bmwX5Corrected,
    alt: "Dark blue BMW X5 with mirror-finish corrected paint",
    bullets: [
      "Buffs out lot swirls and cart rash",
      "Choose one pass or two",
      "Resets paint before a coating",
    ],
    cta: "See correction levels →",
    href: "/services/paint-correction",
  },
  {
    title: "Maintenance Plans",
    image: lotusEmiraDriveway,
    alt: "Black Lotus Emira kept in showroom condition on a brick paver driveway",
    bullets: [
      "Regular visits to undo lot wear",
      "Keeps protection topped up",
      "Standing slots for members",
    ],
    cta: "See plans →",
    href: "/services/maintenance-plans",
  },
];

const STEPS = [
  {
    title: "We meet you in Paramus",
    text: "Reserve a slot online or by phone and Matt and the APX team come to your home or office. If your car lives in a retail lot all week, we'll bring it back from a day of door dings and dust.",
  },
  {
    title: "No outside hookups needed",
    text: "The van carries its own water and power, so a driveway or an office parking space is all it takes. We get set up and start working without touching anything of yours.",
  },
  {
    title: "Your paint leaves defended",
    text: "We finish with a walkaround, explain how to keep the protection holding up against lot life, and hand back a car that's ready to face the next week of parking.",
  },
];

// Real Google reviews from the APX profile; some also appear on one other area page.
const REVIEWS: Review[] = [
  {
    quote: "“Had my Ram truck detailed by these guys. They were able to get my appoint scheduled quickly, completed the work as they said they would and did it all at a very fair price. Detail of my truck both inside and out came out top-notch. I had some very particular requests and they were able to handle all of them. Highly recommend. Will continue to use them in the future.”",
    initials: "SH",
    name: "Steven Hegel",
    date: "March 2025",
    color: "#7a1f1f",
  },
  {
    quote: "“Very professional and great work.”",
    initials: "AA",
    name: "Ademola Adeniyi",
    date: "January 2026",
    color: "#1f4d7a",
  },
  {
    quote: "“APX was Amazing, never have had a better service from someone in this area. Cleaned my car to perfection, got a stain out and took their time to work on my vehicle.”",
    initials: "LL",
    name: "Leonardo LaSpisa",
    date: "June 2025",
    color: "#2f6e4a",
  },
  {
    quote: "“My truck looks amazing, did a great job. I would recommend to everyone else, thank you.”",
    initials: "MR",
    name: "Matt Rajner",
    date: "October 2024",
    color: "#6a4d1f",
  },
  {
    quote: "“APX did a great job detailing my Family's car. It had been sitting in our driveway for a while and when we decided to sell it, APX came and worked miracles to clean the car, detail and get us ready for a sale.”",
    initials: "KM",
    name: "Kevin Milgram",
    date: "June 2025",
    color: "#5a2f6e",
  },
  {
    quote: "“They detailed my jeep and did an incredible job. Very careful and took their time to make sure nothing was missed. Highly recommend”",
    initials: "CG",
    name: "Charlea Graf",
    date: "September 2024",
    color: "#7a1f1f",
  },
];

const FAQS: Faq[] = [
  {
    question: "Does coming out to Paramus add a fee to the bill?",
    answer:
      "It doesn't. APX is based in nearby Dumont, and Paramus is comfortably inside our service range, so there's no surcharge for the drive. Towns next door like Fair Lawn, Maywood, and Hackensack are covered the same way.",
  },
  {
    question: "Can you fix the swirls and scratches my car picks up in parking lots?",
    answer:
      "Yes, that's a big part of what we do here. Paint correction lifts the fine swirls, cart scuffs, and light scratches that lots leave behind, and a ceramic coating afterward makes the next round of marks far easier to wipe away.",
  },
  {
    question: "Where will you set up if I'm at home or at the office?",
    answer:
      "Either works. A driveway, a curb spot, or a space in your office lot gives us enough room to work around the car. We stay tidy and put everything back the way it was before we leave.",
  },
  {
    question: "Is the van really self-sufficient?",
    answer:
      "We do. The van runs on a self-contained water tank and power supply, so nothing is required on your end. If you'd prefer we tap your outdoor outlet, that's fine, but it's never necessary.",
  },
  {
    question: "How soon should I get on the calendar?",
    answer:
      "Details and maintenance visits usually need just a few days of notice, while coatings and correction work best booked roughly a week out. Drop your information in the quote form and we'll confirm a time the same day.",
  },
];

export default function ParamusPage() {
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
          areaServed: ["Paramus"],
        })}
      />
      <ServiceHero
        eyebrow="Paramus, NJ"
        title={
          <>
            Mobile detailing in Paramus, <span className="text-crimson-soft">built for lot life.</span>
          </>
        }
        copy="Paramus cars live in parking lots, and lot life leaves marks. Ceramic coating, paint correction, and detailing that defend your finish against door dings, cart rash, and baking sun."
        image={{
          // Placeholder pending a real Paramus job photo from the owner.
          src: whiteAudiEtronGt,
          alt: "White Audi e-tron GT washed and detailed in a Paramus parking lot",
          tag: "Paramus, NJ · Fully mobile",
        }}
      />
      <AreaServices
        eyebrow="What we do"
        heading="Ceramic coating, paint correction, and detailing in Paramus"
        copy="Every job is hand-done at your home or office with professional-grade, non-toxic products. Pick a service to view the full packages and pricing."
        cards={SERVICE_CARDS}
      />
      <ServiceProcess
        eyebrow="How it works"
        heading="Defending Paramus paint, step by step"
        steps={STEPS}
      />
      <Testimonials
        heading="Reviews from drivers around Paramus"
        subtext="Words from APX clients across the service area, via Google."
        reviews={REVIEWS}
      />
      <ServiceFaq heading="Common questions" faqs={FAQS} />
      <ServiceAreas
        eyebrow="Nearby areas"
        heading="Covering Paramus and the towns beside it"
        copy="We operate out of nearby Dumont, which keeps Paramus and its neighbors an easy drive for our team. We also serve Fair Lawn, Maywood, Emerson, Ridgewood, and Hackensack. Not certain we reach your block? Add your zip to the quote form and we'll confirm that day."
      />
      <Quote />
    </main>
  );
}
