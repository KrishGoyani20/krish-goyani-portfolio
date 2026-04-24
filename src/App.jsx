import React from 'react';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div style={{
      position: 'relative',
      minHeight: '100vh',
      background: 'radial-gradient(ellipse at 0% 0%, rgba(56,189,248,0.05) 0%, transparent 50%), radial-gradient(ellipse at 100% 100%, rgba(129,140,248,0.05) 0%, transparent 50%), #030712',
    }}>
      {/* Subtle grid background */}
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <CustomCursor />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;
