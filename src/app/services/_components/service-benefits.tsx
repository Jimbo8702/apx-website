import type { ElementType } from "react";
import type { StaticImageData } from "next/image";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Photo } from "@/components/ui/photo";

type Benefit = {
  icon: ElementType;
  title: string;
  text: string;
};

type ServiceBenefitsProps = {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  benefits: Benefit[];
  image: { src: StaticImageData; alt: string; tag?: string };
};

export function ServiceBenefits({
  eyebrow,
  heading,
  paragraphs,
  benefits,
  image,
}: ServiceBenefitsProps) {
  return (
    <section className="py-16 sm:py-20 nav:py-[104px]">
      <Container>
        <div className="grid grid-cols-1 nav:grid-cols-2 gap-10 nav:gap-[54px] items-center">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="text-[clamp(2rem,3.6vw,2.9rem)] font-bold">{heading}</h2>
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-muted text-[1.02rem] mt-4">
                {paragraph}
              </p>
            ))}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[22px] sm:gap-[26px] mt-[30px]">
              {benefits.map((benefit) => (
                <div key={benefit.title}>
                  <benefit.icon size={22} className="text-crimson-soft mb-2.5" />
                  <h3 className="text-[1.08rem] mb-[5px]">{benefit.title}</h3>
                  <p className="text-muted text-[.93rem]">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
          <Photo
            src={image.src}
            alt={image.alt}
            tag={image.tag}
            sizes="(min-width: 920px) 50vw, 100vw"
            className="h-[340px] nav:h-[480px] -order-1 nav:order-none"
          />
        </div>
      </Container>
    </section>
  );
}
