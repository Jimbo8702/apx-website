import { pageMetadata } from "@/lib/page-metadata";
import rollsRoyceCeramic from "@public/media/images/black-rolls-royce-ghost-black-badge-front.jpeg";
import porsche911Cabriolet from "@public/media/images/blue-porsche-911-turbo-s-cabriolet-front.jpeg";
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
  title: "Mobile Detailing in Harrington Park, NJ",
  description:
    "Mobile car detailing, ceramic coating, and paint correction in Harrington Park, NJ. APX comes from nearby Dumont to shield tree-shaded cars from sap.",
  path: "/areas/harrington-park",
};

export const metadata = pageMetadata(META);

const SERVICE_CARDS: AreaServiceCard[] = [
  {
    title: "Ceramic Coating",
    image: rollsRoyceCeramic,
    alt: "Black Rolls-Royce Ghost with a deep-gloss ceramic coated finish",
    bullets: [
      "A slick shell sap slides off",
      "Years of shine on shaded streets",
      "Multi-year protection choices",
    ],
    cta: "See packages & pricing →",
    href: "/services/ceramic-coating",
  },
  {
    title: "Detailing",
    image: astonMartinInterior,
    alt: "Deep-cleaned red leather interior of an Aston Martin V8 Vantage after a full detail",
    bullets: [
      "Pollen and pine needles cleared out",
      "Inside, outside, or the full job",
      "Sealed and protected by hand",
    ],
    cta: "See packages & pricing →",
    href: "/services/detailing",
  },
  {
    title: "Paint Correction",
    image: bmwX5Corrected,
    alt: "Dark blue BMW X5 with mirror-finish corrected paint",
    bullets: [
      "Etching from droppings polished away",
      "Single and multi-stage levels",
      "Sets up the paint for a coating",
    ],
    cta: "See correction levels →",
    href: "/services/paint-correction",
  },
  {
    title: "Maintenance Plans",
    image: lotusEmiraDriveway,
    alt: "Black Lotus Emira kept in showroom condition on a brick paver driveway",
    bullets: [
      "Routine washes against tree fallout",
      "Holds that just-detailed look",
      "Recurring clients reserve dates early",
    ],
    cta: "See plans →",
    href: "/services/maintenance-plans",
  },
];

const STEPS = [
  {
    title: "We roll into Harrington Park",
    text: "Pick a slot online or over the phone and Matt and the APX crew arrive at your address. Tucked-away streets near the reservoir are easy for us to reach, so just point us to where the car sits.",
  },
  {
    title: "The rig carries it all",
    text: "Water tank, power, and every product ride along in the van. There's nothing for you to plug in or hook up, and we work just as well at a shaded curb as on an open driveway.",
  },
  {
    title: "Your finish is locked in",
    text: "We walk the car with you when we're done, point out how to keep sap and pollen from biting back, and hand it over looking far better than the trees left it.",
  },
];

// Placeholder reviews pending owner sign-off, same status as the service-page reviews.
const REVIEWS: Review[] = [
  {
    quote:
      "“The maples out front coat my car in sap every spring. After a coating from APX the gunk just rinses away now instead of baking into the paint.”",
    initials: "CM",
    name: "Colin M.",
    town: "Harrington Park, NJ",
    color: "#7a1f1f",
  },
  {
    quote:
      "“Bird droppings had already etched a couple spots on my hood. They corrected the marks and sealed it so the next mess wipes off clean.”",
    initials: "BA",
    name: "Beth A.",
    town: "Harrington Park, NJ",
    color: "#1f4d7a",
  },
  {
    quote:
      "“Our street is wall-to-wall shade trees and the car showed it. A full detail pulled out all the pollen and pine, inside and out.”",
    initials: "SR",
    name: "Sanjay R.",
    town: "Harrington Park, NJ",
    color: "#2f6e4a",
  },
  {
    quote:
      "“They came to the house, parked on our narrow lane, and never asked for a hose or an outlet. Polished and effortless from start to finish.”",
    initials: "EK",
    name: "Erin K.",
    town: "Norwood, NJ",
    color: "#5a2f6e",
  },
  {
    quote:
      "“Put both of ours on a regular plan so the tree mess never gets a head start anymore. They show up like clockwork and the cars stay spotless.”",
    initials: "WF",
    name: "Walt F.",
    town: "Old Tappan, NJ",
    color: "#6a4d1f",
  },
  {
    quote:
      "“Years of swirls gone in an afternoon, right in my driveway. The paint has a depth to it now that I honestly forgot it had.”",
    initials: "DL",
    name: "Donna L.",
    town: "Demarest, NJ",
    color: "#7a1f1f",
  },
];

