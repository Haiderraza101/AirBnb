"use client";
import { useState } from "react";

const GuestCounter = ({ label, sublabel, count, onChange }) => {
  return (
    <div className="flex justify-between items-center py-3 border-b last:border-none">
      <div>
        <div className="font-semibold text-sm">{label}</div>
        {sublabel && <div className="text-xs text-gray-500">{sublabel}</div>}
      </div>
      <div className="flex items-center gap-3">
        <button
          className={`w-8 h-8 rounded-full border text-lg flex items-center justify-center ${
            count === 0
              ? "text-gray-400 border-gray-300"
              : "text-black border-black"
          }`}
          disabled={count === 0}
          onClick={() => onChange(count - 1)}
        >
          –
        </button>
        <span className="w-4 text-center">{count}</span>
        <button
          className="w-8 h-8 rounded-full border border-black text-black text-lg flex items-center justify-center"
          onClick={() => onChange(count + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default function GuestDropdown({ show }) {
  const [guests, setGuests] = useState({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const updateGuest = (key, value) => {
    setGuests((prev) => ({
      ...prev,
      [key]: Math.max(0, value),
    }));
  };

  if (!show) return null;

  return (
    <div className="absolute right-0 top-full mt-2 w-[350px] rounded-2xl shadow-lg bg-white z-50 p-6">
      <GuestCounter
        label="Adults"
        sublabel="Ages 13 or above"
        count={guests.adults}
        onChange={(value) => updateGuest("adults", value)}
      />
      <GuestCounter
        label="Children"
        sublabel="Ages 2 – 12"
        count={guests.children}
        onChange={(value) => updateGuest("children", value)}
      />
      <GuestCounter
        label="Infants"
        sublabel="Under 2"
        count={guests.infants}
        onChange={(value) => updateGuest("infants", value)}
      />
      <GuestCounter
        label="Pets"
        sublabel={
          <span>
            <a href="#" className="underline text-xs text-gray-600">
              Bringing a service animal?
            </a>
          </span>
        }
        count={guests.pets}
        onChange={(value) => updateGuest("pets", value)}
      />
    </div>
  );
}
