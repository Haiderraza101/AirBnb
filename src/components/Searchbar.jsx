import { Search } from "lucide-react";

export default function Searchbar() {
  return (
    <div className="bg-gray-50 px-4 py-8 flex justify-center shadow-md">
      <div className="bg-white w-full max-w-6xl rounded-xl sm:rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
          <div className="flex-1 py-4 px-6 hover:bg-gray-200 cursor-pointer rounded-t-full sm:rounded-l-full sm:rounded-tr-none hover:rounded-t-none transition">
            <div className="text-xs font-semibold text-gray-800">Where</div>
            <input
              type="text"
              placeholder="Search destinations"
              className="w-full text-sm text-gray-500 bg-transparent border-none outline-none placeholder-gray-400"
            />
          </div>

          <div className="flex-1 py-4 px-6 hover:bg-gray-200 cursor-pointer transition">
            <div className="text-xs font-semibold text-gray-800">Check in</div>
            <input
              type="text"
              placeholder="Add dates"
              className="w-full text-sm text-gray-500 bg-transparent border-none outline-none placeholder-gray-400"
            />
          </div>

          <div className="flex-1 py-4 px-6 hover:bg-gray-200 cursor-pointer transition">
            <div className="text-xs font-semibold text-gray-800">Check out</div>
            <input
              type="text"
              placeholder="Add dates"
              className="w-full text-sm text-gray-500 bg-transparent border-none outline-none placeholder-gray-400"
            />
          </div>

          <div className="flex-1 py-4 px-6 hover:bg-gray-200 cursor-pointer  sm:rounded-r-full sm:rounded-bl-none transition flex items-center justify-between hover:rounded-t-none">
            <div>
              <div className="text-xs font-semibold text-gray-800">Who</div>
              <input
                type="text"
                placeholder="Add guests"
                className="w-full text-sm text-gray-500 bg-transparent border-none outline-none placeholder-gray-400"
              />
            </div>
            <button className="bg-rose-500 p-2 rounded-full text-white hover:bg-rose-600 transition-transform hover:scale-105">
              <Search size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
