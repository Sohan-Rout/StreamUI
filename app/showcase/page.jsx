"use client";
import { useRouter } from "next/navigation";
import { RiGalleryFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import showcaseComponents from "./showcase-config";
import { useState, useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";

export default function ShowcaseGalleryPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 30; // 6 rows * 5 columns
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");

      const handleKeyDown = (e) => {
        const isMac = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
        const isTrigger = (isMac && e.metaKey && e.key === "/") || (!isMac && e.ctrlKey && e.key === "/");

        if (isTrigger) {
          e.preventDefault();
          if (document.activeElement !== searchInputRef.current) {
            searchInputRef.current?.focus();
            searchInputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, []);

  const filteredComponents = showcaseComponents.filter((component) =>
    component.title.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.ceil(filteredComponents.length / itemsPerPage);
  const paginatedComponents = filteredComponents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <main className="max-w-6xl w-full mx-auto px-2 sm:px-4 md:px-6 py-2 sm:py-4 md:py-6">
      <div className="flex flex-col justify-center items-center mb-8">
      <h1 className="text-2xl md:text-3xl font-medium mb-2 flex items-center">
        Welcome to Component Gallery
        <RiGalleryFill className="ml-1" />
      </h1>
      <p className="text-neutral-600 mb-4">
        Browse all available components and variants. Click to view and copy them directly for your projects.
      </p>
      <div className="relative px-8 py-2 flex items-center gap-2 bg-white rounded-lg border border-neutral-300 focus:outline-none focus:ring">
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
          className="text-sm w-full bg-none focus:outline-none"
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
            <IoMdClose/>
          </button>
        )}
      </div>
      <div className="flex flex-wrap justify-center mt-4 gap-2">
        {["auth", "navbar", "section", "pricing", "badge"].map((tag) => (
          <button
            key={tag}
            onClick={() => {
              setSearch(tag);
              setCurrentPage(1);
            }}
            className="px-3 py-1 border-l border-r border-black rounded-full bg-neutral-100 text-neutral-700 text-sm hover:bg-neutral-200 transition"
          >
            {tag.charAt(0).toUpperCase() + tag.slice(1)}
          </button>
        ))}
      </div>
      </div>
<div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <div className="col-span-full grid auto-rows-min grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {paginatedComponents.map((component) => {
              const PreviewComponent = component.preview;
              return (
                <div
                  key={component.slug}
                  onClick={() => router.push(`/showcase/${component.slug}`)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && router.push(`/showcase/${component.slug}`)}
                  className={`rounded-lg p-4 bg-white shadow hover:bg-neutral-50 transition cursor-pointer flex flex-col gap-4 ${
                    component.category === "navbar" ? "col-span-3 row-span-1" : ""
                  } ${component.category === "grids" ? "col-span-3 row-span-1" : ""} 
                   ${component.category === "pricing" ? "col-span-5 row-span-2" : ""}
                   ${component.category === "featured" ? "col-span-5 row-span-2" : ""}
                   ${component.category === "cards" ? "col-span-2 row-span-1" : ""}
                   ${component.category === "utilities" ? "col-span-2 row-span-1" : ""}`}
                >
                  <div className={`border border-neutral-300 rounded-md flex h-[200px] items-center justify-center text-neutral-700 text-sm overflow-hidden ${(component.category === "pricing" || component.category === "featured") ? "h-auto" : ""}`}>
                    <div className={`origin-center w-full flex items-center justify-center ${
                      (component.category === "cards" || component.category === "utilities") ? "scale-[0.5]" : "scale-[0.75]"
                    } ${(component.category === "pricing" || component.category === "featured") ? "flex justify-center items-center" : ""}
                     `}>
                      {PreviewComponent ? (
                        <PreviewComponent />
                      ) : (
                        <div className="text-sm text-neutral-400">Preview unavailable</div>
                      )}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">{component.title}</h2>
                    <p className="text-sm text-neutral-600 mt-1">{component.description}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 gap-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded bg-neutral-200 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-sm text-neutral-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded bg-neutral-200 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
      </div>
      <button
        onClick={() => {
          searchInputRef.current?.focus();
          searchInputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full shadow-lg animate-bounce hover:scale-105 transition-transform"
      >
        <CiSearch className="text-lg" />
        <p>To search use</p>
        <span className="text-sm font-mono bg-white text-black rounded-lg px-2 py-1">/</span>
      </button>
    </main>
  );
}
