import { pageMetadata } from "@/lib/page-metadata";
import rollsRoyceCeramic from "@public/media/images/black-rolls-royce-ghost-black-badge-front.jpeg";
import astonMartinInterior from "@public/media/images/aston-martin-vantage-red-interior.jpeg";
import alfaGiuliaBrownInterior from "@public/media/images/alfa-romeo-giulia-brown-leather-interior.jpeg";
import teslaModelY from "@public/media/images/gray-tesla-model-y-rear-2.jpeg";
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
  title: "Mobile Detailing in Demarest, NJ",
  description:
    "Mobile detailing, ceramic coating, and paint correction for Demarest, NJ driveways. Matt and the APX team bring a self-contained van to your home, no drop-off.",
  path: "/areas/demarest",
};

export const metadata = pageMetadata(META);

const SERVICE_CARDS: AreaServiceCard[] = [
  {
    title: "Ceramic Coating",
    image: rollsRoyceCeramic,
    alt: "Black Rolls-Royce Ghost with a deep-gloss ceramic coated finish",
    bullets: [
      "A hard shell against sap and pollen",
      "Seasons of gloss with one application",
      "2, 5, and 10 year options",
    ],
    cta: "See packages & pricing →",
    href: "/services/ceramic-coating",
  },
  {
    title: "Detailing",
    image: astonMartinInterior,
    alt: "Deep-cleaned red leather interior of an Aston Martin V8 Vantage after a full detail",
    bullets: [
      "Interior, exterior, or bumper to bumper",
      "Tree fallout lifted off every panel",
      "Finished and protected before we pack up",
    ],
    cta: "See packages & pricing →",
    href: "/services/detailing",
  },
  {
    title: "Paint Correction",
    image: bmwX5Corrected,
    alt: "Dark blue BMW X5 with mirror-finish corrected paint",
    bullets: [
      "Etching and swirls polished away",
      "Single-stage or multi-stage work",
      "The foundation for a lasting coating",
    ],
    cta: "See correction levels →",
    href: "/services/paint-correction",
  },
  {
    title: "Maintenance Plans",
    image: teslaModelY,
    alt: "Gray Tesla Model Y detailed on site with the APX van",
    bullets: [
      "Scheduled visits to your home",
      "Stays ahead of the next round of fallout",
      "Members get first pick of dates",
    ],
    cta: "See plans →",
    href: "/services/maintenance-plans",
  },
];

const STEPS = [
  {
    title: "Pick a time and stay put",
    text: "Reserve a slot online or call us. Matt and the APX team make the short trip over from Dumont and meet your car wherever it sits, so there's no need to leave the house.",
  },
  {
    title: "The van handles the rest",
    text: "We arrive fully self-contained with our own water and power. A spot in the driveway under the trees or along the curb is all the room we need to get going.",
  },
  {
    title: "Walk out to a finished car",
    text: "When we wrap, we go over the car with you, explain how to care for any new coating or refreshed interior, and hand back a finish that holds up to whatever falls from the canopy above.",
  },
];

// Real Google reviews from the APX profile; some also appear on one other area page.
const REVIEWS: Review[] = [
  {
    quote: "“My experience with Matt at APX was very professional. Matt took the time to explain all of his services in detail. As well he asked what areas of the vehicle I thought would need more attention. Not only that , Matt was able to fit me into his schedule knowing I was pressed for time because I'd be leaving for a road trip. After having the vehicle with him he realized that indeed he needed a little more time to get the car right so he communicated with me to let me know what had to be done and how much longer his team would need . Professional equipment,service and communication is hard to find these days. I found all three with APX and was very pleased with the results.”",
    initials: "BN",
    name: "Bart Nativo",
    date: "September 2025",
    color: "#7a1f1f",
  },
  {
    quote: "“Detailed Car inside and out. Car was very dirty. Car now looks brand new. Fantastic job!”",
    initials: "D",
    name: "danvan590",
    date: "May 2025",
    color: "#1f4d7a",
  },
  {
    quote: "“Matt and his team came on a same day call. More than pleased with the work they provided. Will definitely be reaching out again in the future. Along with great work, pricing, job details etc were all communicated!!!”",
    initials: "CR",
    name: "Cyclenatti. rich",
    date: "July 2025",
    color: "#2f6e4a",
  },
  {
    quote: "“He treats and disinfects the leather very well unlike most detailers , has a great attitude and a great deal on the paint protection”",
    initials: "MS",
    name: "Meme Scrap",
    date: "April 2025",
    color: "#6a4d1f",
  },
  {
    quote: "“Had my car detailed by APX mobile detailing and my car looks like new. Matt was friendly, knowledgeable and paid attention to detail while working on the car. Prices were great and best of all I did not have to drop my car off anywhere. Would highly recommend APX!”",
    initials: "G",
    name: "G",
    date: "April 2025",
    color: "#5a2f6e",
  },
  {
    quote: "“I highly recommend APX Mobile Detailing. Quick response, polite, and on time. Excellent job detailing interior and exterior of my car. I will definitely use them again.”",
    initials: "JA",
    name: "John Arlin",
    date: "July 2025",
    color: "#7a1f1f",
  },
];

