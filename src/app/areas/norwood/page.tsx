import { pageMetadata } from "@/lib/page-metadata";
import rollsRoyceCeramic from "@public/media/images/black-rolls-royce-ghost-black-badge-front.jpeg";
import astonMartinInterior from "@public/media/images/aston-martin-vantage-red-interior.jpeg";
import lotusEmiraDriveway from "@public/media/images/black-lotus-emira-front.jpeg";
import dodgeCharger from "@public/media/images/silver-dodge-charger-scat-pack-rear.jpeg";
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
  title: "Mobile Detailing in Norwood, NJ",
  description:
    "Mobile car detailing, ceramic coating, and paint correction in Norwood, NJ. APX details work vans, trucks, and family cars at your home or shop.",
  path: "/areas/norwood",
};

export const metadata = pageMetadata(META);

const SERVICE_CARDS: AreaServiceCard[] = [
  {
    title: "Ceramic Coating",
    image: rollsRoyceCeramic,
    alt: "Black Rolls-Royce Ghost with a deep-gloss ceramic coated finish",
    bullets: [
      "Keeps a branded vehicle sharp",
      "Easier washes between jobs",
      "Short or decade-long coatings",
    ],
    cta: "See packages & pricing →",
    href: "/services/ceramic-coating",
  },
  {
    title: "Detailing",
    image: astonMartinInterior,
    alt: "Deep-cleaned red leather interior of an Aston Martin V8 Vantage after a full detail",
    bullets: [
      "Work cabs and family cars alike",
      "Cabin and exterior packages",
      "Hand-cleaned and sealed",
    ],
    cta: "See packages & pricing →",
    href: "/services/detailing",
  },
  {
    title: "Paint Correction",
    image: bmwX5Corrected,
    alt: "Dark blue BMW X5 with mirror-finish corrected paint",
    bullets: [
      "Job-site scuffs polished out",
      "1-step or 2-step work",
      "Primes paint for a coating",
    ],
    cta: "See correction levels →",
    href: "/services/paint-correction",
  },
  {
    title: "Maintenance Plans",
    image: lotusEmiraDriveway,
    alt: "Black Lotus Emira kept in showroom condition on a brick paver driveway",
    bullets: [
      "Keeps a fleet presentable",
      "Recurring stops at the shop",
      "Members scheduled first",
    ],
    cta: "See plans →",
    href: "/services/maintenance-plans",
  },
];

const STEPS = [
  {
    title: "We come to your Norwood address",
    text: "Set a time online or by phone and Matt and the APX team arrive at your home, home office, or business. We can work around a parked work van or the family car without you ever leaving the site.",
  },
  {
    title: "We bring our own everything",
    text: "Water, power, and pro products all ride in the van, so your day keeps moving while we work. No outlet to find, no hose to drag out, no interruption to the business.",
  },
  {
    title: "It looks ready to represent",
    text: "We finish with a walkaround and a few tips to keep it looking the part, then hand back a vehicle that says the right thing the moment a client sees it pull up.",
  },
];

// Real Google reviews from the APX profile; some also appear on one other area page.
const REVIEWS: Review[] = [
  {
    quote: "“Huge shout-out to Matt at APX Detailing! He recently worked on two of my cars—one getting a full ceramic coating and the other a interior/exterior detail. Both came out looking flawless. Matt made the process seamless and sent regular photo/video updates, so I could see the progress. If you want a detailer who is professional, communicative, and does incredible work, APX is the place. Highly recommend!”",
    initials: "KK",
    name: "Ken Karwowski",
    date: "February 2026",
    color: "#7a1f1f",
  },
  {
    quote: "“Got two cars done with APX. Excellent job”",
    initials: "NM",
    name: "NAZAR MAKOHIN",
    date: "May 2025",
    color: "#1f4d7a",
  },
  {
    quote: "“I highly recommend APX Mobile Detailing. Quick response, polite, and on time. Excellent job detailing interior and exterior of my car. I will definitely use them again.”",
    initials: "JA",
    name: "John Arlin",
    date: "July 2025",
    color: "#2f6e4a",
  },
  {
    quote: "“Detailed Car inside and out. Car was very dirty. Car now looks brand new. Fantastic job!”",
    initials: "D",
    name: "danvan590",
    date: "May 2025",
    color: "#6a4d1f",
  },
  {
    quote: "“Matt and the team at APX were great, they helped us with a ceramic coating on our new Mercedes and the car looks fantastic! Very knowledgeable, friendly and you can feel his love for keeping cars looking at their best!”",
    initials: "JN",
    name: "Janel Nese",
    date: "January 2026",
    color: "#5a2f6e",
  },
  {
    quote: "“Got a ceramic coat for my sedan, car was washed thoroughly and the coating applied, came out amazing and very shiny. Highly Recommend”",
    initials: "F",
    name: "FlyingWithMar",
    date: "April 2025",
    color: "#7a1f1f",
  },
];

