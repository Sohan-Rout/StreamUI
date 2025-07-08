"use client";
import React from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { HiSparkles } from "react-icons/hi2";
import CopyButton from "@/app/components/ui/CopyButton";
import { IoBackspace } from "react-icons/io5";

export default function ComponentShowcaseLayout({
  title,
  description,
  preview,
  code,
  props,
  category,
}) {
  return (
    <div className="flex flex-col max-w-6xl mx-auto my-12">
      {/* Title and description */}
      <div className="w-full flex flex-col items-center mb-2">
        <span className="text-xs uppercase border border-black rounded-full bg-white px-6 py-2 tracking-widest text-black mb-4 inline-block">
          <div className="flex gap-2 items-center">
            <HiSparkles className="text-lg" />
            {category}
          </div>
        </span>
        <h1 className="text-2xl md:text-3xl font-medium">{title}</h1>
        {description && <p className="text-neutral-600 mt-2">{description}</p>}
      </div>
      <div className="w-fit mb-4">
        <a
          href="/showcase"
          className="flex gap-1 items-center bg-white tracking-widest px-4 py-2 rounded-md border border-neutral-400 hover:bg-neutral-50 transition"
        >
          <IoBackspace className="text-xl" />
          <span>Back to Components</span>
        </a>
      </div>
      {/* Content */}
      <main className="bg-white rounded-lg shadow-xl w-full p-6 flex flex-col gap-6">
        {/* Top corner icons */}
        <div className="flex justify-between">
          <IoMdCloseCircle className="text-lg text-black opacity-50" />
          <IoMdCloseCircle className="text-lg text-black opacity-50" />
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
