import { pageMetadata } from "@/lib/page-metadata";
import blueBmwM2 from "@public/media/images/blue-bmw-m2-front-2.jpeg";
import grayBmwM4 from "@public/media/images/gray-bmw-m4-front.jpeg";
import { DropletIcon, ShieldIcon, SparklesIcon, SunIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { Quote } from "@/components/sections/quote";
import { Testimonials, type Review } from "@/components/sections/testimonials";
import { breadcrumbSchema, faqSchema, serviceSchema, webPageSchema } from "@/lib/schema";
import { PricingTiers, type PricingTier } from "../_components/pricing-tiers";
import { ServiceBenefits } from "../_components/service-benefits";
import { ServiceFaq, type Faq } from "../_components/service-faq";
import { ServiceHero } from "../_components/service-hero";
import { ServiceProcess } from "../_components/service-process";

const META = {
  title: "Paint Protection Film in Bergen County, NJ",
  description:
    "Self-healing paint protection film installed at your home or office in Bergen County, NJ. Partial front, full front, and full body PPF, custom quoted.",
  path: "/services/ppf",
};

export const metadata = pageMetadata(META);

const BENEFITS = [
  {
    icon: ShieldIcon,
    title: "Rock chip & impact defense",
    text: "A urethane layer that absorbs gravel, road debris, and parking-lot scuffs before they reach your paint.",
  },
  {
    icon: SparklesIcon,
    title: "Self-healing top coat",
    text: "Light scratches and swirl marks relax and disappear with heat from the sun or warm water.",
  },
  {
    icon: SunIcon,
    title: "Stain & UV resistance",
    text: "Bug splatter, tree sap, and bird droppings wipe off the film instead of etching into clear coat.",
  },
  {
    icon: DropletIcon,
    title: "Invisible & easy to clean",
    text: "Optically clear with a slick top coat, so the film disappears into the finish and washes stay quick.",
  },
];

const TIERS: PricingTier[] = [
  {
    name: "Partial Front",
    tagline:
      "Front bumper, partial hood and fenders, headlights, and mirror caps. Smart coverage for the zones that catch the most road debris.",
    startingPrice: "Custom quote",
    startingLabel: "",
    priceLabel: "Pricing",
    prices: [],
    warranty: "Manufacturer-backed film warranty",
  },
  {
    name: "Full Front",
    badge: "Most popular",
    featured: true,
    tagline:
      "Full hood, front fenders, bumper, headlights, mirrors, and A-pillars. Complete highway protection for daily drivers.",
    startingPrice: "Custom quote",
    startingLabel: "",
    priceLabel: "Pricing",
    prices: [],
    warranty: "Manufacturer-backed film warranty",
  },
  {
    name: "Full Body",
    tagline:
      "Every painted panel wrapped in film. Maximum protection for new deliveries, lease returns, and collector cars.",
    startingPrice: "Custom quote",
    startingLabel: "",
    priceLabel: "Pricing",
    prices: [],
    warranty: "Manufacturer-backed film warranty",
  },
];

const PACKAGE_INCLUDES = [
  "Foam bath & safe hand wash",
  "Clay bar treatment",
  "Iron & chemical decontamination",
  "Panel prep & alcohol wipe down",
  "Precision-cut, self-healing film",
  "Wrapped edges wherever possible",
];

const STEPS = [
  {
    title: "Consult & custom quote",
    text: "We look at your vehicle, talk through how you drive it, and recommend the right coverage level. You get an exact, written quote before any film is ordered. No surprises on install day.",
  },
  {
    title: "Decontamination & prep",
    text: "Foam bath, contact wash, clay treatment, and iron decon strip away everything bonded to the paint, finished with a panel-by-panel wipe down. Film only bonds right to perfectly clean clear coat.",
  },
  {
    title: "Precision install & aftercare",
    text: "Each piece is aligned, squeegeed, and inspected under lighting, with edges wrapped wherever the panel allows. We finish with a walkthrough of the cure window and simple care rules.",
  },
];

const REVIEWS: Review[] = [
  {
    quote: "“Amazing professional service! The team are true experts when it comes to high-end luxury vehicles—extremely knowledgeable, precise, and detail-oriented. I’ll definitely be using their services again in the future!”",
    initials: "C",
    name: "Claudia",
    date: "October 2025",
    color: "#7a1f1f",
  },
  {
    quote: "“Look no further for the best in mobile detailing for high end cars. Matt is polite, punctual, detail oriented, and honest.”",
    initials: "GA",
    name: "Gil Altman",
    date: "May 2025",
    color: "#1f4d7a",
  },
  {
    quote: "“Now, I understand why the name is Apex. These guys are at the top of their game, very professional. Completed the work efficiently, they also provided me with explanations on certain things and answered some questions that I had. Highly recommend!”",
    initials: "NL",
    name: "Nick Lardieri",
    date: "May 2026",
    color: "#2f6e4a",
  },
  {
    quote: "“Very professional. End results came out better than I expected, and I had high expectations to begin with. Thanks guys!!”",
    initials: "GB",
    name: "Gil Broitman",
    date: "May 2026",
    color: "#6a4d1f",
  },
  {
    quote: "“Matt is a very respectful and diligent man. He made my car look brand new. Any one who gets Matt’s services will not be disappointed.”",
    initials: "TO",
    name: "Tyler Oliver",
    date: "February 2025",
    color: "#5a2f6e",
  },
  {
    quote: "“I recently had the pleasure of having my car detailed by Matt, and I must say, the results were exceptional. His attention to detail was remarkable, and he exhibited a commendable level of flexibility in accommodating all my specific requests. I wholeheartedly recommend his services to anyone seeking top-notch car detailing.”",
    initials: "JD",
    name: "Jess DiCostanzo",
    date: "March 2025",
    color: "#7a1f1f",
  },
];

const FAQS: Faq[] = [
  {
    question: "What exactly is paint protection film?",
    answer:
      "PPF is a thin, optically clear thermoplastic urethane film applied over your paint. It absorbs the impacts that chip and scratch clear coat, like gravel, road debris, and stray shopping carts, while staying nearly invisible on the finish.",
  },
  {
    question: "How does the self-healing actually work?",
    answer:
      "The film's top coat is engineered to re-flow with heat. Light scratches and swirl marks relax and disappear after the car sits in the sun or gets a rinse with warm water. Deeper gouges that cut through the film won't heal, but they would have been paint damage otherwise.",
  },
  {
    question: "Should I get PPF or a ceramic coating?",
    answer:
      "They solve different problems. Film is physical armor: it stops rock chips and scratches that a coating can't. A ceramic coating adds gloss, chemical resistance, and easier washing. Many clients film the front end and coat the rest of the car, and we're happy to recommend honestly based on how you drive.",
  },
  {
    question: "Why is PPF custom quoted instead of priced by package?",
    answer:
      "Because the install changes with the car. Coverage level, vehicle size, panel complexity, and paint condition all affect the film and labor involved. We look at your vehicle first and give you an exact written quote, so the number you approve is the number you pay.",
  },
  {
    question: "How long does the film last?",
    answer:
      "Quality films are rated around 10 years with proper care, and the film we install is backed by a manufacturer warranty against yellowing, cracking, and peeling. Hand washing and keeping harsh chemicals off the edges is most of what proper care means.",
  },
  {
    question: "Can PPF be installed at my home?",
    answer:
      "Yes, with the right space. Film wants a clean, wind-free environment, so a garage is ideal. When you book we'll confirm your setup and plan the install around it, the same way we handle our ceramic coating work.",
  },
];

export default function PpfPage() {
  return (
    <main>
      <JsonLd data={webPageSchema(META)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Paint Protection Film" },
        ])}
      />
      {/* No offers on purpose: PPF is fully custom-quote, no dollar amounts
          anywhere on the page (owner request 2026-06-05). */}
      <JsonLd
        data={serviceSchema({
          name: "Paint Protection Film",
          description: META.description,
          path: META.path,
          serviceType: "Paint Protection Film Installation",
        })}
      />
      <JsonLd data={faqSchema(FAQS)} />
      <ServiceHero
        eyebrow="Paint Protection Film"
        title={
          <>
            PPF that takes the hits,{" "}
            <span className="text-crimson-soft">so your paint never does.</span>
          </>
        }
        copy="Self-healing urethane film installed with precision at your home or office. It stops rock chips, scratches, and road rash while staying nearly invisible, with coverage quoted to your exact vehicle."
        image={{
          src: blueBmwM2,
          alt: "Blue BMW M2 front end on a tree-lined street, the zone paint protection film covers",
          tag: "Paint protection film · BMW M2",
        }}
      />
      <ServiceBenefits
        eyebrow="Why film your car"
        heading="Armor for your paint, invisible to everyone else"
        paragraphs={[
          "New Jersey highways throw gravel, salt, and debris at your front end every single mile. A ceramic coating can't stop a rock chip; paint protection film can. It takes the impact, heals its own light scratches, and keeps the factory paint underneath flawless.",
        ]}
        benefits={BENEFITS}
        image={{
          src: grayBmwM4,
          alt: "Front end of a gray BMW M4 with flawless protected paint",
          tag: "Protected front end · BMW M4",
        }}
      />
      <PricingTiers
        eyebrow="Coverage & quotes"
        heading="Paint protection film coverage levels"
        subtext="PPF is quoted to the job, not off a price sheet. Coverage level, vehicle size, and paint condition all change the install, so we look at your car and give you an exact written number before any film is cut."
        tiers={TIERS}
        included={PACKAGE_INCLUDES}
        includedLabel="Every install includes"
        footnote="Want the best of both? Film the front end and ceramic coat the rest of the car. Ask about pairing the two when you request your quote."
      />
      <ServiceProcess
        eyebrow="Our process"
        heading="Our paint protection film process, step by step"
        steps={STEPS}
      />
      <Testimonials
        heading="Why drivers trust APX with their paint"
        subtext="Real Google reviews from APX clients. Film or coating, the standard of care is the same."
        reviews={REVIEWS}
      />
      <ServiceFaq heading="Common questions" faqs={FAQS} />
      <Quote />
    </main>
  );
}