const FAQS: Faq[] = [
  {
    question: "Is there a travel charge to reach Norwood?",
    answer:
      "None. We operate out of nearby Dumont, so Norwood is squarely in our service area with no fee for the trip. The towns around it, including Northvale, Harrington Park, and Old Tappan, are handled at no extra charge as well.",
  },
  {
    question: "Do you take care of work vans, trucks, and branded fleets?",
    answer:
      "Yes, that's a big part of what we do in Norwood. We detail work vans, pickups, and branded vehicles right alongside family cars, and we're careful around lettering and wraps. For several vehicles, a maintenance plan keeps the whole fleet looking professional, and members get first claim on the schedule.",
  },
  {
    question: "Can you come to my home office or place of business?",
    answer:
      "Either one. We'll set up at your house, your home office driveway, or your shop's lot, whatever keeps your day running. The van is fully mobile, so we fit the work around how and where you operate.",
  },
  {
    question: "Will you need my water or power on site?",
    answer:
      "No. The van carries its own water tank and power supply, so we're self-sufficient the moment we arrive. That keeps us out of your way and your business uninterrupted, though you're welcome to offer a spigot or outlet.",
  },
  {
    question: "How far ahead should a business book?",
    answer:
      "A few days' notice covers most details and recurring fleet stops, while correction and coatings run best about a week out. Send the vehicle details through the quote form and we'll build a schedule that works around your jobs.",
  },
];

export default function NorwoodPage() {
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
          areaServed: ["Norwood"],
        })}
      />
      <ServiceHero
        eyebrow="Norwood, NJ"
        title={
          <>
            Mobile detailing in Norwood, <span className="text-crimson-soft">for work and family cars.</span>
          </>
        }
        copy="In Norwood, a clean vehicle is part of the pitch. We detail work vans, trucks, and the family car alike at your home or shop, with ceramic coatings, paint correction, and protection that lasts."
        image={{
          // Placeholder pending a real Norwood job photo from the owner.
          src: dodgeCharger,
          alt: "Silver Dodge Charger detailed in a Norwood driveway with the APX van in the background",
          tag: "Norwood, NJ · Fully mobile",
        }}
      />
      <AreaServices
        eyebrow="What we do"
        heading="Detailing, ceramic coating, and paint correction in Norwood"
        copy="Every vehicle is hand-done at your home or business with professional-grade, non-toxic products, work trucks and family cars alike. Pick a service to see packages and exact pricing."
        cards={SERVICE_CARDS}
      />
      <ServiceProcess
        eyebrow="How it works"
        heading="How a Norwood visit fits your day"
        steps={STEPS}
      />
      <Testimonials
        heading="Google feedback around Norwood"
        subtext="Households and businesses on the work APX delivers."
        reviews={REVIEWS}
      />
      <ServiceFaq heading="Common questions" faqs={FAQS} />
      <ServiceAreas
        eyebrow="Nearby areas"
        heading="Serving Norwood and the towns next to it"
        copy="With our base in nearby Dumont, Norwood is a short drive for us. We also look after Northvale, Harrington Park, Old Tappan, and Demarest. Want to check your address? Drop your zip in the quote form and we'll get back to you the same day."
      />
      <Quote />
    </main>
  );
}
