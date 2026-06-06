import { pageMetadata } from "@/lib/page-metadata";
import rollsRoyceCeramic from "@public/media/images/black-rolls-royce-ghost-black-badge-front.jpeg";
import porscheCayenneDetail from "@public/media/images/silver-porsche-cayenne-front.jpeg";
import astonMartinInterior from "@public/media/images/image_4.jpg";
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
  title: "Mobile Detailing in Maywood, NJ",
  description:
    "Mobile car detailing, ceramic coating, and paint correction in Maywood, NJ. APX sets up neat in tight driveways and curbside spots, no big driveway required.",
  path: "/areas/maywood",
};

export const metadata = pageMetadata(META);

const SERVICE_CARDS: AreaServiceCard[] = [
  {
    title: "Ceramic Coating",
    image: rollsRoyceCeramic,
    alt: "Black Rolls-Royce Ghost with a deep-gloss ceramic coated finish",
    bullets: [
      "Applied cleanly in a single spot",
      "Years of gloss with little fuss",
      "Coating terms up to a decade",
    ],
    cta: "See packages & pricing →",
    href: "/services/ceramic-coating",
  },
  {
    title: "Detailing",
    image: astonMartinInterior,
    alt: "Deep-cleaned red leather interior of an Aston Martin V8 Vantage after a full detail",
    bullets: [
      "Full job from one parking spot",
      "Interior, exterior, or both",
      "Hand-finished and sealed",
    ],
    cta: "See packages & pricing →",
    href: "/services/detailing",
  },
  {
    title: "Paint Correction",
    image: bmwX5Corrected,
    alt: "Dark blue BMW X5 with mirror-finish corrected paint",
    bullets: [
      "Curbside swirl and scratch removal",
      "Light or full correction passes",
      "Preps paint before a coating",
    ],
    cta: "See correction levels →",
    href: "/services/paint-correction",
  },
  {
    title: "Maintenance Plans",
    image: lotusEmiraDriveway,
    alt: "Black Lotus Emira kept in showroom condition on a brick paver driveway",
    bullets: [
      "Regular stops, tight space or not",
      "Keeps the fresh look going",
      "Member visits come first",
    ],
    cta: "See plans →",
    href: "/services/maintenance-plans",
  },
];

const STEPS = [
  {
    title: "We squeeze into your Maywood spot",
    text: "Book a time online or by phone and Matt and the APX team find you, whether that's a short driveway or a length of curb. We're used to compact lots and slot in without crowding your neighbors.",
  },
  {
    title: "A small footprint, fully equipped",
    text: "The van holds our water and power, so a single parking space is all the room we need. No sprawling gear across the block, just a tidy station right beside your car.",
  },
  {
    title: "Spotless car, spotless spot",
    text: "We finish, talk through aftercare, and pack up so cleanly you'd never know we were there. The car shines and your tight little space looks exactly as it did before.",
  },
];

// Placeholder reviews pending owner sign-off, same status as the service-page reviews.
const REVIEWS: Review[] = [
  {
    quote:
      "“I figured my short driveway ruled out mobile detailing. They fit right in, worked off the van, and the car came out flawless. No big lot needed.”",
    initials: "RV",
    name: "Ron V.",
    town: "Maywood, NJ",
    color: "#7a1f1f",
  },
  {
    quote:
      "“We only have street parking and they handled it without a second thought. Set up neat at the curb and never blocked anyone in.”",
    initials: "ND",
    name: "Nicole D.",
    town: "Maywood, NJ",
    color: "#1f4d7a",
  },
  {
    quote:
      "“A full detail done in the one spot in front of my place. Tight quarters and they still got every inch of the car spotless.”",
    initials: "AS",
    name: "Art S.",
    town: "Maywood, NJ",
    color: "#2f6e4a",
  },
  {
    quote:
      "“They corrected and coated my sedan in a cramped shared driveway and left zero mess for the other tenants. Genuinely impressed.”",
    initials: "PK",
    name: "Patty K.",
    town: "Hackensack, NJ",
    color: "#5a2f6e",
  },
  {
    quote:
      "“On a maintenance plan now even though I've got nowhere fancy to park. They make it work every visit and the car always looks sharp.”",
    initials: "DM",
    name: "Diego M.",
    town: "Paramus, NJ",
    color: "#6a4d1f",
  },
  {
    quote:
      "“No outdoor faucet, no outlet, barely any space, and they still pulled off a showroom finish. The van really does carry everything.”",
    initials: "SB",
    name: "Shana B.",
    town: "Saddle Brook, NJ",
    color: "#7a1f1f",
  },
];

