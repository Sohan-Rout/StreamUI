"use client";
import Link from "next/link";

export default function Button1({
  label = "Click Me",
  href = "",
  onClick,
  className = "",
}) {
  const baseClasses =
    "px-4 py-2 rounded-lg font-medium hover:scale-105 duration-300 shadow-xl transition-all";
  const colorClasses =
    "bg-black text-white hover:bg-neutral-800 dark:shadow-neutral-600 dark:bg-white dark:text-black dark:hover:bg-neutral-200 border dark:border-neutral-300";

  const combinedClasses = `${baseClasses} ${colorClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} passHref>
        <button className={combinedClasses}>{label}</button>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {label}
    </button>
  );
}