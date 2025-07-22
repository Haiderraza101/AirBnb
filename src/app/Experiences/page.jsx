"use client";

import { useRef } from "react";
import { experienceinlondon } from "@/data";
import { experienceindubai } from "@/data";
import ExperienceCard from "../../components/ExperienceCard";
import Link from "next/link";
import Searchbar from "@/components/Searchbar";

export default function ExperiencesPage() {
  const londonscrollref = useRef(null);
  const londonscrollref2 = useRef(null);
  const dubaiscrollref = useRef(null);
  const dubaiscrollref2 = useRef(null);

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
              Experiences in London{" "}
              <Link className="text-sm" href="/AllExperiences">
                &gt;
              </Link>
            </h2>
          </div>

          <div className="mt-10 flex gap-2">
            <button
              className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 bg-gray-200 hover:bg-gray-300 shadow-sm"
              onClick={() => scrollleft(londonscrollref)}
            >
              &lt;
            </button>
            <button
              className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 bg-gray-200 hover:bg-gray-300 shadow-sm"
              onClick={() => scrollright(londonscrollref)}
            >
              &gt;
            </button>
          </div>
        </div>

        <div
          ref={londonscrollref}
          className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide  md:ml-24 sm:ml-12 ml-8
      "
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
      </div>

      <div className="w-13/14">
        <div className="flex justify-between">
          <div>
            <h2 className=" text-xl font-semibold mt-0 mb-4  md:ml-24 sm:ml-12 ml-8">
              Experiences in Dubai{" "}
              <Link className="text-sm" href="/AllExperiencesinDubai">
                &gt;
              </Link>
            </h2>
          </div>

          <div className="mt-2 flex gap-2">
            <button
              className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 bg-gray-200 hover:bg-gray-300 shadow-sm"
              onClick={() => scrollleft(dubaiscrollref)}
            >
              &lt;
            </button>
            <button
              className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 bg-gray-200 hover:bg-gray-300 shadow-sm"
              onClick={() => scrollright(dubaiscrollref)}
            >
              &gt;
            </button>
          </div>
        </div>

        <div
          ref={dubaiscrollref}
          className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide  md:ml-24 sm:ml-12 ml-8
      "
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
      </div>

      <div className="w-13/14">
        <div className="flex justify-between">
          <div>
            <h2 className=" text-xl font-semibold mt-0 mb-4  md:ml-24 sm:ml-12 ml-8">
              Experiences in London{" "}
              <Link className="text-sm" href="/AllExperiences">
                &gt;
              </Link>
            </h2>
          </div>

          <div className="mt-2 flex gap-2">
            <button
              className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 bg-gray-200 hover:bg-gray-300 shadow-sm"
              onClick={() => scrollleft(londonscrollref2)}
            >
              &lt;
            </button>
            <button
              className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 bg-gray-200 hover:bg-gray-300 shadow-sm"
              onClick={() => scrollright(londonscrollref2)}
            >
              &gt;
            </button>
          </div>
        </div>

        <div
          ref={londonscrollref2}
          className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide  md:ml-24 sm:ml-12 ml-8
      "
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
      </div>
      <div className="w-13/14">
        <div className="flex justify-between">
          <div>
            <h2 className=" text-xl font-semibold mt-0 mb-4  md:ml-24 sm:ml-12 ml-8">
              Experiences in Dubai{" "}
              <Link className="text-sm" href="/AllExperiencesinDubai">
                &gt;
              </Link>
            </h2>
          </div>

          <div className="mt-2 flex gap-2">
            <button
              className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 bg-gray-200 hover:bg-gray-300 shadow-sm"
              onClick={() => scrollleft(dubaiscrollref2)}
            >
              &lt;
            </button>
            <button
              className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 bg-gray-200 hover:bg-gray-300 shadow-sm"
              onClick={() => scrollright(dubaiscrollref2)}
            >
              &gt;
            </button>
          </div>
        </div>

        <div
          ref={dubaiscrollref2}
          className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide  md:ml-24 sm:ml-12 ml-8
      "
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
      </div>
    </div>
  );
}
