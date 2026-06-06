import { Testimonials, type Review } from "@/components/sections/testimonials";

const REVIEWS: Review[] = [
  {
    quote:
      "“My black SUV looked dull and swirled. After the paint correction and ceramic coating it honestly looks better than the day I bought it. Worth every penny.”",
    initials: "DM",
    name: "Daniel M.",
    town: "Tenafly, NJ",
    color: "#7a1f1f",
  },
  {
    quote:
      "“Showed up on time, brought everything, and detailed my car in the driveway while I worked. Interior smells brand new. Couldn't be easier.”",
    initials: "SR",
    name: "Sofia R.",
    town: "Cresskill, NJ",
    color: "#1f4d7a",
  },
  {
    quote:
      "“Two kids and a dog had wrecked our minivan. The deep clean and extraction was a total reset. It looked like a showroom van. Booking again.”",
    initials: "JK",
    name: "Jenna K.",
    town: "New Milford, NJ",
    color: "#2f6e4a",
  },
  {
    quote:
      "“Got the 5-year ceramic on my M4. The gloss is unreal and rain just sheets right off now. Professional, knowledgeable, and no pressure.”",
    initials: "AV",
    name: "Anthony V.",
    town: "Alpine, NJ",
    color: "#6a4d1f",
  },
  {
    quote:
      "“On the monthly maintenance plan now and my car has never been this consistently clean. Fair pricing for the quality you get. Highly recommend.”",
    initials: "PL",
    name: "Priya L.",
    town: "Bergenfield, NJ",
    color: "#5a2f6e",
  },
  {
    quote:
      "“Wet-sanded out some deep scratches I thought were permanent. The before/after blew me away. These guys actually know paint.”",
    initials: "MC",
    name: "Marcus C.",
    town: "Haworth, NJ",
    color: "#7a1f1f",
  },
];

export function Reviews() {
  return (
    <Testimonials
      id="reviews"
      heading="See why New Jersey trusts us for their detailing needs"
      subtext="A few of the 150+ five-star reviews from real APX clients."
      reviews={REVIEWS}
    />
  );
}
