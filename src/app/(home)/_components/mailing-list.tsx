"use client";

import { useState } from "react";
import { MailIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";

export function MailingList() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="relative overflow-hidden text-center border-y border-line bg-panel bg-[radial-gradient(70%_120%_at_50%_0%,rgba(187,34,34,.18),rgba(187,34,34,0)_60%)] py-16 sm:py-20 nav:py-[104px]">
      <Container>
        <div className="max-w-[620px] mx-auto">
          <div className="w-16 h-16 rounded bg-crimson/16 flex items-center justify-center text-crimson-soft mx-auto mb-[22px]">
            <MailIcon size={30} />
          </div>
          <h2 className="text-[clamp(1.9rem,3.4vw,2.6rem)] font-bold">Join our mailing list</h2>
          <p className="text-muted mt-3.5 mb-[26px] text-[1.04rem]">
            Subscribe to receive exclusive offers, detailing tips, and updates straight to your
            inbox.
          </p>
          {submitted ? (
            <div className="text-[1.05rem] text-ink mt-2">
              Thanks for subscribing! Keep an eye on your inbox. 🎉
            </div>
          ) : (
            <form
              className="flex gap-3 max-w-[520px] mx-auto flex-wrap"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <Input
                type="email"
                required
                placeholder="Enter your email address"
                aria-label="Email address"
                className="flex-1 min-w-[220px] w-auto px-5 py-3.5"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          )}
          <p className="text-muted text-[.82rem] mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </Container>
    </section>
  );
}
