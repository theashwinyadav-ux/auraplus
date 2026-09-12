"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-gradient-to-br from-[#f06a23] via-[#f77f3e] to-[#ff9959] text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center mb-10">
            <div className="px-4 py-1.5 border border-white/30 rounded-full text-sm font-medium text-white mb-6 bg-white/10 backdrop-blur-sm inline-block">
              Contact Us
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight leading-snug">
              Ready to Grow<br className="hidden sm:block" /> Your Brand?
            </h2>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-[#f06a23] font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-md">
              Get in touch
            </button>
            <a href="mailto:hello@auraplus.com" className="w-full sm:w-auto px-8 py-4 bg-white/20 backdrop-blur-md text-white font-semibold rounded-lg hover:bg-white/30 transition-colors border border-white/10">
              hello@auraplus.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
