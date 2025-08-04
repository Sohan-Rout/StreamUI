export const code = `
import React from "react";
import { FaShieldAlt, FaLightbulb, FaBolt, FaRegClock } from "streamui-deps";
import { HiSparkles } from "streamui-deps";
import { IoMdCloseCircle } from "streamui-deps";

const defaultCards = [
  {
    title: "Secured Transactions",
    description: "Safe and encrypted payments on our platform.",
    icon: FaShieldAlt,
  },
  {
    title: "Smart Design",
    description: "Crafted for scalability and aesthetics.",
    icon: FaLightbulb,
  },
  {
    title: "Fast Performance",
    description: "Snappy user experience across devices.",
    icon: FaBolt,
  },
  {
    title: "Never Miss a Payment",
    description: "Timely reminders and payment tracking.",
    icon: FaRegClock,
  },
  {
    title: "Let's Explore",
    description: "Timely reminders and payment tracking.",
    icon: FaRegClock,
  },
];

const FeaturedSection = ({
  title = "Featured Components",
  description = "Discover hand-crafted components ready to use in your projects.",
  tag = "UI Essentials",
  ctaText = "Get Started",
  ctaHref = "",
  cards,
}) => {
  const data = cards && cards.length > 0 ? cards : defaultCards;

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 flex flex-col gap-8">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center gap-2">
        <p className="text-xs uppercase tracking-widest text-neutral-500">{tag}</p>
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        <p className="text-neutral-600 dark:text-neutral-300 max-w-xl">{description}</p>
        <a
          href={ctaHref}
          className="mt-4 px-6 py-2 rounded-full flex items-center gap-2 bg-black text-white dark:bg-white dark:text-black hover:scale-105 transition-transform duration-300"
        >
            <HiSparkles className="text-xl"/>{ctaText}
        </a>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
        {data.map((card, index) => {
          const Icon = card.icon;
          const isLarge = index === 0;

          return (
            <div
              key={index}
              className={\`relative overflow-hidden shadow-xl rounded-xl backdrop-blur-md bg-white/30 dark:bg-black/30 border border-black/20 dark:border-white/20 hover:scale-105 transition-all duration-300 flex flex-col justify-center items-center \${
                isLarge ? "col-span-2 row-span-2" : ""
              }\`}
            >
              {/* Cross icons pinned in corners */}
              <IoMdCloseCircle className="text-neutral-400 dark:text-white/90 absolute top-2 left-2 z-20" />
              <IoMdCloseCircle className="text-neutral-400 dark:text-white/90 absolute top-2 right-2 z-20" />
              <IoMdCloseCircle className="text-neutral-400 dark:text-white/90 absolute bottom-2 left-2 z-20" />
              <IoMdCloseCircle className="text-neutral-400 dark:text-white/90 absolute bottom-2 right-2 z-20" />

              <div className="px-6 py-2">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-black/10 dark:from-black/30 dark:to-white/10 pointer-events-none"></div>
                {Icon && <Icon size={28} className="relative z-10 my-2" />}
                <h2 className="text-lg font-semibold relative z-10">{card.title}</h2>
                <p className="text-sm text-black/70 dark:text-white/70 relative z-10">{card.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedSection;
`

export const implementation = `
import Featured from "@/app/components/featured";

<Featured
    title="Featured Components"
    description="Discover hand-crafted components ready to use in your projects."
    tag="UI Essentials"
    ctaText="Explore Components"
    ctaHref=""
/>"
`

export const props = [
      {
        name: "title",
        type: "string",
        required: false,
        defaultValue: "Featured Components",
        description: ""
      },
      {
        name: "description",
        type: "string",
        required: false,
        defaultValue: "Discover hand-crafted components ready to use in your projects.",
        description: ""
      },
      {
        name: "tag",
        type: "string",
        required: false,
        defaultValue: "UI Essentials",
        description: ""
      },
      {
        name: "ctaText",
        type: "string",
        required: false,
        defaultValue: "Explore Components",
        description: ""
      },
      {
        name: "ctaHref",
        type: "string",
        required: false,
        defaultValue: "",
        description: ""
      }
    ]