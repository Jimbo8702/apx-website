import { JsonLd } from "@/components/json-ld";
import { pageMetadata } from "@/lib/page-metadata";
import { Quote } from "@/components/sections/quote";
import { ReviewWidget } from "@/components/sections/review-widget";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

const META = {
  title: "Reviews",
  description:
    "140+ five-star reviews from APX Mobile Detailing clients across Dumont and Bergen County, NJ: ceramic coatings, paint correction, details, and maintenance.",
  path: "/reviews",
};

export const metadata = pageMetadata(META);

/* WebPage + breadcrumb only — deliberately NO Review/AggregateRating markup:
   self-serving review stars are dead since 2019 (see the SEO audit). The
   reviews are real Google exports now, but don't add review schema here. */
export default function ReviewsPage() {
  return (
    <main>
      <JsonLd data={webPageSchema(META)} />
      <JsonLd
        data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Reviews" }])}
      />
      {/* Slim panel header (same pattern as the legal pages) — no hero on purpose. */}
      <section className="border-b border-line bg-panel py-[72px]">
        <Container>
          <Eyebrow>What clients say</Eyebrow>
          <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-bold">
            140+ five-star reviews, from Alpine to Woodcliff Lake
          </h1>
          <p className="text-muted mt-3.5 text-[1.05rem] max-w-[40em]">
            Coatings, corrections, details, and maintenance visits across the 27 towns we serve,
            reviewed by the drivers who booked them.
          </p>
        </Container>
      </section>
      {/* Live Google reviews via the larger "section" Reputation Hub widget
          (the compact default embed is what every Testimonials section uses). */}
      <section className="py-[72px]">
        <Container>
          <ReviewWidget widgetId="6a24cd8525f9e2486a9b9dc8" />
        </Container>
      </section>
      <Quote />
    </main>
  );
}
