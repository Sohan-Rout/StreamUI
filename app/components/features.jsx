"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FaFile, FaCopy, FaPencilRuler } from "react-icons/fa";
import { IoMdCloseCircle, IoMdMoon } from "react-icons/io";
import { HiSparkles } from "react-icons/hi2";
import { RiTailwindCssFill } from "react-icons/ri";
import { MdSunny } from "react-icons/md";

// Map icon names to actual components
const iconMap = {
  FaFile: FaFile,
  FaCopy: FaCopy,
  FaPencilRuler: FaPencilRuler,
};

const features = [
  {
    title: "Clean Minimal Design",
    description:
      "Explore clean, minimal, and reusable components to build your ideas faster with StreamUI.",
  },
  {
    title: "Fully Tailwind Ready",
  },
  {
    title: "Copy Paste simplicity",
    description:
      "No installation needed, just copy and paste directly into your project.",
  },
  {
    title: "Dark Mode Compatible",
    description: "Seamless support for dark mode across all components.",
  },
  {
    title: "Animation Ready",
    description: "Components with GSAP/Framer Motion for subtle animations.",
  },
];

export default function Hero() {
  const copyButtonRef = useRef(null);
  const pointerRef = useRef(null);
  const [copyText, setCopyText] = useState("Copy");
  const [isCardDarkMode, setIsCardDarkMode] = useState(true);

  useEffect(() => {
    if (copyButtonRef.current && pointerRef.current) {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

      tl.to(pointerRef.current, { y: 0, duration: 0.3, ease: "power1.inOut" })
        .add(() => setCopyText("Copied"))
        .to(
          pointerRef.current,
          { y: 10, duration: 0.3, ease: "power1.inOut" },
          "+=0.2"
        )
        .add(() => setCopyText("Copy"), "+=0.5");
    }

    if (typeof window !== "undefined") {
      // Animate loading bar
      gsap.to(".loading-bar", {
        width: "100%",
        duration: 2,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });

      // Animate "Loading" letters with wave
      gsap.to(".loading-letter", {
        y: -5,
        stagger: 0.1,
        duration: 0.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
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
          Reusable, clean, and responsive components ready to copy-paste into
          your next project.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-6 max-w-6xl mx-auto">
        {features.map((item, idx) => (
          <div
            key={idx}
            className={`rounded-xl shadow-lg flex flex-col justify-between ${
              idx === 0
                ? "col-span-1 sm:col-span-2 md:col-span-2 md:row-span-2"
                : "p-0"
            } ${idx === 3 && isCardDarkMode ? "bg-neutral-900 text-white" : "bg-white"}`}
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
                    <div className="text-sm font-medium text-black">
                      Stream
                      <span className="px-1 py-1 bg-black text-white ml-[1px] rounded-md">
                        UI
                      </span>
                    </div>
                    <div className="flex gap-3 text-sm text-neutral-600">
                      <span className="cursor-pointer hover:text-black transition">
                        Home
                      </span>
                      <span className="cursor-pointer hover:text-black transition">
                        Components
                      </span>
                      <span className="cursor-pointer hover:text-black transition">
                        Docs
                      </span>
                    </div>
                  </div>

                  {/* Minimalist Card Showcase */}
                  <div className="border border-neutral-200 rounded-lg shadow-sm p-4 bg-white w-full max-w-xs">
                    <h4 className="text-base font-semibold text-neutral-800 mb-1">
                      Card Title
                    </h4>
                    <p className="text-sm text-neutral-600 mb-2">
                      This is a clean, minimal card.
                    </p>
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
                  <h3 className="text-lg font-medium text-neutral-800">
                    {item.title}
                  </h3>
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
                  {idx === 3 ? (
                    <>
                      <IoMdCloseCircle className={`text-lg ${isCardDarkMode ? "text-white" : "text-black"} opacity-50`} />
                      <IoMdCloseCircle className={`text-lg ${isCardDarkMode ? "text-white" : "text-black"} opacity-50`} />
                    </>
                  ) : (
                    <>
                      <IoMdCloseCircle className="text-lg text-black opacity-50" />
                      <IoMdCloseCircle className="text-lg text-black opacity-50" />
                    </>
                  )}
                </div>
                {idx === 1 ? (
                  <>
                    <div className="flex flex-col items-center justify-center flex-grow text-center gap-2 p-4 relative">
                      {/* Tailwind Logo */}
                      <div className="animate-bounce">
                        <RiTailwindCssFill className="text-6xl text-blue-500" />
                      </div>
                      {/* Title */}
                      <h3 className="text-lg font-medium text-neutral-800 mt-2">
                        {item.title}
                      </h3>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center text-center flex-grow justify-center">
                    {idx === 2 ? (
                      // Replace icon with Copy Button UI
                      <div className="relative mb-4">
                        <button
                          ref={copyButtonRef}
                          className="px-4 py-2 text-sm rounded-lg border border-neutral-300 text-neutral-700 bg-white hover:bg-neutral-100 transition"
                        >
                          {copyText}
                        </button>
                        {/* Pointer Icon hovering and clicking */}
                        <div
                          ref={pointerRef}
                          className="absolute top-6 left-1/2 -translate-x-1/2"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="25"
                            height="25"
                            viewBox="0 0 50 50"
                          >
                            <path d="M 29.699219 47 C 29.578125 47 29.457031 46.976563 29.339844 46.933594 C 29.089844 46.835938 28.890625 46.644531 28.78125 46.398438 L 22.945313 32.90625 L 15.683594 39.730469 C 15.394531 40.003906 14.96875 40.074219 14.601563 39.917969 C 14.238281 39.761719 14 39.398438 14 39 L 14 6 C 14 5.601563 14.234375 5.242188 14.601563 5.082031 C 14.964844 4.925781 15.390625 4.996094 15.683594 5.269531 L 39.683594 27.667969 C 39.972656 27.9375 40.074219 28.355469 39.945313 28.726563 C 39.816406 29.101563 39.480469 29.363281 39.085938 29.398438 L 28.902344 30.273438 L 35.007813 43.585938 C 35.117188 43.824219 35.128906 44.101563 35.035156 44.351563 C 34.941406 44.601563 34.757813 44.800781 34.515625 44.910156 L 30.113281 46.910156 C 29.980469 46.96875 29.84375 47 29.699219 47 Z"></path>
                          </svg>
                        </div>
                      </div>
                    ) : idx === 3 ? (
                      <>
                        {/* Toggle Switch */}
                        <label className="relative inline-flex items-center cursor-pointer mb-4">
                          <input
                            type="checkbox"
                            checked={isCardDarkMode}
                            onChange={() => setIsCardDarkMode(!isCardDarkMode)}
                            className="sr-only peer"
                          />
                          <div className="w-14 h-8 bg-gray-200 rounded-full flex items-center px-1 peer-checked:bg-neutral-700 transition relative">
                            <span className="text-xs"><MdSunny/></span>
                            <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform flex items-center justify-center text-xs
                              ${isCardDarkMode ? "translate-x-6" : ""}`}>
                              {isCardDarkMode ? <IoMdMoon className="text-black"/> : <MdSunny/>}
                            </div>
                            <span className="text-xs ml-auto"><IoMdMoon/></span>
                          </div>
                        </label>
                        <h3 className="font-medium text-lg">
                          {item.title}
                        </h3>
                        {item.description && (
                          <p className="text-sm max-w-xs mt-1 px-1 dark:text-white opacity-75">
                            {item.description}
                          </p>
                        )}
                      </>
                    ) : idx === 4 ? (
                      <div className="flex flex-col items-center justify-center mb-4">
                        {/* Loading Text */}
                        <div className="flex space-x-1 text-lg font-medium">
                          {"Loading".split("").map((letter, index) => (
                            <span key={index} className="loading-letter">{letter}</span>
                          ))}
                        </div>
                        {/* Loading Bar */}
                        <div className="relative mt-2 w-40 h-2 bg-neutral-300 rounded-full overflow-hidden">
                          <div className="loading-bar absolute left-0 top-0 h-full bg-black rounded-full"></div>
                        </div>
                      </div>
                    ) : (
                      iconMap[item.icon] &&
                      React.createElement(iconMap[item.icon], {
                        className: "text-4xl mb-4",
                      })
                    )}
                    {idx !== 3 && (
                      <>
                        <h3 className="font-medium text-neutral-800 text-lg">
                          {item.title}
                        </h3>
                        {item.description && (
                          <p className="text-sm text-neutral-600 max-w-xs mt-1 px-1">
                            {item.description}
                          </p>
                        )}
                      </>
                    )}
                  </div>
                )}
                <div className="flex justify-between mx-2 my-2">
                  {idx === 3 ? (
                    <>
                      <IoMdCloseCircle className={`text-lg ${isCardDarkMode ? "text-white" : "text-black"} opacity-50`} />
                      <IoMdCloseCircle className={`text-lg ${isCardDarkMode ? "text-white" : "text-black"} opacity-50`} />
                    </>
                  ) : (
                    <>
                      <IoMdCloseCircle className="text-lg text-black opacity-50" />
                      <IoMdCloseCircle className="text-lg text-black opacity-50" />
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
