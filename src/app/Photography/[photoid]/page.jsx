import { photography } from "@/data";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function PhotographyDetailPage(_props) {
  const { params } = await _props;

  const phot = photography.find((o) => o.id.toString() === params.photoid);
  if (!phot) return notFound();

  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 rounded-xl overflow-hidden">
        <div className="sm:col-span-2 row-span-2">
          <Image
            src={phot.imageUrl}
            alt="Main photography scene"
            width={300}
            height={220}
            className="object-cover w-full h-[220px] sm:h-[280px] md:h-[440px] rounded-xl"
          />
        </div>
        <Image
          src={phot.imageUrl2}
          alt="Candid photography"
          width={300}
          height={220}
          className="rounded-xl w-full h-[220px] object-cover"
        />
        <Image
          src={phot.imageUrl3}
          alt="Photo session"
          width={300}
          height={220}
          className="rounded-xl w-full h-[220px] object-cover"
        />
      </div>

      <div className="mt-6">
        <h1 className="text-2xl font-semibold">Photography Experience</h1>
        <p className="text-gray-600 mt-1">
          Guided by professional photographers · Includes gear & props · Ideal
          for individuals & couples
        </p>
      </div>

      <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-3 text-sm bg-gray-100 px-4 py-2 rounded-lg w-fit">
          <span className="text-yellow-500 text-xl">📸</span>
          <span>
            <strong>Photographers’ Choice</strong> · Highly rated photography
            experience by past guests
          </span>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-1">
            <strong className="text-lg">{phot.rating}</strong>
            <span>· 16 reviews</span>
          </div>
          <div className="flex items-center gap-1">
            <strong className="text-lg">{phot.price}</strong>
            <span>per session</span>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 rounded-xl bg-pink-100 text-pink-700 flex items-center gap-2">
        🌟 <strong>Popular session!</strong> This photography experience gets
        booked quickly
      </div>
    </div>
  );
}
