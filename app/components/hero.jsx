"use client";
import { useState } from "react";
import { IoMdCloseCircle, IoMdRemoveCircle, IoMdAddCircle, IoMdMoon } from "react-icons/io";
import { MdSunny } from "react-icons/md";
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa";

const pageLinks = [
  { name : "docsPage", href : "./docs/getting-started"}
];

export default function Hero() {
  // Add near the top of Hero component
  const [isDark, setIsDark] = useState(true);
  return (
    <section className="flex justify-center items-center py-12 px-6">
        <div className="max-w-6xl w-full bg-white rounded-xl shadow-lg ">
            <div className="flex justify-between mx-2 my-2">
                <IoMdCloseCircle className="text-lg text-black opacity-50"/>
                <IoMdCloseCircle className="text-lg text-black opacity-50"/>
            </div>
      <div className="flex flex-col md:flex-row items-center overflow-hidden">
        {/* Left: Heading and CTA */}
        <div className="w-full md:w-1/2 p-8 md:px-14 md:py-24 flex flex-col justify-center items-start">
          <h1 className="text-4xl md:text-4xl font-medium text-neutral-900 mb-4">
            Build Fast with <span className="font-medium">Stream</span><span className="px-2 py-2 bg-black text-white rounded-lg">UI</span>
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg mb-6">
            Copy-paste clean, ready-to-use React + Tailwind components into your projects without installation.
          </p>
          <div className="flex gap-4">
            <a
              href="#components"
              className="bg-black shadow-xl text-white px-5 py-3 rounded-lg hover:bg-neutral-800 transition"
            >
              Browse Components
            </a>
            <a
              href={pageLinks[0].href}
              className="border shadow-xl border-neutral-700 text-neutral-900 px-5 py-3 rounded-lg hover:bg-neutral-100 transition"
            >
              Learn More
            </a>
          </div>
          {/* Reviewed by */}
          <div className="flex items-center gap-2 mt-6">
            <div className="flex -space-x-3">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-medium">S</div>
              <div className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center text-white text-sm font-medium">N</div>
              <div className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center text-white text-sm font-medium">R</div>
              <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white text-sm font-medium">V</div>
            </div>
            <span className="text-sm text-neutral-500">Reviewed by 100+ users</span>
          </div>
        </div>
        {/* Right: Bento Grid Showcase */}
        <div className="w-full md:w-1/2 p-4 grid grid-cols-3 grid-rows-2 gap-4 h-[28rem]">
          {/* Main Focus Card */}
          <div className="col-span-2 row-span-2 bg-neutral-100 rounded-xl shadow-xl p-4 flex flex-col justify-between">
            <div className="flex justify-start space-x-1">
              <IoMdCloseCircle className="text-lg text-red-500" />
              <IoMdRemoveCircle className="text-lg text-amber-500" />
              <IoMdAddCircle className="text-lg text-green-500" />
            </div>
            {/* Mini Website Mockup */}
            <div className="w-full h-full bg-white rounded-lg shadow-inner flex flex-col overflow-hidden text-xs flex-grow mt-2 mb-2">
              {/* Sticky Header */}
              <div className="flex justify-between items-center px-4 py-2 bg-neutral-50 border-b border-neutral-200 sticky top-0">
                <div className="font-medium text-neutral-700">Stream<span className="px-1 py-1 ml-1 text-white bg-black rounded-md">UI</span></div>
                <div className="flex gap-2">
                  <div className="text-xs">Home</div>
                  <div className="text-xs">Features</div>
                  <div className="text-xs">Reviews</div>
                </div>
              </div>
              {/* Hero Section */}
              <div className="flex flex-col items-center justify-center flex-grow p-4 gap-2">
                <div className="w-32 h-4 bg-neutral-200 rounded"></div>
                <div className="w-48 h-3 bg-neutral-200 rounded"></div>
                <div className="w-24 h-6 bg-black rounded text-white flex items-center justify-center text-[10px]">Get Started</div>
              </div>
              {/* Features */}
              <div className="grid grid-cols-3 gap-2 p-3">
                <div className="bg-neutral-100 rounded-md h-10"></div>
                <div className="bg-neutral-100 rounded-md h-10"></div>
                <div className="bg-neutral-100 rounded-md h-10"></div>
              </div>
              {/* Footer */}
              <div className="text-center text-neutral-400 py-2 border-t border-neutral-200">
                © 2025 StreamUI
              </div>
            </div>
          </div>

          {/* Side Preview Cards */}
          <div className="bg-neutral-100 rounded-xl shadow-md flex flex-col justify-center items-center gap-2 p-3">
            <button className="bg-black text-white text-xs px-3 py-1 rounded-lg shadow hover:bg-neutral-800 transition">
              Dark Button
            </button>
            <button className="border border-neutral-500 text-neutral-800 text-xs px-3 py-1 rounded-lg shadow hover:bg-neutral-100 transition">
              Light Button
            </button>
          </div>
          {/* Toggle Showcase Card */}
          <div className={`${isDark ? "bg-neutral-900 text-white" : "bg-neutral-100"} rounded-xl shadow-md flex flex-col items-center justify-center gap-3 p-4 transition-colors duration-300`}>
            <span className="text-xs font-medium">{isDark ? "Dark Mode" : "Light Mode"}</span>

            {/* Toggle Variety 1: Pill Switch with icons */}
            <label className="relative inline-block w-12 h-7 cursor-pointer">
              <input
                type="checkbox"
                checked={isDark}
                onChange={() => setIsDark(!isDark)}
                className="opacity-0 w-0 h-0 peer"
              />
              <div className={`absolute inset-0 rounded-full transition ${isDark ? "bg-white/30" : "bg-neutral-300"}`}></div>
              {/* Icons inside toggle */}
              <IoMdMoon className="absolute left-2 top-2 text-[10px] text-white pointer-events-none" />
              <MdSunny className="absolute right-2 top-2 text-[10px] text-black pointer-events-none" />
              <div className={`absolute left-0.5 top-0.5 w-6 h-6 rounded-full shadow transform transition ${isDark ? "translate-x-5 bg-white" : "bg-white"}`}></div>
            </label>

    {/* Toggle Variety 2: Circle Toggle with icon */}
    <button
      type="button"
      onClick={() => setIsDark(!isDark)}
      className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
        isDark ? 'bg-white/30 text-white' : 'bg-neutral-200 text-yellow-500'
      } ${isDark ? 'shadow-inner' : 'shadow-md'} active:scale-95`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <FaRegLightbulb className="text-[18px]" />
      ) : (
        <FaLightbulb className="text-[18px]" />
      )}
    </button>

            {/* Toggle Variety 3: Rounded Slider */}
            <label className="relative inline-block w-16 h-8 cursor-pointer">
              <input
                type="checkbox"
                checked={isDark}
                onChange={() => setIsDark(!isDark)}
                className="opacity-0 w-0 h-0 peer"
              />
              <div className={`absolute inset-0 rounded-full transition ${isDark ? "bg-white/30" : "bg-neutral-300"}`}></div>
              <div className={`absolute top-1 left-1 w-6 h-6 rounded-full shadow transform transition ${isDark ? "translate-x-8 bg-white" : "bg-white"}`}></div>
            </label>
          </div>
        </div>
      </div>
      <div className="flex justify-between mx-2 my-2">
                <IoMdCloseCircle className="text-lg text-black opacity-50"/>
                <IoMdCloseCircle className="text-lg text-black opacity-50"/>
            </div>
      </div>
    </section>
  );
}