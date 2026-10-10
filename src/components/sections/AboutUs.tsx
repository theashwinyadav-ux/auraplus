"use client";

import { motion } from "framer-motion";
import { Eye, Heart } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="about" className="py-24 px-6 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="px-4 py-1.5 border border-gray-200 rounded-full text-sm font-medium text-gray-700 mb-6 bg-white">
            About Us
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight leading-snug">
            Everything Your Brand Needs<br className="hidden sm:block" /> to Grow on Social Media
          </h2>
        </div>

        {/* 3x1 Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="rounded-3xl p-8 flex flex-col transition-all group relative overflow-hidden bg-gradient-to-br from-[#f06a23] via-[#f77f3e] to-[#ff9959] text-white hover:shadow-lg border-none md:min-h-[260px]"
          >
            <div className="z-10 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-5xl font-bold text-white mb-2 tracking-tight">500M+</h3>
                <p className="text-white/90 text-sm leading-relaxed">Content Views Generated</p>
              </div>
              
              <div className="flex flex-wrap gap-2 z-10 mt-8">
                {['Global Exposure', 'Brand Visibility', 'High Engagement', 'Social Growth'].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-semibold text-white border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="rounded-3xl p-8 flex flex-col transition-all group relative overflow-hidden bg-gray-50 border border-gray-200 hover:border-gray-300 hover:shadow-md md:min-h-[260px]"
          >
            <div className="z-10 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-5xl font-bold text-gray-900 mb-2 tracking-tight">10M+</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Followers Grown</p>
              </div>
              <p className="text-xs text-gray-500 mt-8 font-medium">Growing communities with smart social strategies.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl p-8 flex flex-col transition-all group relative overflow-hidden bg-gray-50 border border-gray-200 hover:border-gray-300 hover:shadow-md md:min-h-[260px]"
          >
            <div className="z-10 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-5xl font-bold text-gray-900 mb-2 tracking-tight">5+ Years</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Social Media Expertise</p>
              </div>
              <p className="text-xs text-gray-500 mt-8 font-medium">Years of creating impactful digital experiences.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
