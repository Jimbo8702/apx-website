import { pageMetadata } from "@/lib/page-metadata";
import rollsRoyceCeramic from "@public/media/images/black-rolls-royce-ghost-black-badge-front.jpeg";
import astonMartinInterior from "@public/media/images/aston-martin-vantage-red-interior.jpeg";
import lotusEmiraDriveway from "@public/media/images/black-lotus-emira-front.jpeg";
import teslaModelY from "@public/media/images/gray-tesla-model-y-rear-2.jpeg";
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
  title: "Mobile Detailing in Teaneck, NJ",
  description:
    "Mobile detailing, ceramic coating, and paint correction across Teaneck, NJ. APX comes to your driveway or curbside and works around a busy household.",
  path: "/areas/teaneck",
};

export const metadata = pageMetadata(META);

const SERVICE_CARDS: AreaServiceCard[] = [
  {
    title: "Ceramic Coating",
    image: rollsRoyceCeramic,
    alt: "Black Rolls-Royce Ghost with a deep-gloss ceramic coated finish",
    bullets: [
      "Years of gloss with less upkeep",
      "Spills and grime wipe away fast",
      "2, 5, and 10 year choices",
    ],
    cta: "See packages & pricing →",
    href: "/services/ceramic-coating",
  },
  {
    title: "Detailing",
    image: astonMartinInterior,
    alt: "Deep-cleaned red leather interior of an Aston Martin V8 Vantage after a full detail",
    bullets: [
      "Family minivans to weekend cars",
      "Hand cleaned inside and out",
      "Protected and sealed before we leave",
    ],
    cta: "See packages & pricing →",
    href: "/services/detailing",
  },
  {
    title: "Paint Correction",
    image: bmwX5Corrected,
    alt: "Dark blue BMW X5 with mirror-finish corrected paint",
    bullets: [
      "Clear out swirls and scuffs",
      "One and two stage levels",
      "Clean canvas for a coating",
    ],
    cta: "See correction levels →",
    href: "/services/paint-correction",
  },
  {
    title: "Maintenance Plans",
    image: lotusEmiraDriveway,
    alt: "Black Lotus Emira kept in showroom condition on a brick paver driveway",
    bullets: [
      "Repeat visits that fit your week",
      "Keeps the car looking just-cleaned",
      "Members booked ahead of the line",
    ],
    cta: "See plans →",
    href: "/services/maintenance-plans",
  },
];

const STEPS = [
  {
    title: "We meet you anywhere in Teaneck",
    text: "Book online or call and pick a window that fits around work and family. Matt and the APX team head to your block, whether you're near the parks, the township center, or out by the highway edge.",
  },
  {
    title: "The van handles the setup",
    text: "Our small team works from a fully stocked rig that carries its own water and power, so a driveway or a curbside spot in front of the house is all it takes. Nothing to plug in, nothing to drag out.",
  },
  {
    title: "You drive off looking sharp",
    text: "We finish with a quick walkaround, point out any aftercare for coatings or interior work, and hand the car back ready for the school run, the commute, or the weekend.",
  },
];

// Real Google reviews from the APX profile; some also appear on one other area page.
const REVIEWS: Review[] = [
  {
    quote: "“So impressed by Matt’s professionalism and attention to detail (no pun intended). I was overwhelmingly satisfied with the quality of the detailing—my car looks and feels brand new. He was punctual, thorough, and clearly takes pride in his work. Highly recommend to anyone looking for top-tier service!”",
    initials: "AB",
    name: "Amanda Bernard",
    date: "June 2025",
    color: "#7a1f1f",
  },
  {
    quote: "“My car is so clean and smells amazing !”",
    initials: "KE",
    name: "Kimberly Etkin",
    date: "May 2026",
    color: "#1f4d7a",
  },
  {
    quote: "“Great experience. Showed up on time and was very professional. Payed attention to details. Truck looked great. Will definitely use them again.”",
    initials: "GR",
    name: "George Ruth",
    date: "March 2025",
    color: "#2f6e4a",
  },
  {
    quote: "“They did an amazing job - car looks brand new and staff was very friendly”",
    initials: "SG",
    name: "Steven Gatanas",
    date: "May 2026",
    color: "#6a4d1f",
  },
  {
    quote: "“APX performed a miracle on my 2016 Impala. The team was informed, capable, and passionate about the work. And it showed in the result. Excellent value for the job and highly recommended.”",
    initials: "MS",
    name: "Michael Savage",
    date: "July 2025",
    color: "#5a2f6e",
  },
  {
    quote: "“I brought my ram truck in for a detail last month I dealt with Matt it turned out great and he is very professional”",
    initials: "P",
    name: "Perry",
    date: "February 2025",
    color: "#7a1f1f",
  },
];

