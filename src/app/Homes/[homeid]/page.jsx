import { homes } from "@/data";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function HomeDetailPage(_props) {
  const { params } = await _props;

  const home = homes.find((h) => h.id.toString() === params.homeid);
  if (!home) return notFound();

  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 rounded-xl overflow-hidden">
        <div className="sm:col-span-2 row-span-2">
          <Image
            src={home.imageUrl}
            alt="Main room"
            width={300}
            height={220}
            className="object-cover w-full h-[220px] sm:h-[280px] md:h-[420px] rounded-xl"
          />
        </div>
        <Image
          src={home.imageUrl}
          alt="bedroom"
          width={300}
          height={220}
          className="rounded-xl w-full h-[200px] object-cover"
        />
        <Image
          src={home.imageUrl}
          alt="kitchen"
          width={300}
          height={220}
          className="rounded-xl w-full h-[200px] object-cover"
        />
        <Image
          src={home.imageUrl}
          alt="window"
          width={300}
          height={220}
          className="rounded-xl w-full h-[200px] object-cover"
        />
        <div className="relative rounded-xl overflow-hidden">
          <Image
            src={home.imageUrl}
            alt="TV room"
            width={300}
            height={220}
            className="w-full h-[200px] object-cover"
          />
          <div className="absolute bottom-2 right-2 bg-white px-3 py-1 rounded-full text-sm shadow-md"></div>
        </div>
      </div>

      <div className="mt-6">
        <h1 className="text-2xl font-semibold">
          Entire rental unit in Lahore, Pakistan
        </h1>
        <p className="text-gray-600 mt-1">
          4 guests · 1 bedroom · 1 bed · 1 bath
        </p>
      </div>

      <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-3 text-sm bg-gray-100 px-4 py-2 rounded-lg w-fit">
          <span className="text-yellow-500 text-xl">🏅</span>
          <span>
            <strong>Guest favorite</strong> · One of the most loved homes on
            Airbnb, according to guests
          </span>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-1">
            <strong className="text-lg">{home.rating}</strong>
            <span>· 16 reviews</span>
          </div>
          <div className="flex items-center gap-1">
            <strong className="text-lg">{home.price}</strong>
            <span>for 2 nights</span>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 rounded-xl bg-pink-100 text-pink-700 flex items-center gap-2">
        💎 <strong>Rare find!</strong> This place is usually booked
      </div>
    </div>
  );
}
