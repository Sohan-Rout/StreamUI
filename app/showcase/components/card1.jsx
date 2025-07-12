'use client';
import React from 'react';

export default function DynamicComponentCard({ logo, title, description }) {
  return (
    <div className="rounded-lg p-4 bg-white dark:bg-neutral-900 shadow-xl dark:shadow-neutral-700 flex flex-col justify-center items-center gap-2">
      {/* Logo/Image Placeholder */}
      <div className="flex justify-center items-center rounded-lg py-12 px-10 border dark:border-neutral-400">
        {logo ? logo : <span className="text-black text-2xl dark:text-white">Stream<span className="bg-black px-2 py-2 rounded-lg text-white dark:text-black dark:bg-white ml-1">UI</span></span>}
      </div>

      {/* Title */}
      <h3 className="text-xl font-medium mt-6">
        {title ? title : 'This is a card'}
      </h3>

      {/* Description */}
      <p className="text-sm text-neutral-600">
        {description ? description : 'This is the description of the card'}
      </p>
    </div>
  );
}