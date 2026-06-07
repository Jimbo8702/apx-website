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
  title: "Mobile Detailing in Dumont, NJ",
  description:
    "Mobile car detailing, ceramic coating, and paint correction in Dumont, NJ. APX is based in Dumont and brings the full studio to your driveway.",
  path: "/areas/dumont",
};

export const metadata = pageMetadata(META);

const SERVICE_CARDS: AreaServiceCard[] = [
  {
    title: "Ceramic Coating",
    image: rollsRoyceCeramic,
    alt: "Black Rolls-Royce Ghost with a deep-gloss ceramic coated finish",
    bullets: [
      "Glass-like gloss that lasts years",
      "Rain and road grime rinse right off",
      "2, 5, and 10 year packages",
    ],
    cta: "See packages & pricing →",
    href: "/services/ceramic-coating",
  },
  {
    title: "Detailing",
    image: astonMartinInterior,
    alt: "Deep-cleaned red leather interior of an Aston Martin V8 Vantage after a full detail",
    bullets: [
      "Interior, exterior & full packages",
      "Every surface cleaned by hand",
      "Protection sealed in before we leave",
    ],
    cta: "See packages & pricing →",
    href: "/services/detailing",
  },
  {
    title: "Paint Correction",
    image: bmwX5Corrected,
    alt: "Dark blue BMW X5 with mirror-finish corrected paint",
    bullets: [
      "Swirls, scratches & haze removed",
      "1-step and 2-step options",
      "The right prep before a coating",
    ],
    cta: "See correction levels →",
    href: "/services/paint-correction",
  },
  {
    title: "Maintenance Plans",
    image: lotusEmiraDriveway,
    alt: "Black Lotus Emira kept in showroom condition on a brick paver driveway",
    bullets: [
      "Recurring visits to your driveway",
      "Keeps that just-detailed look",
      "Priority scheduling for members",
    ],
    cta: "See plans →",
    href: "/services/maintenance-plans",
  },
];

const STEPS = [
  {
    title: "We come to you in Dumont",
    text: "Book online or give us a call and pick a time that works. Matt and the APX team roll up to your home or office, and if you're in Dumont, you're minutes from our home base.",
  },
  {
    title: "We bring water and power",
    text: "The van is fully self-contained, so there's nothing to set up on your end. A driveway, a curbside spot, or an office parking space is all we need.",
  },
  {
    title: "You get a showroom finish",
    text: "We do a final walkaround with you, cover any aftercare for coatings or interiors, and leave your car looking better than the day you got it.",
  },
];

// Real Google reviews from the APX profile; some also appear on one other area page.
const REVIEWS: Review[] = [
  {
    quote: "“I couldn’t be happier with the service from APX Mobile Detailing! I had them do a leather interior coating, and the results are honestly better than I expected. The attention to detail was top-notch—every seat looks brand new, feels protected, and has a clean, rich finish without being greasy or overdone. They showed up on time, were super professional, and clearly take pride in their work. You can tell they use high-quality products and really know what they’re doing. My interior not only looks amazing but is now much easier to maintain. If you’re thinking about protecting your leather, don’t hesitate—APX Mobile Detailing is 100% worth it. Highly recommend”",
    initials: "RE",
    name: "Robert Emord",
    date: "February 2026",
    color: "#7a1f1f",
  },
  {
    quote: "“Had my boat detailed. They did an amazing job will be bringing them more business soon.”",
    initials: "AM",
    name: "Aidan McKenna",
    date: "October 2024",
    color: "#1f4d7a",
  },
  {
    quote: "“APX did a great job detailing my Family's car. It had been sitting in our driveway for a while and when we decided to sell it, APX came and worked miracles to clean the car, detail and get us ready for a sale.”",
    initials: "KM",
    name: "Kevin Milgram",
    date: "June 2025",
    color: "#2f6e4a",
  },
  {
    quote: "“They detailed my jeep and did an incredible job. Very careful and took their time to make sure nothing was missed. Highly recommend”",
    initials: "CG",
    name: "Charlea Graf",
    date: "September 2024",
    color: "#6a4d1f",
  },
  {
    quote: "“Had APX come right to my driveway to do a full detail and ceramic coating on my Chevy traverse. It looks absolutely incredible and I’m super happy with the results. Matt is very professional and cares about the results / outcome of our cars. Thanks!”",
    initials: "MP",
    name: "Marcello Prestigiacomo",
    date: "September 2025",
    color: "#5a2f6e",
  },
  {
    quote: "“APX did an incredible job on my brand new forester. I booked in a ceramic coating as well as a windshield coating and it came out great! Highly recommend to anyone.”",
    initials: "C",
    name: "cait",
    date: "July 2025",
    color: "#7a1f1f",
  },
];

