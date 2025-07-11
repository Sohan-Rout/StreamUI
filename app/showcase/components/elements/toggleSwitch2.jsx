"use client";
import { useEffect, useState } from "react";
import { FaLightbulb } from "react-icons/fa";

export default function DarkModeToggleButton() {
  const [setIsDark] = useState(false);

  useEffect(() => {
    // Initialize based on system or existing theme
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition shadow-lg shadow-black/25 dark:shadow-yellow-400/25 hover:scale-110 duration-300"
      aria-label="Toggle Dark Mode"
    >
        <FaLightbulb className="dark:text-yellow-400 w-5 h-5 text-black" />
    </button>
  );
}