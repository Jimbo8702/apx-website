import { siteConfig } from "@/lib/site-config";
import { Logo } from "./logo";

const LINK_COLUMNS = [
  {
    heading: "Services",
    links: [
      { label: "Ceramic coating", href: "/services/ceramic-coating" },
      { label: "Detailing", href: "/services/detailing" },
      { label: "Paint correction", href: "/services/paint-correction" },
      { label: "Paint protection film", href: "/services/ppf" },
      { label: "Maintenance plans", href: "/services/maintenance-plans" },
      { label: "All services & pricing", href: "/services" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "How it works", href: "/#how" },
      { label: "Reviews", href: "/reviews" },
      { label: "Service areas", href: "/#areas" },
      { label: "Book online", href: "#quote" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-black pt-[60px] pb-[30px]">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="grid grid-cols-2 nav:grid-cols-[1.4fr_1fr_1fr_1fr] gap-8">
          <div>
            <Logo />
            <p className="text-muted text-[.95rem] mt-4 max-w-[26em]">
              Premium mobile car detailing, ceramic coatings & paint correction, brought to your
              driveway across Bergen County, NJ.
            </p>
          </div>
          {LINK_COLUMNS.map((column) => (
            <div key={column.heading}>
              <h3 className="text-[.95rem] mb-4 tracking-[.02em]">{column.heading}</h3>
              <ul className="grid gap-2.5 text-muted text-[.92rem]">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="text-[.95rem] mb-4 tracking-[.02em]">Get in touch</h3>
            <ul className="grid gap-2.5 text-muted text-[.92rem]">
              <li>
                <a href={siteConfig.contact.phoneHref} className="hover:text-white">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                {siteConfig.address.locality}, {siteConfig.address.region}
              </li>
              <li>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener"
                  className="hover:text-white"
                >
                  {siteConfig.social.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-line mt-11 pt-6 flex justify-between items-center text-muted text-[.85rem] flex-wrap gap-2.5">
          <span>© 2026 {siteConfig.legalName}. All rights reserved.</span>
          <nav className="flex gap-4">
            <a href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="/terms-conditions" className="hover:text-white">
              Terms &amp; Conditions
            </a>
          </nav>
          <span>Fully insured · Mobile service · Bergen County, NJ</span>
        </div>
      </div>
    </footer>
  );
}
