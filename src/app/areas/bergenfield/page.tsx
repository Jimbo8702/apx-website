import { pageMetadata } from "@/lib/page-metadata";
import rollsRoyceCeramic from "@public/media/images/black-rolls-royce-ghost-black-badge-front.jpeg";
import astonMartinInterior from "@public/media/images/image_4.jpg";
import lotusEmiraDriveway from "@public/media/images/black-lotus-emira-front.jpeg";
import dodgeCharger from "@public/media/images/silver-dodge-charger-scat-pack-rear.jpeg";
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
  title: "Mobile Detailing in Bergenfield, NJ",
  description:
    "Mobile detailing, ceramic coating, and paint correction in Bergenfield, NJ. We come to your home or workplace fully equipped, so your day keeps moving.",
  path: "/areas/bergenfield",
};

export const metadata = pageMetadata(META);

const SERVICE_CARDS: AreaServiceCard[] = [
  {
    title: "Ceramic Coating",
    image: rollsRoyceCeramic,
    alt: "Black Rolls-Royce Ghost with a deep-gloss ceramic coated finish",
    bullets: [
      "Long-term shine that shrugs off the elements",
      "Less scrubbing on every future wash",
      "Choose a 2, 5, or 10 year layer",
    ],
    cta: "See packages & pricing →",
    href: "/services/ceramic-coating",
  },
  {
    title: "Detailing",
    image: astonMartinInterior,
    alt: "Deep-cleaned red leather interior of an Aston Martin V8 Vantage after a full detail",
    bullets: [
      "Inside-only, outside-only, or the works",
      "Hand-worked from the wheels to the headliner",
      "We seal in protection before we pack up",
    ],
    cta: "See packages & pricing →",
    href: "/services/detailing",
  },
  {
    title: "Paint Correction",
    image: bmwX5Corrected,
    alt: "Dark blue BMW X5 with mirror-finish corrected paint",
    bullets: [
      "Lifts swirls, scratches, and dull spots",
      "Single-stage or multi-stage polishing",
      "The clean slate a coating needs first",
    ],
    cta: "See correction levels →",
    href: "/services/paint-correction",
  },
  {
    title: "Maintenance Plans",
    image: lotusEmiraDriveway,
    alt: "Black Lotus Emira kept in showroom condition on a brick paver driveway",
    bullets: [
      "Set-it-and-forget-it recurring visits",
      "Your daily driver stays detail-fresh",
      "Members jump to the front of the calendar",
    ],
    cta: "See plans →",
    href: "/services/maintenance-plans",
  },
];

const STEPS = [
  {
    title: "Pick a time that fits your week",
    text: "Book online or call and choose a slot around work, errands, or the school run. Matt and the APX team come to you, so a packed Bergenfield schedule never stands in the way.",
  },
  {
    title: "We arrive ready to work",
    text: "Our van carries its own water and power, which means nothing on your end to plug in or hook up. A driveway at home or a parking spot at the office is plenty of room for us.",
  },
  {
    title: "Drive away looking sharp",
    text: "When we wrap, we walk the car with you and explain how to care for any fresh coating or interior treatment. Your daily driver heads back out looking its best.",
  },
];

// Placeholder reviews pending owner sign-off, same status as the service-page reviews.
const REVIEWS: Review[] = [
  {
    quote:
      "“Between work and the kids I never have time to deal with the car. They came to the house, knocked it out in the driveway, and I didn't have to move my whole day around.”",
    initials: "RT",
    name: "Rachel T.",
    town: "Bergenfield, NJ",
    color: "#1f4d7a",
  },
  {
    quote:
      "“I work from home and they detailed both cars while I was on calls. Came outside at lunch and they looked showroom new. Easiest service I've booked all year.”",
    initials: "ME",
    name: "Marcus E.",
    town: "Bergenfield, NJ",
    color: "#7a1f1f",
  },
  {
    quote:
      "“My commuter car takes a beating on the highway every day. The paint correction and coating they did made it look years younger. So worth protecting a car you actually use.”",
    initials: "LC",
    name: "Lena C.",
    town: "Dumont, NJ",
    color: "#2f6e4a",
  },
  {
    quote:
      "“They set up in my office lot with zero fuss. No outlet, no hose, nothing needed from the building. Walked out at five and the SUV was spotless inside and out.”",
    initials: "DO",
    name: "Derek O.",
    town: "New Milford, NJ",
    color: "#6a4d1f",
  },
  {
    quote:
      "“Signed up for monthly upkeep and it's the best call I've made. They show up on schedule and the car never has a chance to get grimy. I genuinely don't think about washing it anymore.”",
    initials: "NF",
    name: "Nadia F.",
    town: "Tenafly, NJ",
    color: "#5a2f6e",
  },
  {
    quote:
      "“Booked a full detail before a long road trip and the inside felt brand new the whole drive. Matt and the team clearly care about the work. Already scheduled the next one.”",
    initials: "TW",
    name: "Theo W.",
    town: "Cresskill, NJ",
    color: "#1f4d7a",
  },
];

