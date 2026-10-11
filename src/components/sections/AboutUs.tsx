"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ 
  from = 0, 
  to, 
  duration = 2, 
  suffix = "" 
}: { 
  from?: number; 
  to: number; 
  duration?: number; 
  suffix?: string; 
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    // Smooth easeOutExpo for high-end feel
    const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const current = Math.floor(from + (to - from) * easeOutExpo(progress));
      setCount(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setCount(to);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

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
                <h3 className="text-5xl font-bold text-white mb-2 tracking-tight">
                  <Counter to={500} suffix="M+" duration={2.2} />
                </h3>
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
                <h3 className="text-5xl font-bold text-gray-900 mb-2 tracking-tight">
                  <Counter to={10} suffix="M+" duration={1.8} />
                </h3>
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
                <h3 className="text-5xl font-bold text-gray-900 mb-2 tracking-tight">
                  <Counter to={5} suffix="+" duration={1.5} /> Years
                </h3>
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
