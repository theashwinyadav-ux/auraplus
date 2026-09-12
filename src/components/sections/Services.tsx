"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const services = [
  { 
    id: "01", 
    title: "Social Media Strategy", 
    desc: "Data-driven strategies designed to scale your audience and maximize impact.",
    features: ["Audience analysis & targeting", "Comprehensive content calendaring", "Performance tracking & reporting"]
  },
  { 
    id: "02", 
    title: "Graphic Design", 
    desc: "High-quality, engaging visual assets tailored to your brand's unique voice.",
    features: ["Custom brand identity design", "Social media post templates", "High-converting marketing collateral"]
  },
  { 
    id: "03", 
    title: "Video Editing", 
    desc: "Professional video editing to craft compelling stories and retain viewer attention.",
    features: ["Short-form reels & TikToks", "Engaging motion graphics", "Professional color grading"]
  },
  { 
    id: "04", 
    title: "Content Distribution (Clipping)", 
    desc: "Strategic repurposing and distribution of your content across all major platforms.",
    features: ["Multi-platform syndication", "Viral clip extraction", "Engagement optimization"]
  },
  { 
    id: "05", 
    title: "PR & Growth", 
    desc: "Innovative approaches to accelerate community growth and build public relations.",
    features: ["Targeted influencer outreach", "Strategic media relations", "Active community management"]
  },
  { 
    id: "06", 
    title: "Other Services", 
    desc: "Comprehensive digital solutions including Web Development, SEO, Paid Ads, and more.",
    features: ["Responsive web development", "Search Engine Optimization (SEO)", "High-ROI paid media campaigns"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="px-4 py-1.5 border border-gray-200 rounded-full text-sm font-medium text-gray-700 mb-6 bg-white">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight leading-snug">
            Everything You Need<br className="hidden sm:block" /> to Succeed
          </h2>
        </div>

        <div className="flex flex-col gap-10">
          {services.map((service, i) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-gray-200 rounded-[2rem] p-6 md:p-10 flex flex-col md:flex-row items-center gap-10 md:gap-16 hover:border-gray-300 hover:shadow-sm transition-all"
            >
              {/* Left Side: Content */}
              <div className="w-full md:w-1/2 flex flex-col items-start">
                <div className="px-3 py-1 border border-gray-200 rounded-full text-xs font-semibold text-gray-600 mb-8 inline-block">
                  {service.id}
                </div>
                
                <h3 className="text-3xl font-bold mb-4 text-gray-900 tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-10 max-w-md leading-relaxed">
                  {service.desc}
                </p>
                
                <div className="flex flex-col gap-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-gray-400" />
                      <span className="text-sm font-medium text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Image Placeholder */}
              <div className="w-full md:w-1/2 aspect-video md:aspect-[4/3] bg-gradient-to-br from-[#f06a23] via-[#f77f3e] to-[#ff9959] rounded-2xl relative overflow-hidden flex items-center justify-center border border-gray-100">
                <p className="text-white/80 font-medium text-sm">Image Placeholder</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
