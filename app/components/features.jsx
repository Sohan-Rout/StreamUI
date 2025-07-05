"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaFile, FaCopy, FaPencilRuler, FaSearch } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { HiSparkles } from "react-icons/hi2";
import { RiTailwindCssFill } from "react-icons/ri";

// Map icon names to actual components
const iconMap = {
  FaFile: FaFile,
  FaCopy: FaCopy,
  FaPencilRuler: FaPencilRuler,
};

const features = [
  {
    title: "Clean Minimal Design",
    description : "Explore clean, minimal, and reusable components to build your ideas faster with StreamUI.",
  },
  {
    title: "Fully Tailwind Ready",
  },
  {
    title: "Copy the Code",
    description:
      "Click copy and paste directly into your project. No installation required.",
    icon: "FaCopy",
  },
  {
    title: "Paste & Customize",
    description:
      "Tweak text, colors, and structure easily to match your brand and needs.",
    icon: "FaPencilRuler",
  },
  {
    title: "Browse Components",
    description:
      "Explore a curated collection of clean, ready-to-use React + Tailwind components for modern projects.",
    icon: "FaFile",
  },
];

export default function Hero() {
  // Ref for the magnifying glass icon on the second card
  const magnifyRef = useRef(null);

  useEffect(() => {
    if (magnifyRef.current) {
      gsap.to(magnifyRef.current, {
        x: 10,
        y: -10,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
      });
    }
  }, []);

  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <span className="text-xs uppercase border border-black rounded-full bg-white px-6 py-2 tracking-widest text-black mb-4 inline-block">
          <div className="flex gap-2 items-center">
            <HiSparkles className="text-lg" />
            Features
          </div>
        </span>
        <h2 className="text-4xl md:text-4xl font-medium text-neutral-900">
          Everything You Need to Build Fast
        </h2>
        <p className="mt-4 text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
          Reusable, clean, and responsive components ready to copy-paste into your next project.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-6 max-w-6xl mx-auto">
        {features.map((item, idx) => (
          <div
            key={idx}
            className={`rounded-xl bg-white shadow-lg flex flex-col justify-between ${
              idx === 0
                ? "col-span-1 sm:col-span-2 md:col-span-2 md:row-span-2"
                : "p-0"
            }`}
          >
            {idx === 0 ? (
              <>
                {/* Top icons */}
                <div className="flex justify-between mx-2 my-2">
                  <IoMdCloseCircle className="text-lg text-black opacity-50" />
                  <IoMdCloseCircle className="text-lg text-black opacity-50" />
                </div>
                <div className="flex flex-col items-center justify-center flex-grow text-center gap-4 p-2">
                  {/* Mini Navbar */}
                  <div className="flex items-center justify-between w-full max-w-xs px-4 py-2 border border-neutral-200 rounded-lg shadow-sm bg-white">
                    <div className="text-sm font-medium text-black">Stream<span className="px-1 py-1 bg-black text-white ml-[1px] rounded-md">UI</span></div>
                    <div className="flex gap-3 text-sm text-neutral-600">
                      <span className="cursor-pointer hover:text-black transition">Home</span>
                      <span className="cursor-pointer hover:text-black transition">Components</span>
                      <span className="cursor-pointer hover:text-black transition">Docs</span>
                    </div>
                  </div>

                  {/* Minimalist Card Showcase */}
                  <div className="border border-neutral-200 rounded-lg shadow-sm p-4 bg-white w-full max-w-xs">
                    <h4 className="text-base font-semibold text-neutral-800 mb-1">Card Title</h4>
                    <p className="text-sm text-neutral-600 mb-2">This is a clean, minimal card to showcase StreamUI design.</p>
                    <button className="px-3 py-1 text-sm rounded-md border border-neutral-300 text-neutral-700 hover:bg-neutral-100 transition">
                      Action
                    </button>
                  </div>

                  {/* Stacked Buttons */}
                  <div className="flex flex-row gap-3 w-full max-w-xs">
                    <button className="px-4 py-2 text-sm rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-100 transition">
                      Button 1
                    </button>
                    <button className="px-4 py-2 text-sm rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-100 transition">
                      Button 2
                    </button>
                    <button className="px-4 py-2 text-sm rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-100 transition">
                      Button 3
                    </button>
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-lg font-medium text-neutral-800">{item.title}</h3>
                  <p className="text-sm text-neutral-600 max-w-xs">
                    {item.description}
                  </p>

                </div>
                {/* Bottom icons */}
                <div className="flex justify-between mx-2 mb-2">
                  <IoMdCloseCircle className="text-lg text-black opacity-50" />
                  <IoMdCloseCircle className="text-lg text-black opacity-50" />
                </div>
              </>
            ) : (
              <>
                <div className="flex justify-between mx-2 my-2">
                  <IoMdCloseCircle className="text-lg text-black opacity-50" />
                  <IoMdCloseCircle className="text-lg text-black opacity-50" />
                </div>
                {idx === 1 ? (
                  <>
                    <div className="flex flex-col items-center justify-center flex-grow text-center gap-2 p-4 relative">
                      {/* Tailwind Logo */}
                      <RiTailwindCssFill className="text-6xl text-blue-500"/>
                      {/* Magnifying Glass */}
                      <FaSearch
                        ref={magnifyRef}
                        className="text-3xl text-black opacity-50 absolute top-8 right-8 rotate-12"
                      />
                      {/* Title */}
                      <h3 className="text-lg font-medium text-neutral-800 mt-2">
                        {item.title}
                      </h3>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center text-center flex-grow justify-center">
                    {iconMap[item.icon] &&
                      React.createElement(iconMap[item.icon], {
                        className: "text-4xl mb-4",
                      })}
                    <h3 className="font-medium text-neutral-800 text-lg">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-sm text-neutral-600 max-w-xs mt-1">
                        {item.description}
                      </p>
                    )}
                  </div>
                )}
                <div className="flex justify-between mx-2 my-2">
                  <IoMdCloseCircle className="text-lg text-black opacity-50" />
                  <IoMdCloseCircle className="text-lg text-black opacity-50" />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
