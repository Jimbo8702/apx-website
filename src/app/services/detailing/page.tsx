import { pageMetadata } from "@/lib/page-metadata";
import foamWashWheelDetail from "@public/media/images/blue-sports-car-foam-wash-wheel-detail.jpeg";
import alfaGiuliaBrownInterior from "@public/media/images/alfa-romeo-giulia-brown-leather-interior.jpeg";
import { ClockIcon, DropletIcon, ShieldIcon, SparklesIcon } from "@/components/icons";
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
  title: "Auto Detailing in Bergen County, NJ",
  description:
    "Mobile detailing at your home or office in Bergen County, NJ. Interior, exterior, and full inside-and-out packages, every surface cleaned by hand.",
  path: "/services/detailing",
};

export const metadata = pageMetadata(META);

const BENEFITS = [
  {
    icon: SparklesIcon,
    title: "Every crack & crevice",
    text: "Vents, seams, cupholders, under the seats. The spots a quick vacuum never reaches get cleaned by hand.",
  },
  {
    icon: DropletIcon,
    title: "Decon, not just a wash",
    text: "Clay treatment pulls bonded contaminants out of the paint that washing alone never touches.",
  },
  {
    icon: ShieldIcon,
    title: "Sanitized, not just wiped",
    text: "Seats, carpets, and floor mats are sanitized for a true clean reset, not a quick once-over.",
  },
  {
    icon: ClockIcon,
    title: "Zero disruption",
    text: "Fully mobile service at your home or office. Hand over the keys and get back to your day.",
  },
];

const TIERS: PricingTier[] = [
  {
    name: "Interior Detail",
    tagline:
      "Our standard interior service: a thorough top-to-bottom clean-up for cabins that need a reset.",
    startingPrice: "$195.00",
    startingLabel: "Coupe/Sedan",
    prices: [
      { label: "Midsize SUV (4–5 Seats)", price: "$249.99" },
      { label: "Large SUV/Truck", price: "$279.99" },
    ],
  },
  {
    name: "Exterior Detail",
    tagline:
      "The Wash, Clay, & Seal: removes micro-contaminants, leaves a silky-smooth finish, and seals the paint.",
    startingPrice: "$200.00",
    startingLabel: "Coupe/Sedan",
    prices: [
      { label: "Midsize SUV (4–5 Seats)", price: "$225.00" },
      { label: "Large SUV/Truck", price: "$250.00" },
    ],
    warranty: "Up to 6 months of paint protection",
  },
  {
    name: "Full Premium Detail",
    badge: "Most popular",
    featured: true,
    tagline:
      "The complete inside-and-out detail: deep cleaning, sanitation, and a spray sealant for lasting gloss.",
    startingPrice: "$295.00",
    startingLabel: "Coupe/Sedan",
    prices: [
      { label: "Midsize SUV (4–5 Seats)", price: "$325.00" },
      { label: "Large SUV/Truck", price: "$375.00" },
    ],
  },
];

const STEPS = [
  {
    title: "Inspect & set the scope",
    text: "We walk the vehicle with you, note problem areas, and confirm the package fits. Interior, exterior, or both, you'll know exactly what's happening before any work begins.",
  },
  {
    title: "Deep clean, inside and out",
    text: "Interiors get a deep vacuum, detailed wipe down, and sanitation down to the crevices. Exteriors get deep wheel cleaning, a foam bath, a scratch-safe hand wash, and clay treatment to pull off bonded contaminants.",
  },
  {
    title: "Protect & walk through",
    text: "Leather is conditioned, glass is cleaned, and the paint is sealed so the gloss outlasts the wash. Then we walk the car with you panel by panel before handing back the keys.",
  },
];

const REVIEWS: Review[] = [
  {
    quote: "“Very nice and professional. Did the exterior wash, clay, and seal along with the interior deep clean. I have 3 kids so you can imagine the mess. They came to my home and took 3.5 hours or so. Did a great job inside and out. Highly recommend.”",
    initials: "JR",
    name: "John Rubio",
    date: "April 2026",
    color: "#7a1f1f",
  },
  {
    quote: "“I scheduled an appointment with APX and they did an INCREDIBLE job. I really needed my Toyota cleaned throughly. I have 3 dogs and they are in the car all of the time. Matt took his time going through and cleaning every spot. The car looks like I just picked it up from the dealership. I highly recommend to anyone, especially someone with dogs!! Haha”",
    initials: "YM",
    name: "Yolanda Martinez",
    date: "March 2025",
    color: "#1f4d7a",
  },
  {
    quote: "“Needed an interior clean with seat steaming and sanitizing for my daily driver. WOW. This guy goes all in and my car is cleaner than it was when I purchased it. Amazing work - OCD caliber cleaning... love it - thank you!!!”",
    initials: "NC",
    name: "Nicolas Colletto",
    date: "October 2024",
    color: "#2f6e4a",
  },
  {
    quote: "“Right to my house, no need to go to a site. ant husband’s Dodge Charger Scat Pack was scheduled for a full detail and I couldn’t be happier with the results. The car looks absolutely brand new—inside and out. The attention to detail was incredible, from the deep clean of the interior to the flawless shine on the paint. They really brought out the muscle and gloss of the car, and even little things like the wheels and trim look showroom fresh. Professional, efficient, and passionate about their work—exactly what you want when trusting someone with your car. I’ll definitely be coming back and recommending them to anyone looking to keep their ride in top condition.”",
    initials: "SM",
    name: "Savannah Moreno",
    date: "August 2025",
    color: "#6a4d1f",
  },
  {
    quote: "“Matt was great to work with! Was looking for a premium interior detail and APX Mobile Detailing has some of the most reasonable prices around with great quality work. Would highly recommend to anyone looking for a detail.”",
    initials: "CC",
    name: "Christina Carpio",
    date: "February 2025",
    color: "#5a2f6e",
  },
  {
    quote: "“I had my Tahoe detailed by Matt after the summer season. Matt was able to accommodate me, where he detailed my vehicle on a work day, so I didn’t need access to my vehicle. When he picked it up dirty and it had sand in it, and when he brought it back a few hours later, the Tahoe looked great and I couldn’t find any sand.”",
    initials: "EJ",
    name: "Edward J Kneisler III",
    date: "January 2025",
    color: "#7a1f1f",
  },
];

