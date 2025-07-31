"use client";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useState } from "react";

export default function DatePicker2({ show }) {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  if (!show) return null;

  return (
    <div className="absolute top-full left-0 z-40 bg-white rounded-2xl shadow-lg mt-2 p-4">
      <DateRange
        editableDateInputs={true}
        onChange={(item) => setRange([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={range}
        rangeColors={["#f43f5e"]}
      />
      <div className="flex gap-2 mt-2">
        <button className="text-sm border border-neutral-300 px-3 py-1 rounded-full hover:bg-gray-100">
          Exact dates
        </button>
        <button className="text-sm border border-neutral-300 px-3 py-1 rounded-full hover:bg-gray-100">
          ± 1 day
        </button>
        <button className="text-sm border border-neutral-300 px-3 py-1 rounded-full hover:bg-gray-100">
          ± 2 days
        </button>
      </div>
    </div>
  );
}
