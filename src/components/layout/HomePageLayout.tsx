"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import LogoTicker from "@/components/sections/LogoTicker";
import AboutUs from "@/components/sections/AboutUs";
import Services from "@/components/sections/Services";
import CaseStudies from "@/components/sections/CaseStudies";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import BookingModal from "@/components/ui/BookingModal";

function ScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    let targetId = "";
    if (pathname.toLowerCase() === "/about-us") targetId = "about";
    if (pathname.toLowerCase() === "/services") targetId = "services";
    if (pathname.toLowerCase() === "/our-work") targetId = "work";
    if (pathname.toLowerCase() === "/contact") targetId = "contact";

    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        // Small timeout to ensure rendering is complete
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 50);
      }
    } else if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  return null;
}

export default function HomePageLayout() {
  return (
    <>
      <ScrollHandler />
      <Header />
      <main className="flex-1">
        <Hero />
        <LogoTicker />
        <AboutUs />
        <Services />
        <CaseStudies />
        <Contact />
      </main>
      <Footer />
      
      {/* Global Modals */}
      <BookingModal />
    </>
  );
}
