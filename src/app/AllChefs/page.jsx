import { chefs } from "../../data";
import Link from "next/link";
import ChefCard from "@/components/ChefCard";

export default function AllHomes() {
  return (
    <div
      className=" gap-6 grid grid-col-1 sm:grid-cols-2
    md:grid-cols-3 lg:grid-cols-4 pb-4 scrollbar-hide ml-2 p-10"
    >
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
  );
}
