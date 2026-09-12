"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

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
          isScrolled 
            ? "bg-white/90 border-gray-200" 
            : "bg-transparent border-gray-200/20"
        }`}
      >
        <Link href="/" className="flex items-center">
          <img src="/images/logo.png" alt="Aura Plus" className="h-10 w-auto object-contain scale-[2.2] origin-left ml-4" />
        </Link>

        <nav className={`hidden md:flex items-center gap-8 text-sm font-medium transition-colors duration-300 ${
          isScrolled ? "text-gray-600" : "text-white/90"
        }`}>
          <Link href="/#about" className={`transition-colors ${isScrolled ? "hover:text-brand-primary" : "hover:text-white"}`}>About</Link>
          <Link href="/#why-choose-us" className={`transition-colors ${isScrolled ? "hover:text-brand-primary" : "hover:text-white"}`}>Why Us?</Link>
          <Link href="/#services" className={`transition-colors ${isScrolled ? "hover:text-brand-primary" : "hover:text-white"}`}>Services</Link>
          <Link href="/#work" className={`transition-colors ${isScrolled ? "hover:text-brand-primary" : "hover:text-white"}`}>Work</Link>
          <Link href="/#contact" className={`transition-colors ${isScrolled ? "hover:text-brand-primary" : "hover:text-white"}`}>Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className={`hidden md:block px-6 py-2.5 text-sm font-semibold rounded-lg transition-colors shadow-sm ${
            isScrolled 
              ? "bg-gray-900 text-white hover:bg-brand-primary" 
              : "bg-white text-[#f06a23] hover:bg-gray-50"
          }`}>
            Book a call
          </button>
        </div>
      </div>
    </motion.header>
  );
}
