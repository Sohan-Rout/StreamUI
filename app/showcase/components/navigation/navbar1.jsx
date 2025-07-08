"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar({
  logo = { text: "Logo", href: "/", image: null },
  links = [],
  actions = null,
}) {
  return (
    <nav className="w-full flex items-center justify-between p-4 border-b">
      <div className="text-lg font-semibold flex items-center space-x-2">
        <Link href={logo.href} className="flex items-center space-x-2">
          {logo.image ? (
            <Image src={logo.image} alt={logo.text} width={32} height={32} />
          ) : null}
          {logo.text && <span>{logo.text}</span>}
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="hover:underline">
            {link.label}
          </Link>
        ))}

        {actions}
      </div>
    </nav>
  );
}