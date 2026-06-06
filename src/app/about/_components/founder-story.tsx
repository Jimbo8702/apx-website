import handFinishingTruck from "@public/media/images/image_11.jpg";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Photo } from "@/components/ui/photo";

const PARAGRAPHS = [
  "My journey into auto detailing started from a genuine passion for cars and a relentless pursuit of perfection. I founded APX Car Solutions because I realized there was a gap in the market for truly reliable, high-end mobile detailing that didn't cut corners.",
  "I believe that your vehicle is more than just transportation, it's an investment and a reflection of you. That's why I treat every single car I work on as if it were my own. Whether it's a routine maintenance wash or a multi-day paint correction and ceramic coating project, my goal is to deliver results that make you say 'wow.'",
  "When you book with APX, you're not just getting a car wash. You're getting my personal commitment to excellence, clear communication from start to finish, and a level of care that volume-based detailers simply can't match.",
];

export function FounderStory() {
  return (
    <section className="py-16 sm:py-20 nav:py-[104px]">
      <Container>
        <div className="grid grid-cols-1 nav:grid-cols-2 gap-10 nav:gap-[54px] items-center">
          <div>
            <Eyebrow>Meet the founder</Eyebrow>
            <h2 className="text-[clamp(2rem,3.6vw,2.9rem)] font-bold">
              Hi, I&apos;m Matt. I started APX out of a relentless pursuit of perfection.
            </h2>
            {PARAGRAPHS.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-muted text-[1.02rem] mt-4">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="relative -order-1 nav:order-none">
            {/* TODO: swap in a real photo of Matt / the APX setup when the owner provides one */}
            <Photo
              src={handFinishingTruck}
              alt="APX detailer hand-finishing the emblem and trim on a black Ford truck"
              tag="Hands-on, every job"
              sizes="(min-width: 920px) 50vw, 100vw"
              className="h-[340px] nav:h-[480px]"
            />
            <div className="absolute left-4 bottom-4 nav:-left-[22px] nav:-bottom-[22px] z-[3] bg-panel border border-line rounded-md px-6 py-5 shadow-card">
              <div className="font-display font-extrabold text-[1.7rem] leading-none">Small team</div>
              <div className="text-muted text-[.85rem] mt-[2px]">Owner-led, every job</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
