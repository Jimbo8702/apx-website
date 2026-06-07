import { pageMetadata } from "@/lib/page-metadata";
import rollsRoyceCeramic from "@public/media/images/black-rolls-royce-ghost-black-badge-front.jpeg";
import astonMartinInterior from "@public/media/images/aston-martin-vantage-red-interior.jpeg";
import lotusEmiraDriveway from "@public/media/images/black-lotus-emira-front.jpeg";
import subaruLegacyInterior from "@public/media/images/subaru-legacy-interior-front-seats.jpeg";
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
  title: "Mobile Detailing in Hillsdale, NJ",
  description:
    "Mobile detailing, paint correction, and ceramic coating in Hillsdale, NJ. APX revives older daily drivers and long-owned cars in your driveway.",
  path: "/areas/hillsdale",
};

export const metadata = pageMetadata(META);

const SERVICE_CARDS: AreaServiceCard[] = [
  {
    title: "Ceramic Coating",
    image: rollsRoyceCeramic,
    alt: "Black Rolls-Royce Ghost with a deep-gloss ceramic coated finish",
    bullets: [
      "Locks in a freshly revived finish",
      "Years of protection for a keeper",
      "Durability from 2 to 10 years",
    ],
    cta: "See packages & pricing →",
    href: "/services/ceramic-coating",
  },
  {
    title: "Detailing",
    image: astonMartinInterior,
    alt: "Deep-cleaned red leather interior of an Aston Martin V8 Vantage after a full detail",
    bullets: [
      "Tired cabins brought back to life",
      "Interior, exterior, or the works",
      "Years of wear cleaned away",
    ],
    cta: "See packages & pricing →",
    href: "/services/detailing",
  },
  {
    title: "Paint Correction",
    image: bmwX5Corrected,
    alt: "Dark blue BMW X5 with mirror-finish corrected paint",
    bullets: [
      "Aged, dull paint made deep again",
      "One or two stage correction",
      "Best prep before a coating",
    ],
    cta: "See correction levels →",
    href: "/services/paint-correction",
  },
  {
    title: "Maintenance Plans",
    image: lotusEmiraDriveway,
    alt: "Black Lotus Emira kept in showroom condition on a brick paver driveway",
    bullets: [
      "Holds the gains year after year",
      "Standing visits to your home",
      "Plan members hold their spot",
    ],
    cta: "See plans →",
    href: "/services/maintenance-plans",
  },
];

const STEPS = [
  {
    title: "We arrive at your Hillsdale home",
    text: "Choose a time online or by phone and Matt and the APX team meet you in the driveway. We take a good look at where the car stands today so we can map out what it'll take to bring it back.",
  },
  {
    title: "The whole setup travels with us",
    text: "Our self-contained van means no borrowing your water or power. We settle in beside the car and get to work on the kind of patient, thorough job an older finish deserves.",
  },
  {
    title: "Years roll off the car",
    text: "When we finish we walk it together, lay out a simple plan to keep the results holding, and hand back a car that looks closer to the day you first drove it home.",
  },
];

// Real Google reviews from the APX profile; some also appear on one other area page.
const REVIEWS: Review[] = [
  {
    quote: "“I have a 2025 Chevy trax (white paint) this is my first purchased car and the car I had prior was a beater so I didn’t have to clean at all or all that much. When. I got my new car it instantly got filthy both interior and exterior I called my boy Matt at APX car detailing, when I say my car was clean! I had a new car all over again, if you are looking for a quick convenient and most important quality detail on your car… CALL APX NOW.”",
    initials: "BF",
    name: "BAM Fitness",
    date: "November 2025",
    color: "#7a1f1f",
  },
  {
    quote: "“He cleaned my truck really good and made it look like new”",
    initials: "AK",
    name: "Adrian Kida",
    date: "April 2025",
    color: "#1f4d7a",
  },
  {
    quote: "“I booked an appointment for a 5 year ceramic coating and wheels coating with APX Mobile Detailing. Came out really well and I’m happy with the results. Will be using them again”",
    initials: "J",
    name: "Jacoby",
    date: "July 2025",
    color: "#2f6e4a",
  },
  {
    quote: "“Matt and the team do amazing work. They ceramic coated my m240i and it came out amazing. Highly recommend them”",
    initials: "MR",
    name: "Moe Robert",
    date: "May 2026",
    color: "#6a4d1f",
  },
  {
    quote: "“Honestly both me and my brother-in-law are overly satisfied with how the final result came out. Worth the price, service was A1. And understanding when I had to make a last minute change to the appointment. Will be doing my Harley next.”",
    initials: "JL",
    name: "Justin LoVecchio",
    date: "August 2025",
    color: "#5a2f6e",
  },
  {
    quote: "“Very thorough and detailed with his cleaning helped talked me through exactly what he would do before cleaning and executed to perfection”",
    initials: "RG",
    name: "Ryan Gilmartin",
    date: "May 2025",
    color: "#7a1f1f",
  },
];

