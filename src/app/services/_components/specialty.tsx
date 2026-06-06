import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { siteConfig } from "@/lib/site-config";

/* Minimal /services-index banner: an opening for specialty work beyond cars
   (motorcycles, boats, planes) rather than a menu of repeated services. */
export function Specialty() {
  return (
    <section className="bg-panel py-16 sm:py-20 nav:py-[104px]">
      <Container>
        <div className="max-w-[640px] mx-auto text-center">
          <Eyebrow>Specialty services</Eyebrow>
          <h2 className="text-[clamp(2rem,3.6vw,2.9rem)] font-bold">
            Motorcycle, boat & plane detailing
          </h2>
          <p className="text-muted mt-3.5 text-[1.05rem]">
            Motorcycles, boats, planes, and anything else with a finish worth protecting. Tell us
            what you&apos;ve got and we&apos;ll put together a custom quote.
          </p>
          <div className="flex flex-wrap justify-center gap-3.5 mt-8">
            <Button href="#quote">Get a custom quote</Button>
            <Button variant="ghost" href={siteConfig.contact.phoneHref}>
              📞 {siteConfig.contact.phone}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
