import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import LogoTicker from "@/components/sections/LogoTicker";
import AboutUs from "@/components/sections/AboutUs";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Services from "@/components/sections/Services";
import CaseStudies from "@/components/sections/CaseStudies";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <LogoTicker />
        <AboutUs />
        <WhyChooseUs />
        <Services />
        <CaseStudies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
