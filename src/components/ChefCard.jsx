import { Heart } from "lucide-react";

export default function ChefCard({ chefs }) {
  return (
    <div>
      <div className=" overflow-hidden shadow-sm  hover:shadow-lg transition duration-300 bg-white min-w-[180px] rounded-2xl">
        <div className="relative h-44 w-full ">
          <img
            src={chefs.imageUrl}
            alt={chefs.title}
            className="object-cover w-full h-full"
          />
          <div className="absolute top-1 right-2 p-2 ">
            <Heart
              size={24}
              className="text-white  hover:text-rose-500 transition-colors"
              fill={"black"}
            />
          </div>

          <div className="absolute top-3 left-2 bg-gray-200 py-1 px-2 rounded-full ">
            <p className="text-xs flex items-center gap-1 text-gray-950 font-semibold">
              Guest favorite
            </p>
          </div>
        </div>
      </div>
      <div className="p-3">
        <p className="font-medium text-sm">{chefs.title}</p>
        <div className="flex gap-2">
          <p className="text-gray-600 text-sm">{chefs.price}</p>
          <p className="text-gray-800 text-sm">★ {chefs.rating}</p>
        </div>
      </div>
    </div>
  );
}
