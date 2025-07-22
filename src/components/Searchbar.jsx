"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import DestinationDropdown from "./DestinationDropdown"; // adjust the path if needed

export default function Searchbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="bg-gray-50 px-4 py-4 flex justify-center shadow-md relative z-30">
      <div className="bg-white w-full max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-3xl rounded-xl sm:rounded-full border border-gray-200 transition-transform duration-300 scale-[1.02] shadow-lg origin-center mb-4 relative">
        <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
          <div
            className="flex-1 py-3 px-4 hover:bg-gray-100 cursor-pointer rounded-t-xl sm:rounded-l-full sm:rounded-tr-none transition relative"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <div className="text-xs font-semibold text-gray-800 curosor-pointer">
              Where
            </div>
            <input
              type="text"
              placeholder="Search destinations"
              className="w-full text-sm text-gray-500 bg-transparent border-none outline-none placeholder-gray-400 pt-1"
              onFocus={() => setShowDropdown(true)}
            />
            <DestinationDropdown show={showDropdown} />
          </div>

          <div className="flex-1 py-3 px-4 hover:bg-gray-100 cursor-pointer transition">
            <div className="text-xs font-semibold text-gray-800">Check in</div>
            <input
              type="text"
              placeholder="Add dates"
              className="w-full text-sm text-gray-500 bg-transparent border-none outline-none placeholder-gray-400 pt-1"
            />
          </div>

          <div className="flex-1 py-3 px-4 hover:bg-gray-100 cursor-pointer transition">
            <div className="text-xs font-semibold text-gray-800">Check out</div>
            <input
              type="text"
              placeholder="Add dates"
              className="w-full text-sm text-gray-500 bg-transparent border-none outline-none placeholder-gray-400 pt-1"
            />
          </div>

          <div className="flex-1 py-3 px-4 hover:bg-gray-100 cursor-pointer rounded-b-xl sm:rounded-r-full sm:rounded-bl-none transition flex items-center justify-between">
            <div>
              <div className="text-xs font-semibold text-gray-800">Who</div>
              <input
                type="text"
                placeholder="Add guests"
                className="w-full text-sm text-gray-500 bg-transparent border-none outline-none placeholder-gray-400 pt-1"
              />
            </div>
            <button className="bg-rose-500 p-1.5 lg:p-4 rounded-full text-white hover:bg-rose-600 transition-transform hover:scale-105">
              <Search size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
