import { photography } from "@/data";
import PhotographyCard from "../../components/PhotographyCard";
import Link from "next/link";

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
    </div>
  );
}
