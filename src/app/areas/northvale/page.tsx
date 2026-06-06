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
  title: "Mobile Detailing in Northvale, NJ",
  description:
    "Mobile detailing, paint correction, and ceramic coating in Northvale, NJ. APX resets interiors and protects paint on high-mileage commuters at your driveway.",
  path: "/areas/northvale",
};

export const metadata = pageMetadata(META);

const SERVICE_CARDS: AreaServiceCard[] = [
  {
    title: "Ceramic Coating",
    image: rollsRoyceCeramic,
    alt: "Black Rolls-Royce Ghost with a deep-gloss ceramic coated finish",
    bullets: [
      "Guards paint through every commute",
      "Highway grime rinses right off",
      "Three protection lifespans",
    ],
    cta: "See packages & pricing →",
    href: "/services/ceramic-coating",
  },
  {
    title: "Detailing",
    image: astonMartinInterior,
    alt: "Deep-cleaned red leather interior of an Aston Martin V8 Vantage after a full detail",
    bullets: [
      "Reset a worn commuter cabin",
      "Interior, exterior, or full",
      "Months of drive-time cleaned out",
    ],
    cta: "See packages & pricing →",
    href: "/services/detailing",
  },
  {
    title: "Paint Correction",
    image: bmwX5Corrected,
    alt: "Dark blue BMW X5 with mirror-finish corrected paint",
    bullets: [
      "Erases miles of road swirls",
      "Stage one or stage two cut",
      "Sets the stage for a coating",
    ],
    cta: "See correction levels →",
    href: "/services/paint-correction",
  },
  {
    title: "Maintenance Plans",
    image: lotusEmiraDriveway,
    alt: "Black Lotus Emira kept in showroom condition on a brick paver driveway",
    bullets: [
      "Steady care for a busy car",
      "Stays ahead of daily wear",
      "Members booked first",
    ],
    cta: "See plans →",
    href: "/services/maintenance-plans",
  },
];

const STEPS = [
  {
    title: "We meet you in Northvale",
    text: "Reserve a slot online or by phone and Matt and the APX team pull up to your driveway up here at the state line. Schedule it around your commute and the car never has to leave home.",
  },
  {
    title: "Self-contained, start to finish",
    text: "Our van carries the water, power, and products, so there's nothing for you to provide. While your high-mileage daily sits parked, we work through it inside and out.",
  },
  {
    title: "It drives like new again",
    text: "We finish with a walkaround, go over how to protect the paint and cabin between visits, and leave a hard-working car feeling a whole lot fresher than the odometer suggests.",
  },
];

// Placeholder reviews pending owner sign-off, same status as the service-page reviews.
const REVIEWS: Review[] = [
  {
    quote:
      "“I'm on the road into the city every day and the interior showed every mile of it. They reset the whole cabin and it feels like a different car now.”",
    initials: "KW",
    name: "Kyle W.",
    town: "Northvale, NJ",
    color: "#7a1f1f",
  },
  {
    quote:
      "“Years of highway driving had hazed the paint. A correction and coating brought the shine back and now the road grime just washes away.”",
    initials: "BT",
    name: "Bianca T.",
    town: "Northvale, NJ",
    color: "#1f4d7a",
  },
  {
    quote:
      "“My commuter clears the odometer fast, so I keep it on a plan with them. Regular visits mean it never looks like the workhorse it actually is.”",
    initials: "JS",
    name: "Joel S.",
    town: "Northvale, NJ",
    color: "#2f6e4a",
  },
  {
    quote:
      "“Coffee spills, gym bags, the works after months of driving. They pulled it all out and protected the seats so the next mess wipes up easy.”",
    initials: "RC",
    name: "Renee C.",
    town: "Old Tappan, NJ",
    color: "#5a2f6e",
  },
  {
    quote:
      "“No need to drop it anywhere on my packed schedule. They came to the driveway and handled everything while I worked. Total time-saver.”",
    initials: "MF",
    name: "Mark F.",
    town: "Norwood, NJ",
    color: "#6a4d1f",
  },
  {
    quote:
      "“High miles and it still turns heads now. The protection they put on has held up through a brutal stretch of daily driving.”",
    initials: "AD",
    name: "Aisha D.",
    town: "Harrington Park, NJ",
    color: "#7a1f1f",
  },
];

const FAQS: Faq[] = [
  {
    question: "Will you tack on a fee for driving up to Northvale?",
    answer:
      "No. Even at the top of the county, Northvale is part of our regular area out of nearby Dumont, so there's no surcharge for the distance. Neighbors like Norwood, Old Tappan, and Harrington Park are covered on the same terms.",
  },
  {
    question: "Can you bring back a high-mileage commuter car?",
    answer:
      "Absolutely, that's a steady part of our work up here. An interior reset clears out months of drive-time, paint correction lifts the road swirls and haze that miles leave behind, and a coating or plan keeps a hard-used daily looking sharp between commutes.",
  },
  {
    question: "What's the best way to stay ahead of all that driving?",
    answer:
      "A maintenance plan. We return on a set schedule so the grime and wear from daily commutes never gets a foothold, and members get the first pick of dates. It's the easiest way to keep a high-mileage car from looking its age.",
  },
  {
    question: "What happens if the weather turns on my appointment day?",
    answer:
      "With a garage or covered spot, interior work and coatings can usually proceed as planned. If not, we'll simply move you to the next open slot at no cost. We keep an eye on the forecast up here and reach out before the day arrives.",
  },
  {
    question: "How early should I book around my commute?",
    answer:
      "A few days' lead time covers most details and maintenance stops, while correction and coatings are best set about a week out. Drop your details in the quote form and we'll find a window that fits between your drives.",
  },
];

export default function NorthvalePage() {
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
          areaServed: ["Northvale"],
        })}
      />
      <ServiceHero
        eyebrow="Northvale, NJ"
        title={
          <>
            Mobile detailing in Northvale, <span className="text-crimson-soft">after all those miles.</span>
          </>
        }
        copy="Northvale commutes pile on miles fast. We bring interior resets, paint protection, and steady maintenance to your driveway so a high-mileage car stays sharp no matter the odometer."
        image={{
          // Placeholder pending a real Northvale job photo from the owner.
          src: bmwX5Corrected,
          alt: "Dark blue BMW X5 with mirror-finish corrected paint in a Northvale driveway",
          tag: "Northvale, NJ · Fully mobile",
        }}
      />
      <AreaServices
        eyebrow="What we do"
        heading="Paint correction, detailing, and ceramic coating in Northvale"
        copy="Each service is done by hand in your driveway with professional-grade, non-toxic products, built to keep a high-mileage car sharp. Pick a service to see packages and exact pricing."
        cards={SERVICE_CARDS}
      />
      <ServiceProcess
        eyebrow="How it works"
        heading="How we care for a Northvale commuter"
        steps={STEPS}
      />
      <Testimonials
        heading="What Northvale commuters report"
        subtext="From high-mileage drivers up here and across the towns next door."
        reviews={REVIEWS}
      />
      <ServiceFaq heading="Common questions" faqs={FAQS} />
      <ServiceAreas
        eyebrow="Nearby areas"
        heading="Reaching Northvale and its neighbors"
        copy="We're based just down the county in Dumont, so Northvale at the state line is an easy run. We also serve Norwood, Old Tappan, Harrington Park, and Alpine. Not sure you're in range? Enter your zip in the quote form and we'll confirm the same day."
      />
      <Quote />
    </main>
  );
}
