import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

const STEPS = [
  {
    title: "Book in minutes",
    text: "Tell us your vehicle and what you're after. Book online or text us, and we'll confirm a time that fits your schedule.",
  },
  {
    title: "We come to you",
    text: "Our fully self-contained mobile setup arrives with its own water and power. Stay home or stay at work, your call.",
  },
  {
    title: "Drive away flawless",
    text: "We inspect every panel before we leave and don't pack up until you're 100% happy with the result.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="bg-panel py-16 sm:py-20 nav:py-[104px]">
      <Container>
        <div className="max-w-[40em] mb-[38px] sm:mb-[52px]">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="text-[clamp(2rem,3.6vw,2.9rem)] font-bold">
            Detailing without leaving home
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {STEPS.map((step, i) => (
            <div key={step.title} className="bg-night border border-line rounded-md p-[30px]">
              <div className="font-display font-extrabold text-crimson-soft text-[1.1rem] border border-line w-11 h-11 rounded flex items-center justify-center mb-[18px]">
                {i + 1}
              </div>
              <h3 className="text-[1.25rem] mb-2">{step.title}</h3>
              <p className="text-muted text-[.97rem]">{step.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
