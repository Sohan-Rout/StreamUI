import { FaGithub, FaProductHunt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full pt-8 flex flex-col items-center bg-black justify-center text-center text-sm text-neutral-500 gap-2">
      <p className="font-medium text-white text-xl">© {new Date().getFullYear()}
        <span className="ml-2">Stream<span className="px-1 py-1 text-black bg-white rounded-md font-semibold ml-1">UI</span></span>
        </p>
      <p>Build clean, reusable components faster.</p>
      <div className="flex gap-4 mt-2">
        <a
          href="https://github.com/yourusername/streamui"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black rounded-full transition flex items-center gap-2 bg-neutral-200 px-4 py-2 hover:scale-105"
        >
            <FaGithub className="text-lg"/>
          GitHub
        </a>
        <a
          href="https://www.producthunt.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black rounded-full transition flex items-center gap-2 bg-neutral-200 px-4 py-2 hover:scale-105"
        >
            <FaProductHunt className="text-lg"/>
          Product Hunt
        </a>
      </div>
      <hr className="w-full border-t border-dotted border-neutral-700 mt-8" />
      <div className="w-full flex justify-between px-6 mt-2 mb-2">
        <div>https://www.streamui.org</div>
        <div className="flex flex-wrap gap-4 text-xs text-neutral-400">
          <a href="/sitemap" className="hover:underline">Sitemap</a>
          <a href="/terms" className="hover:underline">Terms & Conditions</a>
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}