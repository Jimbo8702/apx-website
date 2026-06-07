import { pageMetadata } from "@/lib/page-metadata";
import rollsRoyceCeramic from "@public/media/images/black-rolls-royce-ghost-black-badge-front.jpeg";
import astonMartinInterior from "@public/media/images/aston-martin-vantage-red-interior.jpeg";
import lotusEmiraDriveway from "@public/media/images/black-lotus-emira-front.jpeg";
import bmwX5Corrected from "@public/media/images/blue-bmw-x5-front.jpeg";
import blueBmwM2 from "@public/media/images/blue-bmw-m2-front-2.jpeg";
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
  title: "Mobile Detailing in Ridgewood, NJ",
  description:
    "Mobile detailing, ceramic coating, and paint correction in Ridgewood, NJ. APX brings the full studio to your driveway, finishes that suit a village home.",
  path: "/areas/ridgewood",
};

export const metadata = pageMetadata(META);

const SERVICE_CARDS: AreaServiceCard[] = [
  {
    title: "Ceramic Coating",
    image: rollsRoyceCeramic,
    alt: "Black Rolls-Royce Ghost with a deep-gloss ceramic coated finish",
    bullets: [
      "A finish that turns heads on the block",
      "Holds its shine through the seasons",
      "Two, five, or ten year shine",
    ],
    cta: "See packages & pricing →",
    href: "/services/ceramic-coating",
  },
  {
    title: "Detailing",
    image: astonMartinInterior,
    alt: "Deep-cleaned red leather interior of an Aston Martin V8 Vantage after a full detail",
    bullets: [
      "Cabin, exterior, or the full treatment",
      "Detailed by hand to a high standard",
      "Protection in place before we leave",
    ],
    cta: "See packages & pricing →",
    href: "/services/detailing",
  },
  {
    title: "Paint Correction",
    image: bmwX5Corrected,
    alt: "Dark blue BMW X5 with mirror-finish corrected paint",
    bullets: [
      "Polishes away swirls and dull spots",
      "Compound and polish stages",
      "The groundwork before coating",
    ],
    cta: "See correction levels →",
    href: "/services/paint-correction",
  },
  {
    title: "Maintenance Plans",
    image: lotusEmiraDriveway,
    alt: "Black Lotus Emira kept in showroom condition on a brick paver driveway",
    bullets: [
      "Steady visits that uphold the look",
      "Your car always presents at its best",
      "Members reserve dates ahead of others",
    ],
    cta: "See plans →",
    href: "/services/maintenance-plans",
  },
];

const STEPS = [
  {
    title: "We come to your Ridgewood home",
    text: "Choose a time online or by phone and Matt and the APX team arrive at your address. Whether you're on a quiet side street or close to the village, we'll find a spot and get started.",
  },
  {
    title: "The studio travels in the van",
    text: "Our small team works from a fully self-contained rig, so your hose and outlets go untouched. A driveway or curb space is all we need to set up and begin.",
  },
  {
    title: "Your car looks the part on the street",
    text: "We finish with a walkaround, run through aftercare for any coating or interior service, and leave a car that looks right parked in front of a well-kept Ridgewood home.",
  },
];

// Real Google reviews from the APX profile; some also appear on one other area page.
const REVIEWS: Review[] = [
  {
    quote: "“The guys showed up exactly on time to detail and coat my work truck in a specialized vehicle of their own, equipped with everything they would need. They carefully cleaned my truck and applied the coating as discussed, and took the time to explain what was done and how best to care for it. Very satisfied. Glad to recommend.”",
    initials: "MF",
    name: "Mayer Fertig",
    date: "November 2025",
    color: "#7a1f1f",
  },
  {
    quote: "“great, quick service”",
    initials: "KN",
    name: "Kaitlyn Neeb",
    date: "January 2025",
    color: "#1f4d7a",
  },
  {
    quote: "“I would highly recommend APX mobile detailing for all of your car care needs. Matt and team did an amazing job on my car and they are extremely professional!”",
    initials: "SP",
    name: "Satyam Prasad",
    date: "May 2026",
    color: "#2f6e4a",
  },
  {
    quote: "“Matt did an amazing work on my vehicle. Looks like it came off the showroom floor”",
    initials: "DF",
    name: "Dan F",
    date: "April 2025",
    color: "#6a4d1f",
  },
  {
    quote: "“Brought in my daughter's 2024 Audi RS 7 for a Luxury Detailing, I am so impressed by Matt's eye for details!! The car looks brand new! I will definitely be back with my vehicle. Thanks for your hard work!!”",
    initials: "M",
    name: "Milly",
    date: "March 2025",
    color: "#5a2f6e",
  },
  {
    quote: "“Had my vehicle detailed by APX and everything came out great! Very affordable and fantastic customer service. Highly recommend!”",
    initials: "N",
    name: "NMedina90",
    date: "January 2025",
    color: "#7a1f1f",
  },
];

