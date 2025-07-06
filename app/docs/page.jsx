import Sidebar from "./components/sidebar";
import Content from "./components/content";

export default function DocsHome() {
  return (
    <div className="w-full flex justify-center p-4">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-7 gap-4">
        {/* Sidebar */}
        <div className="col-span-2 flex max-h-[300px] justify-center">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="col-span-1 md:col-span-5 border-l border-dashed border-neutral-400 p-6 flex flex-col gap-4">
          <Content/>
        </div>
      </div>
    </div>
  );
}