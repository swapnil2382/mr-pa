import { useEffect, useState } from "react"
import { AnimatePresence } from "framer-motion"
import Header from "./components/header"
import Hero from "./components/hero"
import Features from "./components/features"
import Capabilities from "./components/capabilities"
import ServicesBlog from "./components/services-blog"
import PreBooking from "./components/pre-booking"
import Pricing from "./components/pricing"
import CTA from "./components/cta"
import Footer from "./components/footer"

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      <div className="min-h-screen bg-black text-white">
        <Header scrollY={scrollY} />

        <main>
          <Hero mousePosition={mousePosition} />
          <Features />
          <ServicesBlog />
          <Capabilities />
          <PreBooking />
          <Pricing />

        </main>

        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;