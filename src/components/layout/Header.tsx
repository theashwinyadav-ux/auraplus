"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger the color swap when scrolled past the hero section (approx 90% of screen height)
      if (window.scrollY > window.innerHeight * 0.9) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 w-full"
    >
      <div 
        className={`flex items-center justify-between px-6 md:px-12 py-4 backdrop-blur-md border-b transition-colors duration-300 ${
          isScrolled || isOpen
            ? "bg-white/95 border-gray-200" 
            : "bg-transparent border-gray-200/20"
        }`}
      >
        <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center">
          <img src="/images/logo.png" alt="Aura Plus" className="h-10 w-auto object-contain scale-[2.2] origin-left ml-4" />
        </Link>

        {/* Desktop Navigation */}
        <nav className={`hidden md:flex items-center gap-8 text-sm font-medium transition-colors duration-300 ${
          isScrolled ? "text-gray-600" : "text-white/90"
        }`}>
          <Link href="/#about" className={`transition-colors ${isScrolled ? "hover:text-brand-primary" : "hover:text-white"}`}>About</Link>
          <Link href="/#services" className={`transition-colors ${isScrolled ? "hover:text-brand-primary" : "hover:text-white"}`}>Services</Link>
          <Link href="/#work" className={`transition-colors ${isScrolled ? "hover:text-brand-primary" : "hover:text-white"}`}>Work</Link>
          <Link href="/#contact" className={`transition-colors ${isScrolled ? "hover:text-brand-primary" : "hover:text-white"}`}>Contact</Link>
        </nav>

        {/* Desktop Action & Mobile Hamburger */}
        <div className="flex items-center gap-4">
          <a 
            href="#book" 
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new Event("open-booking-modal"));
            }}
            className={`hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold rounded-lg transition-colors shadow-sm cursor-pointer ${
              isScrolled 
                ? "bg-gray-900 text-white hover:bg-[#f06a23]" 
                : "bg-white text-[#f06a23] hover:bg-gray-50"
            }`}
          >
            Book a Call
          </a>

          {/* Three-bar Menu Toggle (Mobile) */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-xl transition-all ${
              isScrolled || isOpen
                ? "text-gray-900 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-b border-gray-200/90 shadow-2xl"
          >
            <div className="flex flex-col px-6 py-6 gap-2 text-base font-medium text-gray-800">
              <Link 
                href="/#about" 
                onClick={() => setIsOpen(false)}
                className="py-3 px-3 rounded-lg hover:bg-gray-50 hover:text-[#f06a23] transition-colors border-b border-gray-100/80"
              >
                About
              </Link>
              <Link 
                href="/#services" 
                onClick={() => setIsOpen(false)}
                className="py-3 px-3 rounded-lg hover:bg-gray-50 hover:text-[#f06a23] transition-colors border-b border-gray-100/80"
              >
                Services
              </Link>
              <Link 
                href="/#work" 
                onClick={() => setIsOpen(false)}
                className="py-3 px-3 rounded-lg hover:bg-gray-50 hover:text-[#f06a23] transition-colors border-b border-gray-100/80"
              >
                Work
              </Link>
              <Link 
                href="/#contact" 
                onClick={() => setIsOpen(false)}
                className="py-3 px-3 rounded-lg hover:bg-gray-50 hover:text-[#f06a23] transition-colors border-b border-gray-100/80"
              >
                Contact
              </Link>
              <a 
                href="#book" 
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  window.dispatchEvent(new Event("open-booking-modal"));
                }}
                className="mt-3 w-full flex items-center justify-center py-3.5 bg-[#f06a23] hover:bg-[#d95614] text-white font-semibold rounded-xl transition-all shadow-md active:scale-[0.98] cursor-pointer"
              >
                Book a Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
