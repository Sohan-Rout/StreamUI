import { GrInstallOption } from "react-icons/gr";
import { IoMdCloseCircle } from "react-icons/io";
import Copy from "@/app/components/ui/copyButton";

export default function DocsContent() {
  return (
    <div className="flex flex-col gap-4 text-neutral-800" id="installation">
      {/* Heading */}
      <div className="flex justify-start">
        <span className="text-xs justify-center uppercase border border-black rounded-full bg-white px-6 py-2 tracking-widest text-black mb-4 flex">
          <div className="flex gap-2 items-center">
            <GrInstallOption className="text-lg" />
            Installation
          </div>
        </span>
      </div>

      {/* Introduction */}
      <p className="text-sm md:text-base text-neutral-600 mb-2">
        To get started with StreamUI, follow these simple installation steps to
        set up your project with Tailwind CSS, Poppins fonts, and the necessary
        configuration for seamless integration with your components.
      </p>

      {/* Installation Steps */}
      <div className="flex flex-col gap-4">
        {/* Step 1 */}
        <div className="border-black pl-4 py-2">
          <h2 className="text-lg font-medium text-black">
            Initialize your project
          </h2>
          <p className="text-sm text-neutral-600 mb-4 mt-2">
            If you haven't already, create a new Next.js project or navigate to
            your existing project's root directory.
          </p>
          <div className="bg-white rounded-xl shadow-lg">
            <div className="flex justify-between py-2 px-2">
              <IoMdCloseCircle className="text-lg text-black opacity-50" />
              <IoMdCloseCircle className="text-lg text-black opacity-50" />
            </div>
            <div className="px-8">
              <div className="flex justify-between items-center">
                <p className="font-mono text-sm text-black/75">Terminal ~</p>
                <Copy text="npx create-next-app@latest" />
              </div>
              <pre className="bg-neutral-900 text-white text-xs p-3 rounded-md mt-2">
                npx create-next-app@latest
              </pre>
            </div>
            <div className="flex justify-between py-2 px-2">
              <IoMdCloseCircle className="text-lg text-black opacity-50" />
              <IoMdCloseCircle className="text-lg text-black opacity-50" />
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="pl-4 py-2">
          <h2 className="text-lg font-medium text-black">
            Install Tailwind CSS
          </h2>
          <p className="text-sm text-neutral-600 mb-4 mt-2">
            Install Tailwind CSS and its dependencies:
          </p>
          <div className="bg-white rounded-xl shadow-lg">
            <div className="flex justify-between py-2 px-2">
              <IoMdCloseCircle className="text-lg text-black opacity-50" />
              <IoMdCloseCircle className="text-lg text-black opacity-50" />
            </div>
            <div className="px-8">
              <div className="flex justify-between items-center">
                <p className="font-mono text-sm text-black/75">Terminal ~</p>
                <Copy text="npm install -D tailwindcss postcss autoprefixer" />
              </div>
              <pre className="bg-neutral-900 text-white text-xs p-3 rounded-md mt-1">
                npm install -D tailwindcss postcss autoprefixer
              </pre>
            </div>
            <div className="flex justify-between py-2 px-2">
              <IoMdCloseCircle className="text-lg text-black opacity-50" />
              <IoMdCloseCircle className="text-lg text-black opacity-50" />
            </div>
          </div>
          <p className="text-sm text-neutral-600 mt-4 mb-4">
            Initialize Tailwind:
          </p>
          <div className="bg-white rounded-xl shadow-lg">
            <div className="flex justify-between py-2 px-2">
              <IoMdCloseCircle className="text-lg text-black opacity-50" />
              <IoMdCloseCircle className="text-lg text-black opacity-50" />
            </div>
            <div className="px-8">
              <div className="flex justify-between items-center">
                <p className="font-mono text-sm text-black/75">Terminal ~</p>
                <Copy text="npx tailwindcss init -p" />
              </div>
              <pre className="bg-neutral-900 text-white text-xs p-3 rounded-md mt-2">
                npx tailwindcss init -p
              </pre>
            </div>
            <div className="flex justify-between py-2 px-2">
              <IoMdCloseCircle className="text-lg text-black opacity-50" />
              <IoMdCloseCircle className="text-lg text-black opacity-50" />
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="pl-4 py-2">
          <h2 className="text-lg font-medium text-black">
            Configure Tailwind to use Poppins font
          </h2>
          <p className="text-sm text-neutral-600 mb-4 mt-2">
            In your <code>tailwind.config.js</code>, add Poppins to your
            fontFamily:
          </p>
          <div className="bg-white rounded-xl shadow-lg">
            <div className="flex justify-between py-2 px-2">
              <IoMdCloseCircle className="text-lg text-black opacity-50" />
              <IoMdCloseCircle className="text-lg text-black opacity-50" />
            </div>
            <div className="px-8">
              <div className="flex justify-between items-center">
                <p className="font-mono text-sm text-black/75">Terminal ~</p>
                <Copy text="module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}" />
              </div>
          <pre className="bg-neutral-900 text-white text-xs p-3 rounded-md mt-2">
            {`module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}`}
          </pre>
          </div>
          <div className="flex justify-between py-2 px-2">
              <IoMdCloseCircle className="text-lg text-black opacity-50" />
              <IoMdCloseCircle className="text-lg text-black opacity-50" />
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="pl-4 py-2">
          <h2 className="text-lg font-medium text-black">Import Poppins Font</h2>
          <p className="text-sm text-neutral-600 mt-2 mb-4">
            Import Poppins in your <code>globals.css</code> using Google Fonts:
          </p>
          <div className="bg-white rounded-xl shadow-lg">
            <div className="flex justify-between py-2 px-2">
              <IoMdCloseCircle className="text-lg text-black opacity-50" />
              <IoMdCloseCircle className="text-lg text-black opacity-50" />
            </div>
            <div className="px-8">
              <div className="flex justify-between items-center">
                <p className="font-mono text-sm text-black/75">Terminal ~</p>
                <Copy text="@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');" />
              </div>
          <pre className="bg-neutral-900 text-white text-xs p-3 rounded-md mt-2 overflow-x-auto">
            {`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');`}
          </pre>
          </div><div className="flex justify-between py-2 px-2">
              <IoMdCloseCircle className="text-lg text-black opacity-50" />
              <IoMdCloseCircle className="text-lg text-black opacity-50" />
            </div>
          </div>
        </div>

        {/* Step 5 */}
        <div className="pl-4 py-2">
          <h2 className="text-lg font-medium text-black">Install necesaary packages</h2>
          <p className="text-sm text-neutral-600 mt-2 mb-4">
            Installation of packages which includes external icons packages along with gsap and framer motion for animation.
          </p>
          <p>Install Each pacakage separtely or</p>
          <div className="bg-white rounded-xl shadow-lg">
            <div className="flex justify-between py-2 px-2">
              <IoMdCloseCircle className="text-lg text-black opacity-50" />
              <IoMdCloseCircle className="text-lg text-black opacity-50" />
            </div>
            <div className="px-8">
              <div className="flex justify-between items-center">
                <p className="font-mono text-sm text-black/75">Terminal ~</p>
                <Copy text="@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');" />
              </div>
          <pre className="bg-neutral-900 text-white text-xs p-3 rounded-md mt-2 overflow-x-auto">
            {`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');`}
          </pre>
          </div><div className="flex justify-between py-2 px-2">
              <IoMdCloseCircle className="text-lg text-black opacity-50" />
              <IoMdCloseCircle className="text-lg text-black opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}