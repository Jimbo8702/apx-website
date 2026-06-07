import { pageMetadata } from "@/lib/page-metadata";
import rollsRoyceCeramic from "@public/media/images/black-rolls-royce-ghost-black-badge-front.jpeg";
import astonMartinInterior from "@public/media/images/aston-martin-vantage-red-interior.jpeg";
import alfaGiuliaTanInterior from "@public/media/images/alfa-romeo-giulia-tan-leather-interior.jpeg";
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
  title: "Mobile Detailing in Emerson, NJ",
  description:
    "Mobile detailing, paint correction, and ceramic coating for Emerson, NJ families. We restore SUVs and minivans in your driveway while you keep up with the kids.",
  path: "/areas/emerson",
};

export const metadata = pageMetadata(META);

const SERVICE_CARDS: AreaServiceCard[] = [
  {
    title: "Ceramic Coating",
    image: rollsRoyceCeramic,
    alt: "Black Rolls-Royce Ghost with a deep-gloss ceramic coated finish",
    bullets: [
      "Guards the family hauler for years",
      "Spills and dirt wipe clean fast",
      "2, 5, and 10 year tiers",
    ],
    cta: "See packages & pricing →",
    href: "/services/ceramic-coating",
  },
  {
    title: "Detailing",
    image: astonMartinInterior,
    alt: "Deep-cleaned red leather interior of an Aston Martin V8 Vantage after a full detail",
    bullets: [
      "Crushed snacks and crumbs gone",
      "Cargo areas vacuumed and wiped",
      "Cabin reset between busy weeks",
    ],
    cta: "See packages & pricing →",
    href: "/services/detailing",
  },
  {
    title: "Paint Correction",
    image: bmwX5Corrected,
    alt: "Dark blue BMW X5 with mirror-finish corrected paint",
    bullets: [
      "Cart-door dings and scuffs polished out",
      "Lot scratches buffed away",
      "Single or double polishing rounds",
    ],
    cta: "See correction levels →",
    href: "/services/paint-correction",
  },
  {
    title: "Maintenance Plans",
    image: lotusEmiraDriveway,
    alt: "Black Lotus Emira kept in showroom condition on a brick paver driveway",
    bullets: [
      "Routine visits between practices",
      "Keeps the everyday SUV fresh",
      "First pick of open dates",
    ],
    cta: "See plans →",
    href: "/services/maintenance-plans",
  },
];

const STEPS = [
  {
    title: "We meet you at home in Emerson",
    text: "Reserve a slot online or over the phone and Matt and the APX team pull up to your Emerson address. Park the hauler, hand us the keys, and get back to the rest of your day.",
  },
  {
    title: "The whole rig travels with us",
    text: "Water, power, and every product live in the van, so we don't borrow your hose or your garage outlet. Your driveway is all the room we need to get the car spotless.",
  },
  {
    title: "The car comes back kid-ready",
    text: "We walk you through what we did, point out where the worst of the mess used to be, and hand back a vehicle that's ready for the next round of drop-offs and pickups.",
  },
];

const FAQS: Faq[] = [
  {
    question: "Is there an added fee for coming out to Emerson?",
    answer:
      "None at all. We run out of nearby Dumont, and Emerson sits comfortably inside the zone we cover, so there's no travel charge added to your quote. Neighboring towns like Hillsdale and Park Ridge are covered the same way.",
  },
  {
    question: "Can you really do the whole thing in my driveway?",
    answer:
      "Yes. The driveway is where almost all of our Emerson work happens. We need enough room to walk around the vehicle and open the doors and tailgate, and that's it. A curbside spot in front of the house works too.",
  },
  {
    question: "Our SUV is full of kid clutter. Should I clear it out first?",
    answer:
      "Pull out anything valuable or fragile, but you don't have to empty every cubby. Stray toys, snack wrappers, sports gear, and the usual family chaos are exactly what we handle. We'll set aside anything that clearly shouldn't go in the trash.",
  },
  {
    question: "How early do I need to reserve a spot?",
    answer:
      "A handful of days ahead covers most details and maintenance visits, and coatings or correction work are best locked in around a week out. Send your details through the quote form and we'll confirm an opening that fits around the family calendar.",
  },
  {
    question: "What if it rains the day you're scheduled?",
    answer:
      "With a garage or covered spot, interior cleaning and coatings can still go forward. If there's no cover and the weather won't cooperate, we'll slide you to the next open date at no cost and reach out before you're left wondering.",
  },
];

export default function EmersonPage() {
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
          areaServed: ["Emerson"],
        })}
      />
      <ServiceHero
        eyebrow="Emerson, NJ"
        title={
          <>
            Mobile detailing in Emerson, <span className="text-crimson-soft">between the school runs.</span>
          </>
        }
        copy="Family life is hard on a vehicle. APX brings full detailing, paint correction, and ceramic coating to your Emerson driveway, so the SUV gets cleaned up while you keep the kids on schedule."
        image={{
          // Placeholder pending a real Emerson job photo from the owner.
          src: alfaGiuliaTanInterior,
          alt: "Tan leather interior of an Alfa Romeo Giulia mid-detail in an Emerson driveway",
          tag: "Emerson, NJ · Fully mobile",
        }}
      />
      <AreaServices
        eyebrow="What we do"
        heading="Detailing, paint correction, and ceramic coating in Emerson"
        copy="Every visit is done by hand at your home with pro-grade, family-safe products. Choose a service to see the full packages and pricing."
        cards={SERVICE_CARDS}
      />
      <ServiceProcess
        eyebrow="How it works"
        heading="How a mobile detail works in Emerson"
        steps={STEPS}
      />
      <Testimonials
        heading="What clients around Emerson tell us"
        subtext="A few of the 140+ five-star Google reviews APX has earned nearby."
      />
      <ServiceFaq heading="Common questions" faqs={FAQS} />
      <ServiceAreas
        eyebrow="Nearby areas"
        heading="Looking after Emerson and the towns around it"
        copy="Home base is a quick hop away in Dumont, which keeps Emerson and its neighbors easy to reach. We also serve Paramus, Hillsdale, Park Ridge, and Woodcliff Lake. Not certain we make it to your street? Drop your zip in the quote form and we'll get back to you the same day."
      />
      <Quote />
    </main>
  );
}
