import { homesinIslamabad } from "../../data";
import Link from "next/link";
import IslamabadHomeCard from "@/components/IslamabadHomeCard";

export default function AllHomes() {
  return (
    <div
      className=" gap-6 grid grid-col-1 sm:grid-cols-2
    md:grid-cols-3 lg:grid-cols-4 pb-4 scrollbar-hide ml-2 p-10"
    >
      {homesinIslamabad.map((isbhome) => (
        <Link
          key={isbhome.id}
          className="cursor-pointer"
          href={`/Homes/${isbhome.id}`}
        >
          <IslamabadHomeCard isbhome={isbhome} />
        </Link>
      ))}
    </div>
  );
}
