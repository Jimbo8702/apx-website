import { pageMetadata } from "@/lib/page-metadata";
import rollsRoyceCeramic from "@public/media/images/black-rolls-royce-ghost-black-badge-front.jpeg";
import porscheCayenneDetail from "@public/media/images/silver-porsche-cayenne-front.jpeg";
import astonMartinInterior from "@public/media/images/aston-martin-vantage-red-interior.jpeg";
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
  title: "Mobile Detailing in Waldwick, NJ",
  description:
    "First detail in Waldwick, NJ? APX makes mobile detailing, paint correction, and ceramic coating simple, with honest advice on the right service for your car.",
  path: "/areas/waldwick",
};

export const metadata = pageMetadata(META);

const SERVICE_CARDS: AreaServiceCard[] = [
  {
    title: "Ceramic Coating",
    image: rollsRoyceCeramic,
    alt: "Black Rolls-Royce Ghost with a deep-gloss ceramic coated finish",
    bullets: [
      "Long-lasting shine, easy upkeep",
      "Great first step into protection",
      "Beginner-friendly coating terms",
    ],
    cta: "See packages & pricing →",
    href: "/services/ceramic-coating",
  },
  {
    title: "Detailing",
    image: astonMartinInterior,
    alt: "Deep-cleaned red leather interior of an Aston Martin V8 Vantage after a full detail",
    bullets: [
      "A friendly first full detail",
      "Hand washed, hand finished",
      "We explain each step as we go",
    ],
    cta: "See packages & pricing →",
    href: "/services/detailing",
  },
  {
    title: "Paint Correction",
    image: bmwX5Corrected,
    alt: "Dark blue BMW X5 with mirror-finish corrected paint",
    bullets: [
      "Removes swirls you finally noticed",
      "Light and deeper correction levels",
      "We recommend only what you need",
    ],
    cta: "See correction levels →",
    href: "/services/paint-correction",
  },
  {
    title: "Maintenance Plans",
    image: lotusEmiraDriveway,
    alt: "Black Lotus Emira kept in showroom condition on a brick paver driveway",
    bullets: [
      "Simple visits on a set rhythm",
      "Keeps your first detail looking new",
      "Members get earlier booking slots",
    ],
    cta: "See plans →",
    href: "/services/maintenance-plans",
  },
];

const STEPS = [
  {
    title: "We come to your Waldwick home",
    text: "Reach out online or by phone and we'll talk through what your car actually needs before you book. Matt and the APX team then arrive at your cape or colonial at the time we set, ready to go.",
  },
  {
    title: "No prep needed from you",
    text: "Our small team brings water, power, and every product in the van, so there's nothing to buy or borrow ahead of time. Just leave room in the driveway and we'll handle the rest.",
  },
  {
    title: "You see the difference up close",
    text: "When we finish we walk you through what was done and how to keep it looking that way, so your first detail feels like an easy decision you'll want to repeat.",
  },
];

// Real Google reviews from the APX profile; some also appear on one other area page.
const REVIEWS: Review[] = [
  {
    quote: "“Matt always delivers!! He came to my house and detailed the interior of my Chevy Trax. He did an amazing job and was super professional. I would definitely recommend him to anyone! Takes his time and throughly makes every look, feel, and smell brand new! Fair priced and worth every penny!”",
    initials: "KE",
    name: "Kayley Ebenhack",
    date: "February 2025",
    color: "#7a1f1f",
  },
  {
    quote: "“Did a phenomenal job.”",
    initials: "JP",
    name: "Justin Perez",
    date: "October 2025",
    color: "#1f4d7a",
  },
  {
    quote: "“Very thorough and detailed with his cleaning helped talked me through exactly what he would do before cleaning and executed to perfection”",
    initials: "RG",
    name: "Ryan Gilmartin",
    date: "May 2025",
    color: "#2f6e4a",
  },
  {
    quote: "“He cleaned my truck really good and made it look like new”",
    initials: "AK",
    name: "Adrian Kida",
    date: "April 2025",
    color: "#6a4d1f",
  },
  {
    quote: "“I brought a car to detail at APX Mobile off word of mouth, and it turned our fantastic. Thinking about inquiring further business at the moment, and felt I should drop a review.”",
    initials: "SN",
    name: "Scott Noto",
    date: "January 2025",
    color: "#5a2f6e",
  },
  {
    quote: "“This was a great quality detail. Service was unmatched and very professional will be using their services again.”",
    initials: "EF",
    name: "Evan Frie",
    date: "February 2025",
    color: "#7a1f1f",
  },
];

