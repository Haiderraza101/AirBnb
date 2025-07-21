import { photography } from "@/data";
import { chefs } from "@/data";
import ChefCard from "../../components/ChefCard";
import Link from "next/link";
import PhotographyCard from "@/components/PhotographyCard";

export default function ServicesPage() {
  return (
    <div>
      <h2 className="text-lg font-semibold mt-8 mb-4 ml-8">
        Photography{" "}
        <Link className="text-sm text-black" href="/AllPhotographs">
          &gt;
        </Link>
      </h2>
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide ml-2 px-6">
        {photography.map((photography) => (
          <Link
            key={photography.id}
            className="cursor-pointer"
            href={`/Photography/${photography.id}`}
          >
            <PhotographyCard photography={photography} />
          </Link>
        ))}
      </div>

      <h2 className="text-lg font-semibold mt-8 mb-4 ml-8">
        Chefs{" "}
        <Link className="text-sm text-black" href="/AllChefs">
          &gt;
        </Link>
      </h2>
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide ml-2 px-6">
        {chefs.map((chef) => (
          <Link
            key={chef.id}
            className="cursor-pointer"
            href={`/Chef/${chef.id}`}
          >
            <ChefCard chefs={chef} />
          </Link>
        ))}
      </div>
    </div>
  );
}
