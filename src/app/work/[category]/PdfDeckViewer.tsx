"use client";

import { useState, useRef, useEffect } from "react";
import { Maximize, Minimize } from "lucide-react";

export default function PdfDeckViewer({ 
  deck 
}: { 
  deck: { id: number, title: string, pdfUrl: string, pages: string[] } 
}) {
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
        <iframe 
          src={`${deck.pdfUrl}#toolbar=0&navpanes=0&scrollbar=1`} 
          className="w-full h-full border-none"
          title={deck.title}
        />
        
        {/* Fullscreen Title Overlay */}
        {isFullscreen && (
           <div className="absolute top-6 left-6 text-black/40 text-sm font-semibold tracking-widest z-20 pointer-events-none bg-white/50 px-3 py-1 rounded-full backdrop-blur-sm">
             {deck.title}
           </div>
        )}
      </div>
    </div>
  );
}
