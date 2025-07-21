import { experienceindubai } from "@/data";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function ExperienceDetailPage(_props) {
  const { params } = await _props;

  const dubai = experienceindubai.find(
    (o) => o.id.toString() === params.dubaiid
  );
  if (!dubai) return notFound();

  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 rounded-xl overflow-hidden">
        <div className="sm:col-span-2 row-span-2">
          <Image
            src={dubai.imageUrl}
            alt="Main experience image"
            width={300}
            height={220}
            className="object-cover w-full h-[220px] sm:h-[280px] md:h-[440px] rounded-xl"
          />
        </div>
        <Image
          src={dubai.imageUrl2}
          alt="Activity shot"
          width={300}
          height={220}
          className="rounded-xl w-full h-[220px] object-cover"
        />
        <Image
          src={dubai.imageUrl3}
          alt="Participants"
          width={300}
          height={220}
          className="rounded-xl w-full h-[220px] object-cover"
        />
      </div>

      <div className="mt-6">
        <h1 className="text-2xl font-semibold">Unique Experience</h1>
        <p className="text-gray-600 mt-1">
          Hosted by experts · Includes equipment & materials · Great for groups
        </p>
      </div>

      <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-3 text-sm bg-gray-100 px-4 py-2 rounded-lg w-fit">
          <span className="text-yellow-500 text-xl">🏅</span>
          <span>
            <strong>Guest favorite</strong> · One of the most loved experiences
            on Airbnb, according to guests
          </span>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-1">
            <strong className="text-lg">{dubai.rating}</strong>
            <span>· 16 reviews</span>
          </div>
          <div className="flex items-center gap-1">
            <strong className="text-lg">{dubai.price}</strong>
            <span>per person</span>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 rounded-xl bg-pink-100 text-pink-700 flex items-center gap-2">
        💎 <strong>Rare find!</strong> This experience is usually fully booked
      </div>
    </div>
  );
}
