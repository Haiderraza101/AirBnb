import { experienceindubai } from "../../data";
import Link from "next/link";
import ExperienceCard from "@/components/ExperienceCard";

export default function AllHomes() {
  return (
    <div
      className=" gap-6 grid grid-col-1 sm:grid-cols-2
    md:grid-cols-3 lg:grid-cols-4 pb-4 scrollbar-hide ml-2 p-10"
    >
      {experienceindubai.map((dubai) => (
        <Link
          key={dubai.id}
          className="cursor-pointer"
          href={`/Dubai/${dubai.id}`}
        >
          <ExperienceCard parameter={dubai} />
        </Link>
      ))}
    </div>
  );
}
