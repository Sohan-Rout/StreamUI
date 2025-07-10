"use client";
import { useRef } from "react";
import gsap from "gsap";

export default function Button({
  children = "Hover Me",
  onClick,
  className = "px-4 py-2 rounded-lg bg-black text-white dark:bg-neutral-200 dark:text-black duration-300 hover:scale-105",
  ...props
}) {
  const buttonRef = useRef(null);
  const particleContainerRef = useRef(null);

  const createParticle = () => {
    const particle = document.createElement("div");
    particle.className = `absolute w-2 h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full pointer-events-none`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particleContainerRef.current.appendChild(particle);

    const tl = gsap.timeline({
      onComplete: () => {
        particle.remove();
      },
    });

    tl.to(particle, {
      y: -20 - Math.random() * 50,
      opacity: 0,
      duration: 1 + Math.random(),
      ease: "power2.out",
    });
  };

  const handleMouseEnter = () => {
    for (let i = 0; i < 10; i++) {
      createParticle();
    }
  };

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      {children}
      <div ref={particleContainerRef} className="absolute inset-0 pointer-events-none"></div>
    </button>
  );
}