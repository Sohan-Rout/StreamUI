import { IoPersonSharp } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";

const reviews = [
  {
    Name: "Aarav Mehta",
    designation: "Frontend Engineer @ZyloTech",
    review: `“StreamUI has made it incredibly easy to build clean and responsive components. It’s like having a design system that just works.”`,
    colour : "bg-orange-500",
  },
  {
    Name: "Sara Ali",
    designation: "UI/UX Designer @PixelForge",
    review: `“I love how StreamUI speeds up my workflow. The components are beautiful, minimal, and easy to adapt for any project.”`,
    colour : "bg-green-500",
  },
  {
    Name: "Rohan Das",
    designation: "Full Stack Developer @DevSpark",
    review: `“I’ve tried many UI libraries, but StreamUI stands out for its simplicity and clean design. Highly recommended for developers who care about aesthetics.”`,
    colour : "bg-violet-500",
  },
];

export default function Hero() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <span className="text-xs uppercase border border-black rounded-full bg-white px-6 py-2 tracking-widest text-black mb-4 inline-block">
          <div className="flex gap-2 items-center">
            <IoPersonSharp className="text-lg" />
            Testimonials
          </div>
        </span>
        <h2 className="text-4xl md:text-4xl font-medium text-neutral-900">
          Loved by Builders Worldwide
        </h2>
        <p className="mt-4 text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
          See how developers use StreamUI to build stunning products faster with clean, reusable components.
        </p>
      </div>
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-4 scrollbar-hide justify-center">
        {reviews.map((item, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 snap-center w-72 sm:w-80 md:w-96 bg-white rounded-2xl shadow-lg flex flex-col justify-between transition-all duration-300"
          >
            <div className="flex justify-between mx-2 my-2">
                <IoMdCloseCircle className="text-lg text-black opacity-50"/>
                <IoMdCloseCircle className="text-lg text-black opacity-50"/>
            </div>
            <div className="px-10">
            {/* Quote */}
            <p className="text-lg text-neutral-800 font-medium mb-4">
              {item.review}
            </p>

            {/* Reviewer */}
            <div className="flex items-center gap-3 mt-8">
              <div className={`w-10 h-10 rounded-full flex items-center ${item.colour} justify-center text-sm font-medium text-white`}>
                {item.Name.split(" ").map(n => n[0]).join("")}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-neutral-900">
                  {item.Name}
                </span>
                <span className="text-xs text-neutral-500">
                  {item.designation}
                </span>
              </div>
            </div>
            </div>
            <div className="flex justify-between mx-2 my-2">
                <IoMdCloseCircle className="text-lg text-black opacity-50"/>
                <IoMdCloseCircle className="text-lg text-black opacity-50"/>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
