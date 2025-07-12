"use client";
import { useState } from "react";
import Navbar from "@/app/showcase/components/navbar1";

export default function ShowcaseTestPage() {
  const [mode, setMode] = useState("light");

  return (
    <div
      className={
        mode === "dark"
          ? "bg-black text-white min-h-screen"
          : "bg-white text-black min-h-screen"
      }
    >
      {/* Toggle switch */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className="px-4 py-2 rounded-lg bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white shadow"
        >
          Toggle {mode === "light" ? "Dark" : "Light"}
        </button>
      </div>
      <div className="pt-10">
        {/* Navbar */}
        <Navbar mode={mode} />
      </div>

      {/* Dummy content */}
      <div className="flex flex-col items-center justify-center py-24">
        <h1 className="text-3xl font-semibold">Testing Page</h1>
        <p className="mt-4 max-w-md text-center">
          Toggle the theme using the button on the top-right to test your
          glassmorphism navbar in both light and dark modes.
        </p>
      </div>
    </div>
  );
}
