"use client";

import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Camera, Play, Hash } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 px-6 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="px-4 py-1.5 border border-gray-200 rounded-full text-sm font-medium text-gray-700 mb-6 bg-white">
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight leading-snug">
            Everything Your Brand Needs<br className="hidden sm:block" /> to Grow on Social Media
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Column 1: Tall Blue Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-8 flex flex-col justify-end bg-gradient-to-b from-[#6fb2e6] to-[#1a7bbd] text-white overflow-hidden relative min-h-[500px]"
          >
            {/* Placeholder for the graphic */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-48 h-64 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 rotate-6 shadow-xl" />
            <div className="absolute top-16 left-1/2 -translate-x-[60%] w-48 h-64 bg-gradient-to-tr from-orange-400 to-pink-500 rounded-2xl shadow-2xl -rotate-6 flex items-center justify-center">
               <div className="text-white text-center font-bold px-4 leading-tight text-xl">Ideas that<br/>spark attention</div>
            </div>
            
            <div className="relative z-10 mt-auto">
              <h3 className="text-2xl font-bold mb-2">Creative That Stands Out</h3>
              <p className="text-white/80 text-sm leading-relaxed max-w-[250px]">
                Creating unique visuals and ideas that make your brand impossible to ignore.
              </p>
            </div>
          </motion.div>

          {/* Column 2: Stacked Grey Cards */}
          <div className="flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-3xl p-8 flex flex-col justify-center bg-gray-100 border border-gray-200 flex-1 min-h-[240px]"
            >
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Data-Driven Growth</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Using insights and analytics to improve performance and maximize results.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-3xl p-8 flex flex-col justify-center bg-gray-100 border border-gray-200 flex-1 min-h-[240px]"
            >
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Trend-Focused Approach</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Keeping your brand ahead with fresh ideas and platform trends.
              </p>
            </motion.div>
          </div>

          {/* Column 3: Stacked Image Card + Socials */}
          <div className="flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="rounded-3xl p-8 flex flex-col justify-end bg-gray-900 text-white overflow-hidden relative flex-1 min-h-[350px] group"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Team working" 
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">A Team That Cares</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Working as your growth partner with creativity, support, and dedication.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="rounded-3xl p-8 flex items-center justify-center gap-4 bg-gray-100 border border-gray-200 min-h-[120px]"
            >
              <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <span className="font-bold">X</span>
              </div>
              <div className="w-10 h-10 bg-yellow-400 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <span className="font-bold text-lg leading-none">👻</span>
              </div>
              <div className="w-10 h-10 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <Camera className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <Hash className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <Play className="w-5 h-5 fill-current" />
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
