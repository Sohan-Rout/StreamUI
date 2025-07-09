"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar({
  logo = { text: "StreamUI", href: "/", image: null },
  links = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "Reviews", href: "#Reviews" },
    { label: "FAQs", href: "#faqs" },
  ],
  actions = (
    <div className="flex gap-2">
      <button className="px-4 py-1 rounded bg-white border border-black text-black">Log In</button>
      <button className="px-4 border border-black py-1 rounded bg-black dark:border-white text-white">Sign In</button>
    </div>
  ),
  mode = "light",
}) {
  const isDark = mode === "dark";

  return (
    <nav
      className={`w-full flex items-center justify-between p-4 border-b ${
        isDark ? "bg-black text-white border-white/20" : "bg-white text-black border-black"
      }`}
    >
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