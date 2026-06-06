import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { siteConfig } from "@/lib/site-config";

const AMOUNTS = ["$200", "$300", "$400", "$500"];

/* Gift-card banner for the /services index. E-gift cards are arranged over
   the phone or by email for now, so the CTAs are contact links. */
export function GiftCards() {
  return (
    <section className="py-16 sm:py-20 nav:py-[104px]">
      <Container>
        <div className="max-w-[640px] mx-auto text-center">
          <Eyebrow>Gift cards</Eyebrow>
          <h2 className="text-[clamp(2rem,3.6vw,2.9rem)] font-bold">
            Give someone a spotless car
          </h2>
          <p className="text-muted mt-3.5 text-[1.05rem]">
            E-gift cards come in four amounts and put their value toward any service on this page.
            We send the card by email; they book whenever they&apos;re ready.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-7">
            {AMOUNTS.map((amount) => (
              <span
                key={amount}
                className="bg-panel border border-line rounded px-5 py-2.5 font-display font-bold text-[1.1rem]"
              >
                {amount}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3.5 mt-8">
            <Button href={siteConfig.contact.phoneHref}>📞 Call to order</Button>
            <Button variant="ghost" href={`mailto:${siteConfig.contact.email}`}>
              Email us instead
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
