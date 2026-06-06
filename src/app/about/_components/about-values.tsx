import { CheckIcon, ShieldIcon, SparklesIcon } from "@/components/icons";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

const VALUES = [
  {
    icon: ShieldIcon,
    title: "Treated like our own",
    text: "Every vehicle gets the same obsessive attention Matt gives his own car, from a quick maintenance wash to a multi-day coating project.",
  },
  {
    icon: SparklesIcon,
    title: "No corners cut",
    text: "Pro-grade products and a meticulous, panel-by-panel process. If the finish doesn't make you say 'wow,' it isn't done.",
  },
  {
    icon: CheckIcon,
    title: "Clear communication",
    text: "You'll know what's happening from the first message to the final walkaround. No surprises and no upsell pressure.",
  },
];

export function AboutValues() {
  return (
    <section className="bg-panel py-16 sm:py-20 nav:py-[104px]">
      <Container>
        <div className="max-w-[40em] mb-[38px] sm:mb-[52px]">
          <Eyebrow>How we work</Eyebrow>
          <h2 className="text-[clamp(2rem,3.6vw,2.9rem)] font-bold">
            A standard we hold every car to
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {VALUES.map((value) => (
            <div key={value.title} className="bg-night border border-line rounded-md p-[30px]">
              <div className="w-[46px] h-[46px] rounded bg-crimson/16 flex items-center justify-center text-crimson-soft mb-[18px]">
                <value.icon size={22} />
              </div>
              <h3 className="text-[1.25rem] mb-2">{value.title}</h3>
              <p className="text-muted text-[.97rem]">{value.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
