import Header from "@/components/layout/Header";
import CaseStudies from "@/components/sections/CaseStudies";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import BookingModal from "@/components/ui/BookingModal";

export default function OurWorkPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-20">
        <CaseStudies />
        <Contact />
      </main>
      <Footer />
      <BookingModal />
    </>
  );
}
