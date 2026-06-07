import { Testimonials, type Review } from "@/components/sections/testimonials";

const REVIEWS: Review[] = [
  {
    quote: "“Stop wasting money at the car wash!! APX Mobile Detailing is hands down the best detailing service I’ve ever used. Their pricing is very fair, time management is great, and the customer service is excellent. Matt went above and beyond on my car and the results were unbelievable, he made it look like I had just driven it straight off the dealership lot! He’s professional, hardworking, and you can tell he genuinely takes pride in what he does. I’ll definitely be using APX again and recommend them to anyone who wants their car to look brand new inside and out!”",
    initials: "MM",
    name: "Molz Manz",
    date: "August 2025",
    color: "#7a1f1f",
  },
  {
    quote: "“The guys from APX did an outstanding job detailing my car. They worked tirelessly and removed years of dog hair that I could never get out. My car literally looked as good as new inside and out. A highly professional crew gets my highest recommendation.”",
    initials: "AK",
    name: "Andy Katz",
    date: "May 2026",
    color: "#1f4d7a",
  },
  {
    quote: "“APX mobile detailing is amazing ! They not only were so thorough with their work their communication on what was best for my car was awesome! I have a baby and a dog so safe to say I needed the detailing, even better they come to my house !”",
    initials: "CP",
    name: "Courtney Perry",
    date: "May 2026",
    color: "#2f6e4a",
  },
  {
    quote: "“Best car detail ever!!! I moved from Georgia to New Jersey and I used to get my car detailed down south with my regular guy but since I move up here I been searching for a new guy to detail my car and this guy blew my mind after taking it to him. I highly recommend!”",
    initials: "CS",
    name: "Christian Sawyer",
    date: "October 2024",
    color: "#6a4d1f",
  },
  {
    quote: "“Matt is on time, replies back quickly and does a very good job at a good price.”",
    initials: "JC",
    name: "JOHN CENTRELLO",
    date: "May 2026",
    color: "#5a2f6e",
  },
  {
    quote: "“I had my car detailed and it looks brand new! The team was professional, thorough, and super friendly. Every surface inside and out was spotless. I was blown away by the results. Highly recommend and will definitely be back!”",
    initials: "MD",
    name: "mo dar",
    date: "August 2025",
    color: "#7a1f1f",
  },
];

export function Reviews() {
  return (
    <Testimonials
      id="reviews"
      heading="See why New Jersey trusts us for their detailing needs"
      subtext="A few of the 140+ five-star Google reviews from real APX clients."
      reviews={REVIEWS}
    />
  );
}