const FAQS: Faq[] = [
  {
    question: "Is there a travel charge for coming to Demarest?",
    answer:
      "Never. APX works out of nearby Dumont, and Demarest sits inside the eight-town area we cover, so there's no travel fee here or anywhere else we serve. You pay for the work, not the drive.",
  },
  {
    question: "Where will you work on my car?",
    answer:
      "Wherever the car is parked and we can move around it safely: your driveway, a shaded spot beneath the trees, or the curb out front. We tuck everything back the way we found it before we go.",
  },
  {
    question: "Will I need to leave out a hose or an outlet?",
    answer:
      "Not at all. Our van carries its own water supply and generator, so it runs entirely on its own. You're welcome to offer a spigot or outlet, but we never count on one being there.",
  },
  {
    question: "When should I reserve a spot?",
    answer:
      "Details and plan visits usually open up within a few days. For ceramic coating or paint correction, aim for roughly a week of lead time. Send your details through the quote form and we'll get back to you the same day.",
  },
  {
    question: "What if the weather turns on my booking?",
    answer:
      "Got a garage or covered area? Interior work and coatings can typically still happen. If not, we'll move you to the next open date for free. We keep an eye on the forecast and reach out ahead of time.",
  },
];

export default function DemarestPage() {
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
          areaServed: ["Demarest"],
        })}
      />
      <ServiceHero
        eyebrow="Demarest, NJ"
        title={
          <>
            Mobile detailing in Demarest, <span className="text-crimson-soft">we bring the studio to you.</span>
          </>
        }
        copy="The trees lining Demarest's streets drop sap, pollen, and worse on cars parked outside. APX comes to your driveway with everything on board to clean, correct, and protect your paint."
        image={{
          // Placeholder pending a real Demarest job photo from the owner.
          src: alfaGiuliaBrownInterior,
          alt: "Brown leather seats and center console of an Alfa Romeo Giulia deep cleaned in Demarest",
          tag: "Demarest, NJ · Fully mobile",
        }}
      />
      <AreaServices
        eyebrow="What we do"
        heading="Ceramic coating, detailing, and paint correction in Demarest"
        copy="Every job is done by hand at your home with pro-grade, non-toxic products built to stand up to tree fallout. Choose a service to see packages and full pricing."
        cards={SERVICE_CARDS}
      />
      <ServiceProcess
        eyebrow="How it works"
        heading="What a Demarest driveway visit looks like"
        steps={STEPS}
      />
      <Testimonials
        heading="Google reviews from the Demarest area"
        subtext="What clients across our service area say after an APX visit."
        reviews={REVIEWS}
      />
      <ServiceFaq heading="Common questions" faqs={FAQS} />
      <ServiceAreas
        eyebrow="Nearby areas"
        heading="Demarest and the neighboring towns we cover"
        copy="Running out of nearby Dumont keeps Demarest a quick trip for us, and the same goes for Haworth, Cresskill, Alpine, Tenafly, Closter, and the rest of the area. Unsure whether your street is on our route? Add your zip to the quote form and we'll let you know the same day."
      />
      <Quote />
    </main>
  );
}
