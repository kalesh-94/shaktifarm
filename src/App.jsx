import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import CustomLoader from './components/CustomLoader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import WhyUs from './sections/WhyUs';
import FeaturedProduct from './sections/FeaturedProduct';
import Gallery from './sections/Gallery';
import Process from './sections/Process';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <CustomLoader key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="min-h-screen bg-secondary-cream selection:bg-accent-gold selection:text-white font-sans text-primary-dark overflow-x-hidden scroll-smooth">
          <Navbar />
          <main>
            <Hero />
            <About />
            <WhyUs />
            <FeaturedProduct />
            <Gallery />
            <Process />
            <Testimonials />
            <FAQ />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
