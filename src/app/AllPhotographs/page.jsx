import { photography } from "../../data";
import Link from "next/link";
import PhotographyCard from "@/components/PhotographyCard";

export default function AllHomes() {
  return (
    <div
      className=" gap-6 grid grid-col-1 sm:grid-cols-2
    md:grid-cols-3 lg:grid-cols-4 pb-4 scrollbar-hide ml-2 p-10"
    >
      {photography.map((photo) => (
        <Link
          key={photo.id}
          className="cursor-pointer"
          href={`/Photography/${photo.id}`}
        >
          <PhotographyCard photography={photo} />
        </Link>
      ))}
    </div>
  );
}
