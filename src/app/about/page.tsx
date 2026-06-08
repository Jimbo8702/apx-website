import { pageMetadata } from "@/lib/page-metadata";
import apxTransitVan from "@public/media/images/apx-ford-transit-branded-van.jpeg";
import { ServiceHero } from "@/app/services/_components/service-hero";
import { JsonLd } from "@/components/json-ld";
import { Quote } from "@/components/sections/quote";
import { ServiceAreas } from "@/components/sections/service-areas";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { AboutValues } from "./_components/about-values";
import { FounderStory } from "./_components/founder-story";

const META = {
  title: "About APX Mobile Detailing",
  description:
    "Meet Matt, founder of APX Car Solutions: a small, owner-led team bringing detailing, coatings, and paint correction to driveways across Bergen County, NJ.",
  path: "/about",
};

export const metadata = pageMetadata(META);

/* Testimonials intentionally omitted here while all review copy is placeholder;
   the shared <Testimonials /> section drops in before <Quote /> if the owner wants it. */
export default function AboutPage() {
  return (
    <main>
      <JsonLd data={webPageSchema({ ...META, type: "AboutPage" })} />
      <JsonLd
        data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About" }])}
      />
      <ServiceHero
        eyebrow="About APX"
        title={
          <>
            Driven by passion, <span className="text-crimson-soft">finished to perfection.</span>
          </>
        }
        copy="APX Car Solutions is a small, owner-led mobile detailing team based in Dumont, New Jersey. We bring ceramic coatings, paint correction, and high-end detailing straight to your driveway, with the kind of care a volume shop can't match."
        image={{
          src: apxTransitVan,
          alt: "APX Car Solutions branded detailing van parked on a tree-lined Bergen County street",
          tag: "Bergen County · Fully mobile",
        }}
      />
      <FounderStory />
      <AboutValues />
      <ServiceAreas
        eyebrow="Where we work"
        heading="Bringing the studio to Bergen County"
        copy="Based in Dumont, we come to you across Bergen County and the surrounding northeast New Jersey towns. Not sure if we reach you? Drop your zip in the quote form and we'll confirm same day."
      />
      <Quote />
    </main>
  );
}
