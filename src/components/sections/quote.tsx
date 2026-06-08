import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { siteConfig } from "@/lib/site-config";
import { QuoteEmbed } from "./quote-embed";

export function Quote() {
  return (
    <section id="quote" className="relative py-16 sm:py-20 nav:py-[104px]">
      <Container>
        <div className="grid grid-cols-1 nav:grid-cols-[0.7fr_1.3fr] gap-[34px] nav:gap-[50px] items-center">
          <div>
            <Eyebrow>Free quote</Eyebrow>
            <h2 className="text-[clamp(2rem,3.6vw,2.9rem)]">Get your free, no-pressure quote</h2>
            <p className="text-muted mt-4 mb-[26px] text-[1.05rem]">
              Tell us a little about your vehicle and we&apos;ll text you back with pricing and the
              next available slot, usually same day.
            </p>
            <div className="flex gap-3.5 flex-wrap items-center">
              <Button variant="ghost" href={siteConfig.contact.phoneHref}>
                📞 {siteConfig.contact.phone}
              </Button>
            </div>
          </div>
          <QuoteEmbed />
        </div>
      </Container>
    </section>
  );
}
