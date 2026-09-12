"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-gray-200 bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Link href="/" className="flex items-center">
          <img src="/images/logo.png" alt="Aura Plus" className="h-10 w-auto object-contain scale-[2.2] origin-center md:origin-left" />
        </Link>
        
        <div className="flex items-center gap-6 text-sm text-gray-600">
          <Link href="#" className="hover:text-brand-primary transition-colors">Twitter</Link>
          <Link href="#" className="hover:text-brand-primary transition-colors">LinkedIn</Link>
          <Link href="#" className="hover:text-brand-primary transition-colors">YouTube</Link>
        </div>

        <div className="text-sm text-gray-500">
          © Copyright 2026. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
