"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Sparkles, Maximize, Minimize, ChevronLeft, ChevronRight } from "lucide-react";

// Mock data for 3 Pitch Decks using our available images as "PDF slides"
import dynamic from 'next/dynamic';
const PdfDeckViewer = dynamic(() => import('./PdfDeckViewer'), { ssr: false });

const pitchDecks = [
  {
    id: 1,
    title: "Google Business Profile Service",
    pdfUrl: "/images/pitch-decks/Google Business Profile Service.pdf",
    pages: []
  },
  {
    id: 2,
    title: "SaaS Series A Deck",
    pdfUrl: "",
    pages: [
      "/images/thumbnails/thumb4.jpg",
      "/images/thumbnails/thumb5.png",
      "/images/thumbnails/thumb1.jpg",
      "/images/thumbnails/thumb2.jpg",
    ]
  },
  {
    id: 3,
    title: "E-Commerce Brand Deck",
    pdfUrl: "",
    pages: [
      "/images/thumbnails/thumb2.jpg",
      "/images/thumbnails/thumb1.jpg",
      "/images/thumbnails/thumb5.png",
      "/images/thumbnails/thumb4.jpg",
    ]
  }
];

function DeckViewer({ deck }: { deck: typeof pitchDecks[0] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const next = () => {
    if (currentIndex < deck.pages.length - 1) setCurrentIndex(prev => prev + 1);
  };
  const prev = () => {
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };

  return (
    <div className="flex flex-col mb-24">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <h3 className="text-3xl font-bold text-gray-900">{deck.title}</h3>
        <button 
          type="button"
          onClick={toggleFullscreen} 
          className="flex items-center justify-center gap-2 px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full font-semibold transition-colors text-sm w-full sm:w-auto"
        >
          {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
          {isFullscreen ? "Exit Full Screen" : "View in Full Screen"}
        </button>
      </div>

      <div 
        ref={containerRef}
        className={`relative bg-gray-50 border border-gray-200 overflow-hidden flex items-center justify-center transition-shadow ${
          isFullscreen ? 'w-full h-screen bg-white' : 'w-full aspect-video rounded-3xl shadow-xl'
        }`}
      >
        {/* Seamless Slider using Images */}
        <div className="w-full h-full relative overflow-hidden">
          <motion.div 
            className="flex h-full w-full"
            initial={false}
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {deck.pages.map((page, index) => (
              <div key={index} className="min-w-full flex-shrink-0 h-full flex items-center justify-center p-4">
                <img
                  src={page}
                  className="w-full h-full object-contain shadow-2xl rounded-xl pointer-events-none"
                  alt={`Page ${index + 1}`}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Controls */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6 bg-black/70 backdrop-blur-md px-6 py-3 rounded-full text-white z-20 shadow-2xl border border-white/10">
          <button type="button" onClick={prev} className="hover:text-[#f06a23] transition-colors disabled:opacity-30 disabled:hover:text-white" disabled={currentIndex === 0}>
            <ChevronLeft className="w-6 h-6" />
          </button>
          <span className="font-semibold text-sm tracking-widest uppercase opacity-90">
            {currentIndex + 1} / {deck.pages.length}
          </span>
          <button type="button" onClick={next} className="hover:text-[#f06a23] transition-colors disabled:opacity-30 disabled:hover:text-white" disabled={currentIndex === deck.pages.length - 1}>
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        
        {/* Fullscreen Title Overlay */}
        {isFullscreen && (
           <div className="absolute top-6 left-6 text-white/40 text-sm font-semibold tracking-widest z-20 pointer-events-none">
             {deck.title}
           </div>
        )}
      </div>
    </div>
  );
}

export default function PortfolioClient({ 
  data, 
  category 
}: { 
  data: { title: string; subtitle: string }, 
  category: string 
}) {
  
  // Gallery images for non-pitch-deck categories
  const galleryImages = [
    "/images/thumbnails/thumb1.jpg",
    "/images/thumbnails/thumb2.jpg",
    "/images/thumbnails/thumb4.jpg",
    "/images/thumbnails/thumb5.png",
    "/images/thumbnails/thumb1.jpg",
    "/images/thumbnails/thumb2.jpg",
    "/images/thumbnails/thumb4.jpg",
    "/images/thumbnails/thumb5.png"
  ];

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 bg-white rounded-b-[4rem] shadow-sm relative z-10">
        <div className="max-w-7xl mx-auto">
          <Link href="/#work" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-[#f06a23] mb-12 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-10"
          >
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-5 h-5 text-[#f06a23]" />
                <span className="text-sm font-bold text-[#f06a23] tracking-widest uppercase">Showcase</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 tracking-tighter leading-[0.9]">
                {data.title}
              </h1>
            </div>
            
            <div className="max-w-sm pb-4">
              <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed">
                {data.subtitle}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="px-6 py-24 max-w-7xl mx-auto -mt-10 relative z-0">
        
        {category === "pitch-decks" ? (
          // Custom PDF/Pitch Deck Viewers
          <div className="max-w-5xl mx-auto">
            {pitchDecks.map(deck => (
              deck.pdfUrl ? <PdfDeckViewer key={deck.id} deck={deck} /> : <DeckViewer key={deck.id} deck={deck} />
            ))}
          </div>
        ) : (
          // Masonry Gallery for other categories
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((src, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (idx % 3) * 0.15 }}
                className="break-inside-avoid relative group cursor-pointer"
              >
                <div className="rounded-3xl overflow-hidden bg-gray-200 border border-gray-200/50 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                  <img 
                    src={src} 
                    alt={`${data.title} Creative ${idx + 1}`} 
                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Creative Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#f06a23]/80 via-[#f06a23]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <span className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      Creative #{idx + 1}
                    </span>
                    <span className="text-white/80 text-sm font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      Aura Plus Original
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
