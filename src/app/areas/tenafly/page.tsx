import { pageMetadata } from "@/lib/page-metadata";
import rollsRoyceCeramic from "@public/media/images/black-rolls-royce-ghost-black-badge-front.jpeg";
import astonMartinInterior from "@public/media/images/image_4.jpg";
import lotusEmiraDriveway from "@public/media/images/black-lotus-emira-front.jpeg";
import porsche911Coated from "@public/media/images/blue-porsche-911-turbo-s-cabriolet-front.jpeg";
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
  title: "Mobile Detailing in Tenafly, NJ",
  description:
    "Ceramic coating, paint correction, and detailing in Tenafly, NJ. Matt and the APX team protect European and luxury finishes at your home, no drop-off.",
  path: "/areas/tenafly",
};

export const metadata = pageMetadata(META);

const SERVICE_CARDS: AreaServiceCard[] = [
  {
    title: "Ceramic Coating",
    image: rollsRoyceCeramic,
    alt: "Black Rolls-Royce Ghost with a deep-gloss ceramic coated finish",
    bullets: [
      "Long-term gloss and chemical resistance",
      "Built to safeguard resale value",
      "Protection rated for 2 to 10 years",
    ],
    cta: "See packages & pricing →",
    href: "/services/ceramic-coating",
  },
  {
    title: "Detailing",
    image: astonMartinInterior,
    alt: "Deep-cleaned red leather interior of an Aston Martin V8 Vantage after a full detail",
    bullets: [
      "Interior, exterior, and full packages",
      "Hand-finished, never rushed",
      "Safe products for premium materials",
    ],
    cta: "See packages & pricing →",
    href: "/services/detailing",
  },
  {
    title: "Paint Correction",
    image: bmwX5Corrected,
    alt: "Dark blue BMW X5 with mirror-finish corrected paint",
    bullets: [
      "Swirls and wash marring lifted out",
      "Measured, paint-safe polishing",
      "Ideal prep ahead of a coating",
    ],
    cta: "See correction levels →",
    href: "/services/paint-correction",
  },
  {
    title: "Maintenance Plans",
    image: lotusEmiraDriveway,
    alt: "Black Lotus Emira kept in showroom condition on a brick paver driveway",
    bullets: [
      "Scheduled upkeep at your home",
      "Holds a flawless finish year-round",
      "Member priority on the calendar",
    ],
    cta: "See plans →",
    href: "/services/maintenance-plans",
  },
];

const STEPS = [
  {
    title: "Pick a time that suits your schedule",
    text: "Book online or call us, then choose a window at home or the office. Matt and the APX team arrive on time and work discreetly, so a busy day never has to revolve around your car.",
  },
  {
    title: "We arrive fully equipped",
    text: "Our van carries its own water and power, so nothing needs to be ready for us. A driveway or a single parking space is enough to get a full studio setup going.",
  },
  {
    title: "We hand your keys back better than new",
    text: "We walk the finish with you panel by panel, explain aftercare for any coating or interior work, and make sure the result is something you'd be proud to show off.",
  },
];

// Placeholder reviews pending owner sign-off, same status as the service-page reviews.
const REVIEWS: Review[] = [
  {
    quote:
      "“They corrected and coated my M5 without a single shortcut. No filler, no rushed buffing, just clean paint that finally looks the way it should.”",
    initials: "RT",
    name: "Raymond T.",
    town: "Tenafly, NJ",
    color: "#1f4d7a",
  },
  {
    quote:
      "“I was nervous about anyone touching my Range Rover's paint. Their process was careful and well explained, and the depth of gloss afterward sold me completely.”",
    initials: "LF",
    name: "Lauren F.",
    town: "Tenafly, NJ",
    color: "#7a1f1f",
  },
  {
    quote:
      "“Had the full interior and exterior done before listing my Audi. The finish photographed beautifully and the buyer noticed right away. Worth every minute.”",
    initials: "MG",
    name: "Marcus G.",
    town: "Cresskill, NJ",
    color: "#2f6e4a",
  },
  {
    quote:
      "“They came to my office and set up in the lot without needing a thing from the building. Two hours later my Macan looked showroom fresh. Incredibly convenient.”",
    initials: "EB",
    name: "Elaine B.",
    town: "Alpine, NJ",
    color: "#6a4d1f",
  },
  {
    quote:
      "“We keep both German cars on a maintenance plan now. They show up like clockwork and the paint has never looked anything but immaculate.”",
    initials: "DV",
    name: "Daniel V.",
    town: "Demarest, NJ",
    color: "#5a2f6e",
  },
  {
    quote:
      "“Genuinely the most thorough detail I've ever had. They treated the car like it was their own and the swirl-free finish under the lights was unreal.”",
    initials: "SN",
    name: "Sophia N.",
    town: "Bergenfield, NJ",
    color: "#1f4d7a",
  },
];

