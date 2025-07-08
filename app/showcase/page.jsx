"use client";
import Link from "next/link";
import SideBar from "@/app/components/ui/sideBar";

const layout = [
  { label : "Grid", href : "./grid"},
  { label : "Bento Grid", href : "./bento"},
  { label : "Stack", href : "./stack"},
  { label : "Containers", href : "./container"},
];

const navigation = [
  { label : "Navbars", href : "./navbar"},
  { label : "Tabs", href : "./tab"},
  { label : "Sidebars", href : "./sidebar"},  
  { label : "Breadcrumbs", href : "./breadcrumb"},
  { label : "Pagination", href : "./pagination"},
];
// Example data for now (replace with your showcase-config later)
const components = [
  {
    slug: "navbar-variant-1",
    name: "Navbar Variant 1",
    description: "A clean, glassmorphic navbar.",
  },
  {
    slug: "button-variant-1",
    name: "Button Variant 1",
    description: "A minimal primary button.",
  },
  {
    slug: "card-variant-1",
    name: "Card Variant 1",
    description: "A simple content card for showcasing information.",
  },
];

export default function ShowcaseGalleryPage() {
  return (
    <main className="max-w-6xl w-full mx-auto p-6">
      <h1 className="text-2xl md:text-3xl font-medium mb-4">
        Stream<span className="ml-1 bg-black px-2 py-2 rounded-md text-white">UI</span> Component Gallery
      </h1>
      <p className="text-neutral-600 mb-8">
        Browse all available components and variants. Click to view and copy
        them directly for your projects.
      </p>

      <div className="grid grid-cols-5 sm:grid-cols-1 md:grid-cols-5 gap-4">
        <aside className="col-span-1 flex flex-col gap-4">
          <SideBar title="Layout" links={layout}/>
          <SideBar title="Navigation" links={navigation}/>
        </aside>
        <div className="col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {components.map((component) => (
            <Link key={component.slug} href={`/showcase/${component.slug}`}>
              <div className="border border-dashed border-neutral-400 rounded-lg p-4 bg-white shadow hover:bg-neutral-50 transition cursor-pointer flex flex-col justify-between">
                <div>
                  <h2 className="text-lg font-semibold">{component.name}</h2>
                  <p className="text-sm text-neutral-600 mt-1">
                    {component.description}
                  </p>
                </div>
                <div className="mt-4 border border-neutral-300 rounded-md h-32 flex items-center justify-center text-neutral-400 text-sm">
                  Preview
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
