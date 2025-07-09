"use client";
import Link from "next/link";

export default function Button1({
  label = "Click Me",
  href = "",
  onClick,
  darkMode = false,
  className = "",
}) {
  const baseClasses =
    "px-4 py-2 rounded-md font-medium transition-colors duration-200";
  const lightClasses =
    "bg-black text-white hover:bg-neutral-800";
  const darkClasses =
    "bg-white text-black hover:bg-neutral-200 border border-neutral-300";

  const combinedClasses = `${baseClasses} ${
    darkMode ? darkClasses : lightClasses
  } ${className}`;

  if (href) {
    return (
      <Link href={href}>
        <a className={combinedClasses}>{label}</a>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {label}
    </button>
  );
}