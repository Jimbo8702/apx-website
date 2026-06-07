import { pageMetadata } from "@/lib/page-metadata";
import rollsRoyceCeramic from "@public/media/images/black-rolls-royce-ghost-black-badge-front.jpeg";
import astonMartinInterior from "@public/media/images/aston-martin-vantage-red-interior.jpeg";
import lotusEmiraDriveway from "@public/media/images/black-lotus-emira-front.jpeg";
import bmwX5Corrected from "@public/media/images/blue-bmw-x5-front.jpeg";
import grayBmwM4 from "@public/media/images/gray-bmw-m4-front.jpeg";
import { ServiceFaq, type Faq } from "@/app/services/_components/service-faq";
import { ServiceHero } from "@/app/services/_components/service-hero";
import { ServiceProcess } from "@/app/services/_components/service-process";
import { JsonLd } from "@/components/json-ld";
import { Quote } from "@/components/sections/quote";
import { ServiceAreas } from "@/components/sections/service-areas";
import { Testimonials } from "@/components/sections/testimonials";
import { breadcrumbSchema, serviceSchema, webPageSchema } from "@/lib/schema";
import { AreaServices, type AreaServiceCard } from "../_components/area-services";

const META = {
  title: "Mobile Detailing in Cresskill, NJ",
  description:
    "Mobile detailing, ceramic coating, and paint correction for Cresskill, NJ. Matt and the APX team come to your home or office while you work. No travel fee.",
  path: "/areas/cresskill",
};

export const metadata = pageMetadata(META);

const SERVICE_CARDS: AreaServiceCard[] = [
  {
    title: "Ceramic Coating",
    image: rollsRoyceCeramic,
    alt: "Black Rolls-Royce Ghost with a deep-gloss ceramic coated finish",
    bullets: [
      "A finish that holds up to close inspection",
      "Slick surface that sheds rain and dust",
      "Pick 2, 5, or 10 years of cover",
    ],
    cta: "See packages & pricing →",
    href: "/services/ceramic-coating",
  },
  {
    title: "Detailing",
    image: astonMartinInterior,
    alt: "Deep-cleaned red leather interior of an Aston Martin V8 Vantage after a full detail",
    bullets: [
      "Inside, outside, or the full treatment",
      "Worked panel by panel, all by hand",
      "Finished with protection that lasts",
    ],
    cta: "See packages & pricing →",
    href: "/services/detailing",
  },
  {
    title: "Paint Correction",
    image: bmwX5Corrected,
    alt: "Dark blue BMW X5 with mirror-finish corrected paint",
    bullets: [
      "Erases swirls, light scratches, and haze",
      "Single or multi-stage depending on paint",
      "The clean base a coating needs",
    ],
    cta: "See correction levels →",
    href: "/services/paint-correction",
  },
  {
    title: "Maintenance Plans",
    image: lotusEmiraDriveway,
    alt: "Black Lotus Emira kept in showroom condition on a brick paver driveway",
    bullets: [
      "Standing visits on a set rhythm",
      "Your car never falls out of shape",
      "Plan members skip the waitlist",
    ],
    cta: "See plans →",
    href: "/services/maintenance-plans",
  },
];

const STEPS = [
  {
    title: "Reserve a window that suits you",
    text: "Book online or call to lock in a slot. Matt and the APX team make the short trip over from Dumont, so a Cresskill appointment is easy to fit around a packed schedule.",
  },
  {
    title: "We work while you carry on",
    text: "Leave the keys and get back to your call, your meeting, or your commute into the city. Our small team handles everything outside, with no need to babysit the job.",
  },
  {
    title: "You come back to a flawless car",
    text: "We walk you through what was done, point out the difference under the light, and run through aftercare for any coating or interior work before we pull away.",
  },
];

const FAQS: Faq[] = [
  {
    question: "Is there an extra charge to come to Cresskill?",
    answer:
      "None at all. We work out of nearby Dumont and cover the whole eight-town area without a travel fee, so a Cresskill address costs no more than one in our home town.",
  },
  {
    question: "Where will you do the work at my place?",
    answer:
      "Wherever the car sits comfortably. Inside the garage, on the driveway, or in your office lot all work fine. We can stay in or out of the garage depending on what you prefer.",
  },
  {
    question: "Will you need my water or an outlet?",
    answer:
      "No. The van is fully self-contained, carrying its own water and power, so we never have to tap into your home. Everything we use comes with us and leaves with us.",
  },
  {
    question: "How early should I reserve a spot?",
    answer:
      "For a detail or a maintenance visit, a couple of days of notice is plenty. Coating and paint correction jobs take longer, so aim for roughly a week out. Send your details through the quote form and we'll confirm openings the same day.",
  },
  {
    question: "What if the weather turns on my date?",
    answer:
      "A garage or covered spot lets interior work and coatings go ahead in any weather. If you don't have one and it's pouring, we'll simply move you to the next open date at no cost and keep an eye on the forecast for you.",
  },
];

export default function CresskillPage() {
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
          areaServed: ["Cresskill"],
        })}
      />
      <ServiceHero
        eyebrow="Cresskill, NJ"
        title={
          <>
            Mobile detailing in Cresskill, <span className="text-crimson-soft">at your home or office.</span>
          </>
        }
        copy="Cresskill drivers keep their cars sharp, and so do we. Ceramic coatings, paint correction, and full details handled at your place while you work, with water and power already on the van."
        image={{
          // Placeholder pending a real Cresskill job photo from the owner.
          src: grayBmwM4,
          alt: "Gray BMW M4 with a flawless, freshly washed front end on a brick driveway in Cresskill",
          tag: "Cresskill, NJ · Fully mobile",
        }}
      />
      <AreaServices
        eyebrow="What we do"
        heading="Ceramic coating, paint correction, and detailing in Cresskill"
        copy="Each job is done by hand at your home or office using pro-grade, non-toxic products. Choose a service below to see the packages and exact pricing."
        cards={SERVICE_CARDS}
      />
      <ServiceProcess
        eyebrow="How it works"
        heading="Booking mobile detailing in Cresskill"
        steps={STEPS}
      />
      <Testimonials
        heading="Five-star feedback near Cresskill"
        subtext="Verbatim Google reviews from APX clients around the county."
      />
      <ServiceFaq heading="Common questions" faqs={FAQS} />
      <ServiceAreas
        eyebrow="Nearby areas"
        heading="Cresskill and the surrounding towns"
        copy="Our home base sits a few towns west in Dumont, which puts Cresskill well within reach along with Tenafly, Demarest, Alpine, Haworth, and the rest of the area. Unsure if your street is covered? Add your zip to the quote form and we'll let you know the same day."
      />
      <Quote />
    </main>
  );
}
