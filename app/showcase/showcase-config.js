import NavbarVariant1 from '@/app/showcase/components/navigation/navbar1';
import DynamicComponentCard from '@/app/showcase/components/elements/card1';

const showcaseComponents = [
  {
    slug: 'SimpleNavabar',
    title: 'Simple Navbar',
    description: 'A clean, simple and minimalist navbar',
    preview: NavbarVariant1,
    code: `"use client";
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
      <button className="px-4 py-1 rounded bg-black text-white">Sign In</button>
    </div>
  ),
  mode = "light",
}) {
  const isDark = mode === "dark";

  return (
    <nav
      className={\`w-full flex items-center justify-between p-4 border-b \${isDark ? "bg-black text-white border-white/20" : "bg-white text-black border-black"}\`}
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
}`,
    props: [
      { name: 'fixed', type: 'boolean', default: 'false', description: 'Fixes navbar on scroll.' },
      { name: 'links', type: 'array', default: '[]', description: 'Array of navigation links.' },
    ],
    category: 'Navbars',
  },
  {
    slug: 'dynamic-component-card',
    title: 'Dynamic Component Card',
    description: 'A minimal, dynamic card with placeholders for logo, title, and description.',
    preview: DynamicComponentCard,
    code: `<DynamicComponentCard 
  logo={<YourLogoComponent />} 
  title="Card Title" 
  description="Card description goes here." 
/>`,
    props: [
      { name: 'logo', type: 'ReactNode', default: 'null', description: 'Logo or image displayed in the card.' },
      { name: 'title', type: 'string', default: '""', description: 'Title displayed in the card.' },
      { name: 'description', type: 'string', default: '""', description: 'Description text displayed in the card.' },
    ],
    category: 'Cards',
  },
];

export default showcaseComponents;