import Header from "@/components/layout/Header";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import BookingModal from "@/components/ui/BookingModal";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-20">
        <Contact />
      </main>
      <Footer />
      <BookingModal />
    </>
  );
}
