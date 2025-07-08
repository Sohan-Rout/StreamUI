"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FaCopy, FaPencilRuler, FaQuestion } from "react-icons/fa";
import { IoMdCloseCircle, IoMdMoon } from "react-icons/io";
import { MdSunny } from "react-icons/md";

export default function DocsContent() {
  const [darkModeCard, setDarkModeCard] = useState(true);
  const faqs = [
    {
      question: "What is StreamUI?",
      answer: "StreamUI is a clean, minimal copy-paste React + Tailwind component library to help you build beautiful interfaces faster."
    },
    {
      question: "Do I need to install additional packages?",
      answer: "Most components are copy-paste ready. However, for animations and icons, we recommend installing our dependency bundle via `npm install streamui-deps`."
    },
    {
      question: "Can I customize the components?",
      answer: "Yes, all components are designed to be easily customizable with your own colors, fonts, and structure while retaining clean design."
    },
    {
      question: "Does StreamUI support dark mode?",
      answer: "Yes, many components have built-in dark mode compatibility using Tailwind's dark variant classes."
    }
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
    <div id="faq" className="flex flex-col gap-4 text-neutral-800 mt-10">
      {/* Heading */}
      <div className="flex justify-start">
        <span className="text-xs justify-center uppercase border border-black rounded-full bg-white px-6 py-2 tracking-widest text-black mb-4 flex">
          <div className="flex gap-2 items-center">
            <FaQuestion className="text-md" />
            Frequently Asked Questions
          </div>
        </span>
      </div>

      {/* Introduction */}
      <p className="text-sm md:text-base text-neutral-600 mb-4">
        Below are some frequently asked questions to help you understand and use StreamUI effectively.
      </p>

      {/* Bento Grid for FAQs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {faqs.map((faq, index) => {
          const isDark = index === 3 && darkModeCard;
          return (
            <div
              key={index}
              className={`shadow-lg rounded-xl transition ${
                isDark ? "bg-neutral-900 text-white" : "bg-white text-black"
              }`}
            >
              <div className="flex justify-between mx-2 my-2">
                <IoMdCloseCircle className={`text-lg ${isDark ? "text-white opacity-50" : "text-black opacity-50"}`} />
                <IoMdCloseCircle className={`text-lg ${isDark ? "text-white opacity-50" : "text-black opacity-50"}`} />
              </div>
              <div className="flex flex-col items-center mx-10">
                {/* Icons / Toggle for dark mode card */}
                {index === 0 && 
                <div className="my-6">
                    <h1 className="text-4xl">Stream<span className="bg-black px-2 py-2 rounded-md text-white">UI</span></h1>
                </div>}
                {index === 1 && <FaCopy className="text-4xl text-neutral-700 mb-2" />}
                {index === 2 && <FaPencilRuler className="text-4xl text-neutral-700 mb-2" />}
                {index === 3 && (
                  <div
                    onClick={() => setDarkModeCard(!darkModeCard)}
                    className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition ${
                      isDark ? "bg-neutral-700" : "bg-neutral-300"
                    }`}
                    aria-label="Toggle dark mode"
                  >
                    <div
                      className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out flex items-center justify-center ${
                        isDark ? "translate-x-6" : "translate-x-0"
                      }`}
                    >
                      {isDark ? (
                        <IoMdMoon className="text-neutral-800 text-lg" />
                      ) : (
                        <MdSunny className="text-neutral-800 text-lg" />
                      )}
                    </div>
                  </div>
                )}

                {/* FAQ Content */}
                <h2 className={`text-lg font-medium mt-2 text-center ${isDark ? "text-white" : "text-black"}`}>{faq.question}</h2>
                <p className={`text-sm mt-1 text-center ${isDark ? "text-neutral-300" : "text-neutral-600"}`}>{faq.answer}</p>
              </div>
              <div className="flex justify-between mx-2 my-2">
                <IoMdCloseCircle className={`text-lg ${isDark ? "text-white opacity-50" : "text-black opacity-50"}`} />
                <IoMdCloseCircle className={`text-lg ${isDark ? "text-white opacity-50" : "text-black opacity-50"}`} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}