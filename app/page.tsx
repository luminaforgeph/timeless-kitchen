import Hero from "../components/sections/Hero";
import ServicesBento from "../components/sections/ServicesBento";
import Testimonials from "../components/sections/Testimonials";
import ClosingCTA from "../components/sections/ClosingCTA";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesBento />
        <Testimonials />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
