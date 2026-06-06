import { ChevronDownIcon } from "@/components/icons";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

export type Faq = {
  question: string;
  answer: string;
};

type ServiceFaqProps = {
  eyebrow?: string;
  heading: string;
  faqs: Faq[];
};

export function ServiceFaq({ eyebrow = "FAQ", heading, faqs }: ServiceFaqProps) {
  return (
    <section className="bg-panel py-16 sm:py-20 nav:py-[104px]">
      <Container>
        <div className="max-w-[40em] mx-auto text-center mb-[38px] sm:mb-[52px]">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="text-[clamp(2rem,3.6vw,2.9rem)] font-bold">{heading}</h2>
        </div>
        <div className="grid gap-3.5 max-w-[820px] mx-auto">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group bg-night border border-line rounded-md transition-colors open:border-crimson/45"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-[22px] py-[18px] font-bold text-[1.02rem] [&::-webkit-details-marker]:hidden">
                {faq.question}
                <ChevronDownIcon
                  size={16}
                  strokeWidth={2.5}
                  className="shrink-0 text-crimson-soft transition-transform duration-200 group-open:rotate-180"
                />
              </summary>
              <p className="px-[22px] pb-[18px] text-muted text-[.97rem]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
