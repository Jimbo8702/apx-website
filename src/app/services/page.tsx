import { pageMetadata } from "@/lib/page-metadata";
import teslaModelY from "@public/media/images/gray-tesla-model-y-rear-2.jpeg";
import { JsonLd } from "@/components/json-ld";
import { Quote } from "@/components/sections/quote";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { GiftCards } from "./_components/gift-cards";
import { ServiceDirectory } from "./_components/service-directory";
import { ServiceHero } from "./_components/service-hero";
import { Specialty } from "./_components/specialty";

const META = {
  title: "Services & Pricing in Bergen County, NJ",
  description:
    "Every APX mobile detailing service on one menu: ceramic coating, detailing, paint correction, maintenance plans, and gift cards, priced for Bergen County, NJ.",
  path: "/services",
};

export const metadata = pageMetadata(META);

export default function ServicesPage() {
  return (
    <main>
      <JsonLd data={webPageSchema({ ...META, type: "CollectionPage" })} />
      <JsonLd
        data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services" }])}
      />
      <ServiceHero
        eyebrow="Services & pricing"
        title={
          <>
            Every detailing service we offer,{" "}
            <span className="text-crimson-soft">priced upfront.</span>
          </>
        }
        copy="Ceramic coatings, full details, paint correction, maintenance plans, and specialty work. One menu with transparent pricing, and all of it done in your driveway."
        image={{
          src: teslaModelY,
          alt: "Freshly detailed gray Tesla Model Y with the APX mobile detailing van parked behind it",
          tag: "Fresh off a detail · Tesla Model Y",
        }}
      />
      <ServiceDirectory />
      <Specialty />
      <GiftCards />
      <Quote />
    </main>
  );
}
