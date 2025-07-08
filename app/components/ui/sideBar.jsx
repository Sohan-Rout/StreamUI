"use client";
import React from "react";
import Link from "next/link";
import { IoMdCloseCircle } from "react-icons/io";

export default function Card({ title, links = [] }) {
  return (
    <main className="bg-white rounded-lg shadow-md py-1">
      <div className="flex justify-between mx-2 my-2">
        <IoMdCloseCircle className="text-lg text-black opacity-50" />
        <IoMdCloseCircle className="text-lg text-black opacity-50" />
      </div>
      <div className="w-full max-w-md px-10">
        {title && <h2 className="text-xl font-medium mb-2">{title}</h2>}
        <nav className="flex flex-col space-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm rounded-md text-black flex justify-center border border-neutral-400 hover:bg-gray-100 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex justify-between mx-2 my-2">
        <IoMdCloseCircle className="text-lg text-black opacity-50" />
        <IoMdCloseCircle className="text-lg text-black opacity-50" />
      </div>
    </main>
  );
}
