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

        {/* 3x2 Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Tile 1: Stat (Green) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-8 flex flex-col justify-between bg-gradient-to-br from-[#f06a23] via-[#f77f3e] to-[#ff9959] overflow-hidden relative aspect-square md:aspect-auto md:min-h-[260px] text-white"
          >
            <div className="z-10">
              <h3 className="text-5xl font-bold text-white mb-2">500M+</h3>
              <p className="text-white/90 font-medium text-lg">Content Views Generated</p>
            </div>
            
            <div className="flex flex-wrap gap-2 z-10 mt-8">
              {['Global Exposure', 'Brand Visibility', 'High Engagement', 'Social Growth', 'Digital Reach'].map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold text-white border border-white/10">
                  {tag}
                </span>
              ))}
            </div>
            {/* Background wave effect approximation */}
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white rounded-full blur-3xl opacity-10 pointer-events-none" />
          </motion.div>

          {/* Tile 2: Video Placeholder */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-3xl bg-gray-200 overflow-hidden relative aspect-square md:aspect-auto md:min-h-[260px] group"
          >
            <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80" alt="Video thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute top-4 left-4 flex items-center gap-3 px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-xs font-semibold text-gray-800 shadow-sm">
              <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5" /> 12M+</span>
              <span className="flex items-center gap-1 text-pink-500"><Heart className="w-3.5 h-3.5" fill="currentColor" /> 98K+</span>
            </div>
          </motion.div>

          {/* Tile 3: Stat (Grey) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl p-8 flex flex-col justify-between bg-gray-100 border border-gray-200 aspect-square md:aspect-auto md:min-h-[260px]"
          >
            <div>
              <h3 className="text-5xl font-bold text-gray-900 mb-2">10M+</h3>
              <p className="text-gray-700 font-medium text-lg">Followers Grown</p>
            </div>
            <p className="text-sm text-gray-500 mt-8">Growing communities with smart social strategies.</p>
          </motion.div>

          {/* Tile 4: Video Placeholder */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="rounded-3xl bg-gray-200 overflow-hidden relative aspect-square md:aspect-auto md:min-h-[260px] group"
          >
            <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80" alt="Video thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute top-4 left-4 flex items-center gap-3 px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-xs font-semibold text-gray-800 shadow-sm">
              <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5" /> 2M+</span>
              <span className="flex items-center gap-1 text-pink-500"><Heart className="w-3.5 h-3.5" fill="currentColor" /> 17K+</span>
            </div>
          </motion.div>

          {/* Tile 5: Stat (Grey) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="rounded-3xl p-8 flex flex-col justify-between bg-gray-100 border border-gray-200 aspect-square md:aspect-auto md:min-h-[260px]"
          >
            <div>
              <h3 className="text-5xl font-bold text-gray-900 mb-2">5+ Years</h3>
              <p className="text-gray-700 font-medium text-lg">Social Media Expertise</p>
            </div>
            <p className="text-sm text-gray-500 mt-8">Years of creating impactful digital experiences.</p>
          </motion.div>

          {/* Tile 6: Video Placeholder */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="rounded-3xl bg-gray-200 overflow-hidden relative aspect-square md:aspect-auto md:min-h-[260px] group"
          >
            <img src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80" alt="Video thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute top-4 left-4 flex items-center gap-3 px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-xs font-semibold text-gray-800 shadow-sm">
              <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5" /> 9M+</span>
              <span className="flex items-center gap-1 text-pink-500"><Heart className="w-3.5 h-3.5" fill="currentColor" /> 105K+</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
