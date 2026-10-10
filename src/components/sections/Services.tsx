"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const services = [
  { 
    id: "01", 
    title: "YouTube Thumbnails", 
    desc: "High-converting thumbnails tailored to your niche that grab attention and drive clicks.",
    features: ["A/B testing ready designs", "Bold typography & compositing", "High CTR layouts"]
  },
  { 
    id: "02", 
    title: "Branding & Logos", 
    desc: "Custom visual identities that communicate your brand's unique voice and values.",
    features: ["Custom logo design", "Color palettes & typography", "Comprehensive brand guidelines"]
  },
  { 
    id: "03", 
    title: "LinkedIn Branding", 
    desc: "Professional assets designed to elevate your personal or corporate LinkedIn presence.",
    features: ["Professional banner designs", "Seamless carousel posts", "Profile picture enhancements"]
  },
  { 
    id: "04", 
    title: "Social Media Statics", 
    desc: "Eye-catching graphic posts optimized for Instagram, Twitter, and Facebook feeds.",
    features: ["Engaging single-image posts", "Infographics & data viz", "Platform-optimized sizing"]
  },
  { 
    id: "05", 
    title: "Pitch Decks", 
    desc: "Beautifully designed slide presentations that tell a compelling story and win clients.",
    features: ["Investor & sales decks", "Data visualization", "Clean, modern layouts"]
  },
  { 
    id: "06", 
    title: "Other Services", 
    desc: "A full suite of digital solutions to support your brand's growth beyond design.",
    features: ["Video editing (Shorts/Reels)", "Social media strategy", "Content distribution"]
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-3xl p-8 flex flex-col transition-all group relative overflow-hidden ${
                service.id === "06" 
                  ? "bg-gradient-to-br from-[#f06a23] via-[#f77f3e] to-[#ff9959] text-white hover:shadow-lg border-none" 
                  : "bg-gray-50 border border-gray-200 hover:border-gray-300 hover:shadow-md"
              }`}
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                <span className={`text-8xl font-black ${service.id === "06" ? "text-white" : "text-gray-900"}`}>
                  {service.id}
                </span>
              </div>
              
              <div className="z-10 flex-1">
                <h3 className={`text-2xl font-bold mb-3 tracking-tight pr-8 ${service.id === "06" ? "text-white" : "text-gray-900"}`}>
                  {service.title}
                </h3>
                <p className={`mb-8 text-sm leading-relaxed ${service.id === "06" ? "text-white/90" : "text-gray-600"}`}>
                  {service.desc}
                </p>
                
                <div className="flex flex-col gap-3 mt-auto">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${service.id === "06" ? "text-white" : "text-[#f06a23]"}`} />
                      <span className={`text-xs font-medium ${service.id === "06" ? "text-white/90" : "text-gray-700"}`}>
                        {feature}
                      </span>
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