const FAQS: Faq[] = [
  {
    question: "Is there a travel fee for Tenafly?",
    answer:
      "Never. We're based in nearby Dumont and Tenafly is a short drive away, so there's no travel surcharge here. Every town in our eight-town Bergen County area is covered at the same flat service pricing.",
  },
  {
    question: "Where will you work on the car?",
    answer:
      "Wherever it's safe and convenient for you: a residential driveway, a spot at the curb, or a space in your office lot. We keep the area clean throughout and leave it exactly as we found it.",
  },
  {
    question: "Do you need access to my water or power?",
    answer:
      "Not at all. The van is fully self-contained, carrying its own water supply and generator. You're welcome to offer a spigot or outlet, but we never count on having one.",
  },
  {
    question: "Are you comfortable coating European and luxury paint?",
    answer:
      "Yes, that's a large part of what we do here. High-end and European finishes get the same measured, paint-safe polishing and proper coating prep every time. No aggressive shortcuts that leave swirls behind, just careful work that protects your investment.",
  },
  {
    question: "How soon should I reserve a spot?",
    answer:
      "For a detail or a maintenance visit, a few days' notice usually works. Paint correction and ceramic coating bookings tend to fill faster, so aim for roughly a week ahead. Send your details through the quote form and we'll confirm availability the same day.",
  },
  {
    question: "How do you handle bad weather days?",
    answer:
      "With a garage or covered space, interior work and coatings can still proceed on schedule. If not, we'll move you to the next open slot at no cost. We track the forecast closely and reach out before it becomes an issue.",
  },
];

export default function TenaflyPage() {
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
          areaServed: ["Tenafly"],
        })}
      />
      <ServiceHero
        eyebrow="Tenafly, NJ"
        title={
          <>
            Mobile detailing in Tenafly, <span className="text-crimson-soft">with showroom results.</span>
          </>
        }
        copy="Tenafly drivers expect their European and luxury vehicles handled with care. Matt and the APX team bring coatings, correction, and detailing to you, treating high-end paint the way it deserves."
        image={{
          // Placeholder pending a real Tenafly job photo from the owner.
          src: porsche911Coated,
          alt: "Dark blue Porsche 911 Turbo S freshly ceramic coated in a Tenafly driveway",
          tag: "Tenafly, NJ · Fully mobile",
        }}
      />
      <AreaServices
        eyebrow="What we do"
        heading="Ceramic coating, paint correction, and detailing in Tenafly"
        copy="Each visit is done by hand at your home or office with pro-grade, finish-safe products. Choose a service to see full packages and pricing."
        cards={SERVICE_CARDS}
      />
      <ServiceProcess
        eyebrow="How it works"
        heading="Mobile detailing in Tenafly, the simple way"
        steps={STEPS}
      />
      <Testimonials
        heading="What Tenafly owners say"
        subtext="Notes from drivers in Tenafly and the surrounding towns."
        reviews={REVIEWS}
      />
      <ServiceFaq heading="Common questions" faqs={FAQS} />
      <ServiceAreas
        eyebrow="Nearby areas"
        heading="Tenafly and the towns around it"
        copy="Our small team works out of nearby Dumont and reaches Tenafly along with Cresskill, Alpine, Demarest, Bergenfield, Haworth, and New Milford. Unsure whether we cover your block? Add your zip to the quote form and we'll let you know the same day."
      />
      <Quote />
    </main>
  );
}