const FAQS: Faq[] = [
  {
    question: "Does coming to Maywood add anything to the bill?",
    answer:
      "Not a cent. We're based close by in Dumont, so Maywood sits inside our normal range and your quote stands as is. Bordering towns such as Hackensack, Paramus, and Saddle Brook get the same pricing with no travel add-on.",
  },
  {
    question: "My driveway is tiny and I mostly rely on street parking. Is that a problem?",
    answer:
      "Not at all, it's our specialty around here. A single parking space, a short driveway, or a curbside spot in front of your home is plenty for us. Everything works out of the van in a small footprint, so a big suburban driveway is never a requirement.",
  },
  {
    question: "Where exactly will you set up in a tight spot?",
    answer:
      "Right where the car already sits. We position the van nearby, keep our gear compact, and stay clear of your neighbors' access. When we leave, the space looks untouched aside from a much cleaner car.",
  },
  {
    question: "Do you need to tap my water or power?",
    answer:
      "No. The van runs entirely on its own water and electricity, which is exactly what makes it possible to work in tight curbside spots. We won't ask for your hose or an outlet, though you're welcome to offer.",
  },
  {
    question: "How soon can you fit me in?",
    answer:
      "Details and maintenance visits usually open up within a few days. Paint correction and coatings run longer on site, so figure on roughly a week ahead. Send over the quote form and we'll lock in a time around your parking situation.",
  },
];

export default function MaywoodPage() {
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
          areaServed: ["Maywood"],
        })}
      />
      <ServiceHero
        eyebrow="Maywood, NJ"
        title={
          <>
            Mobile detailing in Maywood, <span className="text-crimson-soft">neat work in tight spots.</span>
          </>
        }
        copy="Maywood proves a big driveway is optional. We set up clean and compact at the curb or a tight spot, then deliver ceramic coatings, paint correction, and full details right where you park."
        image={{
          // Placeholder pending a real Maywood job photo from the owner.
          src: porscheCayenneDetail,
          alt: "Silver Porsche Cayenne freshly detailed in a Maywood driveway with the APX van behind it",
          tag: "Maywood, NJ · Fully mobile",
        }}
      />
      <AreaServices
        eyebrow="What we do"
        heading="Detailing, ceramic coating, and paint correction in Maywood"
        copy="Every service is hand-done at your spot with professional-grade, non-toxic products, no big driveway required. Pick a service to see packages and exact pricing."
        cards={SERVICE_CARDS}
      />
      <ServiceProcess
        eyebrow="How it works"
        heading="A Maywood visit, even in a tight space"
        steps={STEPS}
      />
      <Testimonials
        heading="Maywood drivers tell it straight"
        subtext="Reviews from compact lots here and around the surrounding towns."
        reviews={REVIEWS}
      />
      <ServiceFaq heading="Common questions" faqs={FAQS} />
      <ServiceAreas
        eyebrow="Nearby areas"
        heading="Covering Maywood and the towns beside it"
        copy="Our base in nearby Dumont keeps Maywood a short run away. We also work in Hackensack, Paramus, Saddle Brook, and Fair Lawn. Curious whether your block is in range? Add your zip to the quote form and we'll get back to you the same day."
      />
      <Quote />
    </main>
  );
}
