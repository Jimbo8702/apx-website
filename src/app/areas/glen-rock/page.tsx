import { pageMetadata } from "@/lib/page-metadata";
import rollsRoyceCeramic from "@public/media/images/black-rolls-royce-ghost-black-badge-front.jpeg";
import astonMartinInterior from "@public/media/images/image_4.jpg";
import lotusEmiraDriveway from "@public/media/images/black-lotus-emira-front.jpeg";
import bmwX5Corrected from "@public/media/images/blue-bmw-x5-front.jpeg";
import handFinishingTruck from "@public/media/images/image_11.jpg";
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
  title: "Mobile Detailing in Glen Rock, NJ",
  description:
    "Mobile detailing, paint correction, and ceramic coating for Glen Rock, NJ commuters. We work at your home on WFH days and weekends, around the train schedule.",
  path: "/areas/glen-rock",
};

export const metadata = pageMetadata(META);

const SERVICE_CARDS: AreaServiceCard[] = [
  {
    title: "Ceramic Coating",
    image: rollsRoyceCeramic,
    alt: "Black Rolls-Royce Ghost with a deep-gloss ceramic coated finish",
    bullets: [
      "Protects cars parked outside all year",
      "Less time spent washing on weekends",
      "Pick a 2, 5, or 10 year coating",
    ],
    cta: "See packages & pricing →",
    href: "/services/ceramic-coating",
  },
  {
    title: "Detailing",
    image: astonMartinInterior,
    alt: "Deep-cleaned red leather interior of an Aston Martin V8 Vantage after a full detail",
    bullets: [
      "Done on a work-from-home morning",
      "Interior and exterior by hand",
      "Sealed up before your next commute",
    ],
    cta: "See packages & pricing →",
    href: "/services/detailing",
  },
  {
    title: "Paint Correction",
    image: bmwX5Corrected,
    alt: "Dark blue BMW X5 with mirror-finish corrected paint",
    bullets: [
      "Station-lot scuffs polished out",
      "Sun and weather haze removed",
      "One-pass and two-pass options",
    ],
    cta: "See correction levels →",
    href: "/services/paint-correction",
  },
  {
    title: "Maintenance Plans",
    image: lotusEmiraDriveway,
    alt: "Black Lotus Emira kept in showroom condition on a brick paver driveway",
    bullets: [
      "Weekend visits on a set rhythm",
      "Keeps an outdoor-parked car fresh",
      "Members booked ahead of the rush",
    ],
    cta: "See plans →",
    href: "/services/maintenance-plans",
  },
];

const STEPS = [
  {
    title: "We arrive at your Glen Rock home",
    text: "Reserve a slot online or by phone for a work-from-home day or a weekend, and Matt and the APX team come to your address. Pick a window that lands between your trips to the station.",
  },
  {
    title: "The van handles its own supply",
    text: "Water, power, and products all ride with us, so nothing on your end gets touched. A driveway or a spot at the curb is all the space we need to get going.",
  },
  {
    title: "You head back to the platform fresh",
    text: "We close out with a walkaround, run through any aftercare for coatings or interiors, and hand back a car that's ready for Monday's commute and everything in between.",
  },
];

// Placeholder reviews pending owner sign-off, same status as the service-page reviews.
const REVIEWS: Review[] = [
  {
    quote:
      "“My car sits at the Glen Rock platform five days a week, so weekends are the only window. They came Saturday morning and had it done before lunch.”",
    initials: "NA",
    name: "Neil A.",
    town: "Glen Rock, NJ",
    color: "#7a1f1f",
  },
  {
    quote:
      "“Booked them on a remote-work Thursday and barely looked up from my desk. By my afternoon meeting the car outside looked brand new.”",
    initials: "DR",
    name: "Dana R.",
    town: "Glen Rock, NJ",
    color: "#1f4d7a",
  },
  {
    quote:
      "“Years of parking outside left the clear coat hazy. Their correction brought the depth right back and the coating should keep it that way.”",
    initials: "TB",
    name: "Trevor B.",
    town: "Glen Rock, NJ",
    color: "#2f6e4a",
  },
  {
    quote:
      "“Scheduling around a commuter's week is impossible for most services. These guys actually worked with my calendar and showed up exactly when promised.”",
    initials: "HG",
    name: "Holly G.",
    town: "Ridgewood, NJ",
    color: "#5a2f6e",
  },
  {
    quote:
      "“On a weekend maintenance plan now and my car never looks like it's been baking at a train lot all week. Honestly the best money I spend on it.”",
    initials: "MJ",
    name: "Marcus J.",
    town: "Fair Lawn, NJ",
    color: "#6a4d1f",
  },
  {
    quote:
      "“They detailed both our cars in one weekend visit while we ran errands. Came home to a spotless driveway and two cars that looked showroom fresh.”",
    initials: "FN",
    name: "Faith N.",
    town: "Waldwick, NJ",
    color: "#1f4d7a",
  },
];

