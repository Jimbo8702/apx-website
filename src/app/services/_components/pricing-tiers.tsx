import { CheckIcon, ShieldIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/cn";

export type PricingTier = {
  name: string;
  /** Tag floated on the card's top border, e.g. "Most popular" (use with featured) */
  badge?: string;
  tagline: string;
  /** Verbatim price for the smallest vehicle size, e.g. "$649.00" */
  startingPrice: string;
  /** Vehicle size the starting price applies to, e.g. "Coupe/Sedan" */
  startingLabel: string;
  /** Remaining vehicle sizes, prices verbatim (empty for flat-rate services) */
  prices: { label: string; price: string }[];
  /** Label above the big price, defaults to "Starting at" (e.g. "Flat rate") */
  priceLabel?: string;
  /** Billing cadence rendered after the size label, e.g. "every 2 weeks" */
  priceSuffix?: string;
  warranty?: string;
  featured?: boolean;
};

type PricingTiersProps = {
  eyebrow: string;
  heading: string;
  subtext?: string;
  tiers: PricingTier[];
  /** Items shared by every tier, rendered once below the cards */
  included?: string[];
  includedLabel?: string;
  footnote?: string;
};

/** Splits a verbatim "$1,399.99" into big dollars + small raised cents. */
function PriceMark({ price }: { price: string }) {
  const [dollars, cents] = price.split(".");
  return (
    <span className="font-display font-bold leading-none whitespace-nowrap">
      <span className="text-[2.7rem] tracking-tight">{dollars}</span>
      {cents && <span className="text-[1.05rem] align-[1.1em]">.{cents}</span>}
    </span>
  );
}

export function PricingTiers({
  eyebrow,
  heading,
  subtext,
  tiers,
  included,
  includedLabel = "Every package includes",
  footnote,
}: PricingTiersProps) {
  return (
    <section id="pricing" className="bg-panel py-16 sm:py-20 nav:py-[104px]">
      <Container>
        <div className="max-w-[40em] mb-[38px] sm:mb-[52px]">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="text-[clamp(2rem,3.6vw,2.9rem)] font-bold">{heading}</h2>
          {subtext && <p className="text-muted mt-3.5 text-[1.05rem]">{subtext}</p>}
        </div>
        <div
          className={cn(
            "grid grid-cols-1 gap-6 items-stretch",
            tiers.length === 1 && "max-w-[420px] mx-auto",
            tiers.length === 2 && "nav:grid-cols-2 max-w-[747px] mx-auto",
            tiers.length >= 3 && "nav:grid-cols-3",
          )}
        >
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative bg-night border rounded-lg p-[30px] flex flex-col",
                tier.featured ? "border-crimson" : "border-line",
              )}
            >
              {tier.badge && (
                <span className="absolute -top-[13px] left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-crimson px-3.5 py-1 text-[.78rem] font-bold uppercase tracking-[.08em] text-white">
                  {tier.badge}
                </span>
              )}
              <h3 className="text-[1.35rem] mb-1.5">{tier.name}</h3>
              <p className="text-muted text-[.92rem] mb-7">{tier.tagline}</p>
              <div className="mt-auto">
                <p className="text-[.78rem] font-bold uppercase tracking-[.14em] text-muted">
                  {tier.priceLabel ?? "Starting at"}
                </p>
                <div className="flex items-baseline gap-2.5 mt-1.5">
                  <PriceMark price={tier.startingPrice} />
                  <span className="text-muted text-[.85rem]">
                    {tier.startingLabel}
                    {tier.priceSuffix && (
                      <span className="block text-[.8rem]">{tier.priceSuffix}</span>
                    )}
                  </span>
                </div>
                <div className="mt-5">
                  {tier.prices.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between gap-3 border-t border-line py-[9px]"
                    >
                      <span className="text-muted text-[.88rem]">{row.label}</span>
                      <span className="font-display font-bold text-[.98rem] whitespace-nowrap">
                        {row.price}
                      </span>
                    </div>
                  ))}
                </div>
                {tier.warranty && (
                  <p className="flex items-center gap-2 border-t border-line pt-3.5 text-[.86rem] text-muted">
                    <ShieldIcon size={15} className="shrink-0 text-crimson-soft" />
                    {tier.warranty}
                  </p>
                )}
                <Button
                  href="#quote"
                  variant={tier.featured ? "primary" : "ghost"}
                  className="w-full justify-center mt-5"
                >
                  Get a quote
                </Button>
              </div>
            </div>
          ))}
        </div>
        {included && included.length > 0 && (
          <div className="mt-6 bg-night border border-line rounded-lg px-[30px] py-6 flex flex-col nav:flex-row nav:items-baseline gap-3 nav:gap-8">
            <p className="font-display font-bold text-[.95rem] whitespace-nowrap shrink-0">
              {includedLabel}
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2.5">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-2 text-muted text-[.88rem]">
                  <CheckIcon
                    size={16}
                    strokeWidth={3}
                    className="shrink-0 rounded-full bg-crimson/18 p-[3px] text-crimson-soft"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        {footnote && <p className="text-center mt-[34px] text-muted text-[.92rem]">{footnote}</p>}
      </Container>
    </section>
  );
}
