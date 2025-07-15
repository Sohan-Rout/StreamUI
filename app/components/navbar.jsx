"use client";            // keep this line at the very top
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaProductHunt } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

const navlinks = [
  { title: "Features", links: "#features" },
  { title: "Components", links: "/showcase" },
  { title: "Documentation", links: "/docs" },
  { title: "Reviews", links: "#reviews" },
];

const social = [
  { title: "Github", links: "/", icon: <FaGithub size={20} /> },
  { title: "LinkedIn", links: "https://www.linkedin.com/in/sohan-rout/", icon: <FaLinkedin size={20} /> },
  { title: "ProductHunt", links: "/", icon: <FaProductHunt size={20} /> },
];

export default function Navbar() {
  const [isFixed, setIsFixed] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsFixed(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        w-full max-w-6xl mx-auto mt-4 mb-4 rounded-2xl border border-neutral-200 bg-white shadow-md backdrop-blur
        ${isFixed ? "fixed top-4 left-1/2 -translate-x-1/2 z-50" : "relative"}
      `}
    >
      <div className="px-4 sm:px-6 md:px-10 flex items-center justify-between py-3">
        <a href="/" className="text-2xl font-medium text-neutral-900">
          Stream<span className="bg-black text-white font-semibold px-2 py-2 rounded-lg">UI</span>
        </a>

        {/* desktop nav & socials */}
        <nav className="hidden md:flex gap-6 text-sm text-neutral-500">
          {navlinks.map((item) => (
            <a key={item.title} href={item.links}>{item.title}</a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4 border border-neutral-300 rounded-full px-3 py-2 bg-neutral-800">
          {social.map((item, idx) => (
            <a key={idx} href={item.links} className="text-neutral-300 hover:text-blue-400">
              {item.icon}
            </a>
          ))}
        </div>

        {/* mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-neutral-800"
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* mobile drawer – no backdrop */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 origin-top
          ${open ? "max-h-96" : "max-h-0"}
        `}
      >
        <nav className="flex flex-col gap-4 px-6 pb-6">
          {navlinks.map((item) => (
            <a
              key={item.title}
              href={item.links}
              onClick={() => setOpen(false)}
              className="text-neutral-700"
            >
              {item.title}
            </a>
          ))}
        </nav>
        <div className="flex justify-center gap-6 pb-6">
          {social.map((item, idx) => (
            <a
              key={idx}
              href={item.links}
              onClick={() => setOpen(false)}
              className="text-neutral-600 hover:text-blue-500"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}