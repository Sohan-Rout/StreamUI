import { IoMdCloseCircle } from "streamui-deps";
import { LuClockAlert } from "streamui-deps";
import { GoDotFill } from "streamui-deps";

export default function StatusBadge({ status = "Active" }) {
  const statusMap = {
    Active: "bg-green-200 dark:bg-green-900",
    Pending: "bg-yellow-200 dark:bg-yellow-900",
    Error: "bg-red-200 dark:bg-red-900",
  };

  const iconPlaceholder = () => {
    if (status === "Active") {
      return <span className="mr-1"><GoDotFill className="text-green-500 text-lg" /></span>;
    } else if (status === "Pending") {
      return <span className="mr-1"><LuClockAlert className="text-yellow-500 text-lg" /></span>;
    } else if (status === "Error") {
      return <span className="mr-1"><IoMdCloseCircle className="text-red-500 text-lg" /></span>;
    } else {
      return null;
    }
  };

  return (
    <span
      className={`inline-flex border border-black/10 animate-pulse dark:border-white/25 shadow-xl font-mono items-center px-3 py-1 rounded-full text-sm font-medium transition transform hover:-translate-y-0.5 hover:animate-none duration-300 hover:shadow-2xl
      ${statusMap[status] || statusMap["Active"]}`}
    >
      {iconPlaceholder()}
      {status}
    </span>
  );
}