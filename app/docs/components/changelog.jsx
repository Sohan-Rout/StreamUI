import { MdOutlineChangeCircle } from "react-icons/md";

export default function page() {
  return (
    <div id="changeLog" className="flex flex-col gap-4 text-neutral-800">
      {/* Heading */}
      <div className="flex justify-start">
        <span className="text-xs justify-center uppercase border border-black rounded-full bg-white px-6 py-2 tracking-widest text-black mb-4 flex">
          <div className="flex gap-2 items-center">
            <MdOutlineChangeCircle className="text-xl" />
            Change Logs
          </div>
        </span>
      </div>
    </div>
  );
}
