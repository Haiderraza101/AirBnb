import { experienceinlondon } from "../../data";
import Link from "next/link";
import ExperienceCard from "@/components/ExperienceCard";

export default function AllHomes() {
  return (
    <div
      className=" gap-6 grid grid-col-1 sm:grid-cols-2
    md:grid-cols-3 lg:grid-cols-4 pb-4 scrollbar-hide ml-2 p-10"
    >
      {experienceinlondon.map((london) => (
        <Link
          key={london.id}
          className="cursor-pointer"
          href={`/London/${london.id}`}
        >
          <ExperienceCard parameter={london} />
        </Link>
      ))}
    </div>
  );
}
