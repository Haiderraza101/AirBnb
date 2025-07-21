import { chefs } from "@/data";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function ChefDetailPage(_props) {
  const { params } = await _props;

  const chef = chefs.find((o) => o.id.toString() === params.chefid);
  if (!chef) return notFound();

  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 rounded-xl overflow-hidden">
        <div className="sm:col-span-2 row-span-2">
          <Image
            src={chef.imageUrl}
            alt="Main chef experience image"
            width={300}
            height={220}
            className="object-cover w-full h-[220px] sm:h-[280px] md:h-[440px] rounded-xl"
          />
        </div>
        <Image
          src={chef.imageUrl2}
          alt="Chef in action"
          width={300}
          height={220}
          className="rounded-xl w-full h-[220px] object-cover"
        />
        <Image
          src={chef.imageUrl3}
          alt="Cooking session"
          width={300}
          height={220}
          className="rounded-xl w-full h-[220px] object-cover"
        />
      </div>

      <div className="mt-6">
        <h1 className="text-2xl font-semibold">Culinary Experience</h1>
        <p className="text-gray-600 mt-1">
          Led by expert chefs · Includes fresh ingredients · Perfect for food
          lovers & beginners
        </p>
      </div>

      <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-3 text-sm bg-gray-100 px-4 py-2 rounded-lg w-fit">
          <span className="text-yellow-500 text-xl">👨‍🍳</span>
          <span>
            <strong>Chef's Pick</strong> · One of the top-rated culinary
            experiences by guests
          </span>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-1">
            <strong className="text-lg">{chef.rating}</strong>
            <span>· 16 reviews</span>
          </div>
          <div className="flex items-center gap-1">
            <strong className="text-lg">{chef.price}</strong>
            <span>per experience</span>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 rounded-xl bg-pink-100 text-pink-700 flex items-center gap-2">
        🍽️ <strong>Popular booking!</strong> This chef experience gets fully
        booked quickly
      </div>
    </div>
  );
}
