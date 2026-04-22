import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import WhatsAppFloat from "../components/WhatsAppFloat";
import Footer from "../components/Footer";
import HeroContent from "../components/HeroContent";
import ServiceList  from "../components/ServiceList"

export default function Home() {
  return (
    <>
    <Navbar />
      <Hero />
      <HeroContent />
      <Services />
      <ServiceList />
      <Gallery />
      <WhatsAppFloat />
      <Footer />
    </>
  );
}