const FAQS: Faq[] = [
  {
    question: "Is there a travel fee for Bergenfield?",
    answer:
      "Never. We're based in neighboring Dumont, so Bergenfield is right next door and carries no travel charge. Every town in our eight-town service area is covered with no add-on for the drive.",
  },
  {
    question: "Where can you work on my car?",
    answer:
      "Wherever there's safe room around the vehicle. That can be your home driveway, a legal spot at the curb, or your workplace parking lot. We tuck our gear in close and leave the area clean when we're done.",
  },
  {
    question: "Will you need my water spigot or an outlet?",
    answer:
      "Nope. The van is fully self-contained with its own water supply and electricity, so we're not relying on anything from your home or office. You're welcome to offer them, but it's never required.",
  },
  {
    question: "How early do I need to schedule?",
    answer:
      "For a detail or a maintenance stop, a couple of days' notice usually does it. Ceramic coatings and paint correction run longer, so aim for roughly a week ahead. Send your details through the quote form and we'll get back to you with openings the same day.",
  },
  {
    question: "What if the weather turns on my appointment?",
    answer:
      "Got a garage or covered area? Interior work and coatings can typically still go ahead. If not, we'll move you to the next open slot at no cost. We keep an eye on the forecast and reach out before the day arrives.",
  },
];

export default function BergenfieldPage() {
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
          areaServed: ["Bergenfield"],
        })}
      />
      <ServiceHero
        eyebrow="Bergenfield, NJ"
        title={
          <>
            Mobile detailing in Bergenfield, <span className="text-crimson-soft">built around your day.</span>
          </>
        }
        copy="Bergenfield runs on busy households and commuters, so we work around your day. Ceramic coatings, paint correction, and full details at home or in your office lot, water and power on board."
        image={{
          // Placeholder pending a real Bergenfield job photo from the owner.
          src: dodgeCharger,
          alt: "Silver Dodge Charger detailed curbside in Bergenfield with the APX van in the background",
          tag: "Bergenfield, NJ · Fully mobile",
        }}
      />
      <AreaServices
        eyebrow="What we do"
        heading="Detailing, ceramic coating, and paint correction in Bergenfield"
        copy="A daily driver that earns its keep deserves real protection. Every service is done by hand at your home or workplace with pro-grade, non-toxic products. Pick one to see packages and exact pricing."
        cards={SERVICE_CARDS}
      />
      <ServiceProcess
        eyebrow="How it works"
        heading="Mobile detailing in Bergenfield, step by step"
        steps={STEPS}
      />
      <Testimonials
        heading="What Bergenfield drivers say"
        subtext="Notes from neighbors in Bergenfield and the towns around it."
        reviews={REVIEWS}
      />
      <ServiceFaq heading="Common questions" faqs={FAQS} />
      <ServiceAreas
        eyebrow="Nearby areas"
        heading="Bergenfield and the towns next door"
        copy="We're based just over the line in Dumont, which puts Bergenfield minutes away. Our small team also covers New Milford, Tenafly, Cresskill, Haworth, Demarest, and Alpine. Unsure if your block is in range? Drop your zip in the quote form and we'll confirm the same day."
      />
      <Quote />
    </main>
  );
}
