import { pageMetadata } from "@/lib/page-metadata";
import porsche911Coated from "@public/media/images/blue-porsche-911-turbo-s-cabriolet-front.jpeg";
import blackSedanCoated from "@public/media/images/image_12.jpg";
import { ClockIcon, DropletIcon, SparklesIcon, SunIcon } from "@/components/icons";
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
  title: "Ceramic Coating in Bergen County, NJ",
  description:
    "Professional mobile ceramic coating at your home or office in Bergen County, NJ. 2-year, 5-year & 10-year System X packages with written warranties.",
  path: "/services/ceramic-coating",
};

export const metadata = pageMetadata(META);

const BENEFITS = [
  {
    icon: SparklesIcon,
    title: "Deep, lasting gloss",
    text: "A glass-like layer that gives paint that wet, just-detailed look every day.",
  },
  {
    icon: DropletIcon,
    title: "Hydrophobic finish",
    text: "Water beads and sheets off, taking road grime and pollen with it.",
  },
  {
    icon: SunIcon,
    title: "UV & chemical defense",
    text: "Shields paint from sun fade, bird droppings, salt, and harsh winter road spray.",
  },
  {
    icon: ClockIcon,
    title: "Easier washes",
    text: "Dirt struggles to stick, so maintenance washes take half the time.",
  },
];

const TIERS: PricingTier[] = [
  {
    name: "2 Year Ceramic Coating",
    tagline: "A great fit for newer vehicles with paint in good condition.",
    startingPrice: "$499.00",
    startingLabel: "Coupe/Sedan",
    prices: [
      { label: "Midsize SUV (4–5 Seats)", price: "$599.00" },
      { label: "Large SUV/Truck", price: "$799.00" },
    ],
    warranty: "Limited 2-year warranty",
  },
  {
    name: "5 Year Ceramic Coating",
    badge: "Most popular",
    featured: true,
    tagline: "The same meticulous prep with up to five years of durability.",
    startingPrice: "$649.00",
    startingLabel: "Coupe/Sedan",
    prices: [
      { label: "Midsize SUV (4–5 Seats)", price: "$749.00" },
      { label: "Large SUV/Truck", price: "$949.00" },
    ],
    warranty: "Limited 5-year warranty",
  },
  {
    name: "SystemX 10 Year Ceramic Coating",
    tagline: "System X Max G+, rated 8–10 years with proper maintenance.",
    startingPrice: "$1,399.99",
    startingLabel: "Coupe/Sedan",
    prices: [
      { label: "Midsize SUV (4–5 Seats)", price: "$1,499.99" },
      { label: "Large SUV/Truck", price: "$1,699.99" },
    ],
    warranty: "Lifetime warranty",
  },
];

const PACKAGE_INCLUDES = [
  "Deep wheel & rim cleaning",
  "Foam bath & safe hand wash",
  "Clay bar treatment",
  "Iron decontamination",
  "Isopropyl wipe down (coating prep)",
  "Coating on paint, headlights & tail lights",
];

const STEPS = [
  {
    title: "Decon wash & prep",
    text: "Foam bath, safe contact wash, clay treatment, and iron decon strip away everything bonded to the paint, finished with an isopropyl wipe down so the coating bonds directly to clean clear coat.",
  },
  {
    title: "Panel-by-panel application",
    text: "The coating is applied and leveled one panel at a time across paint, headlights, and tail lights, then checked under lighting from multiple angles for high spots.",
  },
  {
    title: "Cure & aftercare",
    text: "We walk you through the cure window and simple washing rules that keep the coating performing, and register your written warranty before we leave.",
  },
];

const REVIEWS: Review[] = [
  {
    quote:
      "“APX coated my Model 3 last spring and it still beads like day one. Pollen season used to mean weekly washes. Now everything rinses off with a garden hose.”",
    initials: "KT",
    name: "Kevin T.",
    town: "Demarest, NJ",
    color: "#1f4d7a",
  },
  {
    quote:
      "“Did the 5-year ceramic on our Range Rover. The gloss is deeper than it was on the showroom floor, and winter salt wipes off with zero effort.”",
    initials: "LB",
    name: "Lauren B.",
    town: "Dumont, NJ",
    color: "#7a1f1f",
  },
  {
    quote:
      "“Went with the System X 10-year on my Corvette. The prep work was meticulous, hours of decon before the coating even came out. You can tell they take it seriously.”",
    initials: "RD",
    name: "Rich D.",
    town: "Haworth, NJ",
    color: "#2f6e4a",
  },
  {
    quote:
      "“Coated my wife's white Lexus and mine a month later. Bug splatter and bird droppings wipe off with a single pass now. Should have done this years ago.”",
    initials: "JP",
    name: "James P.",
    town: "Tenafly, NJ",
    color: "#6a4d1f",
  },
  {
    quote:
      "“They explained the difference between the 2 and 5-year options without any upsell pressure. Coating went on in my office parking lot while I worked. Flawless.”",
    initials: "MS",
    name: "Melissa S.",
    town: "Cresskill, NJ",
    color: "#5a2f6e",
  },
  {
    quote:
      "“Black paint, daily driver, parked outside: the worst combo. Six months after the coating it still looks freshly detailed after a quick rinse.”",
    initials: "OG",
    name: "Omar G.",
    town: "Bergenfield, NJ",
    color: "#7a1f1f",
  },
];

