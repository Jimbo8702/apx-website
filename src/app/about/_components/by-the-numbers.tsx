import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

/* Figures pending owner confirmation; each mirrors a claim already used elsewhere on the site. */
const STATS = [
  { value: "150+", label: "5-star reviews on Google & Yelp" },
  { value: "100%", label: "Satisfaction guarantee" },
  { value: "8+", label: "Bergen County towns served" },
  { value: "Small team", label: "Big attention to detail" },
];

export function ByTheNumbers() {
  return (
    <section className="py-16 sm:py-20 nav:py-[104px]">
      <Container>
        <div className="max-w-[40em] mb-[38px] sm:mb-[52px]">
          <Eyebrow>At a glance</Eyebrow>
          <h2 className="text-[clamp(2rem,3.6vw,2.9rem)] font-bold">What you can count on</h2>
        </div>
        <div className="grid grid-cols-2 nav:grid-cols-4 gap-6">
          {STATS.map((stat) => (
            <div key={stat.label} className="border-t-2 border-crimson/50 pt-[18px]">
              <div className="font-display font-extrabold text-[2.2rem] leading-none">
                {stat.value}
              </div>
              <div className="text-muted text-[.92rem] mt-2.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
