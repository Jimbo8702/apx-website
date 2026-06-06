import { pageMetadata } from "@/lib/page-metadata";
import rollsRoyceCeramic from "@public/media/images/black-rolls-royce-ghost-black-badge-front.jpeg";
import astonMartinInterior from "@public/media/images/image_4.jpg";
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

// Placeholder reviews pending owner sign-off, same status as the service-page reviews.
const REVIEWS: Review[] = [
  {
    quote:
      "“My branded van is the first thing clients see at their door, so it has to look right. They keep it clean and the lettering crisp, visit after visit.”",
    initials: "DT",
    name: "Dave T.",
    town: "Norwood, NJ",
    color: "#7a1f1f",
  },
  {
    quote:
      "“Run my business from the house and they detailed both the work truck and our family SUV in one stop. Saved me an entire afternoon.”",
    initials: "LG",
    name: "Lauren G.",
    town: "Norwood, NJ",
    color: "#1f4d7a",
  },
  {
    quote:
      "“We put the whole fleet on a plan with them. Crews show up to jobs in clean vehicles now and customers definitely notice the difference.”",
    initials: "MR",
    name: "Manny R.",
    town: "Norwood, NJ",
    color: "#2f6e4a",
  },
  {
    quote:
      "“A correction cleared the ladder scuffs off my contractor truck and a coating keeps it looking sharp between job sites. Smart investment.”",
    initials: "CS",
    name: "Claire S.",
    town: "Harrington Park, NJ",
    color: "#5a2f6e",
  },
  {
    quote:
      "“They handled our minivan in the driveway while I took calls inside. Kids' mess gone, no disruption to my workday at all.”",
    initials: "OB",
    name: "Owen B.",
    town: "Old Tappan, NJ",
    color: "#6a4d1f",
  },
  {
    quote:
      "“No need to take a vehicle off the road and haul it somewhere. They came to the shop and the van never missed a beat of work.”",
    initials: "RP",
    name: "Rita P.",
    town: "Demarest, NJ",
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
        heading="Norwood owners and businesses speak up"
        subtext="From local shops and households here and in the bordering towns."
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
