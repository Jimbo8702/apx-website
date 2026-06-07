import { pageMetadata } from "@/lib/page-metadata";
import mercedesWheelApxVan from "@public/media/images/black-mercedes-benz-wheel-with-apx-van.jpeg";
import dodgeCharger from "@public/media/images/silver-dodge-charger-scat-pack-rear.jpeg";
import { CalendarIcon, ClockIcon, ShieldIcon, SparklesIcon } from "@/components/icons";
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
  title: "Maintenance Plans in Bergen County, NJ",
  description:
    "Recurring mobile detailing in Bergen County, NJ. Bi-weekly, monthly, and exterior-only programs keep your car spotless between full details.",
  path: "/services/maintenance-plans",
};

export const metadata = pageMetadata(META);

const BENEFITS = [
  {
    icon: CalendarIcon,
    title: "Always on the schedule",
    text: "We show up every two weeks or every month, on a rhythm built around your week. You never have to think about it.",
  },
  {
    icon: SparklesIcon,
    title: "Never not clean",
    text: "No more 'it gets bad, then I book a detail' cycle. The car is guest-ready every single day.",
  },
  {
    icon: ShieldIcon,
    title: "Protection that compounds",
    text: "Every visit includes a spray sealant touch-up, so the paint stays protected continuously between details.",
  },
  {
    icon: ClockIcon,
    title: "Your weekends back",
    text: "No car wash lines, no Sunday morning bucket duty. We handle it at your home or office while you do anything else.",
  },
];

const TIERS: PricingTier[] = [
  {
    name: "Bi-Weekly Maintenance",
    tagline:
      "Because clean should be consistent: a full interior and exterior refresh every two weeks. Ideal for high-traffic vehicles, families, black cars, and show vehicles.",
    startingPrice: "$125.00",
    startingLabel: "Coupe/Sedan",
    priceSuffix: "every 2 weeks",
    prices: [
      { label: "Midsize SUV (4–5 Seats)", price: "$150.00" },
      { label: "Large SUV/Truck", price: "$175.00" },
    ],
    warranty: "3-month minimum commitment",
  },
  {
    name: "Monthly Maintenance",
    badge: "Most popular",
    featured: true,
    tagline:
      "Stay clean, stay protected, stay ahead: a consistent monthly refresh without the weekly visits. Ideal for daily drivers and ceramic-coated vehicles.",
    startingPrice: "$150.00",
    startingLabel: "Coupe/Sedan",
    priceSuffix: "per month",
    prices: [
      { label: "Midsize SUV (4–5 Seats)", price: "$175.00" },
      { label: "Large SUV/Truck", price: "$200.00" },
    ],
    warranty: "3-month minimum commitment",
  },
  {
    name: "Exterior-Only Maintenance",
    tagline:
      "Just the outside: scratch-free hand wash, wheels and tires, windows, and a sealant touch-up at every visit. Inquire about bi-weekly or monthly scheduling.",
    startingPrice: "$99.00",
    startingLabel: "Per visit",
    prices: [],
  },
];

const VISIT_INCLUDES = [
  "Scratch-free hand wash & dry",
  "Wheel & tire deep cleaning + shine",
  "Interior vacuum",
  "Dashboard & console wipe down",
  "Crystal-clear windows",
  "Spray sealant touch-up",
  "Leather conditioning (if applicable)",
  "Premium air freshener",
];

const STEPS = [
  {
    title: "Start with a full detail",
    text: "Every program begins with a full detail at regular price. That resets the vehicle to a true baseline, because maintenance keeps a clean car clean; it can't undo years of buildup.",
  },
  {
    title: "Pick your rhythm",
    text: "Choose bi-weekly or monthly visits with a 3-month minimum commitment. We build the schedule around you: same driveway, same office lot, same time.",
  },
  {
    title: "We keep it there",
    text: "Every full-plan visit covers the inside and outside: hand wash, wheels and tires, interior vacuum and wipe down, windows, a sealant touch-up, and a finishing air freshener.",
  },
];

const REVIEWS: Review[] = [
  {
    quote: "“Had my vehicle detailed and ceramic coated. The service is unmatched and I am very pleased with the results. Will be going to them again for their maintenance plan. They’re one of the best!”",
    initials: "RS",
    name: "Rachael Sullivan",
    date: "August 2025",
    color: "#7a1f1f",
  },
  {
    quote: "“I had Matt and the APX team come to my house and 2 year ceramic coat my ford ranger as well as detail my cousins car. The customer service was excellent and I signed up for their maintenance plan for both vehicles. I’d recommend them to everyone!”",
    initials: "SS",
    name: "Steven Spina",
    date: "February 2025",
    color: "#1f4d7a",
  },
  {
    quote: "“Been using APX for some time now and can definitely say Matt is the real deal, extremely reliable and communicative. I would definitely recommend APX to the next guy, make sure to get the ceramic coating!”",
    initials: "AM",
    name: "Anthony Moubayed",
    date: "February 2025",
    color: "#2f6e4a",
  },
  {
    quote: "“Matt came to my location to detail 3 of my cars and made them all look better than new! Very thorough, friendly, knowledgable and addressed any questions or areas that needed extra attention or required a delicate approach. He had a wide range of products to tackle the different types materials he came across on the 3 vehicles to ensure each one was detailed appropriately. Can't wait to have Matt come back and maintain their incredible appearance.”",
    initials: "TD",
    name: "Taso Dakas",
    date: "April 2025",
    color: "#6a4d1f",
  },
  {
    quote: "“Matt was excellent. The wash and mini detail was amazing. The job was perfection as it's best. Will be using APX on a regular basis.”",
    initials: "RK",
    name: "Raj Khubani",
    date: "July 2025",
    color: "#5a2f6e",
  },
  {
    quote: "“Matt and his team were prompt, polite, easy to work with and did a great job! I’ve used them a few times and they always leave my car so clean! Highly recommend.”",
    initials: "JF",
    name: "Jess Ford",
    date: "May 2026",
    color: "#7a1f1f",
  },
];

