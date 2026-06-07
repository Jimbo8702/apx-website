import { pageMetadata } from "@/lib/page-metadata";
import rollsRoyceCeramic from "@public/media/images/black-rolls-royce-ghost-black-badge-front.jpeg";
import grayPorscheMacanWheel from "@public/media/images/gray-porsche-macan-wheel-detail.jpeg";
import astonMartinInterior from "@public/media/images/aston-martin-vantage-red-interior.jpeg";
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
  title: "Mobile Detailing in Old Tappan, NJ",
  description:
    "Mobile car detailing, ceramic coating, and paint correction in Old Tappan, NJ. APX comes to your driveway and handles the whole family fleet in a single visit.",
  path: "/areas/old-tappan",
};

export const metadata = pageMetadata(META);

const SERVICE_CARDS: AreaServiceCard[] = [
  {
    title: "Ceramic Coating",
    image: rollsRoyceCeramic,
    alt: "Black Rolls-Royce Ghost with a deep-gloss ceramic coated finish",
    bullets: [
      "One durable layer per household car",
      "Beads off rain and pollen",
      "2, 5, and 10 year terms",
    ],
    cta: "See packages & pricing →",
    href: "/services/ceramic-coating",
  },
  {
    title: "Detailing",
    image: astonMartinInterior,
    alt: "Deep-cleaned red leather interior of an Aston Martin V8 Vantage after a full detail",
    bullets: [
      "Daily drivers and weekend cars alike",
      "Inside and out, all by hand",
      "Protection locked in before we go",
    ],
    cta: "See packages & pricing →",
    href: "/services/detailing",
  },
  {
    title: "Paint Correction",
    image: bmwX5Corrected,
    alt: "Dark blue BMW X5 with mirror-finish corrected paint",
    bullets: [
      "Erase swirls and light scratches",
      "Correction depth to match wear",
      "The prep a coating needs",
    ],
    cta: "See correction levels →",
    href: "/services/paint-correction",
  },
  {
    title: "Maintenance Plans",
    image: lotusEmiraDriveway,
    alt: "Black Lotus Emira kept in showroom condition on a brick paver driveway",
    bullets: [
      "Cover the whole fleet on one schedule",
      "Every car stays fresh between visits",
      "Plan clients jump the queue",
    ],
    cta: "See plans →",
    href: "/services/maintenance-plans",
  },
];

const STEPS = [
  {
    title: "We arrive at your Old Tappan home",
    text: "Pick a time online or over the phone and Matt and the APX team pull into your driveway. Tell us how many vehicles are on the list and we'll map the visit so each one gets its turn.",
  },
  {
    title: "Our setup rides along",
    text: "Water, power, and every product ride in the van, so your hoses and outlets stay put. The room on a residential lot means we can move from one car to the next without breaking stride.",
  },
  {
    title: "Every vehicle is handed back ready",
    text: "We walk each finished car with you, go over aftercare for any coating or interior work, and pull away with the entire fleet looking sharp and parked right where it belongs.",
  },
];

const FAQS: Faq[] = [
  {
    question: "Will I pay extra for you to drive out to Old Tappan?",
    answer:
      "No. APX runs out of nearby Dumont, and Old Tappan falls squarely inside the area we cover, so there's no travel line on your invoice. Neighboring towns like Northvale, Norwood, and Harrington Park are included the same way.",
  },
  {
    question: "Can you take care of several cars in one appointment?",
    answer:
      "Absolutely, and it's one of the main reasons families in Old Tappan call us. Tell us how many vehicles and what each one needs, the daily drivers plus the weekend car, and we'll block out the time to do them all in a single stop.",
  },
  {
    question: "Where do you park to work on the cars?",
    answer:
      "Your driveway is usually perfect, and the bigger lots out here give us plenty of elbow room to stage two or three vehicles at once. We keep everything organized and leave the space neat when we're done.",
  },
  {
    question: "Should I set anything up before you arrive?",
    answer:
      "Not at all. The van supplies its own water and power, so we're set the moment we pull in. You're welcome to offer your spigot, but it's never something we ask for.",
  },
  {
    question: "How early should I lock in a date for the family fleet?",
    answer:
      "A few days of lead time covers most detail and maintenance bookings, and multi-car days are easier to slot when we hear from you a little sooner. Coatings and correction are best reserved about a week ahead. Send us the details and we'll confirm same day.",
  },
];

export default function OldTappanPage() {
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
          areaServed: ["Old Tappan"],
        })}
      />
      <ServiceHero
        eyebrow="Old Tappan, NJ"
        title={
          <>
            Mobile detailing in Old Tappan, <span className="text-crimson-soft">every car in one visit.</span>
          </>
        }
        copy="Old Tappan runs on multi-car households, and we work that way too. Ceramic coating, paint correction, and detailing for every vehicle in the driveway, all in one scheduled visit."
        image={{
          // Placeholder pending a real Old Tappan job photo from the owner.
          src: grayPorscheMacanWheel,
          alt: "Detailed Porsche Macan wheel and freshly dressed tire in an Old Tappan driveway",
          tag: "Old Tappan, NJ · Fully mobile",
        }}
      />
      <AreaServices
        eyebrow="What we do"
        heading="Detailing, ceramic coating, and paint correction in Old Tappan"
        copy="Each service is done by hand at your home with professional-grade, non-toxic products. Choose one to see the full packages and pricing."
        cards={SERVICE_CARDS}
      />
      <ServiceProcess
        eyebrow="How it works"
        heading="One visit for the whole Old Tappan driveway"
        steps={STEPS}
      />
      <Testimonials
        heading="What clients near Old Tappan tell us"
        subtext="Real five-star reviews from the APX Google profile."
      />
      <ServiceFaq heading="Common questions" faqs={FAQS} />
      <ServiceAreas
        eyebrow="Nearby areas"
        heading="Looking after Old Tappan and the towns around it"
        copy="Home base is a short hop away in Dumont, so Old Tappan and its neighbors are easy reach for us. We also serve Northvale, Norwood, Harrington Park, and Woodcliff Lake. Want to check your street is covered? Pop your zip into the quote form and we'll get back to you that day."
      />
      <Quote />
    </main>
  );
}
