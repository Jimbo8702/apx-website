import { pageMetadata } from "@/lib/page-metadata";
import rollsRoyceCeramic from "@public/media/images/black-rolls-royce-ghost-black-badge-front.jpeg";
import astonMartinInterior from "@public/media/images/aston-martin-vantage-red-interior.jpeg";
import lotusEmiraDriveway from "@public/media/images/black-lotus-emira-front.jpeg";
import porscheMacanSRedInterior from "@public/media/images/porsche-macan-s-red-leather-interior.jpeg";
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
  title: "Mobile Detailing in Woodcliff Lake, NJ",
  description:
    "Mobile ceramic coating, paint correction, and detailing in Woodcliff Lake, NJ. APX details in the office lot on workdays or at home on weekends.",
  path: "/areas/woodcliff-lake",
};

export const metadata = pageMetadata(META);

const SERVICE_CARDS: AreaServiceCard[] = [
  {
    title: "Ceramic Coating",
    image: rollsRoyceCeramic,
    alt: "Black Rolls-Royce Ghost with a deep-gloss ceramic coated finish",
    bullets: [
      "A polished look that holds up",
      "Less time spent washing, more shine",
      "Tiers from 2 years to 10",
    ],
    cta: "See packages & pricing →",
    href: "/services/ceramic-coating",
  },
  {
    title: "Detailing",
    image: astonMartinInterior,
    alt: "Deep-cleaned red leather interior of an Aston Martin V8 Vantage after a full detail",
    bullets: [
      "Done while you're at your desk",
      "Cabin and exterior cleaned by hand",
      "Sealed and ready before you clock out",
    ],
    cta: "See packages & pricing →",
    href: "/services/detailing",
  },
  {
    title: "Paint Correction",
    image: bmwX5Corrected,
    alt: "Dark blue BMW X5 with mirror-finish corrected paint",
    bullets: [
      "Swirls and haze polished away",
      "Light or deeper correction passes",
      "Sharp finish for the executive car",
    ],
    cta: "See correction levels →",
    href: "/services/paint-correction",
  },
  {
    title: "Maintenance Plans",
    image: lotusEmiraDriveway,
    alt: "Black Lotus Emira kept in showroom condition on a brick paver driveway",
    bullets: [
      "Standing visits at office or home",
      "The car stays meeting-ready",
      "Members claim the best time slots",
    ],
    cta: "See plans →",
    href: "/services/maintenance-plans",
  },
];

const STEPS = [
  {
    title: "We meet you in Woodcliff Lake",
    text: "Book online or by phone and choose the office lot during the workday or your home on the weekend. Matt and the APX team arrive where the car sits, whether that's a corporate campus or a reservoir-side driveway.",
  },
  {
    title: "We work without interrupting your day",
    text: "Our small team brings water, power, and every product in the van, so you can stay in your meetings while we handle the car a few steps away. There's nothing for your facilities team to arrange.",
  },
  {
    title: "You return to a finished car",
    text: "We wrap up with a quick walkaround, cover any aftercare for coatings or interior work, and leave the vehicle ready to drive home looking as sharp as the calendar you keep.",
  },
];

// Real Google reviews from the APX profile; some also appear on one other area page.
const REVIEWS: Review[] = [
  {
    quote: "“Matt did a great job! The ceramic coating exceeded all expectations! They also did the interior for maximum protection! Very wee way to work with and got me back In My truck asap! Definitely plan on using them for all coatings and maintenance on my interior and exterior moving forward!”",
    initials: "P",
    name: "Paul",
    date: "February 2026",
    color: "#7a1f1f",
  },
  {
    quote: "“great, quick service”",
    initials: "KN",
    name: "Kaitlyn Neeb",
    date: "January 2025",
    color: "#1f4d7a",
  },
  {
    quote: "“Recently got my car ceramic coated by APX Mobile Detailing. They did such an amazing job! Quality service, and they got my car done fast.”",
    initials: "AE",
    name: "Abraham Ehiosa",
    date: "February 2025",
    color: "#2f6e4a",
  },
  {
    quote: "“Great work detailing my car!!! Highly recommend!! A++++✅”",
    initials: "CS",
    name: "carol sanchez",
    date: "May 2025",
    color: "#6a4d1f",
  },
  {
    quote: "“I booked an appointment for a 5 year ceramic coating and wheels coating with APX Mobile Detailing. Came out really well and I’m happy with the results. Will be using them again”",
    initials: "J",
    name: "Jacoby",
    date: "July 2025",
    color: "#5a2f6e",
  },
  {
    quote: "“Matt and the team do amazing work. They ceramic coated my m240i and it came out amazing. Highly recommend them”",
    initials: "MR",
    name: "Moe Robert",
    date: "May 2026",
    color: "#7a1f1f",
  },
];

