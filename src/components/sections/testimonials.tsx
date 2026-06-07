import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ReviewWidget } from "@/components/sections/review-widget";

type TestimonialsProps = {
  eyebrow?: string;
  heading: string;
  subtext?: string;
  id?: string;
};

/* Per-page heading/subtext stay unique (anti-doorway); the body is the
   shared live Google-review widget on every page. */
export function Testimonials({
  eyebrow = "Reviews",
  heading,
  subtext,
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
        <ReviewWidget />
      </Container>
    </section>
  );
}
