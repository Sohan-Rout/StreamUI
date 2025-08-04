"use client";
import { useState } from "react";
import { IoMdCloseCircle, IoMdRemoveCircle, IoMdAddCircle, IoMdMoon } from "react-icons/io";
import { MdSunny } from "react-icons/md";
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa";

const pageLinks = [
  { name: "docsPage", href: "./docs" },
  { name: "componentsPage", href: "./showcase" },
];

export default function Hero() {
  const [isDark, setIsDark] = useState(true);

  return (
    <section className="flex justify-center items-center py-12 px-4 sm:px-6">
      <div className="max-w-6xl w-full bg-white rounded-xl shadow-lg">
        {/* Desktop-only decorative dots */}
        <div className="hidden md:flex justify-between mx-2 my-2">
          <IoMdCloseCircle className="text-lg text-black opacity-50" />
          <IoMdCloseCircle className="text-lg text-black opacity-50" />
        </div>

        {/* Layout wrapper */}
        <div className="flex flex-col md:flex-row items-center overflow-hidden gap-6 md:gap-0">
          {/* LEFT: Heading + CTA */}
          <div className="w-full md:w-1/2 p-6 md:p-14 flex flex-col justify-center items-start">
            <h1 className="text-3xl sm:text-4xl font-medium text-neutral-900 mb-4">
              Build Fast with <span className="font-medium">Stream</span>
              <span className="px-2 py-1 ml-1 bg-black text-white rounded-lg">UI</span>
            </h1>
            <p className="text-neutral-600 text-base sm:text-lg mb-6">
              Copy-paste clean, ready-to-use NextJs + Tailwind sections into your SaaS projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={pageLinks[1].href}
                className="bg-black shadow-xl text-white px-5 py-3 rounded-lg hover:bg-neutral-800 duration-300 hover:scale-105 transition"
              >
                Browse Sections
              </a>
              <a
                href={pageLinks[0].href}
                className="border shadow-xl border-neutral-700 text-neutral-900 px-5 py-3 rounded-lg duration-300 hover:scale-105 hover:bg-neutral-100 transition"
              >
                Documentation
              </a>
            </div>

            {/* Reviewed by */}
            <div className="flex items-center gap-2 mt-6">
              <div className="flex -space-x-3">
                {["S", "N", "R", "V"].map((l, i) => (
                  <div
                    key={l}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium ${
                      ["bg-blue-600", "bg-orange-600", "bg-pink-600", "bg-green-600"][i]
                    }`}
                  >
                    {l}
                  </div>
                ))}
              </div>
              <span className="text-sm text-neutral-500">Reviewed by 100+ users</span>
            </div>
          </div>

          {/* RIGHT: Bento grid */}
         <div className="w-full md:w-1/2 p-4 grid grid-cols-3 grid-rows-2 gap-3 md:gap-4 h-auto md:h-[28rem]">
            {/* Main card */}
            <div className="col-span-3 md:col-span-2 md:row-span-2 bg-neutral-100 rounded-xl shadow-xl p-3 md:p-4 flex flex-col justify-between">
              <div className="flex justify-start space-x-1">
                <IoMdCloseCircle className="text-lg text-red-500" />
                <IoMdRemoveCircle className="text-lg text-amber-500" />
                <IoMdAddCircle className="text-lg text-green-500" />
              </div>

              {/* Mini Website Mockup */}
              <div className="w-full h-60 md:h-full bg-white rounded-md shadow-inner flex flex-col overflow-hidden text-xs mt-2">
                <div className="flex justify-between items-center px-2 md:px-4 py-2 bg-neutral-50 border-b border-neutral-200">
                  <div className="font-medium text-neutral-700">
                    Stream<span className="px-1 py-1 ml-1 text-white bg-black rounded-md">UI</span>
                  </div>
                  <div className="hidden sm:flex gap-2">
                    <div className="text-xs">Home</div>
                    <div className="text-xs">Features</div>
                    <div className="text-xs">Reviews</div>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center flex-grow p-4 gap-2">
                  <div className="w-24 h-3 bg-neutral-200 rounded"></div>
                  <div className="w-36 h-2 bg-neutral-200 rounded"></div>
                  <div className="w-20 h-5 bg-black rounded text-white flex items-center justify-center text-[10px]">
                    Get Started
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-1 md:gap-2 p-2 md:p-3">
                  <div className="bg-neutral-100 rounded h-8 md:h-10"></div>
                  <div className="bg-neutral-100 rounded h-8 md:h-10"></div>
                  <div className="bg-neutral-100 rounded h-8 md:h-10"></div>
                </div>

                <div className="text-center text-neutral-400 py-1 md:py-2 border-t border-neutral-200 text-[10px]">
                  © 2025 StreamUI
                </div>
              </div>
            </div>

            {/* Side cards */}
            <div className="col-span-1 row-span-1 bg-neutral-100 rounded-xl shadow-md flex flex-col justify-center items-center gap-1 p-2 md:p-3">
              <button className="bg-black text-white text-[10px] md:text-xs px-2 md:px-3 py-1 rounded-lg shadow">
                Dark
              </button>
              <button className="border border-neutral-500 text-neutral-800 text-[10px] md:text-xs px-2 md:px-3 py-1 rounded-lg shadow">
                Light
              </button>
            </div>

            {/* Toggle showcase */}
            <div
    className={`col-span-2 md:col-span-1 row-span-1 rounded-xl shadow-md flex flex-col items-center justify-center gap-1 md:gap-3 p-2 md:p-4 transition-colors duration-300 ${
      isDark ? "bg-neutral-900 text-white" : "bg-neutral-100"
    }`}
            >
              <span className="text-[10px] md:text-xs font-medium">
                {isDark ? "Dark Mode" : "Light Mode"}
              </span>

              {/* Pill switch */}
              <label className="relative inline-block w-10 md:w-12 h-5 md:h-7 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isDark}
                  onChange={() => setIsDark(!isDark)}
                  className="opacity-0 w-0 h-0 peer"
                />
                <div
                  className={`absolute inset-0 rounded-full transition ${
                    isDark ? "bg-white/30" : "bg-neutral-300"
                  }`}
                ></div>
                <IoMdMoon className="absolute left-1 top-1 md:left-2 md:top-2 text-[8px] md:text-[10px] text-white pointer-events-none" />
                <MdSunny className="absolute right-1 top-1 md:right-2 md:top-2 text-[8px] md:text-[10px] text-black pointer-events-none" />
                <div
                  className={`absolute top-0.5 left-0.5 w-4 h-4 md:w-6 md:h-6 rounded-full shadow transform transition bg-white ${
                    isDark ? "translate-x-5 md:translate-x-5" : ""
                  }`}
                ></div>
              </label>

              {/* Circle toggle */}
              <button
                onClick={() => setIsDark(!isDark)}
                className={`w-7 h-7 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
                  isDark ? "bg-white/30 text-white" : "bg-neutral-200 text-yellow-500"
                } active:scale-95`}
              >
                {isDark ? (
                  <FaRegLightbulb className="text-sm md:text-lg" />
                ) : (
                  <FaLightbulb className="text-sm md:text-lg" />
                )}
              </button>

              {/* Rounded slider */}
              <label className="relative inline-block w-12 md:w-16 h-5 md:h-8 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isDark}
                  onChange={() => setIsDark(!isDark)}
                  className="opacity-0 w-0 h-0 peer"
                />
                <div
                  className={`absolute inset-0 rounded-full transition ${
                    isDark ? "bg-white/30" : "bg-neutral-300"
                  }`}
                ></div>
                <div
                  className={`absolute top-0.5 left-0.5 w-4 h-4 md:w-6 md:h-6 rounded-full transition bg-white ${
                    isDark ? "translate-x-6 md:translate-x-8" : ""
                  }`}
                ></div>
              </label>
            </div>
          </div>
        </div>

        {/* Desktop-only decorative dots */}
        <div className="hidden md:flex justify-between mx-2 my-2">
          <IoMdCloseCircle className="text-lg text-black opacity-50" />
          <IoMdCloseCircle className="text-lg text-black opacity-50" />
        </div>
      </div>
    </section>
  );
}