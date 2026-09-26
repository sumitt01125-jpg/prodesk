import { useEffect } from "react";
import Lenis from "lenis";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import TechnologyStack from "./components/sections/TechnologyStack";
import About from "./components/sections/About";
import Stats from "./components/sections/Stats";
import WhyProDesk from "./components/sections/WhyProDesk";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import Location from "./components/sections/Location";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      duration: 1.1,
      lerp: 0.08,
    });

    let animationFrame;

    const raf = (time) => {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    };

    animationFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrame);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Navbar />

      <main>
        <Hero />
        <Services />
        <TechnologyStack />
        <About />
        <Stats />
        <WhyProDesk />
        <Testimonials />
        <Contact />
        <Location />
      </main>

      <Footer />
    </div>
  );
}

export default App;