const FAQS: Faq[] = [
  {
    question: "Interior, exterior, or full: which one does my car need?",
    answer:
      "If the cabin is the problem, the Interior Detail covers it. If the paint feels rough or has lost its gloss, the Exterior Detail decontaminates and seals it. If it's been a while since the car had real attention, the Full Premium Detail handles both in one visit. We inspect the vehicle before starting and will tell you straight which one makes sense.",
  },
  {
    question: "What does the Luxury Detail upgrade add?",
    answer:
      "The cleaning is identical to the Full Premium Detail. For $100 more, the Luxury Detail upgrades to a more durable sealant and adds protection to every surface: SiO2 on leather, UV protection on the dash and doors, and stain guard on fabric and carpet.",
  },
  {
    question: "What if the interior needs more than a clean-up?",
    answer:
      "For kids, pets, stains, odors, or years of buildup, our signature Interior Deep Clean & Reset starts at $399.99. It adds steam cleaning, carpet extraction and shampoo, stain removal, an ozone treatment, and full interior protection. Ask about it when you book.",
  },
  {
    question: "How is the exterior detail different from a regular car wash?",
    answer:
      "A wash removes loose dirt. The Exterior Detail is a full reset: deep wheel cleaning, foam bath, hand wash, bug and tar removal, clay and iron decontamination, then a 6-month ceramic sealant on the paint and a 3-month protectant on the rims. It's the difference between clean and actually restored.",
  },
  {
    question: "My car is in rough shape. Is it still one price?",
    answer:
      "Pricing is based on vehicles in average condition. We inspect the vehicle before starting, and if it needs extra attention, like embedded pet hair or heavy stains, we'll recommend the right options before any work begins. Extreme exterior cases, like heavy mud or severe water spots, are billed at $25 per 15-minute increment. No surprises after the fact.",
  },
  {
    question: "How long does the protection last?",
    answer:
      "The Exterior Detail's ceramic sealant protects and shines for up to 6 months, with a 3-month protectant on the rims. Full details finish with a spray sealant that keeps paint glossy for months. If you want protection measured in years, a ceramic coating can be added while the paint is already prepped.",
  },
];

export default function DetailingPage() {
  return (
    <main>
      <JsonLd data={webPageSchema(META)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Detailing" },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "Auto Detailing",
          description: META.description,
          path: META.path,
          serviceType: "Auto Detailing",
          offers: TIERS,
        })}
      />
      <JsonLd data={faqSchema(FAQS)} />
      <ServiceHero
        eyebrow="Detailing"
        title={
          <>
            Full-service car detailing <span className="text-crimson-soft">that comes to you.</span>
          </>
        }
        copy="Interior, exterior, or the complete inside-and-out detail, done in your driveway. Deep cleaning, sanitation, and lasting protection at the level your car needs."
        image={{
          src: alfaGiuliaBrownInterior,
          alt: "Deep-cleaned brown leather interior of an Alfa Romeo Giulia after a full detail",
          tag: "Interior detailed · Alfa Romeo Giulia",
        }}
      />
      <ServiceBenefits
        eyebrow="Why APX detailing"
        heading="A deep clean for the interior, exterior, or both"
        paragraphs={[
          "Daily driving adds up: coffee spills, crumbs in the seams, brake dust, road film bonded to the paint. Whether it's the cabin, the exterior, or the whole car, we strip the buildup away in a single visit and lock in the finish so it stays that way longer.",
        ]}
        benefits={BENEFITS}
        image={{
          src: foamWashWheelDetail,
          alt: "Foam wash covering a blue sports car's wheel during a hand wash on an exterior detail",
          tag: "Foam bath & wheel detail",
        }}
      />
      <PricingTiers
        eyebrow="Packages & pricing"
        heading="Three ways to book a detail"
        subtext="Interior only, exterior only, or the complete reset. Every package is priced by vehicle size."
        tiers={TIERS}
        footnote="Want protection on every surface? Upgrade the Full Premium to our Luxury Detail for $100 more. It adds a more durable sealant plus SiO2 leather protection, UV protection for the dash and doors, and stain guard for fabric and carpet."
      />
      <ServiceProcess eyebrow="Our process" heading="What to expect on detail day" steps={STEPS} />
      <Testimonials
        heading="What clients say after an APX detail"
        subtext="Real reviews from interior, exterior, and full details."
        reviews={REVIEWS}
      />
      <ServiceFaq heading="Common questions" faqs={FAQS} />
      <Quote />
    </main>
  );
}
