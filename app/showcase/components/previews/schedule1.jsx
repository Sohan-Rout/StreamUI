"use client";
import React, { useState } from "react";
import { addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay, format } from "streamui-deps";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "streamui-deps";
import { PiCaretCircleDoubleRightFill, PiCaretCircleDoubleLeftFill } from "streamui-deps";
import { FaPaperPlane } from "streamui-deps";

export default function Calendar({ value, onDateSelect, className = "" }) {
  const [currentMonth, setCurrentMonth] = useState(
    startOfMonth(value || new Date())
  );
  const [selectedDate, setSelectedDate] = useState(value || null);

  const handleDateClick = (day) => {
    setSelectedDate(day);
    onDateSelect && onDateSelect(day);
  };

  const renderHeader = () => {
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
            onChange={(e) =>
              setCurrentMonth(
                new Date(parseInt(e.target.value), currentMonth.getMonth(), 1)
              )
            }
            className="text-sm bg-transparent border border-neutral-300 dark:border-neutral-600 rounded px-1 py-0.5 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400"
          >
            {Array.from(
              { length: 21 },
              (_, i) => currentMonth.getFullYear() - 10 + i
            ).map((year) => (
              <option
                key={year}
                value={year}
                className="bg-white dark:bg-black"
              >
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
            className={`text-center text-sm cursor-pointer rounded-md p-2 transition
              ${
                isSameMonth(day, monthStart)
                  ? "text-black dark:text-white"
                  : "text-neutral-400 dark:text-neutral-500"
              }
              ${
                isSelected
                  ? "bg-black text-white dark:text-black border border-blue-500"
                  : isToday
                  ? "border border-black dark:border-white"
                  : "hover:bg-neutral-200 dark:hover:bg-neutral-700"
              }`}
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
      rows.push(
        <div key={day} className="grid grid-cols-7">
          {days}
        </div>
      );
      days = [];
    }
    return <div className="space-y-1">{rows}</div>;
  };

  return (
    <section className="bg-neutral-100 dark:bg-neutral-900">
      <div className="max-w-6xl border-black border-r border-l border-dotted dark:border-neutral-600 px-10 py-10 mx-auto">
        <div className="flex flex-col justify-center items-center">
          <div className="bg-white px-6 py-2 rounded-full flex gap-2 items-center border border-black text-neutral-800">
            <FaPaperPlane className="text-sm" />
            <span className="text-xs font-mono uppercase font-light tracking-widest">
              Booking
            </span>
          </div>
          <h2 className="text-4xl font-medium mt-4 mb-2 text-center md:text-left">
            Schedule an Appointment With Us
          </h2>
          <p className="mb-10 text-neutral-700 dark:text-neutral-300 text-center">
            Pick a date that works for you and let us take care of the rest.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between max-w-3xl mx-auto gap-10">
          <div className={`flex flex-col md:flex-row gap-4 ${className}`}>
            <div className="max-w-xs p-4 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white/80 dark:bg-black/50 backdrop-blur shadow-lg dark:shadow-black/40">
              {renderHeader()}
              {renderDays()}
              {renderCells()}
            </div>
          </div>
          <div className="w-full max-w-md flex flex-col justify-center">
            <form className="flex flex-col gap-4">
              <div>
                <label className="text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-black dark:border-neutral-600 dark:text-white"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-black dark:border-neutral-600 dark:text-white"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1">
                  Selected Date
                </label>
                <input
                  type="text"
                  value={
                    selectedDate ? format(selectedDate, "MMMM d, yyyy") : ""
                  }
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-600 dark:text-white"
                />
              </div>
              <button
                type="submit"
                className="bg-black dark:bg-white dark:text-black hover:dark:bg-neutral-200 text-white py-2 px-4 rounded-lg hover:bg-neutral-900 duration-300 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
