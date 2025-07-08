'use client';
import React from 'react';

export default function DynamicComponentCard({ logo, title, description }) {
  return (
    <div className="border border-dashed border-neutral-300 rounded-lg p-4 bg-white shadow-sm flex flex-col gap-2">
      {/* Logo/Image Placeholder */}
      <div className="flex justify-center items-center h-16 w-16 bg-neutral-100 rounded-md overflow-hidden">
        {logo ? logo : <span className="text-black text-sm">Stream<span className="bg-black px-2 py-2 rounded-md text-white">UI</span></span>}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold">
        {title ? title : 'Title Placeholder'}
      </h3>

      {/* Description */}
      <p className="text-sm text-neutral-600">
        {description ? description : 'Description placeholder for the component card.'}
      </p>
    </div>
  );
}