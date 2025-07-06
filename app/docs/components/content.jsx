"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaCopy, FaPencilRuler } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { HiSparkles } from "react-icons/hi2";
import { RiTailwindCssFill } from "react-icons/ri";

export default function DocsContent() {
  const steps = [
    {
      title: "Install Tailwind CSS",
      description: (
        <>
          Ensure your project is set up with Tailwind CSS. If not, you can
          follow the official{" "}
          <a
            href="https://tailwindcss.com/docs/installation"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            installation guide
          </a>
          .
        </>
      ),
    },
    {
      title: "Browse Components",
      description: (
        <>
          Navigate to the{" "}
          <a href="/showcase" className="text-blue-600 underline">
            Components
          </a>{" "}
          section to find the component you need. Each component is designed clean and easy to integrate.
        </>
      ),
    },
    {
      title: "Copy & Paste",
      description:
        "Click the copy button on your chosen component and paste it directly into your React project. No additional installations are needed.",
    },
    {
      title: "Customize as Needed",
      description:
        "Tweak colors, sizes, and content to match your brand while retaining the clean structure of StreamUI components.",
    },
  ];

  const buttonRef = useRef(null);
  const pointerRef = useRef(null);

  useEffect(() => {
    if (!pointerRef.current) return;
    const tl = gsap.timeline({ repeat: -1, defaults: { ease: "power1.inOut" } });
    tl.to(pointerRef.current, { y: 10, duration: 0.5 })
      .to(pointerRef.current, { y: 0, duration: 0.5 })
      .to(pointerRef.current, { scale: 0.9, duration: 0.2 })
      .to(pointerRef.current, { scale: 1, duration: 0.2 });
  }, []);

  return (
    <div className="flex flex-col gap-4 text-neutral-800">
      {/* Heading */}
      <div className="flex justify-start">
        <span className="text-xs justify-center uppercase border border-black rounded-full bg-white px-6 py-2 tracking-widest text-black mb-4 flex">
          <div className="flex gap-2 items-center">
            <HiSparkles className="text-lg" />
            Getting Started
          </div>
        </span>
      </div>

      {/* Introduction */}
      <p className="text-sm md:text-base text-neutral-600 mb-4">
        Welcome to StreamUI, your clean and minimal copy-paste component library
        built with React and Tailwind CSS. Follow these quick steps to get
        started and integrate beautiful, reusable components into your projects
        effortlessly.
      </p>

      {/* Bento Grid for Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl hover:bg-neutral-50 transition"
          >
            <div className="flex justify-between mx-2 my-2">
              <IoMdCloseCircle className="text-lg text-black opacity-50" />
              <IoMdCloseCircle className="text-lg text-black opacity-50" />
            </div>
            <div className="flex flex-col items-center mx-10">
              {/* Custom logic for the "Browse Components" card */}
              {index === 0 && <RiTailwindCssFill className="text-6xl text-blue-500 mb-2 animate-bounce" />}
              {index === 1 ? (
                <>
                  <div className="relative mb-8 flex justify-center items-center h-16">
                    <a
                      ref={buttonRef}
                      href="/showcase"
                      className="px-4 py-2 border border-neutral-400 text-black rounded-md text-sm hover:bg-neutral-100 transition"
                    >
                      Explore Components
                    </a>
                    <div
                      ref={pointerRef}
                      className="text-2xl text-black absolute top-10 left-1/2 -translate-x-1/2 pointer-events-none"
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
                  <p className="text-sm text-neutral-600 mt-1 text-center max-w-xs">
                    {steps[1].description}
                  </p>
                </>
              ) : index === 2 ? (
                <FaCopy className="text-4xl text-neutral-700 mb-2" />
              ) : index === 3 ? (
                <FaPencilRuler className="text-4xl text-neutral-700 mb-2" />
              ) : null}

              {/* Title (skip for index 1 as button replaces it) */}
              {index !== 1 && (
                <>
                  <h2 className="text-lg font-medium text-black">{step.title}</h2>
                  <p className="text-sm text-neutral-600 mt-1 text-center">
                    {step.description}
                  </p>
                </>
              )}
            </div>
            <div className="flex justify-between mx-2 my-2">
              <IoMdCloseCircle className="text-lg text-black opacity-50" />
              <IoMdCloseCircle className="text-lg text-black opacity-50" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}