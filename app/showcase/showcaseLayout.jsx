"use client";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { IoMdCloseCircle } from "react-icons/io";
import { HiSparkles } from "react-icons/hi2";
import CopyButton from "@/app/components/ui/CopyButton";
import { IoBackspace } from "react-icons/io5";
import { MdSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
import { GrInstallOption } from "react-icons/gr";

export default function ComponentShowcaseLayout({
  title,
  description,
  preview,
  code,
  implementation,
  props,
  category,
}) {
  const [previewDarkMode, setPreviewDarkMode] = useState(false);
  const [showFullCode, setShowFullCode] = useState(false);
  return (
    <main className="flex flex-col max-w-6xl mx-auto my-12">
      {/* Title and description */}
      {title && (
        <div className="w-full flex flex-col items-center mb-2">
          <span className="text-xs uppercase border border-black rounded-full bg-white px-6 py-2 tracking-widest text-black mb-4 inline-block">
            <div className="flex gap-2 items-center">
              <HiSparkles className="text-lg" />
              {category}
            </div>
          </span>
          <h1 className="text-2xl md:text-3xl font-medium">{title}</h1>
          {description && <p className="text-neutral-600 mt-2 text-center">{description}</p>}
        </div>
      )}
      {title && (
        <div className="w-fit mb-4">
          <a
            href="/showcase"
            className="flex gap-1 items-center bg-black text-white px-4 py-2 rounded-md border border-neutral-400 hover:scale-105 duration-300 transition"
          >
            <IoBackspace className="text-md" />
            <span className="text-md">Return To Gallery</span>
          </a>
        </div>
      )}
      {/* Content */}
      {preview && (
        <div className="max-w-6xl flex flex-col gap-6">
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
                  className={`border border-dashed border-neutral-400 rounded-lg p-4 shadow bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white`}
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
                  <div className="flex justify-center py-12">
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
        </div>
      )}
      {code && (
        <div className="mt-8">
          <div className="flex">
            <span className="text-xs justify-center uppercase border border-black rounded-full bg-white px-6 py-2 tracking-widest text-black mb-4 flex">
              <div className="flex gap-2 items-center">
                <GrInstallOption className="text-lg" />
                Installation
              </div>
            </span>
          </div>
          {/* Installation Steps */}
          <div className="flex flex-col gap-4">
            {/* Step 1 */}
            <div className="border-black py-2">
              <h2 className="text-lg font-medium text-black">
                Install the Dependencies
              </h2>
              <p className="text-sm text-neutral-600 mb-4 mt-2">
                Run the command below in the app root to install all the
                necessary dependencies.
              </p>
              <div className="bg-white rounded-xl shadow-lg">
                <div className="flex justify-between py-2 px-2">
                  <IoMdCloseCircle className="text-lg text-black opacity-50" />
                  <IoMdCloseCircle className="text-lg text-black opacity-50" />
                </div>
                <div className="px-8">
                  <div className="flex justify-between items-center">
                    <p className="font-mono text-sm text-black/75">
                      Terminal ~
                    </p>
                    <CopyButton text="npm install streamui-deps" />
                  </div>
                  <pre className="bg-neutral-900 text-white text-xs p-3 rounded-md mt-2">
                    npm install streamui-deps
                  </pre>
                </div>
                <div className="flex justify-between py-2 px-2">
                  <IoMdCloseCircle className="text-lg text-black opacity-50" />
                  <IoMdCloseCircle className="text-lg text-black opacity-50" />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="border-black py-2">
              <h2 className="text-lg font-medium text-black">
                Configure Tailwind dark class.
              </h2>
              <p className="text-sm text-neutral-600 mb-4 mt-2">
                Add this line to your tailwind config.
              </p>
              <div className="bg-white rounded-xl shadow-lg">
                <div className="flex justify-between py-2 px-2">
                  <IoMdCloseCircle className="text-lg text-black opacity-50" />
                  <IoMdCloseCircle className="text-lg text-black opacity-50" />
                </div>
                <div className="px-8">
                  <div className="flex justify-between items-center">
                    <p className="font-mono text-sm text-black/75">
                      Terminal ~
                    </p>
                    <CopyButton text="darkMode: 'class'," />
                  </div>
                  <pre className="bg-neutral-900 text-white text-xs p-3 rounded-md mt-2">
                    darkMode: 'class',
                  </pre>
                </div>
                <div className="flex justify-between py-2 px-2">
                  <IoMdCloseCircle className="text-lg text-black opacity-50" />
                  <IoMdCloseCircle className="text-lg text-black opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Usage guide */}
      {implementation && (
        <div className="mt-4">
          <div className="flex">
            <span className="text-xs justify-center uppercase border border-black rounded-full bg-white px-6 py-2 tracking-widest text-black mb-4 flex">
              <div className="flex gap-2 items-center">
                <GrInstallOption className="text-lg" />
                Implementation
              </div>
            </span>
          </div>
          <div className="flex flex-col gap-4">
            {/* Step 1 */}
            <div className="border-black py-2">
              <h2 className="text-lg font-medium text-black">
                Add the component in your project.
              </h2>
              <p className="text-sm text-neutral-600 mb-4 mt-2">
                Copy the code below and paste it into your component file (e.g.,
                Navbar.jsx or Button.jsx) to use it in your project.
              </p>
              <div className="bg-white rounded-xl shadow-lg">
                <div className="flex justify-between py-2 px-2">
                  <IoMdCloseCircle className="text-lg text-black opacity-50" />
                  <IoMdCloseCircle className="text-lg text-black opacity-50" />
                </div>
                <div className="px-8">
                  {/* Code block with copy button */}
                  {code && (
                    <div className="relative bg-neutral-100 rounded-md overflow-hidden">
                      <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                          showFullCode ? "max-h-full" : "max-h-[200px]"
                        }`}
                      >
                        <SyntaxHighlighter
                          language="jsx"
                          style={vscLight}
                          customStyle={{
                            fontSize: "0.75rem",
                            padding: "1rem",
                            margin: 0,
                            background: "transparent",
                          }}
                          wrapLongLines
                        >
                          {code}
                        </SyntaxHighlighter>
                      </div>
                      <div className="absolute top-2 right-2">
                        <CopyButton text={code} />
                      </div>
                      <button
                        onClick={() => setShowFullCode(!showFullCode)}
                        className="w-full bg-neutral-200 text-neutral-700 text-xs py-2 mt-1 rounded-b-md hover:bg-neutral-300 transition"
                      >
                        {showFullCode ? "Hide Code" : "Show Full Code"}
                      </button>
                    </div>
                  )}
                </div>
                <div className="flex justify-between py-2 px-2">
                  <IoMdCloseCircle className="text-lg text-black opacity-50" />
                  <IoMdCloseCircle className="text-lg text-black opacity-50" />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="border-black py-2">
              <h2 className="text-lg font-medium text-black">
                Using the component
              </h2>
              <p className="text-sm text-neutral-600 mb-4 mt-2">
                Import the component where needed, and use the syntax below to
                pass it as a component prop into your parent component.
              </p>
              <div className="bg-white rounded-xl shadow-lg">
                <div className="flex justify-between py-2 px-2">
                  <IoMdCloseCircle className="text-lg text-black opacity-50" />
                  <IoMdCloseCircle className="text-lg text-black opacity-50" />
                </div>
                <div className="flex justify-start px-6">
                  <CopyButton text={implementation} />
                </div>
                <div className="px-8">
                  <SyntaxHighlighter
                    language="jsx"
                    style={vscLight}
                    customStyle={{
                      fontSize: "0.75rem",
                      padding: "1rem",
                      marginTop: "0.5rem",
                      borderRadius: "0.375rem",
                      background: "#f3f4f6",
                    }}
                    wrapLongLines
                  >
                    {implementation}
                  </SyntaxHighlighter>
                </div>
                <div className="flex justify-between py-2 px-2">
                  <IoMdCloseCircle className="text-lg text-black opacity-50" />
                  <IoMdCloseCircle className="text-lg text-black opacity-50" />
                </div>
              </div>
            </div>
          </div>

          {props && props.length > 0 && (
            <div className="bg-white rounded-xl shadow-lg">
              <div className="flex justify-between py-2 px-2">
                <IoMdCloseCircle className="text-lg text-black opacity-50" />
                <IoMdCloseCircle className="text-lg text-black opacity-50" />
              </div>
              <div className="px-12">
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
              <div className="flex justify-between py-2 px-2">
                <IoMdCloseCircle className="text-lg text-black opacity-50" />
                <IoMdCloseCircle className="text-lg text-black opacity-50" />
              </div>
            </div>
          )}
        </div>
      )}
      <div className="flex justify-center mt-6">
        <div className="flex flex-col items-center">
          <p className="text-neutral-600 mb-2">That's it folks</p>
          <a href="/showcase" className="px-4 py-2 bg-black text-white rounded-lg shadow-xl hover:scale-105 duration-300">Return to Gallery</a>
          <p className="text-neutral-600 mt-4">If You enjoy the product make sure to tag the library and share it with your freinds.</p>
        </div>
      </div>
    </main>
  );
}
