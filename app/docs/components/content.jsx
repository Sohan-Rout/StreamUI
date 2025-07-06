import { FaFile, FaCopy, FaPencilRuler } from "react-icons/fa";
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              {/* Add logo icons based on index */}
              {index === 0 && <RiTailwindCssFill className="text-6xl text-blue-500 mb-2 animate-bounce" />}
              {index === 1 && <FaFile className="text-4xl text-neutral-700 mb-2" />}
              {index === 2 && <FaCopy className="text-4xl text-neutral-700 mb-2" />}
              {index === 3 && <FaPencilRuler className="text-4xl text-neutral-700 mb-2" />}

              <h2 className="text-lg font-medium text-black">{step.title}</h2>
              <p className="text-sm text-neutral-600 mt-1 text-center">
                {step.description}
              </p>
            </div>
            <div className="flex justify-between mx-2 my-2">
              <IoMdCloseCircle className="text-lg text-black opacity-50" />
              <IoMdCloseCircle className="text-lg text-black opacity-50" />
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-6">
        <a
          href="/docs/components"
          className="inline-block px-4 py-2 bg-black text-white rounded-md text-sm hover:bg-neutral-800 transition"
        >
          Explore Components
        </a>
      </div>
    </div>
  );
}