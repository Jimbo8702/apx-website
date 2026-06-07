import rollsRoyceCeramic from "@public/media/images/black-rolls-royce-ghost-black-badge-front.jpeg";
import porsche911Cabriolet from "@public/media/images/blue-porsche-911-turbo-s-cabriolet-front.jpeg";
import mercedesCClassInterior from "@public/media/images/mercedes-benz-c-class-amg-interior.jpeg";
import porscheHoodFoamWash from "@public/media/images/blue-porsche-hood-emblem-foam-wash.jpeg";
import redCaliperWheelDetail from "@public/media/images/black-sports-car-red-caliper-wheel-detail.jpeg";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Photo } from "@/components/ui/photo";

const SHOTS = [
  {
    src: mercedesCClassInterior,
    alt: "Black leather Mercedes-AMG C-Class interior detailed and conditioned",
    tag: "Interior detail",
  },
  {
    src: porscheHoodFoamWash,
    alt: "Foam wash swirling over the Porsche crest on a deep blue hood",
    tag: "Foam hand wash",
  },
  {
    src: redCaliperWheelDetail,
    alt: "Glossy black sports car wheel with a red brake caliper at golden hour",
    tag: "Wheel detail",
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
