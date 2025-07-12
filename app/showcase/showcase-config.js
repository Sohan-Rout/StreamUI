import SimpleNavbar from '@/app/showcase/components/navigation/navbar1';
import BasicMinimalCard from '@/app/showcase/components/elements/card1';
import MinimalPricingLayout from '@/app/showcase/components/layout/pricing1';

const showcaseComponents = [
    {
    slug: 'MinimalPricingLayout',
    title: 'Minimalist Pricing Layout',
    description: 'A responsive, minimalist pricing section showcasing a dynamic card layout with built-in Framer Motion animations and dark/light mode support. Enables easy integration into landing pages and SaaS sites. Cards scale on hover for interactivity and display included and excluded features clearly with icon indicators.',
    preview: MinimalPricingLayout,
    code: `import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import PropTypes from "prop-types";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Basic components and regular updates.",
    features: ["10+ Components", "Basic Animations", "Light/Dark Mode", "All Starter Features"],
    notIncluded: ["Priority Support", "Component Requests", "Team Collaboration"],
    highlight: false,
  },
  {
    name: "Pro",
    price: "$9/mo",
    description: "Access all advanced components and premium support.",
    features: ["All Starter Features", "Animated Components", "Priority Support", "Component Requests"],
    notIncluded: ["Priority Support", "Component Requests", "Team Collaboration"],
    highlight: true,
  },
  {
    name: "Team",
    price: "$29/mo",
    description: "For teams and startups needing advanced support.",
    features: [
      "All Pro Features",
      "Team Collaboration",
      "Custom Branding",
      "Animated Components",
      "Priority Support",
      "Light/Dark Mode",
      "Component Requests",
    ],
    highlight: false,
  },
];

export function PricingCard({
  name,
  price,
  description,
  features,
  notIncluded,
  highlight,
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={\`border rounded-xl p-6 shadow-sm bg-white dark:bg-neutral-900 \${
        highlight
          ? "border-blue-500 shadow-lg"
          : "border-gray-200 dark:border-neutral-700"
      }\`}
    >
      <div className="flex justify-center">
        <h3 className="text-lg dark:text-black font-medium bg-green-500 mb-4 px-6 py-1 rounded-full">
          {name}
        </h3>
      </div>
      <p className="text-3xl font-bold mb-4">{price}</p>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
      <ul className="text-sm text-left mb-6">
        {features.map((feature) => (
          <li key={feature} className="flex items-center mb-1">
            <span className="text-green-500 mr-2">
              <FaCheck />
            </span>{" "}
            {feature}
          </li>
        ))}
        {notIncluded &&
          notIncluded.map((item) => (
            <li key={item} className="flex items-center mb-1">
              <span className="text-red-500">
                <IoIosClose className="text-2xl font-semibold" />
              </span>
              {item}
            </li>
          ))}
      </ul>
      <button className="w-full py-2 rounded-md bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition">
        Get Started
      </button>
    </motion.div>
  );
}

PricingCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  notIncluded: PropTypes.arrayOf(PropTypes.string),
  highlight: PropTypes.bool,
};

export default function PricingSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-neutral-950">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Choose Your Plan</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12">
          Simple, transparent pricing for developers and indie makers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <PricingCard
              key={plan.name}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              notIncluded={plan.notIncluded}
              highlight={plan.highlight}
            />
          ))}
        </div>
      </div>
    </section>
  );
}`,
implementation : `<PricingCard name="Pro" price="" description="" features={[""]} notIncluded={[""]} highlight={true} />`,
        props: [
  {
    "name": "name",
    "type": "string",
    "default": "\"Starter\"",
    "description": "The name of the pricing plan displayed on the card."
  },
  {
    "name": "price",
    "type": "string",
    "default": "\"Free\"",
    "description": "The price of the plan, e.g., '$9/mo'."
  },
  {
    "name": "description",
    "type": "string",
    "default": "\"Basic components and regular updates.\"",
    "description": "A short description for the plan."
  },
  {
    "name": "features",
    "type": "string[]",
    "default": "[\"10+ Components\", \"Basic Animations\"]",
    "description": "An array of features included in the plan."
  },
  {
    "name": "notIncluded",
    "type": "string[]",
    "default": "[\"Priority Support\", \"Component Requests\"]",
    "description": "An optional array of features not included in the plan, displayed with an 'X' icon."
  },
  {
    "name": "highlight",
    "type": "boolean",
    "default": "false",
    "description": "Whether to visually highlight the card (used for Pro plans)."
  }
],
    category: 'pricing',
  },
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
];

export default showcaseComponents;