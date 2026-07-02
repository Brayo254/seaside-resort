import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-[#1e1208] text-[#c9b99a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-oswald text-3xl font-bold text-[#c9b99a] mb-4">
              SEASIDE RESORT
            </h3>
            <p className="font-quattro text-[#c9b99a]/80 mb-4 max-w-md">
              Escape to paradise at Seaside Resorts. Where the ocean meets luxury,
              and every moment becomes a cherished memory.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#c9b99a]/10 rounded-full hover:bg-[#c9b99a]/20 transition-colors cursor-pointer"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#c9b99a]/10 rounded-full hover:bg-[#c9b99a]/20 transition-colors cursor-pointer"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#c9b99a]/10 rounded-full hover:bg-[#c9b99a]/20 transition-colors cursor-pointer"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#c9b99a]/10 rounded-full hover:bg-[#c9b99a]/20 transition-colors cursor-pointer"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-oswald text-lg font-semibold mb-4 text-[#c9b99a]">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="font-quattro text-[#c9b99a]/70 hover:text-[#c9b99a] transition-colors cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="font-quattro text-[#c9b99a]/70 hover:text-[#c9b99a] transition-colors cursor-pointer"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/accommodation"
                  className="font-quattro text-[#c9b99a]/70 hover:text-[#c9b99a] transition-colors cursor-pointer"
                >
                  Accommodation
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-quattro text-[#c9b99a]/70 hover:text-[#c9b99a] transition-colors cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-oswald text-lg font-semibold mb-4 text-[#c9b99a]">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/accommodation"
                  className="font-quattro text-[#c9b99a]/70 hover:text-[#c9b99a] transition-colors cursor-pointer"
                >
                  Accommodation
                </Link>
              </li>
              <li>
                <Link
                  href="/weddings"
                  className="font-quattro text-[#c9b99a]/70 hover:text-[#c9b99a] transition-colors cursor-pointer"
                >
                  Weddings
                </Link>
              </li>
              <li>
                <Link
                  href="/meetings_events"
                  className="font-quattro text-[#c9b99a]/70 hover:text-[#c9b99a] transition-colors cursor-pointer"
                >
                  Meetings & Events
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-[#c9b99a]/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-quattro text-[#c9b99a]/60 text-sm">
              <p>Nairobi, Kenya</p>
              <p>hello@seaside.co.ke</p>
            </div>
            <p className="font-quattro text-sm text-[#c9b99a]/60">
              Made with ❤️ by{" "}
              <a
                href="https://wa.me/254719316562"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#c9b99a] transition-colors cursor-pointer"
              >
                Brian: +254 719 316 562
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}