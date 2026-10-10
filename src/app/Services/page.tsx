import Header from "@/components/layout/Header";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import BookingModal from "@/components/ui/BookingModal";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-20">
        <Services />
        <Contact />
      </main>
      <Footer />
      <BookingModal />
    </>
  );
}