const FAQS: Faq[] = [
  {
    question: "Do you charge a travel fee in Dumont?",
    answer:
      "No. APX is based right here in Dumont, so there's never a travel fee for Dumont addresses. The surrounding towns we serve, like New Milford, Bergenfield, and Tenafly, are covered at no extra charge as well.",
  },
  {
    question: "Where do you set up when you arrive?",
    answer:
      "Anywhere we can safely work around the car: your driveway, a curbside spot in front of your house, or your office parking lot. We keep the work area tidy and leave it the way we found it.",
  },
  {
    question: "Do I need to provide water or electricity?",
    answer:
      "No. The van carries its own water tank and power, so we're fully self-sufficient. If you'd rather we use your spigot or an outdoor outlet we can, but nothing is required on your end.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "A few days ahead is usually enough for details and maintenance visits; ceramic coating and paint correction appointments are best booked about a week out. Drop your info in the quote form and we'll confirm availability same day.",
  },
  {
    question: "What happens if it rains on my appointment day?",
    answer:
      "If you have a garage or covered spot, interior work and coatings can usually go ahead as planned. Otherwise we'll reschedule you to the next available slot at no charge. We watch the forecast and reach out before you have to.",
  },
];

export default function DumontPage() {
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
          areaServed: ["Dumont"],
        })}
      />
      <ServiceHero
        eyebrow="Dumont, NJ"
        title={
          <>
            Mobile detailing in Dumont, <span className="text-crimson-soft">straight to your driveway.</span>
          </>
        }
        copy="APX Car Solutions is based right here in Dumont. Ceramic coatings, paint correction, and full details done at your home or office, with water and power on board. No drop-off, no waiting room."
        image={{
          // Placeholder pending a real Dumont job photo from the owner.
          src: porscheCayenneDetail,
          alt: "Silver Porsche Cayenne freshly detailed in a Dumont driveway with the APX van behind it",
          tag: "Dumont, NJ · Fully mobile",
        }}
      />
      <AreaServices
        eyebrow="What we do"
        heading="Detailing, ceramic coating, and paint correction in Dumont"
        copy="Every visit is hand-done at your home or office with pro-grade, non-toxic products. Pick a service to see packages and exact pricing."
        cards={SERVICE_CARDS}
      />
      <ServiceProcess
        eyebrow="How it works"
        heading="Mobile detailing in Dumont, start to finish"
        steps={STEPS}
      />
      <Testimonials
        heading="Reviews from our Dumont home base"
        subtext="Dumont is where APX parks the van. Here is what clients across the county say."
        reviews={REVIEWS}
      />
      <ServiceFaq heading="Common questions" faqs={FAQS} />
      <ServiceAreas
        eyebrow="Nearby areas"
        heading="Serving Dumont and nearby Bergen County towns"
        copy="Based in Dumont, we also cover New Milford, Bergenfield, Haworth, Cresskill, Demarest, Tenafly, and Alpine. Not sure if we reach you? Drop your zip in the quote form and we'll confirm same day."
      />
      <Quote />
    </main>
  );
}
