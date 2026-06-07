import { Container } from "@/components/ui/container";
import { Stars } from "@/components/ui/stars";

type WallReview = {
  quote: string;
  name: string;
  date: string;
};

/* Rotates through the same avatar palette the home testimonials use. */
const AVATAR_COLORS = ["#7a1f1f", "#1f4d7a", "#2f6e4a", "#6a4d1f", "#5a2f6e"];

/* Real names can be a single word or four ("Edward J Kneisler III") — cap at two initials. */
const initialsOf = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

/* Real Google reviews (exports in .claude/real_reviews/all_reviews.json), newest
   first, comment text verbatim — punctuation included. 3 rating-only reviews
   from the export are omitted (nothing to quote). */
const REVIEWS: WallReview[] = [
  {
    quote: "“Nice guys, fair pricing. Came right to my job and did the work. Very happy”",
    name: "Mike DeNardo",
    date: "June 2026",
  },
  {
    quote: "“I had APX Mobil Detailing do work on two of my cars and in each case I was extremely pleased especially with the detailing and ceramic coating on my 1976 Corvette. To say that it looks like it is brand new is an understatement. It actually looks better than when I drove it out of the dealer’s showroom 29 years ago. The ceramic coating has added a shine that the car never had before and this was all done in the driveway of my home using advanced equipment and materials. I highly recommend APX if you’re looking to improve the look of your car and preserve and protect the interior and exterior of your vehicle.”",
    name: "William Berenbroick",
    date: "May 2026",
  },
  {
    quote: "“The guys from APX did an outstanding job detailing my car. They worked tirelessly and removed years of dog hair that I could never get out. My car literally looked as good as new inside and out. A highly professional crew gets my highest recommendation.”",
    name: "Andy Katz",
    date: "May 2026",
  },
  {
    quote: "“My car is so clean and smells amazing !”",
    name: "Kimberly Etkin",
    date: "May 2026",
  },
  {
    quote: "“They did an amazing job - car looks brand new and staff was very friendly”",
    name: "Steven Gatanas",
    date: "May 2026",
  },
  {
    quote: "“Matt is on time, replies back quickly and does a very good job at a good price.”",
    name: "JOHN CENTRELLO",
    date: "May 2026",
  },
  {
    quote: "“Had my new truck ceramic coated by APX Mobile Detailing and couldn’t be happier with the experience. Matt was awesome from the very first interaction all the way through the completion of the job. He showed up with professional, top-of-the-line equipment and took the time to thoroughly explain the entire process to me. His attention to detail and professionalism really stood out. The truck came out amazing. I would highly recommend APX Mobile Detailing to anyone in Bergen County looking for high-quality detailing and ceramic coating services.”",
    name: "john H",
    date: "May 2026",
  },
  {
    quote: "“Very professional staff and hard workers. They arrived on time and did a phenomenal job on our suv and truck. I Highly recommend APX for mobile detailing and ceramic coating. It was a breeze getting the appointment set up and Matt was very knowledgeable. He spent the time to explain the process and why ceramic coating is beneficial. Thanks again”",
    name: "tonnic",
    date: "May 2026",
  },
  {
    quote: "“Matt and his team were prompt, polite, easy to work with and did a great job! I’ve used them a few times and they always leave my car so clean! Highly recommend.”",
    name: "Jess Ford",
    date: "May 2026",
  },
  {
    quote: "“Now, I understand why the name is Apex. These guys are at the top of their game, very professional. Completed the work efficiently, they also provided me with explanations on certain things and answered some questions that I had. Highly recommend!”",
    name: "Nick Lardieri",
    date: "May 2026",
  },
  {
    quote: "“Matt and his team did an incredible job cleaning and applying ceramic coating on my car. It was done in less than 2 hours, amazing work!”",
    name: "James Buntar",
    date: "May 2026",
  },
  {
    quote: "“Very professional. End results came out better than I expected, and I had high expectations to begin with. Thanks guys!!”",
    name: "Gil Broitman",
    date: "May 2026",
  },
  {
    quote: "“Matt and the team do amazing work. They ceramic coated my m240i and it came out amazing. Highly recommend them”",
    name: "Moe Robert",
    date: "May 2026",
  },
  {
    quote: "“Matt and crew were prompt at my house. Everything is self contained on his truck and my two cars were ceramic coated in less than 2 hours. The cars both look great and I look forward to keeping them clean for years to come.”",
    name: "Howard Falkow",
    date: "May 2026",
  },
  {
    quote: "“I would highly recommend APX mobile detailing for all of your car care needs. Matt and team did an amazing job on my car and they are extremely professional!”",
    name: "Satyam Prasad",
    date: "May 2026",
  },
  {
    quote: "“APX mobile detailing is amazing ! They not only were so thorough with their work their communication on what was best for my car was awesome! I have a baby and a dog so safe to say I needed the detailing, even better they come to my house !”",
    name: "Courtney Perry",
    date: "May 2026",
  },
  {
    quote: "“APX Mobile Detailing absolutely knocked it out of the park with the ceramic coating on my Yukon Denali. Matt and Max were incredible—professional, polite, and clearly take pride in their work. The finish looks amazing, with a deep shine and flawless detail that truly stands out. You can tell they go the extra mile to make sure everything is perfect. Highly recommend APX Mobile Detailing if you want your vehicle looking its absolute best!”",
    name: "Darren Shaw",
    date: "April 2026",
  },
  {
    quote: "“Very nice and professional. Did the exterior wash, clay, and seal along with the interior deep clean. I have 3 kids so you can imagine the mess. They came to my home and took 3.5 hours or so. Did a great job inside and out. Highly recommend.”",
    name: "John Rubio",
    date: "April 2026",
  },
  {
    quote: "“Matt did a great job! The ceramic coating exceeded all expectations! They also did the interior for maximum protection! Very wee way to work with and got me back In My truck asap! Definitely plan on using them for all coatings and maintenance on my interior and exterior moving forward!”",
    name: "Paul",
    date: "February 2026",
  },
  {
    quote: "“Huge shout-out to Matt at APX Detailing! He recently worked on two of my cars—one getting a full ceramic coating and the other a interior/exterior detail. Both came out looking flawless. Matt made the process seamless and sent regular photo/video updates, so I could see the progress. If you want a detailer who is professional, communicative, and does incredible work, APX is the place. Highly recommend!”",
    name: "Ken Karwowski",
    date: "February 2026",
  },
  {
    quote: "“I couldn’t be happier with the service from APX Mobile Detailing! I had them do a leather interior coating, and the results are honestly better than I expected. The attention to detail was top-notch—every seat looks brand new, feels protected, and has a clean, rich finish without being greasy or overdone. They showed up on time, were super professional, and clearly take pride in their work. You can tell they use high-quality products and really know what they’re doing. My interior not only looks amazing but is now much easier to maintain. If you’re thinking about protecting your leather, don’t hesitate—APX Mobile Detailing is 100% worth it. Highly recommend”",
    name: "Robert Emord",
    date: "February 2026",
  },
  {
    quote: "“Very professional and great work.”",
    name: "Ademola Adeniyi",
    date: "January 2026",
  },
  {
    quote: "“Great communication Did a spectacular job on my new ride. I will be recommending them to my friends.”",
    name: "Timothy Buccigrossi",
    date: "January 2026",
  },
  {
    quote: "“Matt and the team at APX were great, they helped us with a ceramic coating on our new Mercedes and the car looks fantastic! Very knowledgeable, friendly and you can feel his love for keeping cars looking at their best!”",
    name: "Janel Nese",
    date: "January 2026",
  },
  {
    quote: "“Amazing paint correction and ceramic coating process. Smooth appointment setting, easy drop off, worked well with my schedule and took care of the car. Couldn’t be more pleased”",
    name: "Joshua",
    date: "January 2026",
  },
  {
    quote: "“matt made it effortless to schedule an appointment and get the car finished. fantastic work. would recommend to family and friends. he was very informative and took the time to answer all my questions, would definitely get work done by matt again.”",
    name: "Steven Ang",
    date: "November 2025",
  },
  {
    quote: "“I work from home so it was nice getting the service done mobile. They did a ceramic coating on my mom’s car and did an amazing job”",
    name: "anastasia",
    date: "November 2025",
  },
  {
    quote: "“Last week I scheduled an appointment with Matt and his team. I have an Audi Q5 that I wanted ceramic coated… I got the glass, rims and paint done and it came out amazing!!”",
    name: "Rey Aldana",
    date: "November 2025",
  },
  {
    quote: "“I had APX come to my apartment complex to do a ceramic coating on my Range Rover HSE. I was really concerned about the upcoming winter months with the salt and snow so I wanted to protect it for years. They did a fantastic job. Matt and his team were incredible, super knowledgeable and overall just a great experience. Thank you guys so much!”",
    name: "Gianni Rockette",
    date: "November 2025",
  },
  {
    quote: "“I have a 2025 Chevy trax (white paint) this is my first purchased car and the car I had prior was a beater so I didn’t have to clean at all or all that much. When. I got my new car it instantly got filthy both interior and exterior I called my boy Matt at APX car detailing, when I say my car was clean! I had a new car all over again, if you are looking for a quick convenient and most important quality detail on your car… CALL APX NOW.”",
    name: "BAM Fitness",
    date: "November 2025",
  },
  {
    quote: "“Professional meticulous and very fair My cars look amazing and I will continue to work with Matt!! Arrived on time and hustle management is amazing! I had two cars done and he finished both cars, but in the timeframe that he told me it would take.”",
    name: "Eileen Hannon",
    date: "November 2025",
  },
  {
    quote: "“I brought my car to Matt a week after buying it and he made it look way better than when I drove it off the lot! He was very informative from the beginning. He explained the process of the exterior ceramic coating, wheel and glass coating and went into great detail. I dropped it off with hard water spots on the paint and the windows, and to my surprise, Matt also found a scratch on the roof going across the sun roof. When I picked up my car, it was like I was picking it up brand new again. Him and his team superseded my expectations! They do an amazing job and pay attention to all of the small, but important details.”",
    name: "Courtney Leach",
    date: "November 2025",
  },
  {
    quote: "“Matt was very professional. My car he took great care of. Scratches came out. Looked like new!! Very happy from start to finish!! Would recommend highly!!”",
    name: "Raymond Coleman",
    date: "November 2025",
  },
  {
    quote: "“On time, made 8 year old car look like new. Some blemish could not be removed but from a distance of 4-5 ft can’t see any issues with paint .”",
    name: "zev wachtel",
    date: "November 2025",
  },
  {
    quote: "“The guys showed up exactly on time to detail and coat my work truck in a specialized vehicle of their own, equipped with everything they would need. They carefully cleaned my truck and applied the coating as discussed, and took the time to explain what was done and how best to care for it. Very satisfied. Glad to recommend.”",
    name: "Mayer Fertig",
    date: "November 2025",
  },
  {
    quote: "“A wonderful job with my car! Highly recommend.”",
    name: "Kirk Kushnerick",
    date: "October 2025",
  },
  {
    quote: "“Did a full paint correction and ceramic coating on my 1972 Seat 600 E. The car glows! And water beads right off! Also did an emergency polish at 10pm one night when acid from a garage leaked on the hood of my Bentley. Saved the day!!!”",
    name: "Benjamin Avital",
    date: "October 2025",
  },
  {
    quote: "“Matt is easy to work with. My car looks great with the coating. Thank you, Matt!”",
    name: "Joan Wang",
    date: "October 2025",
  },
  {
    quote: "“I had an outstanding experience with Matt from start to finish. His professionalism and clear dedication to his craft really stood out to me. I had ceramic coating applied to my vehicle, and the entire process was smooth, hassle-free, and completed to perfection. Matt’s attention to detail and commitment to quality made all the difference. I’ll definitely be returning in the future for any additional services. Highly recommend!”",
    name: "Lisa Cordova",
    date: "October 2025",
  },
  {
    quote: "“Recently had my car detailed and am so happy with the results! Arrived on time and did a great job! They paid great attention to detail and the car looks amazing. I would highly recommend them to anyone looking for a great detailing service!!”",
    name: "Sara Gardner",
    date: "October 2025",
  },
  {
    quote: "“Amazing professional service! The team are true experts when it comes to high-end luxury vehicles—extremely knowledgeable, precise, and detail-oriented. I’ll definitely be using their services again in the future!”",
    name: "Claudia",
    date: "October 2025",
  },
  {
    quote: "“My son and I built a custom motorcycle 25 years ago. It was beginning to look a bit tired. Matt and his tech came to my house and did a detail and ceramic application. The bike looks brand new. I could not be more pleased.”",
    name: "Jack Quigley",
    date: "October 2025",
  },
  {
    quote: "“Had my BMW X5 ceramic coated and it looks amazing. My main concern was how I was going to protect my car for the years to come and Matt helped and guided me every step of the way. He educated me on what the best option would be for what I was looking for and I truly appreciate that. You don't really come across a lot of young people who truly care about the service and customer care they provide. Will defnitely recommend their services to anybody and everybody I know. Thank you again!”",
    name: "NM Booths Co",
    date: "October 2025",
  },
  {
    quote: "“APX Detailing did an awesome job ceramic coating my 2024 Mustang! They came right to my house, were super professional, and made my car look better than brand new. The shine and protection are insane, I couldn’t be happier!”",
    name: "Joseph Langschultz",
    date: "October 2025",
  },
  {
    quote: "“Did a phenomenal job.”",
    name: "Justin Perez",
    date: "October 2025",
  },
  {
    quote: "“I recently had a ceramic coating done on my car, and I couldn’t be happier with the results! The attention to detail was incredible — every inch of the paint looks flawless and has that deep, mirror-like shine. The surface feels so smooth, and water just beads right off. They took their time to explain the whole process and made sure I understood how to care for it afterward. The car honestly looks better than the day I picked it up from the dealership. I can already tell the coating will make maintenance so much easier. Highly recommend to anyone who loves keeping their car looking pristine — worth every penny!”",
    name: "SuSu SeaSky",
    date: "October 2025",
  },
  {
    quote: "“Had my vehicle ceramic coated. Matt and Nick did an amazing job. They came to me, arrived two minutes early and completed the job on time. Their attention to detail was second to none, scheduling was a breeze and they over delivered. Would absolutely recommend and use again!”",
    name: "A. Milena Goncalves",
    date: "October 2025",
  },
  {
    quote: "“My experience with Matt at APX was very professional. Matt took the time to explain all of his services in detail. As well he asked what areas of the vehicle I thought would need more attention. Not only that , Matt was able to fit me into his schedule knowing I was pressed for time because I'd be leaving for a road trip. After having the vehicle with him he realized that indeed he needed a little more time to get the car right so he communicated with me to let me know what had to be done and how much longer his team would need . Professional equipment,service and communication is hard to find these days. I found all three with APX and was very pleased with the results.”",
    name: "Bart Nativo",
    date: "September 2025",
  },
  {
    quote: "“Had APX come right to my driveway to do a full detail and ceramic coating on my Chevy traverse. It looks absolutely incredible and I’m super happy with the results. Matt is very professional and cares about the results / outcome of our cars. Thanks!”",
    name: "Marcello Prestigiacomo",
    date: "September 2025",
  },
  {
    quote: "“Matt did an awesome job with my 2010 Camaro. There were some swell marks that he was able to get out and make the car look like I just pulled it out of the showroom. Thank you matt”",
    name: "alex myack",
    date: "September 2025",
  },
  {
    quote: "“Great job! Highly recommend. Courteous efficient team!”",
    name: "Lana Gofman Rosenson",
    date: "September 2025",
  },
  {
    quote: "“Recently, I had both of my cars cleaned, detailed and Ceramic coating applied and couldn’t be more pleased by the work that Matt and his team have done. I’m a repeat customer and will continue to utilize the services of APX Mobile Detailing and I highly recommend those who see this review to do the same. One highlight is they come to you and perform the work utilizing their customized van that has everything necessary to get the job done.”",
    name: "Bill D",
    date: "September 2025",
  },
  {
    quote: "“Great detailing work! Arrived on time, very professional, and decently priced. I highly recommend and will definitely use their services again.”",
    name: "Javier L. Orellana",
    date: "September 2025",
  },
  {
    quote: "“APX did a fantastic job Inside and out. Definitely recommend using them”",
    name: "susan yirce",
    date: "September 2025",
  },
  {
    quote: "“I just got my car ceramic coated here and I couldn’t be happier with the results! The paint looks like glass, and the shine is unbelievable. The team walked me through the whole process and explained how to take care of it. Super professional and worth every penny. Highly recommend!”",
    name: "Declan Huss",
    date: "September 2025",
  },
  {
    quote: "“Matt and his team did an amazing job on my 2008 Accord. I'll be using them again. Highly recommend them.”",
    name: "Omar Munoz",
    date: "September 2025",
  },
  {
    quote: "“Honestly both me and my brother-in-law are overly satisfied with how the final result came out. Worth the price, service was A1. And understanding when I had to make a last minute change to the appointment. Will be doing my Harley next.”",
    name: "Justin LoVecchio",
    date: "August 2025",
  },
  {
    quote: "“Right to my house, no need to go to a site. ant husband’s Dodge Charger Scat Pack was scheduled for a full detail and I couldn’t be happier with the results. The car looks absolutely brand new—inside and out. The attention to detail was incredible, from the deep clean of the interior to the flawless shine on the paint. They really brought out the muscle and gloss of the car, and even little things like the wheels and trim look showroom fresh. Professional, efficient, and passionate about their work—exactly what you want when trusting someone with your car. I’ll definitely be coming back and recommending them to anyone looking to keep their ride in top condition.”",
    name: "Savannah Moreno",
    date: "August 2025",
  },
  {
    quote: "“Had my Jeep Gladiator ceramic coated a few weeks ago and it looks fantastic. The team was very responsive, knowledgeable and very friendly. Thanks again”",
    name: "Kennedy Veatch",
    date: "August 2025",
  },
  {
    quote: "“I was on the fence about ceramic coating, but I’m glad I finally did it. The finish is flawless, and the protection gives me peace of mind. Customer service was friendly, honest, and they answered all my questions. Definitely recommend to anyone considering it!”",
    name: "hussam",
    date: "August 2025",
  },
  {
    quote: "“Stop wasting money at the car wash!! APX Mobile Detailing is hands down the best detailing service I’ve ever used. Their pricing is very fair, time management is great, and the customer service is excellent. Matt went above and beyond on my car and the results were unbelievable, he made it look like I had just driven it straight off the dealership lot! He’s professional, hardworking, and you can tell he genuinely takes pride in what he does. I’ll definitely be using APX again and recommend them to anyone who wants their car to look brand new inside and out!”",
    name: "Molz Manz",
    date: "August 2025",
  },
  {
    quote: "“I had my car detailed and it looks brand new! The team was professional, thorough, and super friendly. Every surface inside and out was spotless. I was blown away by the results. Highly recommend and will definitely be back!”",
    name: "mo dar",
    date: "August 2025",
  },
  {
    quote: "“Had my vehicle detailed and ceramic coated. The service is unmatched and I am very pleased with the results. Will be going to them again for their maintenance plan. They’re one of the best!”",
    name: "Rachael Sullivan",
    date: "August 2025",
  },
  {
    quote: "“Matt was a really great person to work with. Easy to book, everything was on time as scheduled and the process was easy and my car looks amazing. Would absolutely recommend anyone who cares about their car to have it detailed at APX.”",
    name: "Hailey Ryan",
    date: "August 2025",
  },
  {
    quote: "“I highly recommend APX Mobile Detailing. Quick response, polite, and on time. Excellent job detailing interior and exterior of my car. I will definitely use them again.”",
    name: "John Arlin",
    date: "July 2025",
  },
  {
    quote: "“We are very happy with the work that Matt and his team did for us. He followed through on everything he promised, and we’re thrilled with the results! We had Matt do a full detail, an exterior detail, and a light clean on another vehicle. We also had him apply 5-year ceramic coatings, and everything turned out beautifully. Matt was flexible with scheduling, arrived on time, and was a pleasure to work with. We will definitely be using APX again and highly recommend them!”",
    name: "Regina H",
    date: "July 2025",
  },
  {
    quote: "“Matt did an incredible job ceramic coating my Mazda! The car looks amazing! It’s super glossy and clean, like it just came off the lot. He was professional, prompt, and extremely detail-oriented throughout the whole process. What really sets Matt apart is his passion for what he does. You can tell he truly loves detailing, and it shows in the quality of his work. He treats every car like it’s his own and takes real pride in making sure everything is perfect. I’m beyond happy with how my car turned out. If you’re looking for top-tier detailing from someone who genuinely cares, Matt is the one to go to. Highly recommend! Now I get to go cruise down the road in style! Thanks Matt!!”",
    name: "Carlo Francavilla",
    date: "July 2025",
  },
  {
    quote: "“APX performed a miracle on my 2016 Impala. The team was informed, capable, and passionate about the work. And it showed in the result. Excellent value for the job and highly recommended.”",
    name: "Michael Savage",
    date: "July 2025",
  },
  {
    quote: "“I recently had my Mazda CX-30 detailed by APX Mobile Detailing, and I couldn't be more impressed with their exceptional work. The team's attention to detail was remarkable - they transformed my vehicle’s appearance, leaving every surface spotless and looking better than new. Beyond the thorough detailing service, they also applied a ceramic coating to my car, which not only enhanced the paint's shine and depth but will provide long-lasting protection against the elements. The convenience of their mobile service meant I didn't have to disrupt my schedule, and the quality of their craftsmanship truly exceeded my expectations. I would highly recommend APX Mobile Detailing to anyone looking for professional, top-tier automotive care.”",
    name: "Kyle Simmons",
    date: "July 2025",
  },
  {
    quote: "“Matt was excellent. The wash and mini detail was amazing. The job was perfection as it's best. Will be using APX on a regular basis.”",
    name: "Raj Khubani",
    date: "July 2025",
  },
  {
    quote: "“Matt and his team came on a same day call. More than pleased with the work they provided. Will definitely be reaching out again in the future. Along with great work, pricing, job details etc were all communicated!!!”",
    name: "Cyclenatti. rich",
    date: "July 2025",
  },
  {
    quote: "“Matt and his team did a wonderful job detailing my car. He was professional, helpful, and made the whole experience easy and stress-free. I’m very happy with the results!”",
    name: "Kaylee Babasade",
    date: "July 2025",
  },
  {
    quote: "“I am very happy with the ceramic coating and detailing on my brand new Audi RSQ8. Matt was very thorough and knowledgeable and he answered all my questions that I had. Going to be using them for 2 of my other cars back at home. Thanks again!”",
    name: "viktoria stolarz",
    date: "July 2025",
  },
  {
    quote: "“I booked an appointment for a 5 year ceramic coating and wheels coating with APX Mobile Detailing. Came out really well and I’m happy with the results. Will be using them again”",
    name: "Jacoby",
    date: "July 2025",
  },
  {
    quote: "“APX did an incredible job on my brand new forester. I booked in a ceramic coating as well as a windshield coating and it came out great! Highly recommend to anyone.”",
    name: "cait",
    date: "July 2025",
  },
  {
    quote: "“APX did a great job detailing my Family's car. It had been sitting in our driveway for a while and when we decided to sell it, APX came and worked miracles to clean the car, detail and get us ready for a sale.”",
    name: "Kevin Milgram",
    date: "June 2025",
  },
  {
    quote: "“APX was Amazing, never have had a better service from someone in this area. Cleaned my car to perfection, got a stain out and took their time to work on my vehicle.”",
    name: "Leonardo LaSpisa",
    date: "June 2025",
  },
  {
    quote: "“So impressed by Matt’s professionalism and attention to detail (no pun intended). I was overwhelmingly satisfied with the quality of the detailing—my car looks and feels brand new. He was punctual, thorough, and clearly takes pride in his work. Highly recommend to anyone looking for top-tier service!”",
    name: "Amanda Bernard",
    date: "June 2025",
  },
  {
    quote: "“Amazing job 🤩 My car has never looked better, looks brand new! Matt is so professional i would recommend him anyday!”",
    name: "Emily Amaya",
    date: "June 2025",
  },
  {
    quote: "“Very thorough and detailed with his cleaning helped talked me through exactly what he would do before cleaning and executed to perfection”",
    name: "Ryan Gilmartin",
    date: "May 2025",
  },
  {
    quote: "“Detailed Car inside and out. Car was very dirty. Car now looks brand new. Fantastic job!”",
    name: "danvan590",
    date: "May 2025",
  },
  {
    quote: "“APX is a trustworthy, high-quality detailer. Matt & Nick took great care of my car. I got a full detail & trim restoration. The car looks brand new and the trim looks even darker than when I bought it! They checked in with me throughout the detail to ensure my satisfaction, which was greatly appreciated. Highly recommend if you want to feel confident your car is in good hands. Will definitely be getting another detail from APX in the future.”",
    name: "Michael Fusco",
    date: "May 2025",
  },
  {
    quote: "“Great work detailing my car!!! Highly recommend!! A++++✅”",
    name: "carol sanchez",
    date: "May 2025",
  },
  {
    quote: "“Had the pleasure of working with APX Mobile Detailing. I scheduled a total of 4 cars to be ceramic coated and Matt made the process smooth and easy. He's a very responsive person and really tires his best to put you first. I am really happy with the outcome of my ceramic coating. Matt is very passionate about his work and appreciate his attention to detail. I highly recommend working with APX Mobile Detailing!”",
    name: "Philip Park",
    date: "May 2025",
  },
  {
    quote: "“I recently hired APX mobile detailing to clean my mother's car. I spoke with Matt who quoted me a reasonable price and booked a date. His communication, promptness and work ethic was excellent. I highly recommend APX and Matt and will definitely use him again. Can't beat the convenience of mobile detailing .”",
    name: "carolyn griffenkranz",
    date: "May 2025",
  },
  {
    quote: "“Got two cars done with APX. Excellent job”",
    name: "NAZAR MAKOHIN",
    date: "May 2025",
  },
  {
    quote: "“The car looks fabulous and it’s amazing. I would recommend to my family and friends.”",
    name: "Jacqueline Ramirez",
    date: "May 2025",
  },
  {
    quote: "“Look no further for the best in mobile detailing for high end cars. Matt is polite, punctual, detail oriented, and honest.”",
    name: "Gil Altman",
    date: "May 2025",
  },
  {
    quote: "“I recently had my car detailed by APX and couldn’t be happier with the results! The attention to detail was truly impressive — every inch of the car looks brand new. Matt was professional, thorough, and clearly takes great pride in his work. It’s rare to find someone who goes above and beyond like he did. I highly recommend this mobile car wash and detailing service to anyone who wants their vehicle looking brand new 🤩”",
    name: "Kelly P",
    date: "April 2025",
  },
  {
    quote: "“He treats and disinfects the leather very well unlike most detailers , has a great attitude and a great deal on the paint protection”",
    name: "Meme Scrap",
    date: "April 2025",
  },
  {
    quote: "“Had my car detailed by APX mobile detailing and my car looks like new. Matt was friendly, knowledgeable and paid attention to detail while working on the car. Prices were great and best of all I did not have to drop my car off anywhere. Would highly recommend APX!”",
    name: "G",
    date: "April 2025",
  },
  {
    quote: "“Just had APX Mobile do my Harley ! They knocked it out of the park! I am blown away by the job they did and time spent on it for the price ! Super professional and I can’t tell enough people to try them !!!”",
    name: "mark roskowsky",
    date: "April 2025",
  },
  {
    quote: "“He cleaned my truck really good and made it look like new”",
    name: "Adrian Kida",
    date: "April 2025",
  },
  {
    quote: "“Matt did an amazing work on my vehicle. Looks like it came off the showroom floor”",
    name: "Dan F",
    date: "April 2025",
  },
  {
    quote: "“Matt came to my location to detail 3 of my cars and made them all look better than new! Very thorough, friendly, knowledgable and addressed any questions or areas that needed extra attention or required a delicate approach. He had a wide range of products to tackle the different types materials he came across on the 3 vehicles to ensure each one was detailed appropriately. Can't wait to have Matt come back and maintain their incredible appearance.”",
    name: "Taso Dakas",
    date: "April 2025",
  },
  {
    quote: "“Got a ceramic coat for my sedan, car was washed thoroughly and the coating applied, came out amazing and very shiny. Highly Recommend”",
    name: "FlyingWithMar",
    date: "April 2025",
  },
  {
    quote: "“APX did an excellent job, Matt’s attention to detail is incredible. Having three dogs means our interior was an absolute mess. After APX, my Chevy Traverse looks brand new, inside and out. Highly recommend APX for anyone looking for car detailing.”",
    name: "James Sgarella",
    date: "March 2025",
  },
  {
    quote: "“Great experience. Showed up on time and was very professional. Payed attention to details. Truck looked great. Will definitely use them again.”",
    name: "George Ruth",
    date: "March 2025",
  },
  {
    quote: "“Had a great experience with APX got my truck cleaned inside and out as well as a ceramic coating and my truck looks like new. Definitely would recommend them!!”",
    name: "Matt Ruglio",
    date: "March 2025",
  },
  {
    quote: "“Matt and his team came by and cleaned up my truck. And anyone who knows me knows i don’t just let anyone touch my vehicles. I felt confident my vehicle was going to be taken care of just by the way my questions were being answered. Top notch professional and I’m pretty anal and specific. Matt walked me through the process to ensure satisfaction. I couldn’t have been more happy with my full detail and ceramic coating. If your like me ask for his top shelf package. You will not be disappointed”",
    name: "Samuel Pena",
    date: "March 2025",
  },
  {
    quote: "“Had my Ram truck detailed by these guys. They were able to get my appoint scheduled quickly, completed the work as they said they would and did it all at a very fair price. Detail of my truck both inside and out came out top-notch. I had some very particular requests and they were able to handle all of them. Highly recommend. Will continue to use them in the future.”",
    name: "Steven Hegel",
    date: "March 2025",
  },
  {
    quote: "“Brought in my daughter's 2024 Audi RS 7 for a Luxury Detailing, I am so impressed by Matt's eye for details!! The car looks brand new! I will definitely be back with my vehicle. Thanks for your hard work!!”",
    name: "Milly",
    date: "March 2025",
  },
  {
    quote: "“Matt did an excellent job very professional and definitely took care of my truck he did a full ceramic coat and detail and etc. An amazing job would highly recommend to anyone.”",
    name: "Dominick Tulipani",
    date: "March 2025",
  },
  {
    quote: "“I scheduled an appointment with APX and they did an INCREDIBLE job. I really needed my Toyota cleaned throughly. I have 3 dogs and they are in the car all of the time. Matt took his time going through and cleaning every spot. The car looks like I just picked it up from the dealership. I highly recommend to anyone, especially someone with dogs!! Haha”",
    name: "Yolanda Martinez",
    date: "March 2025",
  },
  {
    quote: "“I recently had the pleasure of having my car detailed by Matt, and I must say, the results were exceptional. His attention to detail was remarkable, and he exhibited a commendable level of flexibility in accommodating all my specific requests. I wholeheartedly recommend his services to anyone seeking top-notch car detailing.”",
    name: "Jess DiCostanzo",
    date: "March 2025",
  },
  {
    quote: "“I brought my ram truck in for a detail last month I dealt with Matt it turned out great and he is very professional”",
    name: "Perry",
    date: "February 2025",
  },
  {
    quote: "“Huge Thanks to Matt! He did an incredible job detailing my Honda Accord, My car looks and feels brand new.The interior is spotless, and the exterior has a perfect shine. Very professional and on time. Highly recommend APX car solutions for anyone looking for a nice car detailing.”",
    name: "Lizet Carreon",
    date: "February 2025",
  },
  {
    quote: "“I had my brand new Chevy Silverado ceramic coated for 2 years. The quality came out great and they do amazing work.”",
    name: "Michael Prestigiacomo",
    date: "February 2025",
  },
  {
    quote: "“Matt was great to work with! Was looking for a premium interior detail and APX Mobile Detailing has some of the most reasonable prices around with great quality work. Would highly recommend to anyone looking for a detail.”",
    name: "Christina Carpio",
    date: "February 2025",
  },
  {
    quote: "“Been using APX for some time now and can definitely say Matt is the real deal, extremely reliable and communicative. I would definitely recommend APX to the next guy, make sure to get the ceramic coating!”",
    name: "Anthony Moubayed",
    date: "February 2025",
  },
  {
    quote: "“Recently had my car detailed by APX, and it was fantastic! 10/10 would recommend will be using them again in the future!”",
    name: "kelsey mcomish",
    date: "February 2025",
  },
  {
    quote: "“This was a great quality detail. Service was unmatched and very professional will be using their services again.”",
    name: "Evan Frie",
    date: "February 2025",
  },
  {
    quote: "“I had Matt and the APX team come to my house and 2 year ceramic coat my ford ranger as well as detail my cousins car. The customer service was excellent and I signed up for their maintenance plan for both vehicles. I’d recommend them to everyone!”",
    name: "Steven Spina",
    date: "February 2025",
  },
  {
    quote: "“Recently got my car ceramic coated by APX Mobile Detailing. They did such an amazing job! Quality service, and they got my car done fast.”",
    name: "Abraham Ehiosa",
    date: "February 2025",
  },
  {
    quote: "“Matt always delivers!! He came to my house and detailed the interior of my Chevy Trax. He did an amazing job and was super professional. I would definitely recommend him to anyone! Takes his time and throughly makes every look, feel, and smell brand new! Fair priced and worth every penny!”",
    name: "Kayley Ebenhack",
    date: "February 2025",
  },
  {
    quote: "“Matt is a very respectful and diligent man. He made my car look brand new. Any one who gets Matt’s services will not be disappointed.”",
    name: "Tyler Oliver",
    date: "February 2025",
  },
  {
    quote: "“Matt and his team did such an amazing job on my black Ford Escape . The detail and time he put in on the interior of my car looks like the day I bought it. Between the great work he put in and how I didn't even have to leave the house made it worth every penny. Highly Recommend!!”",
    name: "Joey Dale Music",
    date: "February 2025",
  },
  {
    quote: "“I brought my jeep in for Ceramic Window tints to match the back. It came out great!!! I dealt with Matt and he even vacuumed my interior as well. He is extremely professional and is amazing at what he does. Totally recommend him and his company!”",
    name: "Rebecca Graf",
    date: "January 2025",
  },
  {
    quote: "“Brought my Chevy in to be detailed and they could not have done a better job! Car came out looking brand new.”",
    name: "Katerina Grammatikos",
    date: "January 2025",
  },
  {
    quote: "“I brought a car to detail at APX Mobile off word of mouth, and it turned our fantastic. Thinking about inquiring further business at the moment, and felt I should drop a review.”",
    name: "Scott Noto",
    date: "January 2025",
  },
  {
    quote: "“Matt is a professional at what he does!!! He detailed my Honda Civic and I couldn't believe the after, what an amazing transformation!! my car looked like it just left the dealership!”",
    name: "Katie Sullivan",
    date: "January 2025",
  },
  {
    quote: "“great, quick service”",
    name: "Kaitlyn Neeb",
    date: "January 2025",
  },
  {
    quote: "“Had my vehicle detailed by APX and everything came out great! Very affordable and fantastic customer service. Highly recommend!”",
    name: "NMedina90",
    date: "January 2025",
  },
  {
    quote: "“Amazing service ! My car came out brand new ! I have 3 kids and I’m a shame of the mess I always have ! They told me not to worry “ we don’t judge “ 😂 and started working on it ! Is worth every penny !”",
    name: "Ivette Fernandez",
    date: "January 2025",
  },
  {
    quote: "“I brought in my Mazda CX-30 and my Porsche 911 to get detailed. They did a wonderful job on both and they look brand new. I highly recommend their services to anyone looking for luxury detailing!!”",
    name: "Corie OBrien",
    date: "January 2025",
  },
  {
    quote: "“I had my Tahoe detailed by Matt after the summer season. Matt was able to accommodate me, where he detailed my vehicle on a work day, so I didn’t need access to my vehicle. When he picked it up dirty and it had sand in it, and when he brought it back a few hours later, the Tahoe looked great and I couldn’t find any sand.”",
    name: "Edward J Kneisler III",
    date: "January 2025",
  },
  {
    quote: "“I recently had my car detailed and ceramic coated by APX Car Solutions, and the results are amazing! Matt was professional, friendly, and extremely knowledgeable. He took the time to walk me through the entire process and made sure I knew exactly what he was going to be doing. The detailing was flawless, every inch of my car was cleaned leaving it looking brand new. The attention to detail was incredible, from the spotless interior to the sparkling exterior. It was clear that he uses top quality products and tools to get the job done. The ceramic coating gave it a glossy finish and extra protection from dirt and water, making it easier to clean and stay spotless longer. I highly recommend APX Car Solutions my car looks better than ever and is well protected for years! I highly recommend APX Car Solutions and I will definitely be coming back in the future!”",
    name: "Ariana Mariani",
    date: "January 2025",
  },
  {
    quote: "“I had my car detailed and ceramic coated by APX Car Solutions, and I’m beyond impressed! Matt is such a sweetheart!! The detailing was thorough, leaving my car spotless inside and out. The ceramic coating gives it a perfect, glossy finish and offers fantastic protection. My car’s exterior still looks spotless weeks later! I Highly recommend their professional service!”",
    name: "Lisa Remmich",
    date: "January 2025",
  },
  {
    quote: "“Matt is an amazing detailer… he detailed one of my Audis and it looked absolutely flawless. One of the best details and excellent service.”",
    name: "Bella Polizzi",
    date: "October 2024",
  },
  {
    quote: "“Great detailing and cleaning services provided for my car! Great customer service and value for your money! Definitely the best around!”",
    name: "Peter Kretschmer",
    date: "October 2024",
  },
  {
    quote: "“Had my boat detailed. They did an amazing job will be bringing them more business soon.”",
    name: "Aidan McKenna",
    date: "October 2024",
  },
  {
    quote: "“I previously had a lexus and was looking to get a full detail and some things wrapped but I was a bit skeptical taking it to a lesser known place. However the way they handled everything and the product they left me with certainly turned me into a client. Definitely bringing my jeep here next!!!”",
    name: "Nestor Coll",
    date: "October 2024",
  },
  {
    quote: "“485 detailed my entire truck from wheels all the way up to the interior. There was not a spot missed and was very detailed into his work. Great communication skills with him as well. Definitely recommend him to others. Great job as always.”",
    name: "NickDFD",
    date: "October 2024",
  },
  {
    quote: "“My truck looks amazing, did a great job. I would recommend to everyone else, thank you.”",
    name: "Matt Rajner",
    date: "October 2024",
  },
  {
    quote: "“485 detailing with Matt always delivers!! He regularly details my truck and trailer and would recommend him to anyone! Takes his time and throughly makes every look, feel, and smell brand new! Fair priced and worth every penny! Support local business and from one business to another... super professional”",
    name: "GBE Events",
    date: "October 2024",
  },
  {
    quote: "“Best car detail ever!!! I moved from Georgia to New Jersey and I used to get my car detailed down south with my regular guy but since I move up here I been searching for a new guy to detail my car and this guy blew my mind after taking it to him. I highly recommend!”",
    name: "Christian Sawyer",
    date: "October 2024",
  },
  {
    quote: "“Needed an interior clean with seat steaming and sanitizing for my daily driver. WOW. This guy goes all in and my car is cleaner than it was when I purchased it. Amazing work - OCD caliber cleaning... love it - thank you!!!”",
    name: "Nicolas Colletto",
    date: "October 2024",
  },
  {
    quote: "“They detailed my jeep and did an incredible job. Very careful and took their time to make sure nothing was missed. Highly recommend”",
    name: "Charlea Graf",
    date: "September 2024",
  },
];

export function ReviewsWall() {
  return (
    <section className="py-16 nav:py-[88px]">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[22px]">
          {REVIEWS.map((review, index) => (
            <div
              key={review.name}
              className="bg-panel border border-line rounded-md p-[26px] flex flex-col"
            >
              <Stars className="mb-3.5" />
              <p className="text-[#dcd9d3] text-[.98rem] flex-1">{review.quote}</p>
              <div className="flex items-center gap-3 mt-5">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-white text-[.95rem] font-display"
                  style={{ backgroundColor: AVATAR_COLORS[index % AVATAR_COLORS.length] }}
                >
                  {initialsOf(review.name)}
                </div>
                <div>
                  <div className="font-bold text-[.95rem]">{review.name}</div>
                  <div className="text-muted text-[.82rem]">{review.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
