import { pageMetadata } from "@/lib/page-metadata";
import bmwX5Corrected from "@public/media/images/blue-bmw-x5-front.jpeg";
import grayBmwM4 from "@public/media/images/gray-bmw-m4-front.jpeg";
import { CheckIcon, ShieldIcon, SparklesIcon, SunIcon } from "@/components/icons";
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
  title: "Paint Correction in Bergen County, NJ",
  description:
    "Mobile paint correction at your home or office in Bergen County, NJ. 1-step and 2-step machine correction removes swirls, scratches, and haze.",
  path: "/services/paint-correction",
};

export const metadata = pageMetadata(META);

const BENEFITS = [
  {
    icon: SparklesIcon,
    title: "Swirls & scratches, leveled",
    text: "Machine correction removes defects from the clear coat instead of hiding them under fillers and glaze.",
  },
  {
    icon: SunIcon,
    title: "Depth and color come back",
    text: "Corrected paint reflects light properly again. Faded, hazy finishes regain the depth they had on day one.",
  },
  {
    icon: ShieldIcon,
    title: "The right prep for coating",
    text: "A ceramic coating locks in whatever finish is underneath it. Correcting first means locking in flawless.",
  },
  {
    icon: CheckIcon,
    title: "Only the level you need",
    text: "We inspect your paint under proper lighting and recommend the lightest correction that gets the result.",
  },
];

const TIERS: PricingTier[] = [
  {
    name: "1 Step Paint Correction",
    badge: "Most popular",
    featured: true,
    tagline:
      "Single-stage compound correction, hand or machine. Removes roughly 50–60% of swirls and scratches.",
    startingPrice: "$800.00",
    startingLabel: "Coupe/Sedan",
    prices: [
      { label: "Midsize SUV (4–5 Seats)", price: "$1,100.00" },
      { label: "Large SUV/Truck", price: "$1,400.00" },
    ],
  },
  {
    name: "2 Step Paint Correction",
    tagline:
      "Two-stage compound and polish for faded paint or heavy defects. Removes roughly 80–95% of imperfections.",
    startingPrice: "$1,400.00",
    startingLabel: "Coupe/Sedan",
    prices: [
      { label: "Midsize SUV (4–5 Seats)", price: "$1,800.00" },
      { label: "Large SUV/Truck", price: "$2,200.00" },
    ],
  },
  {
    name: "Wet Sanding & Correction",
    tagline:
      "Our most intensive restoration: wet sanding levels deep defects and heavy oxidation, followed by multi-stage polishing.",
    startingPrice: "$1,800.00",
    startingLabel: "All vehicle sizes",
    prices: [],
  },
];

const STEPS = [
  {
    title: "Inspect under the light",
    text: "We examine the paint under proper lighting to map the swirls, scratches, and oxidation, then walk you through what a 1-step, 2-step, or wet sand would each achieve before anything touches the car.",
  },
  {
    title: "Cut, then refine",
    text: "The paint is machine-corrected panel by panel. A 1-step uses a single compound stage; a 2-step follows with a dedicated polishing pass that refines the finish to a deeper, sharper gloss.",
  },
  {
    title: "Check & protect",
    text: "Every panel is re-checked under lighting from multiple angles. Freshly corrected paint is bare, so we'll recommend a sealant or ceramic coating to lock the new finish in.",
  },
];

const REVIEWS: Review[] = [
  {
    quote: "“Amazing paint correction and ceramic coating process. Smooth appointment setting, easy drop off, worked well with my schedule and took care of the car. Couldn’t be more pleased”",
    initials: "J",
    name: "Joshua",
    date: "January 2026",
    color: "#7a1f1f",
  },
  {
    quote: "“Did a full paint correction and ceramic coating on my 1972 Seat 600 E. The car glows! And water beads right off! Also did an emergency polish at 10pm one night when acid from a garage leaked on the hood of my Bentley. Saved the day!!!”",
    initials: "BA",
    name: "Benjamin Avital",
    date: "October 2025",
    color: "#1f4d7a",
  },
  {
    quote: "“I brought my car to Matt a week after buying it and he made it look way better than when I drove it off the lot! He was very informative from the beginning. He explained the process of the exterior ceramic coating, wheel and glass coating and went into great detail. I dropped it off with hard water spots on the paint and the windows, and to my surprise, Matt also found a scratch on the roof going across the sun roof. When I picked up my car, it was like I was picking it up brand new again. Him and his team superseded my expectations! They do an amazing job and pay attention to all of the small, but important details.”",
    initials: "CL",
    name: "Courtney Leach",
    date: "November 2025",
    color: "#2f6e4a",
  },
  {
    quote: "“Matt did an awesome job with my 2010 Camaro. There were some swell marks that he was able to get out and make the car look like I just pulled it out of the showroom. Thank you matt”",
    initials: "AM",
    name: "alex myack",
    date: "September 2025",
    color: "#6a4d1f",
  },
  {
    quote: "“Matt was very professional. My car he took great care of. Scratches came out. Looked like new!! Very happy from start to finish!! Would recommend highly!!”",
    initials: "RC",
    name: "Raymond Coleman",
    date: "November 2025",
    color: "#5a2f6e",
  },
  {
    quote: "“On time, made 8 year old car look like new. Some blemish could not be removed but from a distance of 4-5 ft can’t see any issues with paint .”",
    initials: "ZW",
    name: "zev wachtel",
    date: "November 2025",
    color: "#7a1f1f",
  },
];

