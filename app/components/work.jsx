import React from "react";
import { LuNetwork } from "react-icons/lu";
import { FaFile, FaCopy, FaPencilRuler } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

// Map icon names to actual components
const iconMap = {
  FaFile: FaFile,
  FaCopy: FaCopy,
  FaPencilRuler: FaPencilRuler,
};

const features = [
  {
    title: "Browse Components",
    description:
      "Explore a curated collection of clean, ready-to-use React + Tailwind components for modern projects.",
    icon: "FaFile",
  },
  {
    title: "Copy the Code",
    description:
      "Install the package. Click copy and paste directly into your project.",
    icon: "FaCopy",
  },
  {
    title: "Paste & Customize",
    description:
      "Tweak text, colors, and structure easily to match your brand and needs.",
    icon: "FaPencilRuler",
  },
];

export default function Hero() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <span className="text-xs uppercase border border-black rounded-full bg-white px-6 py-2 tracking-widest text-black mb-4 inline-block">
          <div className="flex gap-2 items-center">
            <LuNetwork className="text-lg" />
            How it works
          </div>
        </span>
        <h2 className="text-4xl md:text-4xl font-medium text-neutral-900 leading-relaxed">
          Start Building with <span className=""><span className="font-medium">Stream</span>
          <span className="px-2 py-2 bg-black text-white rounded-lg">UI</span></span>{" "}
          seconds
        </h2>
        <p className="mt-4 text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
          Build faster with clean, reusable components designed for modern
          products.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="rounded-xl bg-white shadow-lg"
          >
            <div className="flex justify-between mx-2 my-2">
                        <IoMdCloseCircle className="text-lg text-black opacity-50"/>
                        <IoMdCloseCircle className="text-lg text-black opacity-50"/>
                    </div>
            <div className="flex flex-col items-center text-center p-6">
            {iconMap[item.icon] &&
              React.createElement(iconMap[item.icon], {
                className: "text-4xl mb-4",
              })}
            <h3 className="text-lg font-medium text-neutral-800">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-neutral-600">
              {item.description}
            </p>
                    </div>
                    <div className="flex justify-between mx-2 my-2">
                        <IoMdCloseCircle className="text-lg text-black opacity-50"/>
                        <IoMdCloseCircle className="text-lg text-black opacity-50"/>
                    </div>
          </div>
        ))}
      </div>
    </section>
  );
}