const FAQS: Faq[] = [
  {
    question: "How long does a ceramic coating actually last?",
    answer:
      "It depends on the package: our coatings are rated for 2 years, 5 years, or 8–10 years (System X Max G+), each backed by a written warranty. Proper maintenance, like hand washing and avoiding abrasive brushes, is what gets a coating to its full rated life.",
  },
  {
    question: "Does my car need paint correction before coating?",
    answer:
      "If your paint is newer and in good condition, no. Our coating packages include full decontamination prep and can be applied directly. If there are swirls or scratches, we recommend a 1-step correction first, since a coating locks in whatever finish is underneath it. We can quote both together.",
  },
  {
    question: "Can I still go through a car wash?",
    answer:
      "Skip automated brush washes. They're the fastest way to mar any finish and aren't covered under the coating warranty. Touchless washes are fine, and hand washing becomes dramatically easier once the coating is on. Our maintenance plans are a popular pairing for exactly this reason.",
  },
  {
    question: "How long before I can drive or wash the car?",
    answer:
      "You can drive shortly after we finish, but the coating needs roughly 24–48 hours to cure, so keep it dry and parked away from sprinklers if possible. Hold off on the first wash for about a week. We cover all of this at handoff.",
  },
  {
    question: "What does the warranty cover?",
    answer:
      "Application-related failures: loss of gloss, poor water behavior, or premature breakdown of the coating. It doesn't cover neglect, improper maintenance, or environmental damage like bird droppings left to sit, tree sap, or automated car washes.",
  },
  {
    question: "How is a ceramic coating different from wax or sealant?",
    answer:
      "Wax lasts weeks and sealants a few months, and both just sit on top of the paint. A ceramic coating chemically bonds to the clear coat, forming a hard, glass-like layer measured in years, with far stronger gloss, chemical resistance, and self-cleaning behavior.",
  },
];

export default function CeramicCoatingPage() {
  return (
    <main>
      <JsonLd data={webPageSchema(META)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Ceramic Coating" },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "Ceramic Coating",
          description: META.description,
          path: META.path,
          serviceType: "Ceramic Coating",
          offers: TIERS,
        })}
      />
      <JsonLd data={faqSchema(FAQS)} />
      <ServiceHero
        eyebrow="Ceramic Coating"
        title={
          <>
            Premium ceramic coating,{" "}
            <span className="text-crimson-soft">right in your driveway.</span>
          </>
        }
        copy="Professional-grade ceramic coating applied in your driveway: deep gloss, serious protection, and a written warranty. Choose 2-year, 5-year, or 10-year System X protection."
        image={{
          src: porsche911Coated,
          alt: "Dark blue Porsche 911 Turbo S with a freshly applied ceramic coating in a client's driveway",
          tag: "Ceramic coating · Porsche 911 Turbo S",
        }}
      />
      <ServiceBenefits
        eyebrow="Why coat your car"
        heading="Protection you can see in the reflection"
        paragraphs={[
          "New Jersey is hard on paint. Winter salt, summer sun, pollen, and highway grime all eat away at an unprotected clear coat. A ceramic coating forms a hard, chemically-bonded barrier that takes the abuse so your paint doesn't.",
        ]}
        benefits={BENEFITS}
        image={{
          src: blackSedanCoated,
          alt: "Mirror-gloss black sedan after ceramic coating, reflections visible across the rear panel",
          tag: "Freshly coated · wet-look gloss",
        }}
      />
      <PricingTiers
        eyebrow="Packages & pricing"
        heading="Ceramic coating packages"
        subtext="Transparent pricing by vehicle size, no surprises on arrival. Every package gets the full decontamination prep; you choose how long the protection lasts."
        tiers={TIERS}
        included={PACKAGE_INCLUDES}
        footnote="Paint in rough shape? A 1-step paint correction can be added before coating. Just ask when you book."
      />
      <ServiceProcess
        eyebrow="Our process"
        heading="Our ceramic coating process, step by step"
        steps={STEPS}
      />
      <Testimonials
        heading="Why customers choose APX"
        subtext="What clients say after living with an APX ceramic coating."
        reviews={REVIEWS}
      />
      <ServiceFaq heading="Common questions" faqs={FAQS} />
      <Quote />
    </main>
  );
}
