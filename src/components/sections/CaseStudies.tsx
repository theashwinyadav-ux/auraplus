"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const workCategories = [
  { 
    id: "graphic-designs", 
    title: "Graphic Designs", 
    description: "Striking visual identities, pitch decks, and social statics.", 
    tags: ["Logos", "Carousels", "Ads"], 
    bgClass: "bg-[#c7f043] text-gray-900", 
    tagClass: "bg-white/80 text-gray-800 border-none"
  },
  { 
    id: "video-edits", 
    title: "Video Edits", 
    description: "High-retention short-form and professional long-form content.", 
    tags: ["Reels", "TikToks", "YouTube"], 
    bgClass: "bg-gray-100 text-gray-900", 
    tagClass: "bg-white text-gray-800 border-gray-200"
  },
  { 
    id: "page-growth", 
    title: "Page Growth", 
    description: "Scaling communities organically and through paid media.", 
    tags: ["Followers", "Engagement", "Community"], 
    bgClass: "bg-gradient-to-br from-[#f06a23] via-[#f77f3e] to-[#ff9959] text-white", 
    tagClass: "bg-white/20 text-white border-white/10"
  },
  { 
    id: "content-distribution", 
    title: "Content Distribution", 
    description: "Maximizing the reach of your best content across platforms.", 
    tags: ["Syndication", "Clipping", "Omnichannel"], 
    bgClass: "bg-gray-900 text-white", 
    tagClass: "bg-white/10 text-gray-300 border-white/10"
  }
];

export default function CaseStudies() {
  return (
    <section id="work" className="py-24 px-6 relative bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="flex flex-col items-start text-left">
            <div className="px-4 py-1.5 border border-gray-200 rounded-full text-sm font-medium text-gray-700 mb-6 bg-white">
              Featured Work
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight leading-snug">
              Discover How We Help<br className="hidden sm:block" /> Brands Scale
            </h2>
          </div>
          <button className="px-5 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-br from-[#f06a23] via-[#f77f3e] to-[#ff9959] hover:opacity-90 transition-opacity shadow-sm">
            View Full Portfolio
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workCategories.map((category, i) => (
            <Link href={`/work/${category.id}`} key={category.id}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`group cursor-pointer rounded-3xl p-8 md:p-12 flex flex-col justify-between overflow-hidden relative aspect-square md:aspect-auto md:min-h-[380px] hover:-translate-y-1 transition-transform duration-300 ${category.bgClass}`}
              >
                <div className="z-10 flex justify-between items-start">
                  <div>
                    <h3 className="text-4xl font-bold mb-3">{category.title}</h3>
                    <p className="font-medium text-lg opacity-90 max-w-sm">{category.description}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 z-10 mt-12">
                  {category.tags.map((tag, j) => (
                    <span key={j} className={`px-4 py-1.5 backdrop-blur-md rounded-full text-sm font-semibold border ${category.tagClass}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Subtle hover effect background */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
