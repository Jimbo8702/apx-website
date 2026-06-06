import rollsRoyceCeramic from "@public/media/images/black-rolls-royce-ghost-black-badge-front.jpeg";
import porsche911Cabriolet from "@public/media/images/blue-porsche-911-turbo-s-cabriolet-front.jpeg";
import astonMartinInterior from "@public/media/images/image_4.jpg";
import dodgeCharger from "@public/media/images/silver-dodge-charger-scat-pack-rear.jpeg";
import teslaModelY from "@public/media/images/gray-tesla-model-y-rear-2.jpeg";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Photo } from "@/components/ui/photo";

const SHOTS = [
  {
    src: astonMartinInterior,
    alt: "Aston Martin red leather interior, deep cleaned and conditioned",
    tag: "Interior detail",
  },
  {
    src: teslaModelY,
    alt: "Gray Tesla Model Y, detailed with the APX van on site",
    tag: "Tesla Model Y",
  },
  {
    src: dodgeCharger,
    alt: "Silver Dodge Charger rear with the APX van in the background",
    tag: "Dodge Charger",
  },
  {
    src: rollsRoyceCeramic,
    alt: "Black Rolls-Royce Ghost with a deep-gloss ceramic coated finish",
    tag: "Ceramic Coating",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-16 sm:py-20 nav:py-[104px]">
      <Container>
        <div className="max-w-[40em] mb-[38px] sm:mb-[52px]">
          <Eyebrow>Recent work</Eyebrow>
          <h2 className="text-[clamp(2rem,3.6vw,2.9rem)] font-bold">Straight from the job</h2>
        </div>
        <div className="grid grid-cols-2 nav:grid-cols-[1.4fr_1fr_1fr] nav:grid-rows-[200px_200px] gap-4">
          <Photo
            src={porsche911Cabriolet}
            alt="Navy blue Porsche 911 Turbo S cabriolet after a full detail"
            tag="Porsche 911 Turbo S"
            sizes="(min-width: 920px) 40vw, 100vw"
            className="col-span-2 nav:col-span-1 h-[300px] sm:h-[420px] nav:h-full nav:row-span-2"
          />
          {SHOTS.map((shot) => (
            <Photo
              key={shot.alt}
              src={shot.src}
              alt={shot.alt}
              tag={shot.tag}
              sizes="(min-width: 920px) 30vw, 50vw"
              className="h-[200px] nav:h-full"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
