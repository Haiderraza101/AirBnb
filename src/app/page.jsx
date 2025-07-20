"use client";

import Searchbar from "@/components/Searchbar";
import HomeCard from "@/components/HomeCard";
import { homes } from "@/data";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Searchbar />
      <h2 className="text-xl font-semibold mt-8 mb-4 ml-2">
        Popular homes in Lahore
      </h2>
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide ml-2">
        {homes.map((home) => (
          <div
            key={home.id}
            className="cursor-pointer"
            onClick={() => router.push(`/Homes/${home.id}`)}
          >
            <HomeCard home={home} />
          </div>
        ))}
      </div>
    </div>
  );
}
