"use client";

import { motion } from "framer-motion";

import Link from "next/link";

const workCategories = [
  {
    id: "youtube-thumbnails",
    title: "YouTube Thumbnails",
    previewImage: "/images/thumbnails/thumb1.jpg"
  },
  {
    id: "branding-logos",
    title: "Branding & Logos",
    previewImage: "/images/thumbnails/thumb2.jpg"
  },
  {
    id: "linkedin-branding",
    title: "LinkedIn Branding",
    previewImage: "/images/thumbnails/thumb4.jpg"
  },
  {
    id: "social-media-statics",
    title: "Social Media Statics",
    previewImage: "/images/thumbnails/thumb5.png"
  },
  {
    id: "pitch-decks",
    title: "Pitch Decks",
    previewImage: "/images/thumbnails/thumb1.jpg" // fallback placeholder
  }
];

export default function CaseStudies() {
  return (
    <section id="work" className="py-24 px-6 relative bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="px-4 py-1.5 border border-gray-200 rounded-full text-sm font-medium text-gray-700 mb-6 bg-white">
            Our Work
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight leading-snug">
            A Glimpse Into Our<br className="hidden sm:block" /> Creative Portfolio
          </h2>
        </div>
        
        {/* Like Our Services: 3-column grid creating two lines/rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workCategories.map((category, i) => (
            <Link href={`/work/${category.id}`} key={category.id}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gray-50 border border-gray-200 rounded-3xl p-6 flex flex-col hover:border-gray-300 hover:shadow-md transition-all group relative overflow-hidden h-full"
              >
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity z-0 pointer-events-none">
                  <span className="text-8xl font-black text-gray-900">0{i + 1}</span>
                </div>
                
                <div className="z-10 flex flex-col h-full">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 tracking-tight pr-8">
                    {category.title}
                  </h3>
                  
                  <div className="mt-auto rounded-2xl overflow-hidden aspect-video relative border border-gray-100 shadow-sm">
                    <img 
                      src={category.previewImage} 
                      alt={category.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
