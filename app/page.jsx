import Navbar from "@/app/components/navbar";
import Hero from "@/app/components/hero";
import Corousel from "@/app/components/corousel";
import Work from "@/app/components/work";
import Features from "@/app/components/features";
import Testimonial from "@/app/components/testimonial";
import Cta from "@/app/components/cta";
import Footer from "@/app/components/footer";

export default function App() {
  return (
    <>
      <div className="border-l border-r border-dashed border-neutral-400 p-2 md:p-2 md:mx-12 sm:mx-2">
        <Navbar/>
      </div>
      <div className="border-t border-l border-r border-dashed border-neutral-400 p-1 md:p-1 md:mx-12 sm:mx-2">
        <Hero/>
      </div>
      <div className="border-t border-l border-r border-dashed border-neutral-400 p-1 md:p-1 md:mx-12 sm:mx-2">
        <Corousel/>
      </div>
      <div className="border-t border-l border-r border-dashed border-neutral-400 p-1 md:p-1 md:mx-12 sm:mx-2">
        <Work/>
      </div>
      <div id="features" className="border-t border-l border-r border-dashed border-neutral-400 p-1 md:p-1 md:mx-12 sm:mx-2">
        <Features/>
      </div>
      <div id="reviews" className="border-t border-l border-r border-dashed border-neutral-400 p-1 md:p-1 md:mx-12 sm:mx-2">
        <Testimonial/>
      </div>
      <div className="border-t border-l border-r border-dashed border-neutral-400 p-1 md:p-1 md:mx-12 sm:mx-2">
        <Cta/>
      </div>
      <Footer/>
    </>
  );
}