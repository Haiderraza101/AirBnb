import { Globe, Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-sm text-gray-700">
      <div className="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center ">
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2 cursor-pointer">
            <li>Help Center</li>
            <li>AirCover</li>
            <li>Anti-discrimination</li>
            <li>Disability support</li>
            <li>Cancellation options</li>
            <li>Report neighborhood concern</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Hosting</h3>
          <ul className="space-y-2 cursor-pointer">
            <li>Airbnb your home</li>
            <li>Airbnb your experience</li>
            <li>Airbnb your service</li>
            <li>AirCover for Hosts</li>
            <li>Hosting resources</li>
            <li>Community forum</li>
            <li>Hosting responsibly</li>
            <li>Airbnb-friendly apartments</li>
            <li>Join a free Hosting class</li>
            <li>Find a co-host</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Airbnb</h3>
          <ul className="space-y-2 cursor-pointer">
            <li>2025 Summer Release</li>
            <li>Newsroom</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Gift cards</li>
            <li>Airbnb.org emergency stays</li>
          </ul>
        </div>
      </div>

      <div className="mt-4">
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs">
          <div className="space-x-2 cursor-pointer">
            <span>© 2025 Airbnb, Inc.</span>

            <span>Terms</span>

            <span>Sitemap</span>

            <span>Privacy</span>

            <span>Your Privacy Choices</span>
          </div>
          <div className="flex items-center gap-4 mt-2 md:mt-0">
            <div className="flex items-center gap-1 cursor-pointer">
              <Globe size={16} className="text-black" />
              <span>English (US)</span>
            </div>
            <span>$ USD</span>
            <Facebook size={16} className="text-black cursor-pointer" />
            <Twitter size={16} className="text-black cursor-pointer" />
            <Instagram size={16} className="text-black cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
