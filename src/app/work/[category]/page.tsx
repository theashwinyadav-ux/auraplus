import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Mock data for categories and their specific filters
const categoryData: Record<string, { title: string; filters: string[] }> = {
  "graphic-designs": {
    title: "Graphic Designs",
    filters: ["All", "Logo Designs", "Thumbnails", "Reel Covers", "Social Media Statics", "Carousels", "Flyers", "Pitch Deck", "Ads", "Others"]
  },
  "video-edits": {
    title: "Video Edits",
    filters: ["All", "Short Form", "Long Form", "Ads", "Documentary", "Others"]
  },
  "page-growth": {
    title: "Page Growth",
    filters: ["All", "Organic", "Paid Ads", "Influencer", "Community", "Others"]
  },
  "content-distribution": {
    title: "Content Distribution",
    filters: ["All", "Shorts Clipping", "Podcast Highlights", "Cross-Platform", "Others"]
  }
};

export function generateStaticParams() {
  return [
    { category: "graphic-designs" },
    { category: "video-edits" },
    { category: "page-growth" },
    { category: "content-distribution" },
  ];
}

export default async function PortfolioCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params;
  const data = categoryData[resolvedParams.category];

  // If someone navigates to an unknown category, show a fallback
  if (!data) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
          <Link href="/#work" className="text-brand-primary hover:underline">Go back home</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white selection:bg-[#f06a23] selection:text-white">
      {/* We reuse the header, but since we are on a different page, it works with /# links */}
      <Header />
      
      <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
        <Link href="/#work" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight mb-12">
          {data.title}
        </h1>
        
        {/* Filter Pills */}
        <div className="flex flex-wrap gap-3 mb-16">
          {data.filters.map((filter, idx) => (
            <button 
              key={idx}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                idx === 0 
                  ? "bg-gray-900 text-white" // "All" is active by default visually
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        
        {/* Placeholder for Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Mock Items */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="aspect-square bg-gray-100 rounded-3xl border border-gray-200 overflow-hidden group cursor-pointer relative flex items-center justify-center">
               <p className="text-gray-400 font-medium z-10 group-hover:opacity-0 transition-opacity">Project Image {item}</p>
               <div className="absolute inset-0 bg-gradient-to-br from-[#f06a23]/10 to-[#ff9959]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
