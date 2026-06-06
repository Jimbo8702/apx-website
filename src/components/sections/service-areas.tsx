import Image from "next/image";
import serviceAreaMap from "@public/media/nj_service_area_map_red_clean.svg";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

const TOWNS = [
  "Dumont",
  "New Milford",
  "Bergenfield",
  "Haworth",
  "Cresskill",
  "Demarest",
  "Tenafly",
  "Alpine",
  "Emerson",
  "Fair Lawn",
  "Fort Lee",
  "Glen Rock",
  "Hackensack",
  "Harrington Park",
  "Hillsdale",
  "Maywood",
  "Northvale",
  "Norwood",
  "Old Tappan",
  "Paramus",
  "Park Ridge",
  "Ridgewood",
  "Saddle Brook",
  "Saddle River",
  "Teaneck",
  "Waldwick",
  "Woodcliff Lake",
];

type ServiceAreasProps = {
  eyebrow?: string;
  heading: string;
  copy: string;
  id?: string;
};

export function ServiceAreas({ eyebrow = "Service areas", heading, copy, id }: ServiceAreasProps) {
  return (
    <section id={id} className="bg-panel py-16 sm:py-20 nav:py-[104px]">
      <Container>
        <div className="grid grid-cols-1 nav:grid-cols-2 gap-[34px] nav:gap-12 items-center">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="text-[clamp(2rem,3.6vw,2.9rem)] font-bold">{heading}</h2>
            <div className="flex flex-wrap gap-[11px] mt-2">
              {TOWNS.map((town) => (
                <a key={town} href={`/areas/${town.toLowerCase().replace(/ /g, "-")}`}>
                  <Badge className="transition-colors duration-200 hover:border-crimson/45 hover:text-white">
                    {town}
                  </Badge>
                </a>
              ))}
              <Badge accent>+ surrounding NE NJ</Badge>
            </div>
            <p className="text-muted mt-[22px] text-[.95rem]">{copy}</p>
          </div>
          <div className="relative h-[380px] nav:h-[440px]">
            <Image
              src={serviceAreaMap}
              alt="Map of New Jersey with the northeastern service-area counties highlighted in red"
              fill
              className="object-contain"
            />
            <span className="absolute left-4 bottom-4 z-[2] text-[.72rem] tracking-[.06em] uppercase bg-black/45 border border-line backdrop-blur-[6px] px-3 py-[7px] rounded text-[#d9d6d0]">
              Bergen County &amp; northeast NJ
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
