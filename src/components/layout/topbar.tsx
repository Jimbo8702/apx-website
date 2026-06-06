import { ClockIcon, InstagramIcon, PhoneIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site-config";

export function TopBar() {
  return (
    <div className="bg-crimson text-[.82rem] text-white border-b border-black/20">
      <div className="max-w-[1180px] mx-auto px-6 flex justify-between max-sm:justify-center items-center min-h-10 gap-4">
        <span className="inline-flex items-center gap-[9px] font-semibold max-sm:hidden">
          <ClockIcon size={14} strokeWidth={2.2} className="shrink-0" />
          24/7 Online Scheduling · Serving NE New Jersey &amp; Surrounding Areas
        </span>
        <span className="inline-flex items-center gap-[22px]">
          <a
            href={siteConfig.contact.phoneHref}
            className="text-white font-semibold inline-flex items-center gap-[7px] hover:text-white/82"
          >
            <PhoneIcon size={13} strokeWidth={2.2} className="shrink-0" />
            {siteConfig.contact.phone}
          </a>
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener"
            className="text-white font-semibold inline-flex items-center gap-[7px] hover:text-white/82"
          >
            <InstagramIcon size={14} strokeWidth={2.2} className="shrink-0" />
            Follow Us
          </a>
        </span>
      </div>
    </div>
  );
}
