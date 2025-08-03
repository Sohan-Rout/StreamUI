'use client';
import React from 'react';
import { GiHamburgerMenu } from "streamui-deps";
import { HiArrowSmallRight } from "streamui-deps";

export default function DynamicComponentCard({ icon, title, description, tag, linkName, linkUrl }) {
  icon = icon || <GiHamburgerMenu className="w-6 h-6 text-white/75" />;
  title = title || "Feature Title";
  description = description || "This is a concise description of the feature that gives clear context to the user.";
  tag = tag || "01";
  linkName = linkName || "Learn More";
  linkUrl = linkUrl || "#";
  return (
    <div className="relative max-w-[250px] w-full rounded-2xl p-6 backdrop-blur-md bg-gradient-to-br from-neutral-800 via-neutral-950 to-orange-500 border border-white/50 flex flex-col gap-4 overflow-hidden shadow-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Tag */}
      <span className="text-2xl text-orange-600 rounded-full w-fit font-bold font-mono">
        #{tag}
      </span>

      {/* Icon */}
      <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-white/10">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white dark:text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="text-md text-neutral-300 dark:text-neutral-300">
        {description}
      </p>

      {linkName && linkUrl && (
        <a
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-2 flex text-sm text-white hover:text-white/90 relative items-center gap-1 transition"
        >
          {linkName}<HiArrowSmallRight className='text-md'/>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
        </a>
      )}

      {/* Glass glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl">
        <div className="absolute bottom-4 right-4 w-40 h-40 rounded-full bg-orange-500/20 blur-3xl"></div>
      </div>
    </div>
  );
}