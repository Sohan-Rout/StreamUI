"use client";
import { useState } from "react";
import Card from "@/app/showcase/components/statusBadge1";

export default function ShowcaseTestPage() {
  const [mode, setMode] = useState("light");
  return (
    <div
      className={
        mode === "dark"
          ? "bg-neutral-900 text-white min-h-screen"
          : "bg-white text-black min-h-screen"
      }
    >
      {/* Toggle switch */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => {
            const isDark = document.documentElement.classList.toggle("dark");
            setMode(isDark ? "dark" : "light");
          }}
        >
          Toggle {mode === "light" ? "Dark" : "Light"}
        </button>
      </div>
      <div className="pt-10">
        <Card />
      </div>

      {/* Dummy content */}
      <div className="flex flex-col items-center justify-center py-24">
        <h1 className="text-3xl font-semibold">Testing Page</h1>
        <p className="mt-4 max-w-md text-center">
          Toggle the theme using the button on the top-right to test your
          Components in both light and dark modes.
        </p>
      </div>
    </div>
  );
}
