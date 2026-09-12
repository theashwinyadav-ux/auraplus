"use client";

import { motion } from "framer-motion";

const caseStudies = [
  { id: "lumis", title: "Lumis Skincare", description: "Built Lumis Skincare into a trusted wellness brand through creator education, testimonials, and paid media.", metrics: ["1.8M+", "96M", "52K"] },
  { id: "vela", title: "Atelier Vela", description: "Transformed WanderTwo's travel content into a recognizable brand with stronger storytelling.", metrics: ["2.4M+", "318M", "18K"] },
  { id: "fitpulse", title: "FitPulse", description: "Relaunched FitPulse with a community-first campaign that improved acquisition and onboarding.", metrics: ["860K+", "12M+", "31K"] },
  { id: "hearth", title: "Hearth & Grain", description: "Moved Hearth & Grain from word-of-mouth discovery to digital demand through storytelling.", metrics: ["540K+", "4.6M", "22K"] }
];

export default function CaseStudies() {
  return (
    <section id="work" className="py-24 px-6 relative bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="px-4 py-1.5 border border-gray-200 rounded-full text-sm font-medium text-gray-700 mb-6 bg-white">
            Featured Work
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight leading-snug">
            Discover How We Help<br className="hidden sm:block" /> Brands Scale
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, i) => (
            <motion.div 
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group cursor-pointer rounded-3xl overflow-hidden bg-white border border-gray-200 hover:border-gray-300 transition-colors shadow-sm hover:shadow-md"
            >
              <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                 {/* Placeholder for images/videos */}
                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent z-10" />
                 <div className="absolute inset-0 flex items-center justify-center text-gray-900/20 text-4xl font-bold">
                    {study.title}
                 </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-brand-primary transition-colors">{study.title}</h3>
                <p className="text-gray-600 mb-6">{study.description}</p>
                <div className="flex items-center gap-6 border-t border-gray-100 pt-6">
                  {study.metrics.map((m, j) => (
                    <div key={j} className="flex-1">
                      <div className="text-xl font-bold text-gray-900 mb-1">{m}</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">Metric {j+1}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
