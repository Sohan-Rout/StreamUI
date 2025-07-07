"use client";
import { useState } from "react";
import { FaCopy } from "react-icons/fa";

export default function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <button
      onClick={handleCopy}
      className="ml-2 px-2 py-1 text-xs flex items-center gap-1 bg-neutral-200 rounded hover:bg-neutral-300 transition"
      aria-label="Copy code"
      type="button"
    >
        <FaCopy className="text-sm"/>
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}