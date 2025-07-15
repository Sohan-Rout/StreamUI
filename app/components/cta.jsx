import { IoMdCloseCircle } from "react-icons/io";
import { MdWidgets } from "react-icons/md";

export default function Hero() {
  return (
    <section className="flex justify-center items-center py-12 px-6 overflow-hidden">
      {/* White base layer (card) */}
      <div className="relative max-w-6xl w-full bg-white rounded-xl shadow-lg z-10">
        {/* Bento grid background layer */}
        <div className="absolute mt-10 inset-0 pointer-events-none flex flex-wrap gap-4 p-4 opacity-20 z-20">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="w-24 h-24 bg-neutral-200 rounded-xl border border-neutral-300"
            ></div>
          ))}
        </div>
        
        {/* Content layer */}
        <div className="relative z-30 flex flex-col min-h-[400px]">
          <div className="flex justify-between mx-2 my-2">
            <IoMdCloseCircle className="text-lg text-black opacity-50" />
            <IoMdCloseCircle className="text-lg text-black opacity-50" />
          </div>
          <div className="flex flex-col items-center justify-center text-center px-6 py-16 md:py-24 gap-6 flex-grow">
            <span className="text-xs flex items-center gap-2 uppercase border border-black rounded-full bg-white px-4 py-1 tracking-widest text-black">
              <MdWidgets className="text-lg"/>
              Get Started
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900 max-w-2xl">
              Build Faster with <span className="font-semibold">Stream</span><span className="px-2 py-1 bg-black text-white rounded-md">UI</span>
            </h2>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400 max-w-xl text-lg">
              Copy-paste ready components to accelerate your development without sacrificing design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a
                href="/showcase"
                className="bg-black shadow-xl text-white px-6 py-3 rounded-full hover:bg-neutral-800 transition text-sm font-medium"
              >
                Browse Components
              </a>
              <a
                href="/docs"
                className="border shadow-xl border-neutral-700 text-neutral-900 px-6 py-3 rounded-full hover:bg-neutral-100 transition text-sm font-medium"
              >
                View Documentation
              </a>
            </div>
          </div>
          <div className="flex justify-between mx-2 my-2">
            <IoMdCloseCircle className="text-lg text-black opacity-50" />
            <IoMdCloseCircle className="text-lg text-black opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
}