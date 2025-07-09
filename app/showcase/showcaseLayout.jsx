"use client";
import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { HiSparkles } from "react-icons/hi2";
import CopyButton from "@/app/components/ui/CopyButton";
import { IoBackspace } from "react-icons/io5";
import { MdSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";

export default function ComponentShowcaseLayout({
  title,
  description,
  preview,
  code,
  props,
  category,
}) {
  const [previewDarkMode, setPreviewDarkMode] = useState(false);
  return (
    <div className="flex flex-col max-w-6xl mx-auto my-12">
      {/* Title and description */}
      <div className="w-full flex flex-col items-center mb-2">
        <span className="text-xs uppercase border border-black rounded-full bg-white px-6 py-2 tracking-widest text-black mb-4 inline-block">
          <div className="flex gap-2 items-center">
            <HiSparkles className="text-lg" />
            {category}
          </div>
        </span>
        <h1 className="text-2xl md:text-3xl font-medium">{title}</h1>
        {description && <p className="text-neutral-600 mt-2">{description}</p>}
      </div>
      <div className="w-fit mb-4">
        <a
          href="/showcase"
          className="flex gap-1 items-center bg-white tracking-widest px-4 py-2 rounded-md border border-neutral-400 hover:bg-neutral-50 transition"
        >
          <IoBackspace className="text-xl" />
          <span>Back to Components</span>
        </a>
      </div>
      {/* Content */}
      <main className="max-w-6xl flex flex-col gap-6">
        <div className="w-full bg-white rounded-xl shadow-lg">
          {/* Top corner icons */}
          <div className="flex justify-between mx-2 my-2">
            <IoMdCloseCircle className="text-lg text-black opacity-50" />
            <IoMdCloseCircle className="text-lg text-black opacity-50" />
          </div>

          <div className="px-6">
            {/* Preview */}
            <div className={previewDarkMode ? "dark" : ""}>
              <div
                className={`border border-dashed border-neutral-400 rounded-lg p-4 shadow bg-white dark:bg-neutral-800 text-black dark:text-white`}
              >
                {/* Dark mode toggle */}
                <div className="flex justify-end items-center mb-2">
                  <p className="mr-2 text-sm text-neutral-800 dark:text-neutral-300">
                    Try Different Modes ?
                  </p>
                  <button
                    onClick={() => {
                      setPreviewDarkMode((d) => {
                        const newMode = !d;
                        if (newMode) {
                          document.documentElement.classList.add("dark");
                        } else {
                          document.documentElement.classList.remove("dark");
                        }
                        return newMode;
                      });
                    }}
                    className={`w-12 h-6 rounded-full flex items-center transition duration-300 p-1 ${
                      previewDarkMode ? "bg-neutral-700" : "bg-neutral-300"
                    }`}
                    aria-label="Toggle preview dark mode"
                    type="button"
                  >
                    <div
                      className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ease-in-out flex items-center justify-center ${
                        previewDarkMode ? "translate-x-6" : "translate-x-0"
                      }`}
                    >
                      {previewDarkMode ? (
                        <IoMdMoon className="text-black text-xs" />
                      ) : (
                        <MdSunny className="text-black text-xs" />
                      )}
                    </div>
                  </button>
                </div>
                <div className="flex justify-center">
                {React.cloneElement(preview, {
                  mode: previewDarkMode ? "dark" : "light",
                })}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom corner icons */}
          <div className="flex justify-between mx-2 my-2">
            <IoMdCloseCircle className="text-lg text-black opacity-50" />
            <IoMdCloseCircle className="text-lg text-black opacity-50" />
          </div>
        </div>

        <div>
          {/* Code block with copy button */}
          {code && (
            <div className="relative">
              <pre className="bg-neutral-900 text-white text-xs p-4 rounded-md overflow-x-auto">
                {code}
              </pre>
              <div className="absolute top-2 right-2">
                <CopyButton text={code} />
              </div>
            </div>
          )}

          {/* Props table */}
          {props && props.length > 0 && (
            <div className="border border-dashed border-neutral-400 rounded-lg p-4">
              <h2 className="text-lg font-semibold mb-2">Props</h2>
              <table className="w-full text-sm text-left">
                <thead>
                  <tr>
                    <th className="py-1">Name</th>
                    <th className="py-1">Type</th>
                    <th className="py-1">Default</th>
                    <th className="py-1">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {props.map((prop, idx) => (
                    <tr key={idx} className="border-t border-neutral-300">
                      <td className="py-1">{prop.name}</td>
                      <td className="py-1">{prop.type}</td>
                      <td className="py-1">{prop.default}</td>
                      <td className="py-1">{prop.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
