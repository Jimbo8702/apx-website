import { pageMetadata } from "@/lib/page-metadata";
import lotusEmiraDriveway from "@public/media/images/black-lotus-emira-front.jpeg";
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
    quote:
      "“Black Escalade, three kids, two dogs. The bi-weekly plan is the only reason it looks like a luxury car instead of a school bus. Best money I spend each month.”",
    initials: "MR",
    name: "Mike R.",
    town: "Saddle River, NJ",
    color: "#1f4d7a",
  },
  {
    quote:
      "“They've come every two weeks for six months, same day, same time, rain or shine. I genuinely never think about my car being dirty anymore.”",
    initials: "EC",
    name: "Elena C.",
    town: "Ho-Ho-Kus, NJ",
    color: "#7a1f1f",
  },
  {
    quote:
      "“Got the monthly plan after my ceramic coating and it's the perfect pairing. Proper hand washes keep the coating beading like new, and I never touch a brush wash.”",
    initials: "DP",
    name: "Dan P.",
    town: "Allendale, NJ",
    color: "#2f6e4a",
  },
  {
    quote:
      "“My lease turn-in inspection took five minutes. Three years of monthly maintenance and the inspector said it was the cleanest return he'd seen all month.”",
    initials: "SL",
    name: "Sue L.",
    town: "Woodcliff Lake, NJ",
    color: "#6a4d1f",
  },
  {
    quote:
      "“I host clients in my car weekly and the monthly plan keeps it spotless without me ever planning for it. The sealant touch-ups keep the paint popping too.”",
    initials: "JT",
    name: "James T.",
    town: "River Vale, NJ",
    color: "#5a2f6e",
  },
  {
    quote:
      "“Started bi-weekly for the summer show season. The car is always event-ready and the interior smells like the day I bought it. Zero effort on my end.”",
    initials: "TB",
    name: "Tony B.",
    town: "Waldwick, NJ",
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
          src: lotusEmiraDriveway,
          alt: "Black Lotus Emira kept in showroom condition on a brick paver driveway",
          tag: "Kept showroom-ready · Lotus Emira",
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
        subtext="What clients on APX maintenance programs say."
        reviews={REVIEWS}
      />
      <ServiceFaq heading="Common questions" faqs={FAQS} />
      <Quote />
    </main>
  );
}
