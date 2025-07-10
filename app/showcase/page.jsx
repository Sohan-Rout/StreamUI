"use client";
import { useRouter } from "next/navigation";
import { RiGalleryFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import SideBar from "@/app/components/ui/sideBar";
import showcaseComponents from "./showcase-config";
import { useState } from "react";

const layout = [
  { label: "Grid", href: "./grid" },
  { label: "Bento Grid", href: "./bento" },
  { label: "Stack", href: "./stack" },
  { label: "Containers", href: "./container" },
];

const navigation = [
  { label: "Navbars", href: "./navbar" },
  { label: "Tabs", href: "./tab" },
  { label: "Sidebars", href: "./sidebar" },
  { label: "Breadcrumbs", href: "./breadcrumb" },
  { label: "Pagination", href: "./pagination" },
];

const elements = [
  { label: "Buttons", href: "./button" },
  { label: "Badge", href: "./badge" },
  { label: "Cards", href: "./card" },
  { label: "Dividers", href: "./divider" },
  { label: "Avatars", href: "./avatar" },
];

export default function ShowcaseGalleryPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  return (
    <main className="max-w-6xl w-full mx-auto p-6">
      <h1 className="text-2xl md:text-3xl font-medium mb-2 flex items-center">
        Welcome to Component Gallery
        <RiGalleryFill className="ml-1" />
      </h1>
      <p className="text-neutral-600 mb-8">
        Browse all available components and variants. Click to view and copy them directly for your projects.
      </p>

      <div className="grid grid-cols-5 sm:grid-cols-1 md:grid-cols-5 gap-4">
        <aside className="col-span-1 flex flex-col gap-4">
          <div className="px-3 py-2 flex items-center gap-2 bg-white rounded-lg border border-neutral-300 focus:outline-none focus:ring">
            <CiSearch className="text-xl"/>
            <input
            type="text"
            placeholder="Search components..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="text-sm w-full bg-none focus:outline-none"
          />
          </div>
          <SideBar title="Layout" links={layout} />
          <SideBar title="Navigation" links={navigation} />
          <SideBar title="Elements" links={elements} />
        </aside>
        <div className="col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
                    component.category === "Navbars" ? "col-span-2" : "col-span-1"
                  } ${component.category === "Cards" ? "row-span-1" : ""}`}
                >
                  <div className="mt-4 border border-neutral-300 rounded-md flex h-[200px] items-center justify-center text-neutral-700 text-sm overflow-hidden">
                    <div className="scale-[0.75] origin-top w-full flex items-center justify-center">
                      <PreviewComponent />
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
    </main>
  );
}
