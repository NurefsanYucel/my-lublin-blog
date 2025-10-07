"use client";

import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { format } from "date-fns";

export default function HolidayCalendar() {
  const [holidays, setHolidays] = useState([]);
  const [selectedHoliday, setSelectedHoliday] = useState(null);
  const [loading, setLoading] = useState(true);
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const fetchHolidays = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://date.nager.at/api/v3/PublicHolidays/${year}/PL`);
        if (!res.ok) throw new Error("Failed to fetch holidays");
        const data = await res.json();
        setHolidays(data);
      } catch (err) {
        console.error("Error fetching holidays:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHolidays();
  }, [year]);

  const holidayDates = holidays.map((h) => h.date);

  const tileClassName = ({ date }) => {
    const formatted = format(date, "yyyy-MM-dd");
    if (holidayDates.includes(formatted)) {
      return "relative bg-red-100 text-red-600 font-semibold rounded-lg hover:bg-red-200 transition";
    }
    return "";
  };

  // 🪄 Tooltip content for each holiday
  const tileContent = ({ date }) => {
    const formatted = format(date, "yyyy-MM-dd");
    const holiday = holidays.find((h) => h.date === formatted);
    if (!holiday) return null;
  
    return (
      <>
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-50 hidden group-hover:block bg-black text-white text-sm rounded px-3 py-1 shadow-lg whitespace-nowrap">
          {holiday.name}
          <div className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black"></div>
        </div>
        <span className="absolute top-0 right-0 text-[10px]">🎉</span>
      </>
    );
  };

  const onDateClick = (value) => {
    const clicked = format(value, "yyyy-MM-dd");
    const holiday = holidays.find((h) => h.date === clicked);
    setSelectedHoliday(holiday || null);
  };

  const handleYearChange = (offset) => {
    setYear((prev) => prev + offset);
    setSelectedHoliday(null);
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-8 bg-[#242424] rounded-2xl shadow-lg">
      {/* Year header */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => handleYearChange(-1)}
          className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 transition"
        >
          ← {year - 1}
        </button>
        <h2 className="text-5xl font-extrabold text-center text-[#fffde9]">
          Public Holidays {year}
        </h2>
        <button
          onClick={() => handleYearChange(1)}
          className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 transition"
        >
          {year + 1} →
        </button>
      </div>

      {/* Calendar */}
      {loading ? (
        <p className="text-center text-gray-400">Loading holidays…</p>
      ) : (
        <div className="w-full">
          <Calendar
            tileClassName={({ date }) => `group ${tileClassName({ date })}`}
            tileContent={tileContent}
            onClickDay={onDateClick}
            className="w-full mx-auto bg-white rounded-lg p-4 text-black"
          />

          {/* Selected holiday info */}
          {selectedHoliday && (
            <div className="mt-6 p-4 bg-[#2f2f2f] rounded-lg border border-red-300 text-center">
              <p className="text-red-400 font-medium">
                {format(new Date(selectedHoliday.date), "d MMMM yyyy")}
              </p>
              <p className="font-bold text-lg text-white">{selectedHoliday.name}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
