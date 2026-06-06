import lotusEmiraDriveway from "@public/media/images/black-lotus-emira-front.jpeg";
import { CalendarIcon, CheckIcon, ShieldIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Photo } from "@/components/ui/photo";

const FEATURES = [
  {
    icon: CalendarIcon,
    title: "Flexible scheduling",
    text: "We work around your busy life, at home or at the office.",
  },
  {
    icon: ShieldIcon,
    title: "Premium products",
    text: "Only the best for your vehicle, safe for you and the environment.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why" className="py-16 sm:py-20 nav:py-[104px]">
      <Container>
        <div className="grid grid-cols-1 nav:grid-cols-2 gap-10 nav:gap-[54px] items-center">
          <div>
            <Eyebrow>Why choose us</Eyebrow>
            <h2 className="text-[clamp(2rem,3.6vw,2.9rem)] font-bold">
              New Jersey&apos;s top-rated mobile detailing
            </h2>
            <p className="text-muted text-[1.02rem] mt-4">
              Looking for top-notch mobile detailing? We bring the studio to your driveway across
              Bergen County and surrounding areas. Your time is the priority, so we work around
              your schedule, just tell us a day that works.
            </p>
            <p className="text-muted text-[1.02rem] mt-4">
              From deep interior cleaning and exterior polishing to paint correction and ceramic
              coating, we keep your vehicle pristine year-round with pro-grade, non-toxic products.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[22px] sm:gap-[26px] mt-[30px]">
              {FEATURES.map((feature) => (
                <div key={feature.title}>
                  <feature.icon size={22} className="text-crimson-soft mb-2.5" />
                  <h3 className="text-[1.08rem] mb-[5px]">{feature.title}</h3>
                  <p className="text-muted text-[.93rem]">{feature.text}</p>
                </div>
              ))}
            </div>
            <Button href="#quote" className="mt-8">
              Start your quote
            </Button>
          </div>
          <div className="relative -order-1 nav:order-none">
            <Photo
              src={lotusEmiraDriveway}
              alt="Black Lotus Emira freshly detailed in a client's driveway"
              tag="Lotus Emira · Full detail"
              sizes="(min-width: 920px) 50vw, 100vw"
              className="h-[340px] nav:h-[480px]"
            />
            <div className="absolute left-4 bottom-4 nav:-left-[22px] nav:-bottom-[22px] z-[3] bg-panel border border-line rounded-md px-6 py-5 shadow-card flex items-center gap-4">
              <div className="w-[50px] h-[50px] rounded-full bg-crimson flex items-center justify-center text-white shrink-0">
                <CheckIcon size={24} strokeWidth={2.4} />
              </div>
              <div>
                <div className="font-display font-extrabold text-[1.7rem] leading-none">100%</div>
                <div className="text-muted text-[.85rem] mt-[2px]">Satisfaction guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