const FAQS: Faq[] = [
  {
    question: "Does coming out to Teaneck cost extra?",
    answer:
      "No added cost at all. We operate from nearby Dumont and Teaneck falls squarely within our service area, so there's no trip surcharge on your quote. The surrounding towns we cover carry no extra fee either.",
  },
  {
    question: "Do you cover my part of Teaneck?",
    answer:
      "Yes, all of it. Teaneck is one of the larger townships in the county, and we work every neighborhood, from the quiet residential blocks to the busier stretches near the main roads. Wherever you park, we can reach you.",
  },
  {
    question: "What if I only have street parking?",
    answer:
      "That's no problem. A safe curbside spot in front of your home gives us everything we need, since the van is self-contained. If a driveway opens up that works too, but it isn't required to get a full result.",
  },
  {
    question: "How flexible is the scheduling?",
    answer:
      "Quite flexible. We know Teaneck households juggle work, school, and everything in between, so we offer windows that fit around your day. Tell us what works in the quote form and we'll find a time that lines up.",
  },
  {
    question: "What happens if rain is in the forecast?",
    answer:
      "If you have a garage or covered spot, interior work and coatings can usually still go ahead. If not, we'll simply move you to the next open window at no charge. We keep an eye on the forecast and reach out before your day.",
  },
];

export default function TeaneckPage() {
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
          areaServed: ["Teaneck"],
        })}
      />
      <ServiceHero
        eyebrow="Teaneck, NJ"
        title={
          <>
            Mobile detailing in Teaneck, <span className="text-crimson-soft">in every neighborhood.</span>
          </>
        }
        copy="Teaneck is a big township and we cover all of it. Ceramic coating, paint correction, and detailing brought to your driveway or curbside, scheduled around a household that never slows down."
        image={{
          // Placeholder pending a real Teaneck job photo from the owner.
          src: teslaModelY,
          alt: "Gray Tesla Model Y freshly detailed in a Teaneck driveway with the APX van on site",
          tag: "Teaneck, NJ · Fully mobile",
        }}
      />
      <AreaServices
        eyebrow="What we do"
        heading="Detailing, ceramic coating, and paint correction in Teaneck"
        copy="Every appointment is done by hand at your home with professional-grade, non-toxic products. Tap a service to see its packages and exact pricing."
        cards={SERVICE_CARDS}
      />
      <ServiceProcess
        eyebrow="How it works"
        heading="Mobile detailing in Teaneck, around your schedule"
        steps={STEPS}
      />
      <Testimonials
        heading="What clients near Teaneck tell Google"
        subtext="A handful of the five-star reviews APX has earned across the county."
        reviews={REVIEWS}
      />
      <ServiceFaq heading="Common questions" faqs={FAQS} />
      <ServiceAreas
        eyebrow="Nearby areas"
        heading="Covering Teaneck and the surrounding towns"
        copy="We're based just up the road in Dumont, so Teaneck and its neighbors are an easy reach. We also serve Hackensack, Bergenfield, New Milford, Fort Lee, and Maywood. Not certain we make it to your block? Enter your zip in the quote form and we'll let you know the same day."
      />
      <Quote />
    </main>
  );
}
