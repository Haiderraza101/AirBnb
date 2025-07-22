import Image from "next/image";
import Link from "next/link";
export default function DestinationDropdown({ show }) {
  if (!show) return null;

  return (
    <div className="absolute top-full left-0 w-[300px] sm:w-[350px] bg-white shadow-xl rounded-2xl mt-2 z-50 max-h-80 overflow-y-auto">
      <div className="px-2 py-4 text-sm text-gray-800">
        <h3 className="font-semibold mb-2 ml-4">Suggested destinations</h3>
        <ul className="space-y-3">
          <li className="flex items-center gap-3 hover:bg-gray-100 rounded cursor-pointer px-2 py-2">
            <Image src="/nearby.png" width={70} height={50} alt="Nearby" />
            <div>
              <div className="font-medium">Nearby</div>
              <div className="text-xs text-gray-500">
                Find what’s around you
              </div>
            </div>
          </li>
          <Link
            href="AllHomesinIslamabad"
            className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded cursor-pointer"
          >
            <Image src="/islamabad.png" width={70} height={50} alt="Islmabad" />
            <div>
              <div className="font-medium">Islamabad, Pakistan</div>
              <div className="text-xs text-gray-500">
                For sights like Faisal Mosque
              </div>
            </div>
          </Link>
          <Link
            href="AllHomesinLahore "
            className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded cursor-pointer"
          >
            <Image src="/lahore.png" width={70} height={50} alt="Lahore" />
            <div>
              <div href="AllHomesinLahore" className="font-medium">
                Lahore, Pakistan
              </div>
              <div className="text-xs text-gray-500">Near you</div>
            </div>
          </Link>

          <div className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded cursor-pointer">
            <Image src="/karachi.png" width={70} height={50} alt="Karachi" />
            <div>
              <div className="font-medium">Karachi, Pakistan</div>
              <div className="text-xs text-gray-500">
                Popular with travelers
              </div>
            </div>
          </div>
          <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded cursor-pointer">
            <Image
              src="/rawalpindi.png"
              width={70}
              height={50}
              alt="Rawalpindi"
            />
            <div>
              <div className="font-medium">Rawalpindi,Pakistan</div>
              <div className="text-xs text-gray-500">For a trip abroad</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
