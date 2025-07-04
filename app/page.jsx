import Navbar from "@/app/components/navbar";
import Hero from "@/app/components/hero";

export default function App() {
  return (
    <>
      <div className="border-l border-r border-dashed border-neutral-400 p-2 md:p-2 mx-12">
        <Navbar/>
      </div>
      <div className="border-t border-l border-r border-dashed border-neutral-400 p-1 md:p-1 mx-12">
        <Hero/>
      </div>
    </>
  );
}