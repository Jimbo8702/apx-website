"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDownIcon, MenuIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { Logo } from "./logo";

type NavLink = { label: string; href: string };

const SERVICE_LINKS: NavLink[] = [
  { label: "Ceramic Coating", href: "/services/ceramic-coating" },
  { label: "Detailing", href: "/services/detailing" },
  { label: "Paint Correction", href: "/services/paint-correction" },
  { label: "Paint Protection Film", href: "/services/ppf" },
  { label: "Maintenance Plans", href: "/services/maintenance-plans" },
];

const AREA_LINKS: NavLink[] = [
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
].map((town) => ({ label: town, href: `/areas/${town.toLowerCase().replace(/ /g, "-")}` }));

function NavDropdown({
  label,
  href,
  links,
  footer,
  wide,
  open,
  onToggle,
  onNavigate,
}: {
  label: string;
  href: string;
  links: NavLink[];
  footer?: NavLink;
  /** Lay the panel out as a multi-column grid (for long lists like the 27 towns) */
  wide?: boolean;
  open: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  return (
    <div className="relative group max-sm:w-full">
      <Link
        href={href}
        className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-white max-sm:w-full max-sm:justify-between"
        onClick={(e) => {
          if (window.matchMedia("(width < 640px)").matches) {
            e.preventDefault();
            onToggle();
          } else {
            onNavigate();
          }
        }}
      >
        {label}
        <ChevronDownIcon
          size={12}
          strokeWidth={2.5}
          className={cn(
            "transition-transform duration-200 sm:group-hover:rotate-180 sm:group-focus-within:rotate-180",
            open && "rotate-180",
          )}
        />
      </Link>
      <div
        className={cn(
          "static flex-col gap-1 mt-2.5 pl-3 z-[60]",
          open ? (wide ? "grid grid-cols-2" : "flex") : "max-sm:hidden",
          wide ? "sm:grid sm:grid-cols-3 sm:min-w-[560px]" : "sm:flex sm:min-w-[230px]",
          "sm:absolute sm:top-full sm:left-1/2 sm:mt-3.5 sm:bg-panel sm:border sm:border-line sm:rounded-md sm:p-2 sm:shadow-card sm:gap-0.5",
          "sm:invisible sm:opacity-0 sm:-translate-x-1/2 sm:translate-y-2 sm:transition-[opacity,transform] sm:duration-200",
          "sm:group-hover:visible sm:group-hover:opacity-100 sm:group-hover:translate-y-0 sm:group-focus-within:visible sm:group-focus-within:opacity-100 sm:group-focus-within:translate-y-0",
          "sm:before:content-[''] sm:before:absolute sm:before:-top-3.5 sm:before:left-0 sm:before:right-0 sm:before:h-3.5",
        )}
      >
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={onNavigate}
            className="rounded px-3.5 py-2.5 max-sm:px-0 max-sm:py-1.5 text-[#cfccc6] text-[.95rem] whitespace-nowrap transition-colors hover:bg-night hover:text-white"
          >
            {link.label}
          </Link>
        ))}
        {footer && (
          <Link
            href={footer.href}
            onClick={onNavigate}
            className="rounded rounded-t-none px-3.5 pt-[13px] pb-2.5 mt-1 border-t border-line max-sm:border-t-0 max-sm:px-0 max-sm:pt-1.5 max-sm:pb-1.5 max-sm:mt-0.5 text-crimson-soft font-bold text-[.95rem] whitespace-nowrap transition-colors hover:bg-night"
          >
            {footer.label}
          </Link>
        )}
      </div>
    </div>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
    setAreasOpen(false);
    // Desktop dropdowns are held open by :focus-within; the clicked link keeps
    // focus through the client-side navigation, so drop it to close the menu.
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[rgba(12,12,14,.82)] backdrop-blur-[14px] border-b border-line">
      <div className="max-w-[1180px] mx-auto px-6">
        <nav className="flex items-center justify-between h-[74px]">
          <Logo />
          <div
            className={cn(
              "gap-[34px] items-center font-medium text-[#cfccc6]",
              "max-sm:absolute max-sm:top-[74px] max-sm:inset-x-0 max-sm:flex-col max-sm:items-start max-sm:bg-night max-sm:border-b max-sm:border-line max-sm:px-6 max-sm:py-[18px] max-sm:gap-[18px]",
              menuOpen ? "flex" : "max-sm:hidden sm:flex",
            )}
          >
            <NavDropdown
              label="Services"
              href="/#services"
              links={SERVICE_LINKS}
              footer={{ label: "See all services →", href: "/services" }}
              open={servicesOpen}
              onToggle={() => setServicesOpen((open) => !open)}
              onNavigate={closeMenu}
            />
            <NavDropdown
              label="Service areas"
              href="/#areas"
              links={AREA_LINKS}
              wide
              open={areasOpen}
              onToggle={() => setAreasOpen((open) => !open)}
              onNavigate={closeMenu}
            />
            <Link href="/reviews" onClick={closeMenu} className="transition-colors duration-200 hover:text-white">
              Reviews
            </Link>
            <Link href="/about" onClick={closeMenu} className="transition-colors duration-200 hover:text-white">
              About
            </Link>
            <hr className="hidden max-sm:block w-full border-line" />
            <Button href="#quote" onClick={closeMenu} className="max-sm:w-full max-sm:justify-center">
              Book online
            </Button>
          </div>
          <button
            className="sm:hidden flex items-center justify-center bg-transparent border border-line rounded p-[9px] text-white cursor-pointer"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <MenuIcon size={20} />
          </button>
        </nav>
      </div>
    </header>
  );
}
