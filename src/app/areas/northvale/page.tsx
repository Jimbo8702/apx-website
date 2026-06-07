import { pageMetadata } from "@/lib/page-metadata";
import rollsRoyceCeramic from "@public/media/images/black-rolls-royce-ghost-black-badge-front.jpeg";
import astonMartinInterior from "@public/media/images/aston-martin-vantage-red-interior.jpeg";
import lotusEmiraDriveway from "@public/media/images/black-lotus-emira-front.jpeg";
import bmwX5Corrected from "@public/media/images/blue-bmw-x5-front.jpeg";
import mercedesCClassInterior from "@public/media/images/mercedes-benz-c-class-amg-interior.jpeg";
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

// Real Google reviews from the APX profile; some also appear on one other area page.
const REVIEWS: Review[] = [
  {
    quote: "“Had the pleasure of working with APX Mobile Detailing. I scheduled a total of 4 cars to be ceramic coated and Matt made the process smooth and easy. He's a very responsive person and really tires his best to put you first. I am really happy with the outcome of my ceramic coating. Matt is very passionate about his work and appreciate his attention to detail. I highly recommend working with APX Mobile Detailing!”",
    initials: "PP",
    name: "Philip Park",
    date: "May 2025",
    color: "#7a1f1f",
  },
  {
    quote: "“A wonderful job with my car! Highly recommend.”",
    initials: "KK",
    name: "Kirk Kushnerick",
    date: "October 2025",
    color: "#1f4d7a",
  },
  {
    quote: "“Matt and his team did a wonderful job detailing my car. He was professional, helpful, and made the whole experience easy and stress-free. I’m very happy with the results!”",
    initials: "KB",
    name: "Kaylee Babasade",
    date: "July 2025",
    color: "#2f6e4a",
  },
  {
    quote: "“Great communication Did a spectacular job on my new ride. I will be recommending them to my friends.”",
    initials: "TB",
    name: "Timothy Buccigrossi",
    date: "January 2026",
    color: "#6a4d1f",
  },
  {
    quote: "“My son and I built a custom motorcycle 25 years ago. It was beginning to look a bit tired. Matt and his tech came to my house and did a detail and ceramic application. The bike looks brand new. I could not be more pleased.”",
    initials: "JQ",
    name: "Jack Quigley",
    date: "October 2025",
    color: "#5a2f6e",
  },
  {
    quote: "“Great detailing and cleaning services provided for my car! Great customer service and value for your money! Definitely the best around!”",
    initials: "PK",
    name: "Peter Kretschmer",
    date: "October 2024",
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
          src: mercedesCClassInterior,
          alt: "Black leather Mercedes-AMG C-Class interior detailed and conditioned in Northvale",
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
        heading="What drivers near Northvale report"
        subtext="A sample of the five-star Google reviews APX has earned across the county."
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