const FAQS: Faq[] = [
  {
    question: "Does a Glen Rock visit come with any travel cost?",
    answer:
      "No. We're based close by in Dumont, and Glen Rock is comfortably within our service area, so there's nothing extra for travel on your quote. Neighboring towns like Ridgewood and Waldwick are covered the same way.",
  },
  {
    question: "Can you schedule around a commuting week?",
    answer:
      "That's exactly how we work in Glen Rock. Most clients pick a work-from-home day or a weekend so the car is at home and not at the station. Tell us which days you're around and we'll slot you into a window that fits.",
  },
  {
    question: "Do you bring your own water and electricity?",
    answer:
      "Yes. The van is fully self-contained with its own water tank and power supply, so you don't have to leave out a hose or an extension cord. We're ready to start the second we pull in.",
  },
  {
    question: "My car parks outside all year. Will a coating help?",
    answer:
      "Quite a bit. A ceramic coating gives sun, rain, sap, and winter salt far less to grab onto, so a car that lives outdoors stays cleaner between washes and holds its finish much longer than bare paint would.",
  },
  {
    question: "How early should I get on the calendar?",
    answer:
      "Weekend and work-from-home slots fill up, so a week or so ahead is smart for details and maintenance, and a little more for coatings and correction. Drop your details in the quote form and we'll find a time that works around your week.",
  },
];

export default function GlenRockPage() {
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
          areaServed: ["Glen Rock"],
        })}
      />
      <ServiceHero
        eyebrow="Glen Rock, NJ"
        title={
          <>
            Mobile detailing in Glen Rock, <span className="text-crimson-soft">fit to your commute.</span>
          </>
        }
        copy="Between the train and the desk, there's no time to chase a detail shop. APX comes to your Glen Rock home on a remote-work day or a weekend for detailing, paint correction, and ceramic coating."
        image={{
          // Placeholder pending a real Glen Rock job photo from the owner.
          src: handFinishingTruck,
          alt: "APX detailer hand-polishing the emblem and trim on a black Ford truck in a Glen Rock driveway",
          tag: "Glen Rock, NJ · Fully mobile",
        }}
      />
      <AreaServices
        eyebrow="What we do"
        heading="Detailing, paint correction, and ceramic coating in Glen Rock"
        copy="Every visit is done by hand at your home with pro-grade, non-toxic products. Choose a service to view the packages and full pricing."
        cards={SERVICE_CARDS}
      />
      <ServiceProcess
        eyebrow="How it works"
        heading="How mobile detailing fits a Glen Rock week"
        steps={STEPS}
      />
      <Testimonials
        heading="What Glen Rock commuters say"
        subtext="Words from riders and remote workers in Glen Rock and the towns nearby."
        reviews={REVIEWS}
      />
      <ServiceFaq heading="Common questions" faqs={FAQS} />
      <ServiceAreas
        eyebrow="Nearby areas"
        heading="Serving Glen Rock and the surrounding towns"
        copy="Our home base in nearby Dumont keeps Glen Rock and its neighbors an easy trip away. We also look after Ridgewood, Fair Lawn, Paramus, and Waldwick. Curious whether we reach your street? Drop your zip into the quote form and we'll get back to you the same day."
      />
      <Quote />
    </main>
  );
}
