import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import PortfolioClient from "./PortfolioClient";

const categoryData: Record<string, { title: string; subtitle: string }> = {
  "youtube-thumbnails": {
    title: "YouTube Thumbnails",
    subtitle: "High-converting designs that stop the scroll and earn the click."
  },
  "branding-logos": {
    title: "Branding & Logos",
    subtitle: "Visual identities that tell your story and build lasting recognition."
  },
  "linkedin-branding": {
    title: "LinkedIn Branding",
    subtitle: "Elevating professional presence with striking personal brand assets."
  },
  "social-media-statics": {
    title: "Social Media Statics",
    subtitle: "Engaging, platform-native graphics designed for maximum impact."
  },
  "pitch-decks": {
    title: "Pitch Decks",
    subtitle: "Persuasive and beautiful presentations that win clients and investors."
  }
};

export function generateStaticParams() {
  return [
    { category: "youtube-thumbnails" },
    { category: "branding-logos" },
    { category: "linkedin-branding" },
    { category: "social-media-statics" },
    { category: "pitch-decks" },
  ];
}

export default async function PortfolioCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params;
  const data = categoryData[resolvedParams.category];

  if (!data) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center flex-col">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">Work Not Found</h1>
        <Link href="/#work" className="text-white bg-[#f06a23] px-6 py-2 rounded-full font-medium hover:opacity-90">Go back to portfolio</Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <PortfolioClient data={data} category={resolvedParams.category} />
      <Footer />
    </main>
  );
}
