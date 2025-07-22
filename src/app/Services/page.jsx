"use client";
import { useRef } from "react";
import { photography } from "@/data";
import { chefs } from "@/data";
import ChefCard from "../../components/ChefCard";
import Link from "next/link";
import PhotographyCard from "@/components/PhotographyCard";
import Searchbar from "@/components/Searchbar";

export default function ServicesPage() {
  const photographyscrollref = useRef(null);
  const photographyscrollref2 = useRef(null);
  const chefsscrollref = useRef(null);
  const chefsscrollref2 = useRef(null);

  const scrollleft = (ref) => {
    ref.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollright = (ref) => {
    ref.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div>
      <Searchbar></Searchbar>
      <div className="w-13/14">
        <div className="flex justify-between">
          <div>
            <h2 className=" text-xl font-semibold mt-8 mb-4  md:ml-24 sm:ml-12 ml-8">
              Photography{" "}
              <Link className="text-sm" href="/AllPhotographs">
                &gt;
              </Link>
            </h2>
          </div>

          <div className="mt-10 flex gap-2">
            <button
              className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 bg-gray-200 hover:bg-gray-300 shadow-sm"
              onClick={() => scrollleft(photographyscrollref)}
            >
              &lt;
            </button>
            <button
              className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 bg-gray-200 hover:bg-gray-300 shadow-sm"
              onClick={() => scrollright(photographyscrollref)}
            >
              &gt;
            </button>
          </div>
        </div>

        <div
          ref={photographyscrollref}
          className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide  md:ml-24 sm:ml-12 ml-8
      "
        >
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
      <div className="w-13/14">
        <div className="flex justify-between">
          <div>
            <h2 className=" text-xl font-semibold mt-0 mb-4  md:ml-24 sm:ml-12 ml-8">
              Chefs{" "}
              <Link className="text-sm" href="/AllChefs">
                &gt;
              </Link>
            </h2>
          </div>

          <div className="mt-2 flex gap-2">
            <button
              className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 bg-gray-200 hover:bg-gray-300 shadow-sm"
              onClick={() => scrollleft(chefsscrollref)}
            >
              &lt;
            </button>
            <button
              className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 bg-gray-200 hover:bg-gray-300 shadow-sm"
              onClick={() => scrollright(chefsscrollref)}
            >
              &gt;
            </button>
          </div>
        </div>

        <div
          ref={chefsscrollref}
          className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide  md:ml-24 sm:ml-12 ml-8
      "
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
      </div>

      <div className="w-13/14">
        <div className="flex justify-between">
          <div>
            <h2 className=" text-xl font-semibold mt-0 mb-4  md:ml-24 sm:ml-12 ml-8">
              Photography{" "}
              <Link className="text-sm" href="/AllPhotographs">
                &gt;
              </Link>
            </h2>
          </div>

          <div className="mt-2 flex gap-2">
            <button
              className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 bg-gray-200 hover:bg-gray-300 shadow-sm"
              onClick={() => scrollleft(photographyscrollref2)}
            >
              &lt;
            </button>
            <button
              className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 bg-gray-200 hover:bg-gray-300 shadow-sm"
              onClick={() => scrollright(photographyscrollref2)}
            >
              &gt;
            </button>
          </div>
        </div>

        <div
          ref={photographyscrollref2}
          className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide  md:ml-24 sm:ml-12 ml-8
      "
        >
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

      <div className="w-13/14">
        <div className="flex justify-between">
          <div>
            <h2 className=" text-xl font-semibold mt-0 mb-4  md:ml-24 sm:ml-12 ml-8">
              Chefs{" "}
              <Link className="text-sm" href="/AllChefs">
                &gt;
              </Link>
            </h2>
          </div>

          <div className="mt-2 flex gap-2">
            <button
              className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 bg-gray-200 hover:bg-gray-300 shadow-sm"
              onClick={() => scrollleft(chefsscrollref2)}
            >
              &lt;
            </button>
            <button
              className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 bg-gray-200 hover:bg-gray-300 shadow-sm"
              onClick={() => scrollright(chefsscrollref2)}
            >
              &gt;
            </button>
          </div>
        </div>

        <div
          ref={chefsscrollref2}
          className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide  md:ml-24 sm:ml-12 ml-8
      "
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
      </div>
    </div>
  );
}
