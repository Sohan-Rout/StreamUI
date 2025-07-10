import SimpleNavbar from '@/app/showcase/components/navigation/navbar1';
import BasicMinimalCard from '@/app/showcase/components/elements/card1';
import MinimalButton from '@/app/showcase/components/elements/button1';
import ParticleButton from '@/app/showcase/components/elements/button2';
import MinimalAvatar from '@/app/showcase/components/elements/avatar1';
import RandomAvatar from '@/app/showcase/components/elements/avatar2';
import BasicToggleSwitch from '@/app/showcase/components/elements/toggleSwitch';

const showcaseComponents = [
  {
    slug: 'SimpleNavabar',
    title: 'Minimalist Navbar',
    description: 'A clean, simple and minimalist navbarA clean, responsive navbar component for your projects. Easily customizable with your logo, navigation links, and call-to-action buttons while supporting light and dark modes.',
    preview: SimpleNavbar,
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
    slug: 'BasicMinimalCard',
    title: 'Minimalist Card',
    description: 'A minimal, dynamic card with placeholders for logo, title, and description.',
    preview: BasicMinimalCard,
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
    slug: 'MinimalButton',
    title: 'Minimalist Button',
    description: 'A customizable, dark-mode ready button with optional href and actions.',
    preview: MinimalButton,
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
    slug: 'MinimalAvatar',
    title: 'Minimalist Name Avatar',
    description: 'A clean avatar component displaying name initials, perfect for testimonials.',
    preview: MinimalAvatar,
    code: `"use client";
export default function Avatar1({
  name = "John Doe",
  size = 48,
  className = ""
}) {
  // Extract initials from the name
  const initials = name
    .split(" ")
    .filter(Boolean)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className={\`flex items-center justify-center rounded-full bg-neutral-400 text-white font-semibold \${className}\`}
      style={{ width: size, height: size, fontSize: size * 0.4 }}
    >
      {initials}
    </div>
  );
}`,
    implementation: `<Avatar name="Jhon Doe" size={56} />`,
    props: [
      { name: 'name', type: 'string', default: '"John Doe"', description: 'Name for initials displayed in the avatar.' },
      { name: 'size', type: 'number', default: '48', description: 'Size of the avatar in pixels.' },
      { name: 'className', type: 'string', default: '""', description: 'Additional Tailwind classes for styling.' },
    ],
    category: 'Avatars',
  },
  {
    slug: 'FaceAvatar',
    title: 'Face Avatar',
    description: 'A dynamic avatar component that displays a random expression SVG.',
    preview: RandomAvatar,
    code: `"use client";
import { AngryWithFang, SmileTeethGap, Awe, Blank, Calm, Cheeky, Concerned, Smile, SmileBig } from "streamui-deps";

const avatarList = [
  AngryWithFang,
  SmileTeethGap,
  Awe,
  Blank,
  Calm,
  Cheeky,
  Concerned,
  SmileBig,
  Smile,
];

export default function RandomAvatar({ name = "User", size = 64, className = "", style = {} }) {
  const index = Array.from(name).reduce((acc, char) => acc + char.charCodeAt(0), 0) % avatarList.length;
  const SelectedAvatar = avatarList[index];

  return (
    <div
      className="rounded-full overflow-hidden border border-neutral-400 shadow-lg dark:shadow-neutral-600 bg-white dark:bg-neutral-400 flex items-center justify-center"
      style={{ width: size, height: size, ...style }}
    >
      <SelectedAvatar className={\`w-full h-full text-neutral-800 dark:text-neutral-200 \${className}\`} />
    </div>
  );
}`,
    implementation: `<Avatar name="User" size={64} className="" style={{}} />`,
    props: [
      { name: 'name', type: 'string', default: '"User"', description: 'Name for generating a consistent random avatar.' },
      { name: 'size', type: 'number', default: '64', description: 'Size of the avatar in pixels.' },
      { name: 'className', type: 'string', default: '""', description: 'dditional Tailwind classes to customize.' },
      { name: 'style', type: 'object', default: '{}', description: 'Inline styles for advanced control.' },
    ],
    category: 'Avatars',
  },
  {
    slug: 'ParticleButton',
    title: 'Particle Button',
    description: 'A button that shows animated particle drops flowing upward on hover.',
    preview: ParticleButton,
    code: `"use client";
import { useRef } from "react";
import gsap from "gsap";

export default function Button({
  children = "Hover Me",
  onClick,
  className = "px-4 py-2 rounded-lg bg-black text-white dark:bg-neutral-200 dark:text-black duration-300 hover:scale-105",
  ...props
}) {
  const buttonRef = useRef(null);
  const particleContainerRef = useRef(null);

  const createParticle = () => {
    const particle = document.createElement("div");
    particle.className = \`absolute w-2 h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full pointer-events-none\`;
    particle.style.left = \`\${Math.random() * 100}%\`;
    particle.style.top = \`\${Math.random() * 100}%\`;
    particleContainerRef.current.appendChild(particle);

    const tl = gsap.timeline({
      onComplete: () => {
        particle.remove();
      },
    });

    tl.to(particle, {
      y: -20 - Math.random() * 50,
      opacity: 0,
      duration: 1 + Math.random(),
      ease: "power2.out",
    });
  };

  const handleMouseEnter = () => {
    for (let i = 0; i < 10; i++) {
      createParticle();
    }
  };

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      className={\`relative overflow-hidden \${className}\`}
      {...props}
    >
      {children}
      <div ref={particleContainerRef} className="absolute inset-0 pointer-events-none"></div>
    </button>
  );
}`,
    implementation: `<Button className="px-6 py-3 rounded-lg bg-black text-white" onClick={() => console.log("Clicked!")}>Hover Me</Button>`,
    props: [
      { name: 'children', type: 'ReactNode', default: 'null', description: 'Content of the button.' },
      { name: 'onClick', type: 'function', default: 'undefined', description: 'Click handler for the button.' },
      { name: 'className', type: 'string', default: '""', description: 'Additional Tailwind classes for styling.' },
    ],
    category: 'Buttons',
  },
  {
    slug: 'BasicToggleSwitch',
    title: 'Basic Toggle Switch',
    description: 'A simple toggle switch to switch between dark and light modes using Tailwind and localStorage for persistence.',
    preview: BasicToggleSwitch,
    code: `"use client";
import { useEffect, useState } from "react";

export default function ToggleSwitch() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (
      savedTheme === "dark" ||
      (!savedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={\`w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300 \${isDark ? "bg-gray-700" : "bg-gray-300"}\`}
    >
      <div
        className={\`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 \${isDark ? "translate-x-6" : "translate-x-0"}\`}
      />
    </button>
  );
}`,
    implementation: `<ToggleSwitch />`,
    props: [],
    category: 'Utilities',
  },
];

export default showcaseComponents;