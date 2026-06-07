import { pageMetadata } from "@/lib/page-metadata";
import rollsRoyceCeramic from "@public/media/images/black-rolls-royce-ghost-black-badge-front.jpeg";
import astonMartinInterior from "@public/media/images/aston-martin-vantage-red-interior.jpeg";
import lotusEmiraDriveway from "@public/media/images/black-lotus-emira-front.jpeg";
import blackPorscheMacan from "@public/media/images/black-porsche-macan-front.jpeg";
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
  title: "Mobile Detailing in Fort Lee, NJ",
  description:
    "Mobile detailing, ceramic coating, and paint correction for Fort Lee, NJ. No driveway needed: we work in condo garages, decks, and lots near the GW Bridge.",
  path: "/areas/fort-lee",
};

export const metadata = pageMetadata(META);

const SERVICE_CARDS: AreaServiceCard[] = [
  {
    title: "Ceramic Coating",
    image: rollsRoyceCeramic,
    alt: "Black Rolls-Royce Ghost with a deep-gloss ceramic coated finish",
    bullets: [
      "Long-term shine for garage-parked cars",
      "City dust wipes off in seconds",
      "Three coating durations offered",
    ],
    cta: "See packages & pricing →",
    href: "/services/ceramic-coating",
  },
  {
    title: "Detailing",
    image: astonMartinInterior,
    alt: "Deep-cleaned red leather interior of an Aston Martin V8 Vantage after a full detail",
    bullets: [
      "Done in your building's parking deck",
      "Every panel cleaned by hand",
      "Protection sealed before we leave",
    ],
    cta: "See packages & pricing →",
    href: "/services/detailing",
  },
  {
    title: "Paint Correction",
    image: bmwX5Corrected,
    alt: "Dark blue BMW X5 with mirror-finish corrected paint",
    bullets: [
      "Garage-pillar scrapes polished out",
      "Swirls and haze lifted away",
      "One and two-step passes",
    ],
    cta: "See correction levels →",
    href: "/services/paint-correction",
  },
  {
    title: "Maintenance Plans",
    image: lotusEmiraDriveway,
    alt: "Black Lotus Emira kept in showroom condition on a brick paver driveway",
    bullets: [
      "Recurring visits in your garage spot",
      "Keeps a city car looking sharp",
      "Members get first scheduling",
    ],
    cta: "See plans →",
    href: "/services/maintenance-plans",
  },
];

const STEPS = [
  {
    title: "We come to your Fort Lee building",
    text: "Book online or call, and Matt and the APX team meet you at your high-rise near the George Washington Bridge. Tell us your garage level or deck and we'll find you, no driveway required.",
  },
  {
    title: "Everything works out of the van",
    text: "Our rig brings its own water and power, so a parking deck with no hose and no outlet is no obstacle. We just need clearance around your spot and a thumbs-up from the building.",
  },
  {
    title: "Your car is ready where it sits",
    text: "We finish with a walkaround right at your space, go over any coating or interior aftercare, and leave the area as clean as we found it. You never have to leave the building.",
  },
];

const FAQS: Faq[] = [
  {
    question: "Do you tack on a travel cost for Fort Lee?",
    answer:
      "No. We operate out of nearby Dumont, and Fort Lee sits well inside the area we serve, so there's no travel surcharge on your quote. The towns around it, like Teaneck and Hackensack, are covered the same way.",
  },
  {
    question: "I live in a high-rise. Can you still come?",
    answer:
      "Absolutely, and it's some of our favorite work in Fort Lee. As long as your building or HOA allows it, we'll meet you at your assigned spot in the garage, on a parking deck, or in the lot. Check with management first and let us know any rules they have.",
  },
  {
    question: "What do you need from my building's garage?",
    answer:
      "Just enough room to open the doors and move around the car, plus permission to be on site. Because the van carries its own water and power, we don't need a tap or an outlet anywhere on the property.",
  },
  {
    question: "Where exactly do you set up if I have no driveway?",
    answer:
      "Right at your parking space. We've worked in covered garages, open-air decks, and surface lots all over Fort Lee. Point us to your spot, clear it with the building, and we'll handle the car without it ever leaving the property.",
  },
  {
    question: "How far ahead should I book?",
    answer:
      "A few days is plenty for details and maintenance visits, and coatings or correction work are best reserved about a week out. Send your info through the quote form and we'll confirm a time, plus sort out garage access, same day.",
  },
];

export default function FortLeePage() {
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
          areaServed: ["Fort Lee"],
        })}
      />
      <ServiceHero
        eyebrow="Fort Lee, NJ"
        title={
          <>
            Mobile detailing in Fort Lee, <span className="text-crimson-soft">no driveway required.</span>
          </>
        }
        copy="High-rise living by the GW Bridge doesn't mean skipping the detail. APX brings ceramic coating, paint correction, and full details to your Fort Lee garage, deck, or lot, no driveway needed."
        image={{
          // Placeholder pending a real Fort Lee job photo from the owner.
          src: blackPorscheMacan,
          alt: "Black Porsche Macan glossy after an evening detail outside a Fort Lee garage",
          tag: "Fort Lee, NJ · Fully mobile",
        }}
      />
      <AreaServices
        eyebrow="What we do"
        heading="Ceramic coating, paint correction, and detailing in Fort Lee"
        copy="Every service is done by hand at your building with pro-grade, non-toxic products. Choose a service to see the packages and full pricing."
        cards={SERVICE_CARDS}
      />
      <ServiceProcess
        eyebrow="How it works"
        heading="Mobile detailing in Fort Lee, garage and all"
        steps={STEPS}
      />
      <Testimonials
        heading="What drivers near Fort Lee say"
        subtext="From our Google profile: clients on the work APX delivers around the county."
      />
      <ServiceFaq heading="Common questions" faqs={FAQS} />
      <ServiceAreas
        eyebrow="Nearby areas"
        heading="Reaching Fort Lee and the towns beside it"
        copy="We're based a short drive off in Dumont, which keeps Fort Lee and its neighbors easy to reach, garage or no garage. We also serve Teaneck, Hackensack, and Alpine. Not sure your building is in range? Add your zip to the quote form and we'll confirm the same day."
      />
      <Quote />
    </main>
  );
}
