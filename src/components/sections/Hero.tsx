"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden px-6 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-5xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter mb-8 text-balance text-gray-900">
            A social media agency building <span className="text-brand-primary">memorable</span> brands.
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-lg md:text-xl text-gray-600 mb-10 text-balance">
            Through strategy, content, and creative growth, we help you connect with your audience in meaningful ways.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-brand-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all shadow-[0_0_20px_rgba(240,106,35,0.3)] hover:shadow-[0_0_30px_rgba(240,106,35,0.5)]">
              View Our Work
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white border border-gray-200 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-all shadow-sm">
              Our Services
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative orange background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-400/20 blur-[120px] rounded-full mix-blend-multiply pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-400/20 blur-[100px] rounded-full mix-blend-multiply pointer-events-none" />
      
      {/* Bottom white fade blend */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
    </section>
  );
}
