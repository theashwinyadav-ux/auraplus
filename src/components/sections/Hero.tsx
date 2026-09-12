"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden px-6 bg-gradient-to-br from-[#f06a23] via-[#f77f3e] to-[#ff9959]">
      <div className="max-w-5xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter mb-8 text-balance text-white">
            A social media agency building <span className="font-bold underline decoration-white/30 underline-offset-8">memorable</span> brands.
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-lg md:text-xl text-white/90 mb-10 text-balance">
            Through strategy, content, and creative growth, we help you connect with your audience in meaningful ways.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-[#f06a23] font-semibold rounded-lg hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl">
              View Our Work
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/20 border border-white/20 backdrop-blur-md text-white font-semibold rounded-lg hover:bg-white/30 transition-all">
              Our Services
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative white background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/10 blur-[120px] rounded-full mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/20 blur-[100px] rounded-full mix-blend-overlay pointer-events-none" />
      
      {/* Bottom white fade blend to transition smoothly to the LogoTicker below */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
