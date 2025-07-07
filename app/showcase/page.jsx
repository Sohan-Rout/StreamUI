

'use client';

import Link from 'next/link';

// Example data for now (replace with your showcase-config later)
const components = [
  {
    slug: 'navbar-variant-1',
    name: 'Navbar Variant 1',
    description: 'A clean, glassmorphic navbar.',
  },
  {
    slug: 'button-variant-1',
    name: 'Button Variant 1',
    description: 'A minimal primary button.',
  },
  {
    slug: 'card-variant-1',
    name: 'Card Variant 1',
    description: 'A simple content card for showcasing information.',
  },
];

export default function ShowcaseGalleryPage() {
  return (
    <main className="max-w-6xl w-full mx-auto p-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">StreamUI Component Gallery</h1>
      <p className="text-neutral-600 mb-8">Browse all available components and variants. Click to view and copy them directly for your projects.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {components.map((component) => (
          <Link key={component.slug} href={`/showcase/${component.slug}`}>
            <div className="border border-dashed border-neutral-400 rounded-lg p-4 bg-white shadow hover:bg-neutral-50 transition cursor-pointer flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-semibold">{component.name}</h2>
                <p className="text-sm text-neutral-600 mt-1">{component.description}</p>
              </div>
              <div className="mt-4 border border-neutral-300 rounded-md h-32 flex items-center justify-center text-neutral-400 text-sm">
                Preview
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}