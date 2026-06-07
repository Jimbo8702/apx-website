import { pageMetadata } from "@/lib/page-metadata";
import rangeRoverApxVans from "@public/media/images/black-range-rover-front-fender-apx-van.jpeg";
import rollsRoyceCeramic from "@public/media/images/black-rolls-royce-ghost-black-badge-front.jpeg";import astonMartinInterior from "@public/media/images/aston-martin-vantage-red-interior.jpeg";
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
  title: "Mobile Detailing in Alpine, NJ",
  description:
    "White-glove mobile detailing, ceramic coating, and paint correction in Alpine, NJ. The APX team comes to you, and multi-car visits are welcome.",
  path: "/areas/alpine",
};

export const metadata = pageMetadata(META);

const SERVICE_CARDS: AreaServiceCard[] = [
  {
    title: "Ceramic Coating",
    image: rollsRoyceCeramic,
    alt: "Black Rolls-Royce Ghost with a deep-gloss ceramic coated finish",
    bullets: [
      "Lasting depth and shine on the cars you cherish",
      "Long-term defense against the elements",
      "2, 5, and 10 year options to choose from",
    ],
    cta: "See packages & pricing →",
    href: "/services/ceramic-coating",
  },
  {
    title: "Detailing",
    image: astonMartinInterior,
    alt: "Deep-cleaned red leather interior of an Aston Martin V8 Vantage after a full detail",
    bullets: [
      "Cabin, exterior & full-car options",
      "Painstaking hand work on every surface",
      "Ideal for daily SUVs and weekend favorites alike",
    ],
    cta: "See packages & pricing →",
    href: "/services/detailing",
  },
  {
    title: "Paint Correction",
    image: bmwX5Corrected,
    alt: "Dark blue BMW X5 with mirror-finish corrected paint",
    bullets: [
      "Lift swirls, scratches, and dullness from the clear coat",
      "Single-stage and multi-stage levels",
      "Perfect groundwork ahead of a coating",
    ],
    cta: "See correction levels →",
    href: "/services/paint-correction",
  },
  {
    title: "Maintenance Plans",
    image: lotusEmiraDriveway,
    alt: "Black Lotus Emira kept in showroom condition on a brick paver driveway",
    bullets: [
      "Standing visits on a schedule that suits you",
      "Holds a finish that always looks freshly done",
      "Members move to the front of the calendar",
    ],
    cta: "See plans →",
    href: "/services/maintenance-plans",
  },
];

const STEPS = [
  {
    title: "We pull up to your Alpine home",
    text: "Reserve a time online or by phone and Matt and the APX team arrive at the address you choose. Long private drives and gated entries are no trouble; tell us where to park and we handle the rest.",
  },
  {
    title: "Everything we need rides in the van",
    text: "Our small team works from a fully self-contained rig, so your spigots and outlets stay untouched. Plenty of room to set up means we can work through several vehicles in a single visit.",
  },
  {
    title: "Your cars are returned flawless",
    text: "We walk the finished work with you, talk through aftercare for any coating or interior treatment, and leave each vehicle looking the way it should sitting in your garage.",
  },
];

const FAQS: Faq[] = [
  {
    question: "Is there a travel charge for coming to Alpine?",
    answer:
      "Never. APX works out of nearby Dumont and Alpine is well within the area we cover, so the price you see is the price you pay. Every town we serve across this corner of Bergen County is included at no surcharge.",
  },
  {
    question: "Where do you work once you arrive?",
    answer:
      "Wherever it's easiest for you. A spot along your driveway or near the garage gives us room to work, and a longer drive simply means more space to spread out. We leave the area exactly as we found it.",
  },
  {
    question: "Will you need to use my water or outlets?",
    answer:
      "Not at all. The van runs on its own water supply and power, so we're completely independent the moment we park. You don't have to provide a hose, an outlet, or anything else.",
  },
  {
    question: "Can you take care of more than one car in a single visit?",
    answer:
      "Yes, and it's something we do often in Alpine. Daily SUVs, weekend cars, and collector vehicles can all be handled in one appointment. Let us know how many and what each one needs and we'll plan the day around it.",
  },
  {
    question: "When should I reserve, and what happens in bad weather?",
    answer:
      "Booking a few days ahead works for most details and maintenance visits, while coatings and correction are best set roughly a week out. If the weather turns, covered or garage space lets interior work and coatings continue; otherwise we'll move you to the next open slot at no cost and reach out before the day arrives.",
  },
];

export default function AlpinePage() {
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
          areaServed: ["Alpine"],
        })}
      />
      <ServiceHero
        eyebrow="Alpine, NJ"
        title={
          <>
            Mobile detailing in Alpine, <span className="text-crimson-soft">brought to your doorstep.</span>
          </>
        }
        copy="Alpine is the most private town we serve, and our work fits right in. White-glove ceramic coating, paint correction, and detailing in your driveway, from the daily SUV to the collector car."
        image={{
          // Placeholder pending a real Alpine job photo from the owner.
          src: rangeRoverApxVans,
          alt: "Two APX vans on site detailing a black Range Rover outside an Alpine home",
          tag: "Alpine, NJ · Fully mobile",
        }}
      />
      <AreaServices
        eyebrow="What we do"
        heading="Ceramic coating, paint correction, and detailing in Alpine"
        copy="Each service is done by hand at your home with professional-grade, non-toxic products. Choose a service to view the packages and pricing in full."
        cards={SERVICE_CARDS}
      />
      <ServiceProcess
        eyebrow="How it works"
        heading="Mobile detailing in Alpine, from arrival to finish"
        steps={STEPS}
      />
      <Testimonials
        heading="Reviews from drivers around Alpine"
        subtext="Real Google reviews from APX clients across our Bergen County routes."
      />
      <ServiceFaq heading="Common questions" faqs={FAQS} />
      <ServiceAreas
        eyebrow="Nearby areas"
        heading="Caring for Alpine and the towns alongside it"
        copy="We're based a short drive away in Dumont, which puts Alpine and its neighbors well within reach. We also look after Tenafly, Cresskill, Demarest, Haworth, Bergenfield, and New Milford. Unsure whether you're in our area? Add your zip to the quote form and we'll let you know the same day."
      />
      <Quote />
    </main>
  );
}
