import { FaGithub, FaProductHunt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full pt-8 flex flex-col items-center bg-black justify-center text-center text-sm text-neutral-500 gap-2">
      {/* Brand */}
      <p className="font-medium text-white text-xl">
        © {new Date().getFullYear()}
        <span className="ml-2">
          Stream<span className="px-1 py-1 text-black bg-white rounded-md font-semibold ml-1">UI</span>
        </span>
      </p>

      <p>Build clean, reusable components faster.</p>

      {/* Social links */}
      <div className="flex flex-col sm:flex-row gap-3 mt-2">
        <a
          href="https://github.com/yourusername/streamui"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black rounded-full transition flex items-center justify-center gap-2 bg-neutral-200 px-4 py-2 hover:scale-105"
        >
          <FaGithub className="text-lg" />
          GitHub
        </a>
        <a
          href="https://www.producthunt.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black rounded-full transition flex items-center justify-center gap-2 bg-neutral-200 px-4 py-2 hover:scale-105"
        >
          <FaProductHunt className="text-lg" />
          Product Hunt
        </a>
      </div>

      <hr className="w-full border-t border-dotted border-neutral-700 mt-8" />

      {/* Bottom bar */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 mt-2 mb-2 gap-2 md:gap-0">
        <a
          href="https://www.streamui.org"
          className="text-neutral-500 hover:text-white transition"
        >
          www.streamui.org
        </a>

        <nav className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-neutral-400">
          <a href="/sitemap.xml" className="hover:underline">Sitemap</a>
          <a href="/terms" className="hover:underline">Terms & Conditions</a>
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
        </nav>
      </div>
    </footer>
  );
}