const FAQS: Faq[] = [
  {
    question: "Will you add a travel fee for Woodcliff Lake?",
    answer:
      "We won't. APX is based in nearby Dumont and Woodcliff Lake is well within our range, so there's no distance charge on your quote. Every town we cover around here is served at the same straightforward rate.",
  },
  {
    question: "Can you detail my car at the office during the workday?",
    answer:
      "Yes, and we do it often. Tell us where you park on the campus and we'll work right there while you're at your desk. As long as the lot allows it, you can hand off the keys in the morning and pick up a finished car later.",
  },
  {
    question: "Do you need anything from my building or facilities team?",
    answer:
      "Nothing at all. The van carries its own water and power, so we don't tap into the building's supply or need any setup arranged on site. We just need a parking spot we can work around safely.",
  },
  {
    question: "Can I split visits between work and home?",
    answer:
      "Absolutely. Plenty of clients have us at the office lot on busy weeks and at the house on the weekend. Note your preference in the quote form and we'll build the schedule around wherever the car will be.",
  },
  {
    question: "What's the plan if the weather turns?",
    answer:
      "A garage or covered office spot lets interior work and coatings go ahead as scheduled. Without cover, we'll move you to the next open slot at no charge. We track the forecast and reach out ahead of your appointment either way.",
  },
];

export default function WoodcliffLakePage() {
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
          areaServed: ["Woodcliff Lake"],
        })}
      />
      <ServiceHero
        eyebrow="Woodcliff Lake, NJ"
        title={
          <>
            Mobile detailing in Woodcliff Lake, <span className="text-crimson-soft">at office or home.</span>
          </>
        }
        copy="Woodcliff Lake runs on tight calendars, and so do we. APX details your car in the office lot during the workday or at your reservoir-side home on weekends: coatings, correction, and details."
        image={{
          // Placeholder pending a real Woodcliff Lake job photo from the owner.
          src: porscheMacanSRedInterior,
          alt: "Red leather interior of a Porsche Macan S detailed in Woodcliff Lake",
          tag: "Woodcliff Lake, NJ · Fully mobile",
        }}
      />
      <AreaServices
        eyebrow="What we do"
        heading="Ceramic coating, paint correction, and detailing in Woodcliff Lake"
        copy="Each service is done by hand wherever the car is parked, using professional-grade, non-toxic products. Choose a service to view its packages and pricing."
        cards={SERVICE_CARDS}
      />
      <ServiceProcess
        eyebrow="How it works"
        heading="Mobile detailing in Woodcliff Lake, on your terms"
        steps={STEPS}
      />
      <Testimonials
        heading="Google reviews around Woodcliff Lake"
        subtext="What clients across the service area say about APX workmanship."
        reviews={REVIEWS}
      />
      <ServiceFaq heading="Common questions" faqs={FAQS} />
      <ServiceAreas
        eyebrow="Nearby areas"
        heading="Serving Woodcliff Lake and the towns around it"
        copy="Home base sits a short drive away in nearby Dumont, putting Woodcliff Lake and the area within easy reach. We also serve Park Ridge, Hillsdale, Saddle River, and Old Tappan. Wondering if your office or street is covered? Drop your zip into the quote form and we'll confirm the same day."
      />
      <Quote />
    </main>
  );
}
