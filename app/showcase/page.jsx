"use client";
import { useRouter } from "next/navigation";
import { RiGalleryFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import showcaseComponents from "./showcase-config";
import { useState, useEffect } from "react";

export default function ShowcaseGalleryPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, []);

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
      <div className="px-8 py-2 flex items-center gap-2 bg-white rounded-lg border border-neutral-300 focus:outline-none focus:ring">
            <CiSearch className="text-xl"/>
            <input
            type="text"
            placeholder="Search components..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="text-sm w-full bg-none focus:outline-none"
          />
      </div>
      </div>
<div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <div className="col-span-full grid auto-rows-min grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {showcaseComponents
            .filter((component) =>
              component.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((component) => {
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
                   ${component.category === "cards" ? "col-span-2 row-span-1" : ""}
                   ${component.category === "utilities" ? "col-span-2 row-span-1" : ""}`}
                >
                  <div className={`border border-neutral-300 rounded-md flex h-[200px] items-center justify-center text-neutral-700 text-sm overflow-hidden ${component.category === "pricing" ? "h-auto" : ""}`}>
                    <div className={`origin-center w-full flex items-center justify-center ${
                      (component.category === "cards" || component.category === "utilities") ? "scale-[0.5]" : "scale-[0.75]"
                    } ${component.category === "pricing" ? "flex justify-center items-center" : ""}
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
      </div>
    </main>
  );
}
