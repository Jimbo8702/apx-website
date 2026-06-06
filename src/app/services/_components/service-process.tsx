import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

type Step = {
  title: string;
  text: string;
};

type ServiceProcessProps = {
  eyebrow: string;
  heading: string;
  steps: Step[];
};

export function ServiceProcess({ eyebrow, heading, steps }: ServiceProcessProps) {
  return (
    <section className="bg-panel py-16 sm:py-20 nav:py-[104px]">
      <Container>
        <div className="max-w-[40em] mb-[38px] sm:mb-[52px]">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="text-[clamp(2rem,3.6vw,2.9rem)] font-bold">{heading}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {steps.map((step, i) => (
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
