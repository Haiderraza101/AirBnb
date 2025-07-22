import { homes } from "../../data";
import Link from "next/link";
import HomeCard from "@/components/HomeCard";

export default function AllHomes() {
  return (
    <div className="flex flex-col lg:flex-row h-screen px-4 lg:px-20 md:py-10 gap-10">
      <div className="lg:w-2/3 overflow-y-auto p-6 space-y-6">
        <h2 className="text-xl font-semibold mb-4">
          Over 1,000 homes in Lahore
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3">
          {homes.map((home) => (
            <Link
              key={home.id}
              className="cursor-pointer"
              href={`/Homes/${home.id}`}
            >
              <HomeCard home={home} />
            </Link>
          ))}
        </div>
      </div>

      <div className="h-96 lg:h-10/12 sticky top-0 lg:w-2/3 px-4 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13605.060476850487!2d74.33039796082446!3d31.52036909525526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483c2d291d3%3A0x9eeb3d03e9eb3931!2sLahore!5e0!3m2!1sen!2s!4v1653059029324!5m2!1sen!2s"
          className="w-full h-full rounded-2xl"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
