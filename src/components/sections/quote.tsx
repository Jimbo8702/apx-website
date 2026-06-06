"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Field } from "@/components/ui/field";
import { Input, Textarea } from "@/components/ui/input";
import { siteConfig } from "@/lib/site-config";

export function Quote() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="quote" className="relative py-16 sm:py-20 nav:py-[104px]">
      <Container>
        <div className="grid grid-cols-1 nav:grid-cols-2 gap-[34px] nav:gap-[50px] items-center">
          <div>
            <Eyebrow>Book online</Eyebrow>
            <h2 className="text-[clamp(2rem,3.6vw,2.9rem)]">Get your free, no-pressure quote</h2>
            <p className="text-muted mt-4 mb-[26px] text-[1.05rem]">
              View pricing and book any service online 24/7. Or tell us a little about your vehicle
              and we&apos;ll text you back with pricing and the next available slot, usually same
              day.
            </p>
            <div className="flex gap-3.5 flex-wrap items-center">
              <Button href="/services">Book online instantly</Button>
              <Button variant="ghost" href={siteConfig.contact.phoneHref}>
                📞 {siteConfig.contact.phone}
              </Button>
            </div>
          </div>
          <div className="bg-panel border border-line rounded-lg p-[34px] shadow-card">
            {submitted ? (
              <div className="text-center py-[30px] px-2.5">
                <h3 className="text-[1.6rem] mb-2">Thanks, you&apos;re in! 🎉</h3>
                <p className="text-muted">
                  We&apos;ve got your request and will text you shortly with pricing and
                  availability. In a hurry? Call{" "}
                  <a href={siteConfig.contact.phoneHref} className="text-crimson-soft">
                    {siteConfig.contact.phone}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <h3 className="text-[1.4rem] mb-5">Request a personalized quote</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <Field label="First name">
                    <Input required placeholder="First name" />
                  </Field>
                  <Field label="Last name">
                    <Input required placeholder="Last name" />
                  </Field>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <Field label="Phone">
                    <Input required type="tel" placeholder="(201) 555-0123" />
                  </Field>
                  <Field label="Email">
                    <Input required type="email" placeholder="you@email.com" />
                  </Field>
                </div>
                <Field label="Vehicle year, make &amp; model" className="mb-4">
                  <Input required placeholder="e.g. 2023 Tesla Model Y" />
                </Field>
                <Field label="Main concerns (optional)" className="mb-4">
                  <Textarea rows={4} placeholder="Tell us what needs special attention…" />
                </Field>
                <label className="flex items-start gap-3 mb-5 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-[3px] shrink-0 size-4 accent-crimson cursor-pointer"
                  />
                  <span className="text-muted text-[.85rem]">
                    I consent to receive marketing text messages from {siteConfig.legalName} LLC at
                    the phone number provided. Frequency may vary. Message &amp; data rates may
                    apply.
                  </span>
                </label>
                <Button type="submit" className="w-full justify-center">
                  Submit request
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