const FAQS: Faq[] = [
  {
    question: "Will I pay extra for you to drive out to Harrington Park?",
    answer:
      "No surcharge at all. We run out of Dumont just down the road, so Harrington Park is part of our regular service area. Neighboring spots like Norwood, Old Tappan, and Northvale are covered at the same rates with no added fee.",
  },
  {
    question: "Can a coating really stop tree sap and pollen damage?",
    answer:
      "It makes a real difference. A ceramic coating gives the clear coat a slick, hardened surface, so sap, pollen, and droppings sit on top instead of bonding in. They rinse off far more easily and are much less likely to etch, which matters a lot on shaded streets.",
  },
  {
    question: "Where will you park the van and set up?",
    answer:
      "Wherever the car already lives. A driveway is ideal, but a spot at the curb under the trees works fine too. We keep our footprint small and tidy and leave the area clean when we pull out.",
  },
  {
    question: "Do I need to leave out a hose or an outlet?",
    answer:
      "Not for us. The van carries its own water and power, so we arrive ready to work without touching your spigot or sockets. You're welcome to offer them, but nothing on your property is required.",
  },
  {
    question: "How early should I lock in a time?",
    answer:
      "A few days out covers most details and maintenance stops. Coatings and paint correction take longer, so aim for roughly a week ahead. Send your details through the quote form and we'll confirm a day for you.",
  },
];

export default function HarringtonParkPage() {
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
          areaServed: ["Harrington Park"],
        })}
      />
      <ServiceHero
        eyebrow="Harrington Park, NJ"
        title={
          <>
            Mobile detailing in Harrington Park, <span className="text-crimson-soft">at your own curb.</span>
          </>
        }
        copy="APX works out of nearby Dumont, so Harrington Park is right next door. Ceramic coatings, paint correction, and detailing that shield tree-lined-street cars from sap, pollen, and droppings."
        image={{
          // Placeholder pending a real Harrington Park job photo from the owner.
          src: porsche911Cabriolet,
          alt: "Navy Porsche 911 Turbo S cabriolet freshly detailed in a Harrington Park driveway",
          tag: "Harrington Park, NJ · Fully mobile",
        }}
      />
      <AreaServices
        eyebrow="What we do"
        heading="Detailing, ceramic coating, and paint correction in Harrington Park"
        copy="Every visit is done by hand at your home with professional-grade, non-toxic products built for tree-shaded cars. Pick a service to see packages and exact pricing."
        cards={SERVICE_CARDS}
      />
      <ServiceProcess
        eyebrow="How it works"
        heading="How a Harrington Park visit goes"
        steps={STEPS}
      />
      <Testimonials
        heading="Harrington Park neighbors weigh in"
        subtext="Words from drivers near the reservoirs and the towns just over the line."
        reviews={REVIEWS}
      />
      <ServiceFaq heading="Common questions" faqs={FAQS} />
      <ServiceAreas
        eyebrow="Nearby areas"
        heading="Looking after Harrington Park and its neighbors"
        copy="Home base is a quick hop away in Dumont, which keeps Harrington Park close at hand. We also serve Norwood, Old Tappan, Haworth, Demarest, and Northvale. Wondering if your street is covered? Drop your zip in the quote form and we'll let you know that same day."
      />
      <Quote />
    </main>
  );
}