const FAQS: Faq[] = [
  {
    question: "Is there an extra charge to come to Waldwick?",
    answer:
      "There isn't. We're based in nearby Dumont and Waldwick is well inside the area we cover, so your quote has no trip fee tacked on. The towns we serve around Waldwick are all included at no extra cost.",
  },
  {
    question: "I've never had my car detailed. Where do I start?",
    answer:
      "Right here, and we make it easy. Tell us a little about your car and how it's used, and we'll suggest the lightest service that gets the result you're after. There's no jargon and no pressure, just a straightforward recommendation.",
  },
  {
    question: "How do I know which service is right for me?",
    answer:
      "We'll figure that out together. A daily car with everyday grime often needs a different package than a garaged weekend car, so we ask a few questions first and point you to the right fit rather than the most expensive one.",
  },
  {
    question: "Where do you set up at my house?",
    answer:
      "Your driveway is ideal, but a curbside spot in front of the house works just as well. We only need enough room to move around the car safely, and we leave the area as tidy as we found it.",
  },
  {
    question: "How soon can you get to me?",
    answer:
      "For a first detail or a maintenance visit, a few days' notice is usually plenty. Coatings and correction take a bit more planning, around a week out. Send your details through the quote form and we'll confirm a time the same day.",
  },
];

export default function WaldwickPage() {
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
          areaServed: ["Waldwick"],
        })}
      />
      <ServiceHero
        eyebrow="Waldwick, NJ"
        title={
          <>
            Mobile detailing in Waldwick, <span className="text-crimson-soft">an easy first detail.</span>
          </>
        }
        copy="New to detailing? Waldwick has plenty of first-timers and we keep it simple. APX brings detailing, paint correction, and ceramic coating to your driveway, with honest advice on what you need."
        image={{
          // Placeholder pending a real Waldwick job photo from the owner.
          src: porscheCayenneDetail,
          alt: "Silver Porsche Cayenne freshly detailed in a Waldwick driveway with the APX van behind it",
          tag: "Waldwick, NJ · Fully mobile",
        }}
      />
      <AreaServices
        eyebrow="What we do"
        heading="Detailing, paint correction, and ceramic coating in Waldwick"
        copy="Every service is done by hand at your home with professional-grade, non-toxic products. Pick a service to see the packages and pricing laid out clearly."
        cards={SERVICE_CARDS}
      />
      <ServiceProcess
        eyebrow="How it works"
        heading="Mobile detailing in Waldwick, made simple"
        steps={STEPS}
      />
      <Testimonials
        heading="What drivers around Waldwick say"
        subtext="First visits and repeat clients alike, straight from our Google reviews."
        reviews={REVIEWS}
      />
      <ServiceFaq heading="Common questions" faqs={FAQS} />
      <ServiceAreas
        eyebrow="Nearby areas"
        heading="Serving Waldwick and the towns close by"
        copy="Our base is a quick drive away in nearby Dumont, so Waldwick and the surrounding area are easy to reach. We also work in Ridgewood, Glen Rock, Saddle River, and Fair Lawn. Unsure whether we make it to your street? Add your zip to the quote form and we'll get back to you the same day."
      />
      <Quote />
    </main>
  );
}
