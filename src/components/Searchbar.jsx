"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import DestinationDropdown from "./DestinationDropdown";
import DatePicker from "./DatePicker";
import DatePicker2 from "./DatePicker2";
import GuestDropdown from "./GuestDropdown";
export default function Searchbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCheckInCalendar, setShowCheckInCalendar] = useState(false);
  const [showCheckOutCalendar, setShowCheckOutCalendar] = useState(false);
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);
  const [guests, setGuests] = useState({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const updateGuest = (type, delta) => {
    setGuests((prev) => ({
      ...prev,
      [type]: Math.max(0, prev[type] + delta),
    }));
  };

  return (
    <div className="bg-gray-50 px-4 py-4 flex justify-center shadow-md relative z-30">
      <div className="bg-white w-full max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-3xl rounded-xl sm:rounded-full border border-gray-200 transition-transform duration-300 scale-[1.02] shadow-lg origin-center mb-4 relative">
        <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-gray-200 relative">
          {/* Where */}
          <div
            className="flex-1 py-3 px-4 hover:bg-gray-100 cursor-pointer rounded-t-xl sm:rounded-l-full sm:rounded-tr-none transition relative"
            onClick={() => {
              setShowDropdown(!showDropdown);
              setShowCheckInCalendar(false);
              setShowCheckOutCalendar(false);
              setShowGuestDropdown(false);
            }}
          >
            <div className="text-xs font-semibold text-gray-800">Where</div>
            <input
              type="text"
              placeholder="Search destinations"
              className="w-full text-sm text-gray-500 bg-transparent border-none outline-none placeholder-gray-400 pt-1"
              onFocus={() => setShowDropdown(true)}
            />
            <DestinationDropdown show={showDropdown} />
          </div>

          {/* Check In */}
          <div className="flex-1 py-3 px-4 hover:bg-gray-100 transition relative">
            <div className="text-xs font-semibold text-gray-800">Check in</div>
            <input
              type="text"
              placeholder="Add dates"
              className="w-full text-sm text-gray-500 bg-transparent border-none outline-none placeholder-gray-400 pt-1"
              readOnly
              onClick={() => {
                setShowCheckInCalendar(!showCheckInCalendar);
                setShowCheckOutCalendar(false);
                setShowDropdown(false);
                setShowGuestDropdown(false);
              }}
            />
            <DatePicker show={showCheckInCalendar} />
          </div>

          {/* Check Out */}
          <div className="flex-1 py-3 px-4 hover:bg-gray-100 transition relative">
            <div className="text-xs font-semibold text-gray-800">Check out</div>
            <input
              type="text"
              placeholder="Add dates"
              className="w-full text-sm text-gray-500 bg-transparent border-none outline-none placeholder-gray-400 pt-1"
              readOnly
              onClick={() => {
                setShowCheckOutCalendar(!showCheckOutCalendar);
                setShowCheckInCalendar(false);
                setShowDropdown(false);
                setShowGuestDropdown(false);
              }}
            />
            <DatePicker2 show={showCheckOutCalendar} />
          </div>

          {/* Who + Search Button */}
          <div
            className="flex-1 py-3 px-4 hover:bg-gray-100 cursor-pointer rounded-b-xl sm:rounded-r-full sm:rounded-bl-none transition flex items-center justify-between relative"
            onClick={() => {
              setShowGuestDropdown(!showGuestDropdown);
              setShowDropdown(false);
              setShowCheckInCalendar(false);
              setShowCheckOutCalendar(false);
            }}
          >
            <div className="w-full">
              <div className="text-xs font-semibold text-gray-800">Who</div>
              <input
                type="text"
                placeholder="Add guests"
                className="w-full text-sm text-gray-500 bg-transparent border-none outline-none placeholder-gray-400 pt-1"
                readOnly
                value={
                  guests.adults +
                    guests.children +
                    guests.infants +
                    guests.pets >
                  0
                    ? `${guests.adults + guests.children} guests` +
                      (guests.infants ? `, ${guests.infants} infants` : "") +
                      (guests.pets ? `, ${guests.pets} pets` : "")
                    : ""
                }
              />
            </div>
            <button className="bg-rose-500 p-1.5 lg:p-4 rounded-full text-white hover:bg-rose-600 transition-transform hover:scale-105">
              <Search size={16} />
            </button>

            {showGuestDropdown && (
              <GuestDropdown guests={guests} updateGuest={updateGuest} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
