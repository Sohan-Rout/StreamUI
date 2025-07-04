"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { IoMdCloseCircle, IoMdRemoveCircle, IoMdAddCircle } from "react-icons/io";

export default function Hero() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true, defaults: { ease: "power1.inOut", duration: 1 } });
    tl.to(cardsRef.current, {
      stagger: 0.2,
      y: (i) => -20 - i * 10,
      x: (i) => (i - 1.5) * 40,
      rotation: (i) => (i - 1.5) * 5,
    }).to(cardsRef.current, { delay: 1, y: 0, x: 0, rotation: 0, stagger: 0.2 });
  }, []);

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
              href="#features"
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
        {/* Right: Animated Cards */}
        <div className="w-full md:w-1/2 p-8 flex justify-center items-center relative h-72">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="absolute w-40 h-60 bg-neutral-100 rounded-lg shadow-md"
            >
                <div className="flex justify-start mt-1 ml-1">
                    <IoMdCloseCircle className="text-lg text-red-500"/>
                    <IoMdRemoveCircle className="text-lg text-amber-500"/>
                    <IoMdAddCircle className="text-lg text-green-500"/>
                </div>
                <div className="mx-4 mt-1">
                    <div className="border border-black/25 rounded-lg h-[60px] flex justify-center items-center w-auto">
                        <p className="text-black/50 text-sm">Add image</p>
                    </div>
                    <div className="mt-2 flex flex-col">
                        <p className="text-sm ml-1">Card Heading</p>
                        <p className="text-xs ml-1 text-black/50">A short description goes here, explaining the component or its purpose.</p>
                        <div className="border border-black/25 rounded-3xl mt-2"></div>
                    </div>
                </div>
                <div className="flex flex-row gap-2 justify-center mt-2">
                    <div className="bg-black text-white px-2 py-1 text-sm rounded-lg shadow-lg duration-300 hover:scale-110">Button</div>
                    <div className="border border-black text-black px-2 py-1 text-sm rounded-lg shadow-lg duration-300 hover:scale-110">Button</div>
                </div>
            </div>
          ))}
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