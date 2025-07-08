"use client";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

export default function ComponentShowcaseLayout({children}) {
  return (
    <main className="font-poppins">
      {/* Navbar with dotted border */}
      <div className="border-l border-r border-dashed border-neutral-400 p-2 md:p-2 mx-12">
        <Navbar />
      </div>

      <div className="border-l border-r border-t border-dashed border-neutral-400 p-2 md:p-2 mx-12">
        {children}
      </div>

      <div>
        <Footer />
      </div>
    </main>
  );
}
