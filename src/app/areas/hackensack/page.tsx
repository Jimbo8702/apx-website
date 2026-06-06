import { pageMetadata } from "@/lib/page-metadata";
import rollsRoyceCeramic from "@public/media/images/black-rolls-royce-ghost-black-badge-front.jpeg";
import astonMartinInterior from "@public/media/images/image_4.jpg";
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
  title: "Mobile Detailing in Hackensack, NJ",
  description:
    "Mobile detailing, ceramic coating, and paint correction for Hackensack, NJ. We detail in your office lot or building while you work, so the day handles itself.",
  path: "/areas/hackensack",
};

export const metadata = pageMetadata(META);

const SERVICE_CARDS: AreaServiceCard[] = [
  {
    title: "Ceramic Coating",
    image: rollsRoyceCeramic,
    alt: "Black Rolls-Royce Ghost with a deep-gloss ceramic coated finish",
    bullets: [
      "Lasting gloss while you're at the desk",
      "Lot dust and rain bead right off",
      "2-year up to 10-year coatings",
    ],
    cta: "See packages & pricing →",
    href: "/services/ceramic-coating",
  },
  {
    title: "Detailing",
    image: astonMartinInterior,
    alt: "Deep-cleaned red leather interior of an Aston Martin V8 Vantage after a full detail",
    bullets: [
      "Finished during the workday",
      "Inside and out done by hand",
      "Protection in place before five o'clock",
    ],
    cta: "See packages & pricing →",
    href: "/services/detailing",
  },
  {
    title: "Paint Correction",
    image: bmwX5Corrected,
    alt: "Dark blue BMW X5 with mirror-finish corrected paint",
    bullets: [
      "Parking-lot scuffs polished out",
      "Swirls and dullness corrected",
      "Two correction depths offered",
    ],
    cta: "See correction levels →",
    href: "/services/paint-correction",
  },
  {
    title: "Maintenance Plans",
    image: lotusEmiraDriveway,
    alt: "Black Lotus Emira kept in showroom condition on a brick paver driveway",
    bullets: [
      "Recurring visits to the office lot",
      "Keeps a commuter car looking sharp",
      "Members get priority dates",
    ],
    cta: "See plans →",
    href: "/services/maintenance-plans",
  },
];

const STEPS = [
  {
    title: "We come to your Hackensack workplace",
    text: "Book online or call and Matt and the APX team arrive at your office park, building lot, or downtown space. Hand off the keys at the start of your day and let us take it from there.",
  },
  {
    title: "The van runs on its own",
    text: "We carry our own water and power, so an office lot with no hookup is no issue. All we need is your parking spot and the okay from whoever manages the property.",
  },
  {
    title: "It's done before you clock out",
    text: "We wrap up with a quick walkaround, cover any aftercare for coatings or interiors, and leave your spot tidy. You walk out to a finished car at the end of the day.",
  },
];

// Placeholder reviews pending owner sign-off, same status as the service-page reviews.
const REVIEWS: Review[] = [
  {
    quote:
      "“They detailed my car in the office lot while I sat in back-to-back meetings. I walked out at five to a vehicle that looked like it just left the dealer.”",
    initials: "AL",
    name: "Andre L.",
    town: "Hackensack, NJ",
    color: "#7a1f1f",
  },
  {
    quote:
      "“Best use of a workday I can think of. Handed over the keys at nine, got them back spotless before my afternoon calls. Didn't lose a minute of productivity.”",
    initials: "KB",
    name: "Keisha B.",
    town: "Hackensack, NJ",
    color: "#1f4d7a",
  },
  {
    quote:
      "“A few door dings from the garage downstairs had been bugging me for months. They buffed them out right in my reserved spot while I worked upstairs.”",
    initials: "TR",
    name: "Tom R.",
    town: "Hackensack, NJ",
    color: "#2f6e4a",
  },
  {
    quote:
      "“Cleared it with our building manager and they set up in the lot no problem. My SUV came out flawless and I never had to take time off to make it happen.”",
    initials: "VS",
    name: "Valerie S.",
    town: "Teaneck, NJ",
    color: "#5a2f6e",
  },
  {
    quote:
      "“Got a coating done on my sedan during a regular Tuesday at the office. Watching it go from dull to glossy on my lunch break was honestly the highlight.”",
    initials: "HM",
    name: "Hector M.",
    town: "Maywood, NJ",
    color: "#6a4d1f",
  },
  {
    quote:
      "“We put the whole department's lease cars on a plan and they rotate through the lot on schedule. The fleet has never looked this consistently clean.”",
    initials: "JP",
    name: "June P.",
    town: "Saddle Brook, NJ",
    color: "#1f4d7a",
  },
];