const FAQS: Faq[] = [
  {
    question: "What's the difference between a 1-step and 2-step correction?",
    answer:
      "A 1-step uses a single compound stage and removes roughly 50–60% of swirls and scratches. It's the sweet spot for most daily drivers, especially before a ceramic coating. A 2-step adds a separate polishing stage after the compound, removing roughly 80–95% of defects. It's higher-level work for faded paint, heavy swirls, or show-quality expectations.",
  },
  {
    question: "Will the swirls just come back?",
    answer:
      "Only if the paint keeps getting washed the way that caused them: automatic brush washes, dry dusting, dirty sponges. With proper hand washing the correction lasts for years, and a ceramic coating on top adds a hard, slick layer that resists new marring.",
  },
  {
    question: "Do I need a correction before a ceramic coating?",
    answer:
      "If your paint has visible swirls or scratches, yes. A coating locks in whatever is underneath it, defects included. If the paint is newer and clean, you can coat without correcting. We inspect first and tell you honestly which situation you're in.",
  },
  {
    question: "When is wet sanding the right call?",
    answer:
      "When defects go too deep for machine polishing alone: severe scratches, heavy oxidation, sun-baked finishes. Wet sanding levels the surface itself, then multi-stage polishing restores clarity and gloss. It's reserved for paint that needs maximum restoration.",
  },
  {
    question: "Can you fix just one panel or scratch?",
    answer:
      "Yes. The hood and minor scratch removal service corrects a single area for $200, and a minor polish boosts gloss on a small spot for $75. Not every car needs the full treatment.",
  },
  {
    question: "Is correction safe for my paint?",
    answer:
      "Done properly, yes. Correction removes a measured, minimal amount of clear coat to level the defects. That's why we inspect first and always recommend the lightest level that achieves the result, instead of defaulting to the most aggressive cut.",
  },
];

export default function PaintCorrectionPage() {
  return (
    <main>
      <JsonLd data={webPageSchema(META)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Paint Correction" },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "Paint Correction",
          description: META.description,
          path: META.path,
          serviceType: "Paint Correction",
          offers: TIERS,
        })}
      />
      <JsonLd data={faqSchema(FAQS)} />
      <ServiceHero
        eyebrow="Paint Correction"
        title={
          <>
            Paint correction for <span className="text-crimson-soft">swirls, scratches, and haze.</span>
          </>
        }
        copy="Machine paint correction in your driveway. From a light enhancement polish to full wet sanding, we remove the swirls, scratches, and haze hiding your paint's depth."
        image={{
          src: bmwX5Corrected,
          alt: "Dark blue BMW X5 with deep, mirror-finish corrected paint reflecting the evening sky",
          tag: "Corrected & glossy · BMW X5",
        }}
      />
      <ServiceBenefits
        eyebrow="Why correct your paint"
        heading="Why your paint looks dull, and how correction fixes it"
        paragraphs={[
          "Years of brush washes, road grit, and sun leave the clear coat covered in micro-scratches that scatter light and wash out the color. Correction machine-levels those defects so the paint reflects like glass again, and it's the single biggest visual upgrade a car can get.",
        ]}
        benefits={BENEFITS}
        image={{
          src: grayBmwM4,
          alt: "Gray BMW M4 front end with flawless, swirl-free paint after correction",
          tag: "Swirl-free finish · BMW M4",
        }}
      />
      <PricingTiers
        eyebrow="Correction levels & pricing"
        heading="Paint correction levels: polish to full wet sanding"
        subtext="Listed from lightest to most intensive. We inspect your paint first and recommend the lightest level that gets the result you want."
        tiers={TIERS}
        footnote="Correction can be stacked onto a detail or paired with a ceramic coating, and a 2-step can be booked as an upgrade from the 1-step."
      />
      <ServiceProcess
        eyebrow="Our process"
        heading="Our paint correction process"
        steps={STEPS}
      />
      <Testimonials
        heading="From our clients"
        subtext="What clients say after an APX paint correction."
        reviews={REVIEWS}
      />
      <ServiceFaq heading="Common questions" faqs={FAQS} />
      <Quote />
    </main>
  );
}
