import Searchbar from "@/components/Searchbar";
import HomeCard from "@/components/HomeCard";
import { homes } from "@/data";
import IslamabadHomeCard from "@/components/IslamabadHomeCard";
import { homesinIslamabad } from "@/data";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Searchbar />
      <h2 className="text-lg font-semibold mt-8 mb-4 ml-8">
        Popular homes in Lahore{" "}
        <Link className="text-sm" href="/AllHomesinLahore">
          &gt;
        </Link>
      </h2>
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide ml-2 px-6">
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

      <h2 className="text-lg font-semibold mt-8 mb-4 ml-8">
        Popular homes in Islamabad{" "}
        <Link className="text-sm" href="/AllHomesinIslamabad">
          &gt;
        </Link>
      </h2>
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide ml-2 px-6">
        {homesinIslamabad.map((isbhome) => (
          <Link
            key={isbhome.id}
            className="cursor-pointer"
            href={`/HomesinIslamabad/${isbhome.id}`}
          >
            <IslamabadHomeCard isbhome={isbhome} />
          </Link>
        ))}
      </div>
    </div>
  );
}
