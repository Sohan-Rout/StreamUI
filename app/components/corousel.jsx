"use client";
import React, { useEffect, useRef } from "react";

const logos = [
  { src: "/icons/next.svg", alt: "Next.js" },
  { src: "/icons/gsap.svg", alt: "GSAP" },
  { src: "/icons/tailwind.svg", alt: "Tailwind CSS" },
  { src: "/icons/framer.svg", alt: "Framer Motion" },
  { src: "/icons/shadcn.svg", alt: "Shadcn Ui" },
];

const looped = [...logos, ...logos];

export default function LogoCarousel() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const speed = 1;
    let offset = 0;
    let raf;

    function animate() {
      offset += speed;
      const singleSetWidth = track.scrollWidth / 2;
      if (offset >= singleSetWidth) offset = 0;
      track.style.transform = `translateX(-${offset}px)`;
      raf = requestAnimationFrame(animate);
    }

    animate();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="relative w-full overflow-hidden py-10">
      {/* Title on top for small screens, inline on desktop */}
      <div className="flex flex-col md:flex-row items-center">
        <h2 className="px-4 md:px-12 md:mx-8 mb-4 md:mb-0 text-center md:text-left text-lg font-medium text-neutral-600">
          A library built using
        </h2>

        <div className="relative flex-1 w-full overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-100 to-transparent z-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-100 to-transparent z-20" />

          <div ref={trackRef} className="flex items-center">
            {looped.map((logo, idx) => (
              <div key={idx} className="mx-6 md:mx-10 shrink-0">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 w-auto grayscale"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}