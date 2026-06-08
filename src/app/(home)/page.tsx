import { Gallery } from "./_components/gallery";
import { Hero } from "./_components/hero";
import { HowItWorks } from "./_components/how-it-works";
import { Quote } from "@/components/sections/quote";
import { MailingList } from "./_components/mailing-list";
import { Reviews } from "./_components/reviews";
import { ServiceAreas } from "@/components/sections/service-areas";
import { Services } from "./_components/services";
import { WhyChooseUs } from "./_components/why-choose-us";
import { JsonLd } from "@/components/json-ld";
import { pageMetadata } from "@/lib/page-metadata";
import { webPageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

const META = {
  title: siteConfig.defaultTitle,
  description: siteConfig.defaultDescription,
  path: "/",
};

export const metadata = pageMetadata({ ...META, absoluteTitle: true });

export default function Home() {
  return (
    <main>
      <JsonLd data={webPageSchema(META)} />
      <Hero />
      <WhyChooseUs />
      <Services />
      <HowItWorks />
      <Gallery />
      <Reviews />
      <ServiceAreas
        id="areas"
        heading="Serving customers across New Jersey"
        copy="Not sure if we reach you? Send your zip in the quote form and we'll confirm same-day. Most of northeast New Jersey is covered."
      />
      <Quote />
      {/* <MailingList /> */}
    </main>
  );
}
