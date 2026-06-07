import Image from "next/image";
import Link from "next/link";
import logo from "@public/media/logo.png";

export function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="APX Car Solutions">
      <Image src={logo} alt="APX Car Solutions" priority className="h-10 w-auto" />
    </Link>
  );
}
