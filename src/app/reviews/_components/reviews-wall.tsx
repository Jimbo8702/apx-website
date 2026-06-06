import { Container } from "@/components/ui/container";
import { Stars } from "@/components/ui/stars";

type WallReview = {
  quote: string;
  name: string;
  town: string;
};

/* Rotates through the same avatar palette the home testimonials use. */
const AVATAR_COLORS = ["#7a1f1f", "#1f4d7a", "#2f6e4a", "#6a4d1f", "#5a2f6e"];

const initialsOf = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("");

/* Placeholder reviews standing in for the real 150 Google/Yelp exports.
   Reviewer first names are unique site-wide (none repeat on the home, service,
   or town pages); swap these out 1:1 when the owner exports the real reviews. */
const REVIEWS: WallReview[] = [
  {
    quote:
      "“Had the 5-year ceramic done on my brand new Lexus two weeks after I picked it up. Water flies off and it still looks freshly waxed a month later. Should have done this years ago.”",
    name: "Brandon T.",
    town: "Tenafly, NJ",
  },
  {
    quote: "“Fast, friendly, and the car came out flawless. Already booked my next visit.”",
    name: "Gwen R.",
    town: "Dumont, NJ",
  },
  {
    quote:
      "“Three kids, two car seats, and a juice box situation I was embarrassed about. The van came back looking and smelling like new. These guys don't judge, they just fix it.”",
    name: "Carlos M.",
    town: "Bergenfield, NJ",
  },
  {
    quote:
      "“The two step correction took years of swirls out of my black 7 Series. I watched the before and after under their lights and could not believe it was the same hood.”",
    name: "Fiona W.",
    town: "Alpine, NJ",
  },
  {
    quote:
      "“Worked from my kitchen while they detailed both cars in the driveway. No drop offs, no waiting rooms, no rides needed. This is the only way I'll get my cars done now.”",
    name: "Dustin K.",
    town: "Fair Lawn, NJ",
  },
  {
    quote:
      "“Monthly plan for six months now and the car never gets a chance to look bad. Same crew, same standard, every visit.”",
    name: "Esther L.",
    town: "Paramus, NJ",
  },
  {
    quote:
      "“Full front PPF before a summer of Garden State Parkway commuting. Two rock strikes already and the paint underneath doesn't have a mark.”",
    name: "Jamal W.",
    town: "Fort Lee, NJ",
  },
  {
    quote: "“My interior hasn't looked this clean since the day I leased it. Ten out of ten.”",
    name: "Annie D.",
    town: "New Milford, NJ",
  },
  {
    quote:
      "“A parking garage pillar left scratches I was sure needed a body shop. They wet sanded and polished them out in an afternoon. Saved me a repaint.”",
    name: "Geoff H.",
    town: "Saddle River, NJ",
  },
  {
    quote:
      "“Two golden retrievers and a hatchback is a rough combination. They got every last hair out, even the ones woven into the carpet. Miracle workers.”",
    name: "Brooke S.",
    town: "Hillsdale, NJ",
  },
  {
    quote:
      "“The wash, clay, and sealant package made my five year old Accord look like it just rolled off the lot. The trim and wheels got as much attention as the paint.”",
    name: "Brett A.",
    town: "Hackensack, NJ",
  },
  {
    quote:
      "“Bought a gift card for my husband's birthday and now he won't stop talking about his truck. Easiest gift I've ever given.”",
    name: "Celeste V.",
    town: "Demarest, NJ",
  },
  {
    quote:
      "“Texted for a quote at 9am, had a confirmed appointment by lunch, car detailed by Friday. Communication was perfect the whole way.”",
    name: "Hugo M.",
    town: "Teaneck, NJ",
  },
  {
    quote:
      "“They treated my 12 year old Camry like it was a Ferrari. It hasn't looked this good in a decade.”",
    name: "Diane F.",
    town: "Emerson, NJ",
  },
  {
    quote:
      "“One step polish and the 2-year coating on my GTI. The flake in the paint pops in the sun now. They explained every option clearly before I spent a dime.”",
    name: "Connor B.",
    town: "Ridgewood, NJ",
  },
  {
    quote:
      "“First time using a mobile detailer and I had a lot of questions. They answered every one, showed up on time, and over-delivered. Customer for life.”",
    name: "Anita R.",
    town: "Waldwick, NJ",
  },
  {
    quote:
      "“I park outside at the train station every day. The exterior detail brought the paint back from chalky to glossy, and the sealant is keeping it that way.”",
    name: "Desmond P.",
    town: "Maywood, NJ",
  },
  {
    quote:
      "“Cheerios in every crevice and crayon on the door panel. Gone. All of it. I don't know how and I don't ask.”",
    name: "Haley N.",
    town: "Glen Rock, NJ",
  },
  {
    quote:
      "“After a brutal winter the carpets were white with salt rings. The extraction got them back to factory black. Should have called these guys in January.”",
    name: "Ivan S.",
    town: "Northvale, NJ",
  },
  {
    quote:
      "“The Full Premium Detail is worth every dollar. Four straight hours of attention to detail and it shows. My SUV is spotless inside and out, down to the vents.”",
    name: "Carrie T.",
    town: "Old Tappan, NJ",
  },
  {
    quote:
      "“My work truck sees job sites five days a week. They degreased, deep cleaned, and sealed it like it was a show car. Booked the exterior plan on the spot.”",
    name: "Eduardo G.",
    town: "Saddle Brook, NJ",
  },
  {
    quote: "“Professional, punctual, and the results speak for themselves. Five stars.”",
    name: "Gemma K.",
    town: "Park Ridge, NJ",
  },
  {
    quote:
      "“They did a light polish and the 2-year ceramic on my weekend Corvette. It looks better than it did at the dealership in 2019.”",
    name: "Harold W.",
    town: "Woodcliff Lake, NJ",
  },
  {
    quote:
      "“Spilled an iced coffee on a beige interior on a Tuesday. By Thursday you couldn't tell anything happened. Lifesavers.”",
    name: "Jade L.",
    town: "Harrington Park, NJ",
  },
  {
    quote:
      "“Researched coatings for months before choosing APX. The application process was meticulous and the maintenance instructions were clear. The beading is incredible.”",
    name: "Amir H.",
    town: "Norwood, NJ",
  },
  {
    quote:
      "“Between carpools and beach weekends my SUV was a disaster. Now it's the cleanest car in the school pickup line.”",
    name: "Dawn C.",
    town: "Cresskill, NJ",
  },
  {
    quote:
      "“These guys are Dumont based and it shows. On time, courteous, and the quality is shop-level without ever leaving my driveway.”",
    name: "Gus F.",
    town: "Dumont, NJ",
  },
  {
    quote:
      "“Got the full detail before my lease return and the inspector found nothing to charge me for. Paid for itself ten times over.”",
    name: "Chloe B.",
    town: "Haworth, NJ",
  },
  {
    quote:
      "“They detailed my car right in my building's parking deck. Brought their own water and power, left the spot cleaner than they found it.”",
    name: "Ethan D.",
    town: "Fort Lee, NJ",
  },
  {
    quote:
      "“My grandson booked them for me and stayed to watch. Two lovely young men who clearly take pride in their work. The car sparkles.”",
    name: "Gloria M.",
    town: "Fair Lawn, NJ",
  },
  {
    quote:
      "“My car lives in office park lots and it was covered in fine scratches. The one step correction cleared up most of them, and they were honest about what it would and wouldn't fix.”",
    name: "Jared S.",
    town: "Paramus, NJ",
  },
  {
    quote: "“Immaculate work. The attention to detail on the interior is unmatched in Bergen County.”",
    name: "Cindy P.",
    town: "Tenafly, NJ",
  },
  {
    quote:
      "“They detailed my Road King before bike week. Chrome, leather, and paint all perfect. Hard to find people who treat a motorcycle right.”",
    name: "Barry L.",
    town: "New Milford, NJ",
  },
  {
    quote:
      "“Booked around my night shifts without any fuss. Came at 7am, worked quietly, and my car was done before I woke up. Five stars for flexibility alone.”",
    name: "Emily V.",
    town: "Bergenfield, NJ",
  },
  {
    quote:
      "“They do all four of our cars twice a month. Consistent, trustworthy, and the cars always look concours ready.”",
    name: "Cliff R.",
    town: "Alpine, NJ",
  },
  {
    quote:
      "“Detailed the car the week before our baby came home. Every surface cleaned and spotless. One less thing to stress about.”",
    name: "Fatima A.",
    town: "Teaneck, NJ",
  },
  {
    quote:
      "“Showed up on time, did exactly what they quoted, charged exactly what they quoted. Rare these days.”",
    name: "Dale N.",
    town: "Hackensack, NJ",
  },
  {
    quote:
      "“White paint, black wheels, zero swirls. After the correction and coating my Stinger gets compliments at every red light.”",
    name: "Jasmine T.",
    town: "Emerson, NJ",
  },
  {
    quote:
      "“I've been hand washing my own cars for forty years. Watched their process start to finish and learned a few things. These guys know paint.”",
    name: "Herb G.",
    town: "Hillsdale, NJ",
  },
  {
    quote:
      "“The ceramic coating made winter so much easier. Road grime rinses off with a garden hose now. Best money I've spent on this car.”",
    name: "Colleen M.",
    town: "Ridgewood, NJ",
  },
  {
    quote: "“Top notch detail, fair price, zero hassle. What more do you want?”",
    name: "Evan P.",
    town: "Glen Rock, NJ",
  },
  {
    quote:
      "“Years of commuting funk gone in one visit. The steam cleaning got into seams I didn't know existed. Smells like a new car again.”",
    name: "Diana K.",
    town: "Demarest, NJ",
  },
  {
    quote:
      "“Detailed my Pilot before listing it and I swear it added real money to the sale. Sold in two days, first showing.”",
    name: "Hal B.",
    town: "Maywood, NJ",
  },
  {
    quote:
      "“We have them maintain both family cars monthly. Discreet, punctual, and the results are flawless every single time.”",
    name: "Francesca R.",
    town: "Saddle River, NJ",
  },
  {
    quote: "“Second visit was as good as the first. That consistency is why I keep booking.”",
    name: "Corey J.",
    town: "Waldwick, NJ",
  },
  {
    quote:
      "“May pollen had my black sedan looking green. One exterior detail later it's a mirror, and the sealant makes the pollen rinse right off now.”",
    name: "Janice H.",
    town: "Northvale, NJ",
  },
  {
    quote:
      "“Trusted them with my Cayman after reading reviews for weeks. The paint correction was flawless, and they walked me through every step under the lights.”",
    name: "Declan F.",
    town: "Cresskill, NJ",
  },
  {
    quote:
      "“Booked a detail for my daughter's first car as a surprise. They made a ten year old Civic look brand new. She cried, I cried.”",
    name: "Iris W.",
    town: "Old Tappan, NJ",
  },
  {
    quote:
      "“Salt film on every panel after February. They stripped it all and sealed the paint. The car genuinely looks wet when it's dry.”",
    name: "Damian L.",
    town: "Saddle Brook, NJ",
  },
  {
    quote: "“Quick quote, easy booking, gorgeous results. Highly recommend APX.”",
    name: "Abby G.",
    town: "Park Ridge, NJ",
  },
  {
    quote:
      "“Watched them work from my porch for five hours. Never rushed a single panel. You're paying for craftsmanship and you get it.”",
    name: "Eugene T.",
    town: "Dumont, NJ",
  },
  {
    quote:
      "“I drive rideshare full time and a clean car means better ratings. The bi-weekly plan keeps me at five stars, literally.”",
    name: "Chelsea D.",
    town: "Fort Lee, NJ",
  },
  {
    quote:
      "“PPF on the full front of my new X7. The film is invisible, edges wrapped, no bubbles. I inspect it monthly and it still looks like day one.”",
    name: "Glen P.",
    town: "Woodcliff Lake, NJ",
  },
  {
    quote:
      "“They treat your driveway like an operating room. Careful with the landscaping, spotless cleanup. And the car? Stunning.”",
    name: "Bonnie S.",
    town: "Harrington Park, NJ",
  },
  {
    quote:
      "“The team talked me out of a more expensive package because my paint didn't need it. That honesty earned them a customer for life.”",
    name: "Isaac M.",
    town: "Norwood, NJ",
  },
  {
    quote:
      "“My husband is impossible to impress. He walked around the car twice and just said wow. That's a first.”",
    name: "Darlene B.",
    town: "Haworth, NJ",
  },
  {
    quote:
      "“College kid budget, so I started with the interior detail. So impressed I saved up for the exterior the next month. Quality at every price point.”",
    name: "Caleb R.",
    town: "Fair Lawn, NJ",
  },
  {
    quote: "“The before and after photos they sent me looked fake. They weren't. Incredible.”",
    name: "Gina C.",
    town: "Paramus, NJ",
  },
  {
    quote:
      "“Had three different shops quote my correction. APX wasn't the cheapest, but they were the most knowledgeable by far. The results justified every penny.”",
    name: "Howard F.",
    town: "Tenafly, NJ",
  },
  {
    quote:
      "“Done in my driveway while I worked upstairs. Got a text when they started and a walkthrough when they finished. Seamless.”",
    name: "Jackie M.",
    town: "Bergenfield, NJ",
  },
  {
    quote:
      "“Black paint is unforgiving and mine was a swirled mess. After two days with APX it looks like poured glass. Cannot recommend the two step enough.”",
    name: "Adrian V.",
    town: "Hackensack, NJ",
  },
  {
    quote: "“Lovely team, beautiful work, fair pricing. My new go-to.”",
    name: "Cheryl N.",
    town: "Emerson, NJ",
  },
  {
    quote:
      "“Booked the works before my wedding. The Charger was the shiniest thing at the venue after the bride's ring.”",
    name: "Jacob K.",
    town: "Hillsdale, NJ",
  },
  {
    quote:
      "“I can't get to a car wash with my schedule, let alone a detailer. Them coming to me is the only reason my car is clean. And it's not just clean, it's perfect.”",
    name: "Eileen R.",
    town: "Teaneck, NJ",
  },
  {
    quote:
      "“Fellow car guy here. Their pad and polish choices were exactly right for my soft Italian paint. Trust them with anything.”",
    name: "Enzo B.",
    town: "Glen Rock, NJ",
  },
  {
    quote:
      "“At my age I don't drive much, but I like a clean car. They're patient, kind, and thorough. My Buick has never been happier.”",
    name: "Dorothy W.",
    town: "New Milford, NJ",
  },
  {
    quote:
      "“Under the car seats was a horror show of crumbs and raisins. Not anymore. The interior looks factory fresh.”",
    name: "Gavin S.",
    town: "Ridgewood, NJ",
  },
  {
    quote:
      "“They've maintained our cars for months and I've never had to follow up on a single thing. Reliability like this is rare.”",
    name: "Hazel T.",
    town: "Alpine, NJ",
  },
  {
    quote: "“Honest guys, great work, easy scheduling. Five stars earned.”",
    name: "Dennis M.",
    town: "Maywood, NJ",
  },
  {
    quote:
      "“The Aston's leather looked tired. After their interior detail it looks and smells like the showroom. Artists, truly.”",
    name: "Catherine L.",
    town: "Demarest, NJ",
  },
  {
    quote:
      "“Skeptical that mobile could match a shop. I was wrong. The lighting rig, the products, the patience. Shop quality on my own blacktop.”",
    name: "Darius F.",
    town: "Saddle Brook, NJ",
  },
  {
    quote:
      "“Scheduled a detail for my mom's car while she was at church. The look on her face when she got home was priceless. Thank you APX.”",
    name: "Clara H.",
    town: "Northvale, NJ",
  },
  {
    quote:
      "“Boat detail before splash day. The gelcoat came back to a full shine and the interior vinyl looks new. They handled a custom job like pros.”",
    name: "Bill D.",
    town: "Old Tappan, NJ",
  },
  {
    quote: "“Punctual, polite, and my car looks phenomenal. Booking quarterly from now on.”",
    name: "Courtney V.",
    town: "Cresskill, NJ",
  },
  {
    quote:
      "“Neighbors literally stopped to ask who did my car. Told every one of them APX. Dumont should be proud of these guys.”",
    name: "Carl P.",
    town: "Dumont, NJ",
  },
  {
    quote:
      "“The maintenance plan is the best money I spend each month. My car simply never looks dirty anymore.”",
    name: "Brenda M.",
    town: "Park Ridge, NJ",
  },
  {
    quote:
      "“Ceramic coated my Model 3 and the difference in upkeep is night and day. Bug splatter wipes off with one pass.”",
    name: "Jay R.",
    town: "Woodcliff Lake, NJ",
  },
  {
    quote:
      "“High rise living means no hose and no driveway. They brought everything up to the deck and made it work flawlessly. My only option, and luckily a great one.”",
    name: "Ellen G.",
    town: "Fort Lee, NJ",
  },
  {
    quote:
      "“First detail ever at 64 years old. Now I get why people rave. The car feels brand new and so do I driving it.”",
    name: "Dominic T.",
    town: "Waldwick, NJ",
  },
  {
    quote: "“From quote to finished car, the whole experience was effortless. Stunning results.”",
    name: "Amanda B.",
    town: "Harrington Park, NJ",
  },
  {
    quote:
      "“Garage kept M5 with sentimental value. I don't trust it with anyone, but their reviews convinced me and the work exceeded them. The paint is flawless.”",
    name: "Bruce K.",
    town: "Tenafly, NJ",
  },
  {
    quote:
      "“The vomit incident we don't talk about? Handled. Extracted, sanitized, deodorized. You'd never know. Heroes.”",
    name: "Crystal J.",
    town: "Hackensack, NJ",
  },
  {
    quote:
      "“Between my commute and my kids' practices the car never gets attention. Their monthly visits solved a problem I'd given up on.”",
    name: "Aaron D.",
    town: "Bergenfield, NJ",
  },
  {
    quote: "“Forty years of car ownership, best detail I've ever had. Period.”",
    name: "Gerald S.",
    town: "Emerson, NJ",
  },
  {
    quote:
      "“Asked a hundred questions before booking the ceramic. They answered every one without making me feel rushed. The coating is gorgeous.”",
    name: "Danielle R.",
    town: "Fair Lawn, NJ",
  },
  {
    quote:
      "“Three cars, one morning, all perfect. The logistics alone impressed me. The finish quality even more.”",
    name: "Hugh B.",
    town: "Saddle River, NJ",
  },
  {
    quote:
      "“My old CR-V was the dog car for ten years. They gave it a second life. No hair, no smell, no trace.”",
    name: "Eva M.",
    town: "Teaneck, NJ",
  },
  {
    quote:
      "“The polish brought back a shine my car hasn't had since 2018, and the coating should keep it there for years. Money well spent.”",
    name: "Cameron W.",
    town: "Glen Rock, NJ",
  },
  {
    quote:
      "“They worked around a sprinkler mishap and a nosy dog and still finished on time with a perfect car. Unflappable.”",
    name: "Barb F.",
    town: "Hillsdale, NJ",
  },
  {
    quote: "“Real pros. The paint looks wet from ten feet away.”",
    name: "Elijah P.",
    town: "Maywood, NJ",
  },
  {
    quote:
      "“Hosting a wedding party meant our SUV was the shuttle. APX had it spotless and gleaming for every photo. Bridal party approved.”",
    name: "Fran T.",
    town: "Ridgewood, NJ",
  },
  {
    quote:
      "“The exterior plan keeps my daily presentable between full details. Per visit pricing, no surprises, great results.”",
    name: "Andrew C.",
    town: "Norwood, NJ",
  },
  {
    quote:
      "“White interior and a toddler with markers. I thought it was hopeless. It was not. Every stain gone.”",
    name: "Cara V.",
    town: "Demarest, NJ",
  },
  {
    quote:
      "“Their care around my piano black trim, the part every shop scratches, told me everything. Not a single new mark. Masters of their craft.”",
    name: "Harvey L.",
    town: "Alpine, NJ",
  },
  {
    quote: "“Beautiful work and the nicest people. My car thanks you.”",
    name: "Amber N.",
    town: "New Milford, NJ",
  },
  {
    quote:
      "“Parking at the office was death by a thousand swirls. The correction erased years of damage and the PPF should stop the next thousand.”",
    name: "Ezra K.",
    town: "Paramus, NJ",
  },
  {
    quote:
      "“Retired mechanic here. I notice corners being cut and these guys cut none. Even the door jambs were perfect.”",
    name: "Bernie W.",
    town: "Cresskill, NJ",
  },
  {
    quote:
      "“Quoted me honestly, showed up early, finished strong. My Tacoma looks better than the day I bought it used.”",
    name: "Chad M.",
    town: "Dumont, NJ",
  },
  {
    quote:
      "“The team buffed out a scuff from a shopping cart at no extra charge while doing my detail. Small thing, big impression.”",
    name: "Denise A.",
    town: "Haworth, NJ",
  },
  {
    quote: "“Flawless finish, friendly crew, fair quote. The trifecta.”",
    name: "Gabe H.",
    town: "Old Tappan, NJ",
  },
  {
    quote:
      "“I gifted my husband the full detail for our anniversary. He says it's the best gift in 30 years of marriage. I'm choosing not to be offended.”",
    name: "Helen S.",
    town: "Northvale, NJ",
  },
  {
    quote:
      "“My Miata sees track days and the front end was getting peppered. The film went on cleanly, and after two events it still looks perfect.”",
    name: "Javier D.",
    town: "Saddle Brook, NJ",
  },
  {
    quote:
      "“Booked the interior detail after a long road trip with three kids. Sand, slime, and a mystery smell, all gone. Wizards.”",
    name: "Brittany K.",
    town: "Park Ridge, NJ",
  },
  {
    quote:
      "“Done right, on time, no excuses. That work ethic is why I've referred half my street.”",
    name: "Earl V.",
    town: "Woodcliff Lake, NJ",
  },
  {
    quote: "“City commuting was destroying my paint. The coating changed everything. Thank you APX!”",
    name: "Alyssa M.",
    town: "Fort Lee, NJ",
  },
  {
    quote:
      "“Got the one step correction on my wife's Pilot before her birthday. She thought I bought a new car. Best reaction ever.”",
    name: "Don R.",
    town: "Waldwick, NJ",
  },
  {
    quote:
      "“Every product they used was explained, every step had a reason. The most transparent detailers I've dealt with in 25 years of car ownership.”",
    name: "Gene F.",
    town: "Harrington Park, NJ",
  },
  {
    quote: "“Exquisite work on the Range Rover. The team is welcome back anytime.”",
    name: "Jane B.",
    town: "Tenafly, NJ",
  },
  {
    quote:
      "“Crusty work van turned client-ready in one afternoon. My business looks better because my van does.”",
    name: "Dean K.",
    town: "Hackensack, NJ",
  },
  {
    quote:
      "“They fit me in before a holiday weekend when everyone else was booked out. Speedy, but nothing about the work felt rushed.”",
    name: "Claudia P.",
    town: "Bergenfield, NJ",
  },
  {
    quote:
      "“The ceramic made my red paint look a foot deep. Strangers ask if it's a new car. It's a 2019.”",
    name: "Austin G.",
    town: "Emerson, NJ",
  },
  {
    quote:
      "“Five months pregnant and could not deal with cleaning the car. They handled everything while I napped. Came out perfect.”",
    name: "Amy K.",
    town: "Glen Rock, NJ",
  },
  {
    quote:
      "“The wet sanding quote was half what the body shop wanted for the same scratch. The result is invisible. Easy choice in hindsight.”",
    name: "Brendan F.",
    town: "Hillsdale, NJ",
  },
  {
    quote: "“Spotless. Gleaming. On time. What else is there to say?”",
    name: "Carmen D.",
    town: "Maywood, NJ",
  },
  {
    quote:
      "“The detail before Cars and Coffee got my E30 more attention than cars worth ten times as much. Prep matters and they nail it.”",
    name: "Dylan T.",
    town: "Ridgewood, NJ",
  },
  {
    quote:
      "“Every quarter like clockwork. Our family hauler stays presentable and I never lift a finger. Set it and forget it.”",
    name: "April S.",
    town: "Norwood, NJ",
  },
  {
    quote:
      "“Bird droppings baked into the hood all summer. They leveled the etching and coated the paint. Looks like it never happened.”",
    name: "Charlie M.",
    town: "Demarest, NJ",
  },
  {
    quote:
      "“White glove service from the first phone call. They covered the cobblestones, worked quietly, and the Bentley looks spectacular.”",
    name: "Evelyn R.",
    town: "Alpine, NJ",
  },
  {
    quote:
      "“Brought my Monte Carlo out of winter storage looking flat. One polish later it's ready for cruise night. These guys get old paint.”",
    name: "Angelo B.",
    town: "New Milford, NJ",
  },
  {
    quote: "“My minivan has never been this clean. Not even at purchase. Amazing.”",
    name: "Betsy L.",
    town: "Paramus, NJ",
  },
  {
    quote:
      "“The 5-year ceramic was an investment, but six months in I've skipped a dozen car washes and the gloss hasn't budged. The math works.”",
    name: "Ian C.",
    town: "Cresskill, NJ",
  },
  {
    quote: "“Local, honest, and meticulous. Supporting a Dumont business this good is easy.”",
    name: "Debbie H.",
    town: "Dumont, NJ",
  },
  {
    quote:
      "“Pollen, sap, and a tree full of birds over my driveway. The coating they applied turned weekly scrubbing into a thirty second rinse.”",
    name: "Cole W.",
    town: "Haworth, NJ",
  },
  {
    quote:
      "“They steamed ten years of life out of my upholstery. I keep sitting in the car in the garage just to enjoy it.”",
    name: "Arlene P.",
    town: "Old Tappan, NJ",
  },
  {
    quote:
      "“Compared four detailers on reviews and response time. APX won both, then backed it up with flawless work on my Q5.”",
    name: "Deepak N.",
    town: "Teaneck, NJ",
  },
  {
    quote: "“Easy booking, great communication, perfect results. Will use again.”",
    name: "Casey B.",
    town: "Saddle Brook, NJ",
  },
  {
    quote:
      "“The crew handled my numbers-matching GTO with museum care. Polished by hand where it mattered. You can trust them with the irreplaceable.”",
    name: "Harry F.",
    town: "Woodcliff Lake, NJ",
  },
  {
    quote:
      "“The repainted fender never quite matched until they polished and coated the whole car. Now it's seamless. Sharp eyes and honest advice.”",
    name: "Andrea M.",
    town: "Fair Lawn, NJ",
  },
  {
    quote:
      "“Don't let the driveway setup fool you. The products, lighting, and patience match any high-end shop I've used in the city.”",
    name: "Ed T.",
    town: "Emerson, NJ",
  },
  {
    quote: "“They made the valet scratches on my bumper disappear. Like magic, but with more polishing.”",
    name: "Emma S.",
    town: "Fort Lee, NJ",
  },
  {
    quote:
      "“Work two jobs, zero free weekends. They detailed my car in the lot during my shift. Above and beyond doesn't cover it.”",
    name: "Bryan D.",
    town: "Bergenfield, NJ",
  },
  {
    quote:
      "“The leather, the carpets, the glass, the trim. Every single surface was perfect. I checked with a flashlight. Twice.”",
    name: "Cynthia G.",
    town: "Tenafly, NJ",
  },
  {
    quote:
      "“New driver, first car, and dad bought me a detail to celebrate. Even my beat-up Corolla can look good apparently.”",
    name: "Aidan R.",
    town: "Park Ridge, NJ",
  },
  {
    quote:
      "“The Bronco came back from the Pine Barrens wearing half the trail. They got mud out of places I didn't know existed.”",
    name: "Fred V.",
    town: "Northvale, NJ",
  },
  {
    quote: "“Booked Monday, detailed Wednesday, smiling since. Wonderful local business.”",
    name: "Ashley K.",
    town: "Hackensack, NJ",
  },
  {
    quote:
      "“I maintain a small collection and tried them on one car as a test. They now do all five. That should tell you everything.”",
    name: "Giovanni L.",
    town: "Saddle River, NJ",
  },
  {
    quote:
      "“Straight shooters. Told me my paint only needed a one step, not the two step I asked about. Saved me money and the result is perfect.”",
    name: "Clay M.",
    town: "Waldwick, NJ",
  },
  {
    quote:
      "“The engineer in me appreciated their process: inspect, measure, test spot, then polish. The results matched the rigor. Outstanding.”",
    name: "Arjun P.",
    town: "Glen Rock, NJ",
  },
  {
    quote: "“My Jeep finally looks loved. Great guys, great work.”",
    name: "Bobby C.",
    town: "Maywood, NJ",
  },
  {
    quote:
      "“Scheduled three days out, arrived to the minute, finished when promised. The detail itself? Even better than the punctuality.”",
    name: "Eli D.",
    town: "Harrington Park, NJ",
  },
  {
    quote:
      "“The interior reset before my in-laws visited saved me a week of cleaning. They even got the dog nose art off every window.”",
    name: "Danny W.",
    town: "Hillsdale, NJ",
  },
  {
    quote:
      "“My delivery van takes a beating and the bi-weekly visits keep it looking professional. Customers notice, and so does my bottom line.”",
    name: "Cedric J.",
    town: "Norwood, NJ",
  },
  {
    quote: "“Quality, courtesy, and consistency. APX has all three.”",
    name: "Ben H.",
    town: "Demarest, NJ",
  },
  {
    quote:
      "“The sap drips from our oak finally met their match. Clay bar, polish, seal. The hood is glass again.”",
    name: "Darren F.",
    town: "Ridgewood, NJ",
  },
  {
    quote:
      "“Been telling everyone at the diner about these guys. Home town quality you can see from across the street.”",
    name: "Al R.",
    town: "Dumont, NJ",
  },
  {
    quote:
      "“As someone with allergies, the deep interior clean was life changing. Dust, dander, all of it gone. I can finally drive without sneezing.”",
    name: "Jamie N.",
    town: "Cresskill, NJ",
  },
  {
    quote:
      "“Zero worries leaving them alone with the garage. Insured, careful, and frankly better than the shop my dealer uses.”",
    name: "Jack S.",
    town: "Alpine, NJ",
  },
  {
    quote:
      "“Inherited my father's Thunderbird and wanted it treated right. They restored the shine with respect for the original paint. Dad would approve.”",
    name: "Henry M.",
    town: "New Milford, NJ",
  },
  {
    quote:
      "“Every panel, every seam, every spoke. I looked for a missed spot and gave up. The full detail is aptly named.”",
    name: "Craig B.",
    town: "Teaneck, NJ",
  },
  {
    quote:
      "“They turned my tired old wagon into the best looking car on the block. My wife says I smile every time I walk past it. She's right.”",
    name: "Ernie K.",
    town: "Paramus, NJ",
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
                  <div className="text-muted text-[.82rem]">{review.town}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
