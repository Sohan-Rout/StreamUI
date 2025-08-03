"use client";
import { useRouter } from "next/navigation";
import { RiGalleryFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import showcaseComponents from "./showcase-config";
import { useState, useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const LazyPreview = ({ slug }) => {
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    import(`@/app/showcase/components/previews/${slug}`)
      .then((mod) => setComponent(() => mod.default))
      .catch(() => setComponent(() => null));
  }, [slug]);

  return Component ? <Component /> : <span className="text-sm text-neutral-400">Preview unavailable</span>;
};

export default function ShowcaseGalleryPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("theme", "light");
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");

    const handleKeyDown = (e) => {
      const isMac = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
      const trigger = (isMac && e.metaKey && e.key === "/") || (!isMac && e.ctrlKey && e.key === "/");
      if (trigger) {
        e.preventDefault();
        searchInputRef.current?.focus();
        searchInputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filtered = showcaseComponents.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const layoutClass = (cat) => {
    if (cat === "navbar" || cat === "grids") return "col-span-3 row-span-1";
    if (cat === "pricing" || cat === "featured") return "col-span-5 row-span-2";
    if (cat === "cards" || cat === "utilities") return "col-span-2 row-span-1";
    return "";
  };

  const scaleClass = (cat) => {
    if (["cards", "utilities"].includes(cat)) return "scale-[0.5]";
    if (["pricing", "featured"].includes(cat)) return "";
    return "scale-[0.75]";
  };

  const heightClass = (cat) => (["pricing", "featured"].includes(cat) ? "h-auto" : "h-[200px]");
  
  return (
    <main className="max-w-6xl w-full mx-auto px-2 sm:px-4 md:px-6 py-2 sm:py-4 md:py-6">
      {/* Header */}
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-2xl md:text-3xl font-medium mb-2 flex items-center">
          Welcome to Component Gallery <RiGalleryFill className="ml-1" />
        </h1>
        <p className="text-neutral-600 mb-4 text-center">
          Browse all available components and variants. Click to view and copy them directly for your projects.
        </p>

        {/* Search */}
        <div className="relative px-8 py-2 flex items-center gap-2 bg-white rounded-lg border border-neutral-300 focus-within:ring">
          <CiSearch className="text-xl" />
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search components..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="text-sm w-full bg-transparent focus:outline-none"
          />
          {search && (
            <button
              onClick={() => {
                setSearch("");
                setCurrentPage(1);
              }}
              className="absolute right-3 text-neutral-400 hover:text-neutral-600 transition"
              aria-label="Clear search"
            >
              <IoMdClose />
            </button>
          )}
        </div>

        {/* Quick tags */}
        <div className="flex flex-wrap justify-center mt-4 gap-2">
          {["auth", "navbar", "section", "pricing", "badge"].map((tag) => (
            <button
              key={tag}
              onClick={() => {
                setSearch(tag);
                setCurrentPage(1);
              }}
              className="px-3 py-1 border border-neutral-300 bg-neutral-100 text-neutral-700 text-sm hover:bg-neutral-200 transition"
            >
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {paginated.map((c) => {
          // removed
          return (
            <div
              key={c.slug}
              onClick={() => router.push(`/showcase/${c.slug}`)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && router.push(`/showcase/${c.slug}`)}
              className={`rounded-lg p-2 bg-white shadow hover:bg-neutral-50 transition cursor-pointer flex flex-col gap-4 ${layoutClass(
                c.category
              )}`}
            >

              {/* preview */}
              <div
                className={`border border-neutral-300 rounded-md flex ${heightClass(
                  c.category
                )} items-center justify-center text-neutral-700 text-sm overflow-hidden`}
              >
                <div className={`origin-center w-full flex items-center justify-center ${scaleClass(c.category)}`}>
                  <LazyPreview slug={c.slug} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-6 gap-4">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 flex gap-2 justify-center items-center rounded-md hover:scale-105 duration-300 transition-all disabled:hover:scale-100 bg-neutral-200 disabled:opacity-50"
          >
            <FaArrowLeft/>Previous
          </button>
          <span className="text-sm text-neutral-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 flex py-2 gap-2 justify-center items-center rounded-md hover:scale-105 duration-300 disabled:hover:scale-100 transition-all bg-neutral-200 disabled:opacity-50"
          >
            Next<FaArrowRight/>
          </button>
        </div>
      )}

      {/* Floating search hint */}
      <button
        onClick={() => {
          searchInputRef.current?.focus();
          searchInputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full shadow-lg animate-bounce hover:scale-105 transition-transform"
      >
        <CiSearch className="text-lg" />
        <span>To search use</span>
        <kbd className="text-sm font-mono bg-white text-black rounded-lg px-2 py-1">/</kbd>
      </button>
    </main>
  );
}