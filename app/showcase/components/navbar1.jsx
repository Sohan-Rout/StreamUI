"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import { GiHamburgerMenu } from "streamui-deps";

export default function Navbar({
  logo = { text: "StreamUI", href: "/", image: null },
  links = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "Reviews", href: "#Reviews" },
    { label: "FAQs", href: "#faqs" },
  ],
  mode = "light",
}) {
  const [isDark, setIsDark] = useState(mode === "dark");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsDark(mode === "dark");
  }, [mode]);

  const actions = useMemo(() => (
    <div className="flex gap-2">
      <button
        className={`px-4 py-1 rounded ring-1 ring-inset ${
          isDark
            ? "bg-white text-black ring-black"
            : "bg-black text-white ring-white"
        }`}
      >
        Log In
      </button>
      <button
        className={`px-4 py-1 rounded ring-1 ring-inset ${
          isDark
            ? "bg-black text-white ring-white"
            : "bg-white text-black ring-black"
        }`}
      >
        Sign Up
      </button>
    </div>
  ), [isDark]);

  return (
    <nav
      className={`relative max-w-4xl mx-auto rounded-xl w-[95%] flex flex-col md:flex-row items-center justify-between px-6 py-3 backdrop-blur-md shadow-lg overflow-hidden ${
        isDark ? "text-white" : "text-black"
      }`}
    >
      {/* Logo + Hamburger */}
      <div className="w-full flex items-center justify-between md:w-auto">
        <Link href={logo.href} className="flex items-center space-x-2 text-lg font-normal">
          {logo.image && <Image src={logo.image} alt={logo.text} width={32} height={32} />}
          {logo.text && <span>{logo.text}</span>}
        </Link>
        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded"
        >
          <GiHamburgerMenu className={`${isDark ? "text-white" : "text-black"}`} />
        </button>
      </div>

      {/* Links + Actions */}
      <div
        className={`md:flex md:flex-row md:items-center md:space-x-4 md:w-auto w-full ${
          isOpen
            ? `flex flex-col rounded-b-xl shadow-md px-6 py-4 space-y-4 mt-2 backdrop-blur-md ${
                isDark ? "bg-black/70 text-white" : "bg-white/80 text-black"
              }`
            : "hidden md:flex"
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`hover:underline ${
              isDark ? "hover:text-neutral-300" : "hover:text-neutral-700"
            }`}
          >
            {link.label}
          </Link>
        ))}
        {/* Show actions inside hamburger on mobile */}
        <div className="flex gap-2 md:hidden">
          <button
            className={`px-4 py-1 rounded ring-1 ring-inset ${
              isDark
                ? "bg-white text-black ring-black"
                : "bg-black text-white ring-white"
            }`}
          >
            Log In
          </button>
          <button
            className={`px-4 py-1 rounded ring-1 ring-inset ${
              isDark
                ? "bg-black text-white dark:ring-white"
                : "bg-white text-black ring-black"
            }`}
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Always visible actions on desktop */}
      <div className="hidden md:flex">{actions}</div>

      {/* Glass overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-xl border border-white/20">
        <div
          className={`absolute inset-0 rounded-xl bg-gradient-to-br ${
            isDark ? "from-white/10 to-transparent" : "from-neutral-300/30 to-transparent"
          }`}
        ></div>
      </div>
    </nav>
  );
}