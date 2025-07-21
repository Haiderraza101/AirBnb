import { experienceinlondon } from "@/data";
import ExperienceCard from "../../components/ExperienceCard";
import Link from "next/link";

export default function ExperiencesPage() {
  return (
    <div>
      <h2 className="text-lg font-semibold mt-8 mb-4 ml-8">
        Experiences in London{" "}
        <Link className="text-sm text-black" href="/AllExperiences">
          &gt;
        </Link>
      </h2>
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide ml-2 px-6">
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
    </div>
  );
}