const FAQS: Faq[] = [
  {
    question: "Is there an added charge to reach Hillsdale?",
    answer:
      "None whatsoever. We're based nearby in Dumont, so Hillsdale falls inside our standard coverage and the quoted price is all you pay. Towns next door like Woodcliff Lake, Park Ridge, and Emerson are handled with no extra cost too.",
  },
  {
    question: "Can you bring back an older car that's seen a lot of years?",
    answer:
      "That's a big part of what we do here. Paint correction can pull years of swirls and dullness out of aged clear coat, an interior reset undoes a decade of daily wear, and a coating or maintenance plan helps hold those gains. We're honest about what an older finish can take and what to expect.",
  },
  {
    question: "How do I keep the results once you've revived the car?",
    answer:
      "A maintenance plan is the simplest path. We return on a set schedule so the car never slides back to where it was, and members get first claim on the calendar. We'll also leave you with easy aftercare steps if you'd rather handle washes between visits.",
  },
  {
    question: "Will you need my water or electric to do the work?",
    answer:
      "No. Everything runs off the van's own tank and power supply, so we're self-sufficient from the moment we park. Use of your hose or an outlet is optional and never something we count on.",
  },
  {
    question: "How far ahead should I schedule?",
    answer:
      "For a detail or a maintenance visit, a few days' notice is usually plenty. A full revival with correction and a coating takes more time on site, so plan for about a week out. Fill in the quote form and we'll pin down a date.",
  },
];

export default function HillsdalePage() {
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
          areaServed: ["Hillsdale"],
        })}
      />
      <ServiceHero
        eyebrow="Hillsdale, NJ"
        title={
          <>
            Mobile detailing in Hillsdale, <span className="text-crimson-soft">keeping good cars great.</span>
          </>
        }
        copy="Hillsdale drivers keep their cars for years, and so do we. Paint correction, interior revival, and maintenance that bring an older daily driver back and hold that look for seasons to come."
        image={{
          // Placeholder pending a real Hillsdale job photo from the owner.
          src: subaruLegacyInterior,
          alt: "Freshly deep-cleaned Subaru Legacy interior in a Hillsdale driveway",
          tag: "Hillsdale, NJ · Fully mobile",
        }}
      />
      <AreaServices
        eyebrow="What we do"
        heading="Paint correction, detailing, and ceramic coating in Hillsdale"
        copy="Each visit is hand-done in your driveway with professional-grade, non-toxic products, the patient kind of work a long-owned car deserves. Pick a service for full packages and pricing."
        cards={SERVICE_CARDS}
      />
      <ServiceProcess
        eyebrow="How it works"
        heading="Reviving a Hillsdale car, step by step"
        steps={STEPS}
      />
      <Testimonials
        heading="What owners around Hillsdale say"
        subtext="Notes from our Google reviews, written by clients across the area."
        reviews={REVIEWS}
      />
      <ServiceFaq heading="Common questions" faqs={FAQS} />
      <ServiceAreas
        eyebrow="Nearby areas"
        heading="Serving Hillsdale and the towns around it"
        copy="We run out of nearby Dumont, which keeps Hillsdale an easy trip. We also care for Woodcliff Lake, Park Ridge, Emerson, and Saddle River. Not certain we cover your block? Pop your zip into the quote form and we'll confirm the same day."
      />
      <Quote />
    </main>
  );
}
