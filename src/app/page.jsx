"use client";

import { useRef } from "react";
import Searchbar from "@/components/Searchbar";
import HomeCard from "@/components/HomeCard";
import { homes } from "@/data";
import IslamabadHomeCard from "@/components/IslamabadHomeCard";
import { homesinIslamabad } from "@/data";
import Link from "next/link";

export default function Home() {
  const lahorescrollref = useRef(null);
  const lahorescrollref2 = useRef(null);
  const islamabadscrollref = useRef(null);
  const islamabadscrollref2 = useRef(null);

  const scrollleft = (ref) => {
    ref.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollright = (ref) => {
    ref.current.scrollBy({ left: 300, behavior: "smooth" });
  };
  return (
    <div>
      <Searchbar />
      <div className="w-13/14">
        <div className="flex justify-between">
          <div>
            <h2 className=" text-xl font-semibold mt-8 mb-4  md:ml-24 sm:ml-12 ml-8">
              Popular homes in Lahore{" "}
              <Link className="text-sm" href="/AllHomesinLahore">
                &gt;
              </Link>
            </h2>
          </div>

          <div className="mt-10 flex gap-2">
            <button
              className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 bg-gray-200 hover:bg-gray-300 shadow-sm"
              onClick={() => scrollleft(lahorescrollref)}
            >
              &lt;
            </button>
            <button
              className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 bg-gray-200 hover:bg-gray-300 shadow-sm"
              onClick={() => scrollright(lahorescrollref)}
            >
              &gt;
            </button>
          </div>
        </div>

        <div
          ref={lahorescrollref}
          className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide  md:ml-24 sm:ml-12 ml-8
      "
        >
          {homes.map((home) => (
            <Link
              key={home.id}
              className="cursor-pointer"
              href={`/Homes/${home.id}`}
            >
              <HomeCard home={home} />
            </Link>
          ))}
        </div>
      </div>

      <div className="w-13/14">
        <div className="flex justify-between">
          <div>
            <h2 className=" text-xl font-semibold mt-0 mb-4  md:ml-24 sm:ml-12 ml-8">
              Popular homes in Islamabad{" "}
              <Link className="text-sm" href="/AllHomesinLahore">
                &gt;
              </Link>
            </h2>
          </div>

          <div className="mt-2 flex gap-2">
            <button
              className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 bg-gray-200 hover:bg-gray-300 shadow-sm"
              onClick={() => scrollleft(islamabadscrollref)}
            >
              &lt;
            </button>
            <button
              className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 bg-gray-200 hover:bg-gray-300 shadow-sm"
              onClick={() => scrollright(islamabadscrollref)}
            >
              &gt;
            </button>
          </div>
        </div>

        <div
          ref={islamabadscrollref}
          className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide  md:ml-24 sm:ml-12 ml-8
      "
        >
          {homesinIslamabad.map((isbhome) => (
            <Link
              key={isbhome.id}
              className="cursor-pointer"
              href={`/HomesinIslamabad/${isbhome.id}`}
            >
              <IslamabadHomeCard isbhome={isbhome} />
            </Link>
          ))}
        </div>
      </div>

      <div className="w-13/14">
        <div className="flex justify-between">
          <div>
            <h2 className=" text-xl font-semibold mt-0 mb-4  md:ml-24 sm:ml-12 ml-8">
              Popular homes in Lahore{" "}
              <Link className="text-sm" href="/AllHomesinLahore">
                &gt;
              </Link>
            </h2>
          </div>

          <div className="mt-2 flex gap-2">
            <button
              className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 bg-gray-200 hover:bg-gray-300 shadow-sm"
              onClick={() => scrollleft(lahorescrollref2)}
            >
              &lt;
            </button>
            <button
              className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 bg-gray-200 hover:bg-gray-300 shadow-sm"
              onClick={() => scrollright(lahorescrollref2)}
            >
              &gt;
            </button>
          </div>
        </div>

        <div
          ref={lahorescrollref2}
          className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide  md:ml-24 sm:ml-12 ml-8
      "
        >
          {homes.map((home) => (
            <Link
              key={home.id}
              className="cursor-pointer"
              href={`/Homes/${home.id}`}
            >
              <HomeCard home={home} />
            </Link>
          ))}
        </div>
      </div>

      <div className="w-13/14">
        <div className="flex justify-between">
          <div>
            <h2 className=" text-xl font-semibold mt-0 mb-4  md:ml-20 sm:ml-12 ml-8">
              Popular homes in Islamabad{" "}
              <Link className="text-sm" href="/AllHomesinLahore">
                &gt;
              </Link>
            </h2>
          </div>

          <div className="mt-2 flex gap-2">
            <button
              className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 bg-gray-200 hover:bg-gray-300 shadow-sm"
              onClick={() => scrollleft(islamabadscrollref2)}
            >
              &lt;
            </button>
            <button
              className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 bg-gray-200 hover:bg-gray-300 shadow-sm"
              onClick={() => scrollright(islamabadscrollref2)}
            >
              &gt;
            </button>
          </div>
        </div>

        <div
          ref={islamabadscrollref2}
          className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide  md:ml-24 sm:ml-12 ml-8
      "
        >
          {homesinIslamabad.map((isbhome) => (
            <Link
              key={isbhome.id}
              className="cursor-pointer"
              href={`/HomesinIslamabad/${isbhome.id}`}
            >
              <IslamabadHomeCard isbhome={isbhome} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
