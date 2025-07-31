export default function GuestDropdown({ guests, updateGuest }) {
  return (
    <div className="absolute top-full left-0 mt-2 w-[300px] sm:w-[350px] bg-white max-h-80 border border-gray-200  shadow-lg z-50 rounded-3xl py-8 ">
      {[
        { label: "Adults", sub: "Ages 13 or above", key: "adults" },
        { label: "Children", sub: "Ages 2 – 12", key: "children" },
        { label: "Infants", sub: "Under 2", key: "infants" },
        { label: "Pets", sub: "Bringing a service animal?", key: "pets" },
      ].map(({ label, sub, key }) => (
        <div
          key={key}
          className="flex justify-between items-center px-4 py-3 border-b border-b-gray-300 last:border-b-0"
        >
          <div>
            <div className="text-sm font-medium text-gray-900">{label}</div>
            <div className="text-xs text-gray-500">{sub}</div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              className="w-7 h-7 rounded-full border
              border-gray-300 text-gray-600 text-xl flex items-center justify-center disabled:opacity-30"
              disabled={guests[key] === 0}
              onClick={() => updateGuest(key, -1)}
            >
              −
            </button>
            <span className="w-4 text-center">{guests[key]}</span>
            <button
              className="w-7 h-7 rounded-full border text-gray-600 text-xl flex border-gray-300 items-center justify-center"
              onClick={() => updateGuest(key, 1)}
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
