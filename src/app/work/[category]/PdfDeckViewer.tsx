"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Document, Page, pdfjs } from "react-pdf";
import { Maximize, Minimize, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";

// Configure pdf.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PdfDeckViewer({ 
  deck 
}: { 
  deck: { id: number, title: string, pdfUrl: string, pages: string[] } 
}) {
  const [numPages, setNumPages] = useState<number>(0);
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
    if (currentIndex < numPages - 1) setCurrentIndex(prev => prev + 1);
  };
  const prev = () => {
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setCurrentIndex(0);
  }

  // Use the container width to scale the PDF dynamically
  const [containerWidth, setContainerWidth] = useState(800);
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [isFullscreen]);

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
        <Document
          file={deck.pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex flex-col items-center text-gray-400 gap-4">
              <Loader2 className="w-8 h-8 animate-spin text-[#f06a23]" />
              <p className="font-medium text-sm">Loading PDF Deck...</p>
            </div>
          }
          className="flex items-center justify-center w-full h-full"
        >
          {numPages > 0 && (
            <div className="w-full h-full relative overflow-hidden touch-pan-y">
              <motion.div 
                className="flex h-full w-full cursor-grab active:cursor-grabbing"
                initial={false}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = offset.x;
                  if (swipe < -50 && currentIndex < numPages - 1) {
                    setCurrentIndex(prev => prev + 1);
                  } else if (swipe > 50 && currentIndex > 0) {
                    setCurrentIndex(prev => prev - 1);
                  }
                }}
                animate={{ x: `-${currentIndex * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {Array.from(new Array(numPages), (el, index) => (
                  <div key={index} className="min-w-full flex-shrink-0 h-full flex items-center justify-center p-4">
                    <div className="shadow-2xl bg-white overflow-hidden flex items-center justify-center pointer-events-none" style={{ maxHeight: "100%", maxWidth: "100%" }}>
                      <Page 
                        pageNumber={index + 1} 
                        width={isFullscreen ? containerWidth * 0.9 : containerWidth * 0.95} 
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        className="flex items-center justify-center object-contain"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          )}
        </Document>

        {/* Controls */}
        {numPages > 0 && (
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 sm:gap-6 bg-black/70 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 rounded-full text-white z-20 shadow-2xl border border-white/10 scale-90 sm:scale-100">
            <button type="button" onClick={prev} className="hover:text-[#f06a23] p-1 transition-colors disabled:opacity-30 disabled:hover:text-white" disabled={currentIndex === 0}>
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <span className="font-semibold text-xs sm:text-sm tracking-widest uppercase opacity-90 whitespace-nowrap">
              {currentIndex + 1} / {numPages}
            </span>
            <button type="button" onClick={next} className="hover:text-[#f06a23] p-1 transition-colors disabled:opacity-30 disabled:hover:text-white" disabled={currentIndex === numPages - 1}>
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        )}
        
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
