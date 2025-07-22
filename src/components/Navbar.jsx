"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuopen, setmenuopen] = useState(false);
  const [selected, setselected] = useState("");
  const router = useRouter();

  const menuItems = ["Homes", "Experiences", "Services"];

  const handleClick = (item) => {
    setselected(item);
    if (item === "Homes") {
      router.push("/");
    } else {
      router.push(`/${item}`);
    }

    setmenuopen(false);
  };

  return (
    <div className="w-full sticky top-0 z-50 bg-gray-50 px-4 ">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex-shrink-0">
            <Image
              src="/airbnblogo.png"
              alt="Airbnb logo"
              width={120}
              height={60}
              priority
            />
          </div>

          <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
            {menuItems.map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleClick(item)}
                className={`inline-flex flex-col lg:flex-row items-center gap-0 cursor-pointer hover:text-black transition-transform duration-300 transform hover:-translate-y-2 ${
                  selected === item
                    ? "underline underline-offset-10 font-semibold text-black"
                    : "text-gray-600"
                }`}
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

          <div className="flex items-center gap-2 cursor-pointer">
            <div className="hidden sm:block text-sm font-medium hover:text-black text-gray-600">
              Become a host
            </div>
            <div className="bg-neutral-200 p-2 rounded-full">
              <Image src="/globe.png" width={16} height={16} alt="Globe" />
            </div>
            <div className="bg-neutral-200 rounded-full">
              <button
                className="p-2 md:hidden cursor-pointer"
                onClick={() => setmenuopen(!menuopen)}
                aria-label="Toggle Menu"
              >
                {menuopen ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </div>
        </div>

        {menuopen && (
          <div className="flex flex-col md:hidden items-center gap-6 pb-6 transition-all duration-300 cursor-pointer">
            {menuItems.map((item, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-2 hover:text-black text-gray-600 transition-transform duration-300 transform hover:-translate-y-1 ${
                  selected === item
                    ? "underline underline-offset-4 text-black"
                    : ""
                }`}
                onClick={() => handleClick(item)}
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
