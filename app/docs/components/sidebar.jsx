import { IoMdCloseCircle } from "react-icons/io";
import { VscDebugStart, VscGitPullRequestNewChanges } from "react-icons/vsc";
import { PiPackageFill } from "react-icons/pi";
import { FaQuestion } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="w-full sticky">
      <div className="bg-white rounded-xl shadow-lg px-2 py-2">
        <div className="flex justify-between">
          <IoMdCloseCircle className="text-lg text-black opacity-50" />
          <IoMdCloseCircle className="text-lg text-black opacity-50" />
        </div>
        <div className="my-2 mx-6 border-t flex flex-col items-center border-b border-dotted border-neutral-400 py-4">
          <h2 className="text-xl flex items-center gap-2 font-medium text-black mb-3">
            Docs Navigation
          </h2>
          <nav className="flex flex-col gap-2 text-xs text-neutral-600">
            <a href="/docs" className="flex gap-2 items-center tracking-wider hover:bg-white hover:border hover:border-black hover:px-4 hover:py-2 hover:duration-300 hover:rounded-full hover:text-black">
              <VscDebugStart className="text-lg"/>Getting Started
            </a>
            <a href="#installation" className="flex gap-2 items-center tracking-wider hover:bg-white hover:border hover:border-black hover:px-4 hover:py-2 hover:duration-300 hover:rounded-full hover:text-black">
              <PiPackageFill className="text-lg"/>Installation
            </a>
            <a href="/docs/faq" className="flex gap-2 items-center tracking-wider hover:bg-white hover:border hover:border-black hover:px-4 hover:py-2 hover:duration-300 hover:rounded-full hover:text-black">
              <FaQuestion className="text-lg"/>FAQ
            </a>
            <a href="/docs/changelog" className="flex gap-2 items-center tracking-wider hover:bg-white hover:border hover:border-black hover:px-4 hover:py-2 hover:duration-300 hover:rounded-full hover:text-black">
              <VscGitPullRequestNewChanges className="text-lg"/>Changelog
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
