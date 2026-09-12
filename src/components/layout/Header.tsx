"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 w-full"
    >
      <div className="flex items-center justify-between px-6 md:px-12 py-4 bg-transparent backdrop-blur-md border-b border-gray-200/20">
        <Link href="/" className="flex items-center">
          <img src="/images/logo.png" alt="Aura Plus" className="h-10 w-auto object-contain scale-[2.2] origin-left ml-4" />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="#about" className="hover:text-brand-primary transition-colors">About</Link>
          <Link href="#why-choose-us" className="hover:text-brand-primary transition-colors">Why Us?</Link>
          <Link href="#services" className="hover:text-brand-primary transition-colors">Services</Link>
          <Link href="#work" className="hover:text-brand-primary transition-colors">Work</Link>
          <Link href="#contact" className="hover:text-brand-primary transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden md:block px-6 py-2.5 text-sm font-semibold bg-gray-900 text-white rounded-lg hover:bg-brand-primary transition-colors shadow-md">
            Book a call
          </button>
        </div>
      </div>
    </motion.header>
  );
}
