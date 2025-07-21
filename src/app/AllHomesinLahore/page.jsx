import { homes } from "../../data";
import Link from "next/link";
import HomeCard from "@/components/HomeCard";

export default function AllHomes() {
  return (
    <div
      className=" gap-6 grid grid-col-1 sm:grid-cols-2
    md:grid-cols-3 lg:grid-cols-4 pb-4 scrollbar-hide ml-2 p-10"
    >
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
  );
}
