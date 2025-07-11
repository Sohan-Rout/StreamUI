"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { FaDownload } from "react-icons/fa6";

export default function DownloadButton({ downloadLink, label = "Download" }) {
  const waveRef = useRef(null);
  const bubblesRef = useRef([]);
  const bubblePositionsRef = useRef([]);

  // Generate stable random positions once on mount
  useEffect(() => {
    bubblePositionsRef.current = [...Array(5)].map(() => `${Math.random() * 90 + 5}%`);
  }, []);

  const handleClick = () => {
    if (downloadLink) {
      window.open(downloadLink, "_blank");
    }

    // Reset wave height
    gsap.set(waveRef.current, { height: "0%" });

    // Animate wave rising
    gsap.to(waveRef.current, {
      height: "100%",
      duration: 1.2,
      ease: "power2.out",
    });

    // Animate bubbles
    bubblesRef.current.forEach((bubble, index) => {
      gsap.fromTo(
        bubble,
        {
          y: "100%",
          x: `${Math.random() * 40 - 20}%`,
          opacity: 0.8,
          scale: 0.5 + Math.random() * 0.5,
        },
        {
          y: "-150%",
          opacity: 0,
          duration: 1 + Math.random(),
          delay: index * 0.1,
          ease: "power1.out",
        }
      );
    });
  };

  return (
    <button
      onClick={handleClick}
      aria-label={label}
      className="relative overflow-hidden px-4 py-2 rounded-lg shadow-lg bg-black dark:bg-neutral-200 dark:text-black text-white hover:scale-110 duration-300 dark:shadow-neutral-600 hover:bg-neutral-800 transition"
    >
      {/* Wave layer */}
      <span
        ref={waveRef}
        className="absolute bottom-0 left-0 w-full bg-white dark:bg-neutral-500 opacity-20 pointer-events-none"
        style={{ height: "0%" }}
      />

      {/* Bubble particles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {[...Array(5)].map((_, idx) => (
          <span
            key={idx}
            ref={(el) => (bubblesRef.current[idx] = el)}
            className="absolute bottom-0 w-2 h-2 bg-white dark:bg-black rounded-full opacity-0"
            style={{ left: bubblePositionsRef.current[idx] }}
          />
        ))}
      </div>

      <div className="flex items-center gap-2">
        <FaDownload />
        <span className="relative z-10">{label}</span>
      </div>
    </button>
  );
}