import Hero from "../components/sections/Hero";
import ServicesBento from "../components/sections/ServicesBento";
import Navbar from "../components/layout/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesBento />
      </main>
    </>
  );
}
