export const code = `
"use client";
import React, { useState } from "react";
import { addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay, format } from "streamui-deps";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "streamui-deps";
import { PiCaretCircleDoubleRightFill, PiCaretCircleDoubleLeftFill } from "streamui-deps";

export default function Calendar({
  value,
  onDateSelect,
  className = "",
}) {
  const [currentMonth, setCurrentMonth] = useState(startOfMonth(value || new Date()));
  const [selectedDate, setSelectedDate] = useState(value || null);

  const handleDateClick = (day) => {
    setSelectedDate(day);
    onDateSelect && onDateSelect(day);
  };

  const renderHeader = () => {
    const currentYear = currentMonth.getFullYear();
    const years = Array.from({ length: 21 }, (_, i) => currentYear - 10 + i);

    const handleYearChange = (e) => {
      const newYear = parseInt(e.target.value);
      setCurrentMonth(new Date(newYear, currentMonth.getMonth(), 1));
    };

    return (
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-1">
          <button
            onClick={() => setCurrentMonth(subMonths(currentMonth, 12))}
            className="px-1 py-1 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
          >
            <PiCaretCircleDoubleLeftFill className="text-xl" />
          </button>
          <button
            onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
            className="px-1 py-1 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
          >
            <IoIosArrowDropleftCircle className="text-xl" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <div className="font-medium text-sm">
            {format(currentMonth, "MMMM")}
          </div>
          <select
            value={currentMonth.getFullYear()}
            onChange={(e) => setCurrentMonth(new Date(parseInt(e.target.value), currentMonth.getMonth(), 1))}
            className="text-sm bg-transparent border border-neutral-300 dark:border-neutral-600 rounded px-1 py-0.5 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400"
          >
            {Array.from({ length: 21 }, (_, i) => currentMonth.getFullYear() - 10 + i).map((year) => (
              <option key={year} value={year} className="bg-white dark:bg-black">
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
            className="px-1 py-1 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
          >
            <IoIosArrowDroprightCircle className="text-xl" />
          </button>
          <button
            onClick={() => setCurrentMonth(addMonths(currentMonth, 12))}
            className="px-1 py-1 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
          >
            <PiCaretCircleDoubleRightFill className="text-xl" />
          </button>
        </div>
      </div>
    );
  };

  const renderDays = () => {
    const days = [];
    const startDate = startOfWeek(currentMonth);
    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i} className="text-xs text-center text-neutral-500">
          {format(addDays(startDate, i), "EEE")}
        </div>
      );
    }
    return <div className="grid grid-cols-7 mb-1">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = day;
        const isToday = isSameDay(day, new Date());
        const isSelected = selectedDate && isSameDay(day, selectedDate);

        days.push(
          <div
            key={day}
            onClick={() => handleDateClick(cloneDay)}
            className={\`text-center text-sm cursor-pointer rounded-md p-2 transition
              \${isSameMonth(day, monthStart)
                ? "text-black dark:text-white"
                : "text-neutral-400 dark:text-neutral-500"}
              \${isSelected
                ? "bg-black text-white dark:text-black border border-blue-500"
                : isToday
                ? "border border-black dark:border-white"
                : "hover:bg-neutral-200 dark:hover:bg-neutral-700"}\`}
          >
            <div className="relative flex justify-center">
              {format(day, "d")}
              {isToday && (
                <span className="animate-pulse absolute top-4 w-2 h-2 bg-red-500 rounded-full mt-0.5"></span>
              )}
            </div>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(<div key={day} className="grid grid-cols-7">{days}</div>);
      days = [];
    }
    return <div className="space-y-1">{rows}</div>;
  };

  return (
    <div
      className={\`w-full max-w-xs p-4 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white/80 dark:bg-black/50 backdrop-blur shadow-lg dark:shadow-black/40 \${className}\`}
    >
      {renderHeader()}
      {renderDays()}
      {renderCells()}
      <div className="mt-3 py-1 text-center text-sm rounded-lg bg-green-500 text-black dark:text-neutral-700">
        {selectedDate ? (
          <>You selected: {format(selectedDate, "MMMM d, yyyy")}</>
        ) : (
          <>No date selected yet.</>
        )}
      </div>
    </div>
  );
}
`;

export const implementation = `
export default function CalendarDemoPage(){ 
    const handleDateSelect = (date) => {
        console.log(User selected: date);   // Use for state, API calls, etc.  
    };  

    return(
        <main>
            <Calendar onDateSelect={handleDateSelect} />
        </main>  
    );
}
`;

export const props = [
  {
        name: "onDateSelect",
        type : "string",
        required : false,
        defaultValue : "{handleDateSelect}",
        description : "",
      }
];