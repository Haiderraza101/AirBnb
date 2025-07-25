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
            className="object-cover w-full h-[220px] sm:h-[280px] md:h-[440px] rounded-xl"
          />
        </div>
        <Image
          src={home.imageUrl2}
          alt="bedroom"
          width={300}
          height={220}
          className="rounded-xl w-full h-[220px] object-cover"
        />
        <Image
          src={home.imageUrl3}
          alt="kitchen"
          width={300}
          height={220}
          className="rounded-xl w-full h-[220px] object-cover"
        />
        <Image
          src={home.imageUrl4}
          alt="bathroom"
          width={300}
          height={220}
          className="rounded-xl w-full h-[200px] object-cover"
        />
        <div className="relative rounded-xl overflow-hidden">
          <Image
            src={home.imageUrl5}
            alt="Exterior"
            width={300}
            height={220}
            className="w-full h-[200px] object-cover"
          />
        </div>
      </div>

      <div className="mt-6">
        <h1 className="text-2xl font-semibold">
          Entire rental unit in Pakistan
        </h1>
        <p className="text-gray-600 mt-1">
          4 guests · 1 bedroom · 1 bed · 1 bath . 1 Kitchen
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
