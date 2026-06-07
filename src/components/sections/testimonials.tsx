import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Stars } from "@/components/ui/stars";

export type Review = {
  quote: string;
  initials: string;
  name: string;
  date: string;
  color: string;
};

type TestimonialsProps = {
  eyebrow?: string;
  heading: string;
  subtext?: string;
  reviews: Review[];
  id?: string;
};

export function Testimonials({
  eyebrow = "Reviews",
  heading,
  subtext,
  reviews,
  id,
}: TestimonialsProps) {
  return (
    <section id={id} className="py-16 sm:py-20 nav:py-[104px]">
      <Container>
        <div className="max-w-[40em] mb-[38px] sm:mb-[52px]">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="text-[clamp(2rem,3.6vw,2.9rem)] font-bold">{heading}</h2>
          {subtext && <p className="text-muted mt-3.5 text-[1.05rem]">{subtext}</p>}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[22px]">
          {reviews.map((review) => (
            <div
              key={review.initials + review.name}
              className="bg-panel border border-line rounded-md p-[26px] flex flex-col"
            >
              <Stars className="mb-3.5" />
              <p className="text-[#dcd9d3] text-[.98rem] flex-1">{review.quote}</p>
              <div className="flex items-center gap-3 mt-5">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-white text-[.95rem] font-display"
                  style={{ backgroundColor: review.color }}
                >
                  {review.initials}
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
