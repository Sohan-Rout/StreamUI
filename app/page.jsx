import Navbar from "@/app/components/navbar";
import Hero from "@/app/components/hero";
import Work from "@/app/components/work";
import Features from "@/app/components/features";
import Testimonial from "@/app/components/testimonial";
import Cta from "@/app/components/cta";
import Footer from "@/app/components/footer";

export default function App() {
  return (
    <>
      <div className="border-l border-r border-dashed border-neutral-400 p-2 md:p-2 mx-12">
        <Navbar/>
      </div>
      <div className="border-t border-l border-r border-dashed border-neutral-400 p-1 md:p-1 mx-12">
        <Hero/>
      </div>
      <div className="border-t border-l border-r border-dashed border-neutral-400 p-1 md:p-1 mx-12">
        <Work/>
      </div>
      <div className="border-t border-l border-r border-dashed border-neutral-400 p-1 md:p-1 mx-12">
        <Features/>
      </div>
      <div className="border-t border-l border-r border-dashed border-neutral-400 p-1 md:p-1 mx-12">
        <Testimonial/>
      </div>
      <div className="border-t border-l border-r border-dashed border-neutral-400 p-1 md:p-1 mx-12">
        <Cta/>
      </div>
      <Footer/>
    </>
  );
}