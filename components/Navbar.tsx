"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaCaretDown } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const services = [
  { name: "Accommodation", href: "/accommodation" },
  { name: "Weddings", href: "/weddings" },
  { name: "Meetings & Events", href: "/meetings_events" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#c9b99a]/90 backdrop-blur-md border-b border-[#7a5c3a]/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="font-oswald text-2xl md:text-3xl font-bold text-[#150e08] tracking-wide">
            SEASIDE RESORT
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-quattro text-[#150e08] hover:text-[#7b1c3e] transition-colors cursor-pointer"
              >
                {link.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="font-quattro text-[#150e08] hover:text-[#7b1c3e] transition-colors cursor-pointer flex items-center gap-1">
                Services <FaCaretDown />
              </button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-[#c9b99a] border border-[#7a5c3a]/30 rounded-lg shadow-xl overflow-hidden"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-3 font-quattro text-[#150e08] hover:bg-[#7a5c3a]/20 hover:text-[#7b1c3e] transition-colors cursor-pointer"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/accommodation">
              <Button variant="default" size="sm" className="cursor-pointer bg-[#7b1c3e] hover:bg-[#7b1c3e]/90">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#150e08]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-[#c9b99a]/95"
            >
              <div className="py-4 space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block py-2 font-quattro text-[#150e08] hover:text-[#7b1c3e] transition-colors cursor-pointer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="pt-2 border-t border-[#7a5c3a]/30">
                  <p className="font-oswald text-sm text-[#7a5c3a] mb-2">Services</p>
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block py-2 pl-4 font-quattro text-[#150e08] hover:text-[#7b1c3e] transition-colors cursor-pointer"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>

                <Link href="/accommodation" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="default" size="sm" className="w-full cursor-pointer bg-[#7b1c3e] hover:bg-[#7b1c3e]/90">
                    Book Now
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}