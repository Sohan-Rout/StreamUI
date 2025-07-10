import NavbarVariant1 from '@/app/showcase/components/navigation/navbar1';
import DynamicComponentCard1 from '@/app/showcase/components/elements/card1';
import Button1 from '@/app/showcase/components/elements/button1';
import Avatar1 from '@/app/showcase/components/elements/avatar1';

const showcaseComponents = [
  {
    slug: 'SimpleNavabar',
    title: 'Minimalist Navbar',
    description: 'A clean, simple and minimalist navbarA clean, responsive navbar component for your projects. Easily customizable with your logo, navigation links, and call-to-action buttons while supporting light and dark modes.',
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
implementation: `<Navbar logo={{}} links={[]} actions={{}} mode="light" />`,
    props: [
      { name: 'logo', type: 'object', default: '{ text: "StreamUI", href: "/", image: null }', description: 'Logo configuration with text, href, and optional image.' },
      { name: 'links', type: 'array', default: '[]', description: 'Array of navigation links with label and href.' },
      { name: 'actions', type: 'ReactNode', default: 'null', description: 'Optional CTA buttons displayed on the navbar.' },
      { name: 'mode', type: 'string', default: '"light"', description: 'Color mode of the navbar, can be "light" or "dark".' },
    ],
    category: 'Navbars',
  },
  {
    slug: 'dynamic-component-card',
    title: 'Minimalist Card',
    description: 'A minimal, dynamic card with placeholders for logo, title, and description.',
    preview: DynamicComponentCard1,
    code: `'use client';
    import React from 'react';
    
    export default function DynamicComponentCard({ logo, title, description }) {
      return (
        <div className="rounded-lg p-4 bg-white dark:bg-neutral-900 shadow-xl dark:shadow-neutral-700 flex flex-col justify-center items-center gap-2">
          {/* Logo/Image Placeholder */}
          <div className="flex justify-center items-center rounded-lg py-12 px-10 border dark:border-neutral-400">
            {logo ? logo : <span className="text-black text-2xl dark:text-white">Stream<span className="bg-black px-2 py-2 rounded-lg text-white dark:text-black dark:bg-white ml-1">UI</span></span>}
          </div>
    
          {/* Title */}
          <h3 className="text-xl font-medium mt-6">
            {title ? title : 'This is a card'}
          </h3>
    
          {/* Description */}
          <p className="text-sm text-neutral-600">
            {description ? description : 'This is the description of the card'}
          </p>
        </div>
      );
    }`,
implementation : `<DynamicComponentCard logo={<img src="/logo.png" alt="Logo" className="w-12 h-12" />} title="Streamlined Card" description="This card displays a custom logo, title, and description dynamically." />`,
        props: [
      { name: 'logo', type: 'ReactNode', default: 'Styled "StreamUI" text', description: 'Logo or image element for the card.' },
      { name: 'title', type: 'string', default: '"This is a card"', description: 'Title displayed on the card.' },
      { name: 'description', type: 'string', default: '"This is the description of the card"', description: 'Description displayed under the title.' }
        ],
    category: 'Cards',
  },
  {
    slug: 'dynamic-button',
    title: 'Minimalist Button',
    description: 'A customizable, dark-mode ready button with optional href and actions.',
    preview: Button1,
    code:`"use client";
import Link from "next/link";

export default function Button1({
  label = "Click Me",
  href = "",
  onClick,
  className = "",
}) {
  const baseClasses =
    "px-4 py-2 rounded-lg font-medium hover:scale-105 duration-300 shadow-xl transition-all";
  const colorClasses =
    "bg-black text-white hover:bg-neutral-800 dark:shadow-neutral-600 dark:bg-white dark:text-black dark:hover:bg-neutral-200 border dark:border-neutral-300";

  const combinedClasses = \`\${baseClasses} \${colorClasses} \${className}\`;

  if (href) {
    return (
      <Link href={href} passHref>
        <button className={combinedClasses}>{label}</button>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {label}
    </button>
  );
}`,
    implementation: `<Button label="Click Me" href="/docs" darkMode={false} onClick={() => console.log('Button clicked')} />`,
    props: [
      { name: 'label', type: 'string', default: '"Click Me"', description: 'Text displayed on the button.' },
      { name: 'href', type: 'string', default: '""', description: 'Optional href to turn button into a link.' },
      { name: 'onClick', type: 'function', default: 'undefined', description: 'Click handler for the button.' },
      { name: 'darkMode', type: 'boolean', default: 'false', description: 'Enable dark mode styling.' },
    ],
    category: 'Buttons',
  },
  {
    slug: 'dynamic-avatar',
    title: 'Minimalist Name Avatar',
    description: 'A clean avatar component displaying name initials, perfect for testimonials.',
    preview: Avatar1,
    code: `<Avatar1 
  name="Jhon Doe" 
  size={56} 
/>`,
    props: [
      { name: 'name', type: 'string', default: '"John Doe"', description: 'Name for initials displayed in the avatar.' },
      { name: 'size', type: 'number', default: '48', description: 'Size of the avatar in pixels.' },
      { name: 'className', type: 'string', default: '""', description: 'Additional Tailwind classes for styling.' },
    ],
    category: 'Avatars',
  },
];

export default showcaseComponents;