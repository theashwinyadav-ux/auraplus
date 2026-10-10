import Header from "@/components/layout/Header";
import AboutUs from "@/components/sections/AboutUs";
import Footer from "@/components/layout/Footer";
import BookingModal from "@/components/ui/BookingModal";
import Contact from "@/components/sections/Contact";

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-20">
        <AboutUs />
        <Contact />
      </main>
      <Footer />
      
      <BookingModal />
    </>
  );
}
