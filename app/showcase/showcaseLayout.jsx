'use client';
import React from 'react';
import Navbar from '@/app/components/navbar';
import { IoMdCloseCircle } from 'react-icons/io';
import CopyButton from '@/app/components/ui/CopyButton';

export default function ComponentShowcaseLayout({ title, description, preview, code, props }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <main className="max-w-4xl w-full mx-auto p-6 flex flex-col gap-6">
        {/* Top corner icons */}
        <div className="flex justify-between">
          <IoMdCloseCircle className="text-lg text-black opacity-50" />
          <IoMdCloseCircle className="text-lg text-black opacity-50" />
        </div>

        {/* Title and description */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
          {description && <p className="text-neutral-600 mt-2">{description}</p>}
        </div>

        {/* Preview */}
        <div className="border border-dashed border-neutral-400 rounded-lg p-4 bg-white shadow">
          {preview}
        </div>

        {/* Code block with copy button */}
        {code && (
          <div className="relative">
            <pre className="bg-neutral-900 text-white text-xs p-4 rounded-md overflow-x-auto">
              {code}
            </pre>
            <div className="absolute top-2 right-2">
              <CopyButton text={code} />
            </div>
          </div>
        )}

        {/* Props table */}
        {props && props.length > 0 && (
          <div className="border border-dashed border-neutral-400 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">Props</h2>
            <table className="w-full text-sm text-left">
              <thead>
                <tr>
                  <th className="py-1">Name</th>
                  <th className="py-1">Type</th>
                  <th className="py-1">Default</th>
                  <th className="py-1">Description</th>
                </tr>
              </thead>
              <tbody>
                {props.map((prop, idx) => (
                  <tr key={idx} className="border-t border-neutral-300">
                    <td className="py-1">{prop.name}</td>
                    <td className="py-1">{prop.type}</td>
                    <td className="py-1">{prop.default}</td>
                    <td className="py-1">{prop.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Bottom corner icons */}
        <div className="flex justify-between">
          <IoMdCloseCircle className="text-lg text-black opacity-50" />
          <IoMdCloseCircle className="text-lg text-black opacity-50" />
        </div>
      </main>
    </div>
  );
}