const FAQS: Faq[] = [
  {
    question: "How do the maintenance programs work?",
    answer:
      "You start with a full detail at regular price to bring the vehicle to baseline. After that, we visit on your schedule, every two weeks or every month, and run the full interior and exterior refresh each time. Both programs require a minimum 3-month commitment.",
  },
  {
    question: "Bi-weekly or monthly: which one is right for me?",
    answer:
      "Bi-weekly is built for cars that work hard: busy professionals, families, black paint that shows everything, and show vehicles that need to stay perfect. Monthly suits daily drivers, weekend cars, and ceramic-coated vehicles that mostly need consistent, proper washing.",
  },
  {
    question: "Do you offer an exterior-only plan?",
    answer:
      "Yes. Exterior-only maintenance starts at $99 per visit and covers the outside of the car: a scratch-free hand wash, wheel and tire cleaning with shine, crystal-clear windows, and a spray sealant touch-up. Reach out and we'll set up a bi-weekly or monthly rhythm that fits your situation.",
  },
  {
    question: "What exactly happens at each visit?",
    answer:
      "Inside and out, every time: a scratch-free hand wash and dry, deep wheel and tire cleaning with shine, interior vacuum of seats, floors, and trunk, dashboard and console wipe down, crystal-clear windows, a spray sealant touch-up, leather conditioning where applicable, and a premium air freshener to finish.",
  },
  {
    question: "Why do I need a full detail before starting?",
    answer:
      "Maintenance visits are designed to keep a clean car clean. They can't extract years of buildup, stains, or embedded grime in a 45-minute refresh. The initial full detail resets everything, and the program preserves that state from day one.",
  },
  {
    question: "Is there a contract?",
    answer:
      "Both programs run on a 3-month minimum commitment. After that, most clients simply keep going; talk to us about what works for your situation.",
  },
  {
    question: "I have a ceramic coating. Is this how I should maintain it?",
    answer:
      "It's exactly how. Coating warranties don't cover damage from automated brush washes, and the number one thing a coating needs is regular, proper hand washing. The monthly plan delivers that, keeps the coating performing, and tops up protection on everything the coating doesn't cover.",
  },
];

export default function MaintenancePlansPage() {
  return (
    <main>
      <JsonLd data={webPageSchema(META)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Maintenance Plans" },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "Detailing Maintenance Plans",
          description: META.description,
          path: META.path,
          serviceType: "Recurring Mobile Detailing",
          offers: TIERS,
        })}
      />
      <JsonLd data={faqSchema(FAQS)} />
      <ServiceHero
        eyebrow="Maintenance Plans"
        title={
          <>
            Recurring car detailing, <span className="text-crimson-soft">on your schedule.</span>
          </>
        }
        copy="Recurring mobile detailing on your schedule. After an initial full detail, we visit every two weeks or every month and keep your car looking like it just left."
        image={{
          src: dodgeCharger,
          alt: "Freshly maintained silver Dodge Charger in a driveway with the APX mobile detailing van behind it",
          tag: "Maintenance visit · Dodge Charger",
        }}
      />
      <ServiceBenefits
        eyebrow="Why a maintenance plan"
        heading="One full detail, then we keep it that way"
        paragraphs={[
          "Every car owner knows the cycle: it slowly gets worse, you finally book a detail, it's perfect for two weeks, repeat. A maintenance program breaks the cycle. We come to you on a set rhythm and the car simply never gets dirty enough to notice.",
        ]}
        benefits={BENEFITS}
        image={{
          src: mercedesWheelApxVan,
          alt: "Spotless Mercedes-Benz wheel and gloss-black paint with the APX van parked behind it",
          tag: "Kept showroom-ready · Mercedes-Benz",
        }}
      />
      <PricingTiers
        eyebrow="Programs & pricing"
        heading="Bi-weekly or monthly: pick your plan"
        subtext="The bi-weekly and monthly programs cover the interior and exterior at every visit; the exterior-only plan keeps just the outside washed and protected."
        tiers={TIERS}
        included={VISIT_INCLUDES}
        includedLabel="Bi-weekly & monthly visits include"
        footnote="The bi-weekly and monthly programs require a minimum 3-month commitment, and a full detail or ceramic coating at regular price must be completed prior to activation."
      />
      <ServiceProcess eyebrow="How it works" heading="How maintenance plans work" steps={STEPS} />
      <Testimonials
        heading="Cars that never have a bad day"
        subtext="From repeat clients and APX maintenance plan members."
        reviews={REVIEWS}
      />
      <ServiceFaq heading="Common questions" faqs={FAQS} />
      <Quote />
    </main>
  );
}
