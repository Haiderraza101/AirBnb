"use client";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
export default function Navbar() {
  const [menuopen, setmenuopen] = useState(false);
  return (
    <div
      className="w-full shadow-md sticky top-0 z-50  bg-gray-50
    px-4 py-4"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex-shrink-0">
            <Image
              src="/airbnblogo.png"
              width={120}
              height={60}
              className="h-auto"
            ></Image>
          </div>
          <div className="hidden md:flex items-centers gap-10 text-gray-600 font-medium">
            {["Homes", "Experiences", "Services"].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center hover:text-black transition-transform duration-300 transform hover:-translate-y-2 cursor-pointer"
              >
                <Image
                  src={
                    item === "Homes"
                      ? "/airbnbhomes.png"
                      : item === "Experiences"
                      ? "/airbnbexperiences.png"
                      : "/airbnbservices.png"
                  }
                  width={68}
                  height={28}
                  alt={item}
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4 cursor-pointer">
            <div className="text-sm font-medium hover:text-black text-gray-600 ">
              Become a host
            </div>
            <div className="bg-neutral-200 p-2 rounded-full">
              <Image src="/globe.png" width={24} height={24} alt="Globe" />
            </div>
            <div className="bg-neutral-200  rounded-full">
              <button
                className="p-2 md:hidden cursor-pointer"
                onClick={() => setmenuopen(!menuopen)}
                aria-label="Toggle Menu"
              >
                {menuopen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {menuopen && (
          <div className="flex flex-col md:hidden items-center gap-6 pb-6 transition-all duration-300 cursor-pointer">
            {["Homes", "Experiences", "Services"].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 hover:text-black text-gray-600 transition-transform duration-300 transform hover:-translate-y-1"
              >
                <Image
                  src={
                    item === "Homes"
                      ? "/airbnbhomes.png"
                      : item === "Experiences"
                      ? "/airbnbexperiences.png"
                      : "/airbnbservices.png"
                  }
                  width={48}
                  height={48}
                  alt={item}
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