const FAQS: Faq[] = [
  {
    question: "Do you tack on a travel charge for Ridgewood?",
    answer:
      "No. APX is based in nearby Dumont, and Ridgewood is firmly within the area we serve, so nothing extra goes on for the drive. Adjacent towns like Glen Rock, Waldwick, and Paramus are covered the same way.",
  },
  {
    question: "Where do you set up at my home?",
    answer:
      "Your driveway is ideal, and a curb spot in front of the house works just as well. We need only enough room to move around the car comfortably, and we leave the area as tidy as we found it.",
  },
  {
    question: "Do you supply your own water and power?",
    answer:
      "Yes. The van carries its own water tank and electricity, so we're fully independent on arrival. You don't have to set out a hose or an outlet, though we're happy to use yours if you prefer.",
  },
  {
    question: "How far out should I book to keep my car looking its best?",
    answer:
      "A few days ahead covers most detail and maintenance appointments, while coatings and correction are best reserved about a week out. If you want a standing schedule, a maintenance plan keeps the finish consistent all year. Drop your details in the quote form and we'll confirm same day.",
  },
  {
    question: "What's the plan if it rains on my appointment?",
    answer:
      "A garage or covered spot usually lets interior work and coatings proceed as scheduled. Without cover, we'll move you to the next open date at no cost. We keep an eye on the forecast and reach out before the day arrives.",
  },
];

export default function RidgewoodPage() {
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
          areaServed: ["Ridgewood"],
        })}
      />
      <ServiceHero
        eyebrow="Ridgewood, NJ"
        title={
          <>
            Mobile detailing in Ridgewood, <span className="text-crimson-soft">worthy of the village.</span>
          </>
        }
        copy="Ridgewood homes are kept with real care, and the cars parked out front should match. Detailing, ceramic coating, and paint correction that suit a finish on a well-kept village street."
        image={{
          // Placeholder pending a real Ridgewood job photo from the owner.
          src: blueBmwM2,
          alt: "Blue BMW M2 gleaming under the trees after a detail in Ridgewood",
          tag: "Ridgewood, NJ · Fully mobile",
        }}
      />
      <AreaServices
        eyebrow="What we do"
        heading="Detailing, ceramic coating, and paint correction in Ridgewood"
        copy="Every service is done by hand at your home with professional-grade, non-toxic products. Choose one to see the full packages and pricing."
        cards={SERVICE_CARDS}
      />
      <ServiceProcess
        eyebrow="How it works"
        heading="A finish to match a Ridgewood home"
        steps={STEPS}
      />
      <Testimonials
        heading="Feedback from the Ridgewood area"
        subtext="Five-star Google reviews from across the APX coverage map."
        reviews={REVIEWS}
      />
      <ServiceFaq heading="Common questions" faqs={FAQS} />
      <ServiceAreas
        eyebrow="Nearby areas"
        heading="Caring for Ridgewood and the villages around it"
        copy="We're based a short drive off in Dumont, which keeps Ridgewood and its neighbors well within reach. We also serve Glen Rock, Waldwick, Paramus, and Fair Lawn. Curious whether we cover your street? Drop your zip into the quote form and we'll confirm the same day."
      />
      <Quote />
    </main>
  );
}