const FAQS: Faq[] = [
  {
    question: "Is there a surcharge for a Hackensack appointment?",
    answer:
      "No. We work out of nearby Dumont, and Hackensack is well inside the area we cover, so nothing extra for travel shows up on your quote. The surrounding towns like Teaneck and Maywood are handled the same way.",
  },
  {
    question: "Can you really detail my car while I'm working?",
    answer:
      "That's the whole idea in Hackensack. Hand us the keys when you arrive and we'll have the car finished by the end of your day. Most clients never step away from their desk, and a full detail fits comfortably inside normal office hours.",
  },
  {
    question: "What do you need from my office parking lot?",
    answer:
      "Just room to work around the car and permission to be on the property. Since the van brings its own water and power, we don't tap into anything at your building. A heads-up to facilities ahead of time keeps everything smooth.",
  },
  {
    question: "Do I have to provide water or an outlet at the office?",
    answer:
      "Not at all. Everything we use travels in the van, so a bare parking space is all we need. There's nothing for you to arrange with the building beyond clearing us to park and work.",
  },
  {
    question: "How far in advance should I schedule?",
    answer:
      "A few days ahead works for details and maintenance, while coatings and correction are best booked about a week out. Send your info and your office address through the quote form and we'll confirm a workday window same day.",
  },
];

export default function HackensackPage() {
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
          areaServed: ["Hackensack"],
        })}
      />
      <ServiceHero
        eyebrow="Hackensack, NJ"
        title={
          <>
            Mobile detailing in Hackensack, <span className="text-crimson-soft">done while you work.</span>
          </>
        }
        copy="The county seat runs on the workday, and so do we. APX details your car in the office lot or at your building while you're at your desk: ceramic coating, paint correction, full packages."
        image={{
          // Placeholder pending a real Hackensack job photo from the owner.
          src: teslaModelY,
          alt: "Freshly detailed gray Tesla Model Y with the APX mobile detailing van parked in a Hackensack office lot",
          tag: "Hackensack, NJ · Fully mobile",
        }}
      />
      <AreaServices
        eyebrow="What we do"
        heading="Detailing, ceramic coating, and paint correction in Hackensack"
        copy="Each service is done by hand at your office or building with pro-grade, non-toxic products. Pick a service to view the packages and full pricing."
        cards={SERVICE_CARDS}
      />
      <ServiceProcess
        eyebrow="How it works"
        heading="Mobile detailing in Hackensack, on the clock"
        steps={STEPS}
      />
      <Testimonials
        heading="What Hackensack professionals say"
        subtext="Feedback from people who got it done at work, in Hackensack and beyond."
        reviews={REVIEWS}
      />
      <ServiceFaq heading="Common questions" faqs={FAQS} />
      <ServiceAreas
        eyebrow="Nearby areas"
        heading="Serving Hackensack and the towns around it"
        copy="Based a short drive away in Dumont, we keep Hackensack and its neighbors within easy reach, office lot or driveway. We also cover Teaneck, Maywood, Paramus, and Saddle Brook. Not sure your workplace is in range? Add your zip to the quote form and we'll let you know the same day."
      />
      <Quote />
    </main>
  );
}
