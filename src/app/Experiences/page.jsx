import { airbnboriginals } from "@/data";
import ExperienceCard from "../../components/ExperienceCard";
import Link from "next/link";

export default function ExperiencesPage() {
  return (
    <div>
      <h2 className="text-lg font-semibold mt-8 mb-4 ml-8">
        Airbnb Originals{" "}
        <Link className="text-sm text-black" href="/AllExperiences">
          &gt;
        </Link>
      </h2>
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide ml-2 px-6">
        {airbnboriginals.map((originals) => (
          <Link
            key={originals.id}
            className="cursor-pointer"
            href={`/Originals/${originals.id}`}
          >
            <ExperienceCard originals={originals} />
          </Link>
        ))}
      </div>
    </div>
  );
}
