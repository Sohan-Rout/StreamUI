import { IoMdCloseCircle } from "react-icons/io";
import { VscDebugStart } from "react-icons/vsc";

export default function Sidebar() {
  return (
    <aside className="w-full sticky">
      <div className="bg-white rounded-xl shadow-lg px-2 py-2">
        <div className="flex justify-between">
          <IoMdCloseCircle className="text-lg text-black opacity-50" />
          <IoMdCloseCircle className="text-lg text-black opacity-50" />
        </div>
        <div className="my-2 mx-6 border-t border-b border-dotted border-neutral-400 py-4">
          <h2 className="text-lg font-semibold text-black mb-3">
            Docs Navigation
          </h2>
          <nav className="flex flex-col gap-2 text-sm ml-4 text-neutral-600">
            <a href="/docs/getting-started" className="flex tracking-wide hover:bg-white hover:border hover:border-black hover:px-4 hover:py-2 hover:duration-300 hover:rounded-full">
              <VscDebugStart/>Getting Started
            </a>
            <a href="/docs/components" className="tracking-wide hover:bg-white hover:border hover:border-black hover:px-4 hover:py-2 hover:duration-300 hover:rounded-full">
              Components
            </a>
            <a href="/docs/faq" className="tracking-wide hover:bg-white hover:border hover:border-black hover:px-4 hover:py-2 hover:duration-300 hover:rounded-full">
              FAQ
            </a>
            <a href="/docs/changelog" className="tracking-wide hover:bg-white hover:border hover:border-black hover:px-4 hover:py-2 hover:duration-300 hover:rounded-full">
              Changelog
            </a>
          </nav>
        </div>
        <div className="flex justify-between">
          <IoMdCloseCircle className="text-lg text-black opacity-50" />
          <IoMdCloseCircle className="text-lg text-black opacity-50" />
        </div>
      </div>
    </aside>
  );
}
