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
  const [loading, setLoading] = useState(true);
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

    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timeout);
    };
  }, []);

  const filtered = showcaseComponents.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <main className="max-w-7xl mx-auto px-4 md:px-6 py-6">
      {/* Page heading */}
      <header className="mb-8 text-center md:text-left">
        <h1 className="text-3xl font-medium mb-2 flex justify-center md:justify-start items-center gap-2">
          <RiGalleryFill /> Component Gallery
        </h1>
        <p className="text-neutral-600">
          Browse and explore reusable UI components. Click to preview or copy for your own projects.
        </p>
      </header>

      {/* Layout: Sidebar and Main content */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <aside className="md:w-52 w-full">
          <div className="mb-4">
            <label htmlFor="search" className="sr-only">Search</label>
            <div className="relative flex items-center gap-2 bg-white border border-neutral-300 rounded-lg px-3 py-2">
              <CiSearch className="text-xl text-neutral-600" />
              <input
                ref={searchInputRef}
                id="search"
                type="text"
                placeholder="Search components..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full bg-transparent focus:outline-none text-sm"
              />
              {search && (
                <button
                  onClick={() => {
                    setSearch("");
                    setCurrentPage(1);
                  }}
                  className="absolute right-3 text-neutral-400 hover:text-neutral-600"
                >
                  <IoMdClose />
                </button>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-semibold text-neutral-600">Quick Filters</p>
            <div className="flex flex-wrap gap-2">
              {["auth", "navbar", "section", "pricing", "badge"].map((tag) => (
                <button
                  key={tag}
                  onClick={() => {
                    setSearch(tag);
                    setCurrentPage(1);
                  }}
                  className="px-3 py-1 border border-neutral-300 bg-neutral-100 text-neutral-700 text-sm rounded hover:bg-neutral-200 transition"
                >
                  {tag.charAt(0).toUpperCase() + tag.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Gallery List */}
        <section className="flex-1">
          {loading ? (
            <div className="w-full py-12 flex justify-center items-center">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-black"></div>
            </div>
          ) : paginated.length === 0 ? (
            <p className="text-neutral-500 text-sm">No sections found.</p>
          ) : (
            <div className="flex flex-col gap-10">
              {paginated.map((c) => (
                <section
                  key={c.slug}
                  onClick={() => router.push(`/showcase/${c.slug}`)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) =>
                    (e.key === "Enter" || e.key === " ") && router.push(`/showcase/${c.slug}`)
                  }
                  className="cursor-pointer border border-neutral-300 rounded-lg bg-white shadow hover:bg-neutral-50 transition p-4"
                >
                  <h2 className="text-xl font-semibold mb-2">{c.title}</h2>
                  <div className="overflow-x-auto">
                    <div className="origin-center mx-auto">
                      <LazyPreview slug={c.slug} />
                    </div>
                  </div>
                </section>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-6 gap-4">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 flex gap-2 items-center rounded-md hover:scale-105 transition disabled:hover:scale-100 bg-neutral-200 disabled:opacity-50"
              >
                <FaArrowLeft /> Previous
              </button>
              <span className="text-sm text-neutral-700">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 flex gap-2 items-center rounded-md hover:scale-105 transition disabled:hover:scale-100 bg-neutral-200 disabled:opacity-50"
              >
                Next <FaArrowRight />
              </button>
            </div>
          )}
        </section>
      </div>

      {/* Floating search shortcut */}
      <button
        onClick={() => {
          searchInputRef.current?.focus();
          searchInputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full shadow-lg animate-bounce hover:scale-105 transition"
      >
        <CiSearch className="text-lg" />
        <span>Press</span>
        <kbd className="text-sm font-mono bg-white text-black rounded-lg px-2 py-1">/</kbd>
      </button>
    </main>
  );
}