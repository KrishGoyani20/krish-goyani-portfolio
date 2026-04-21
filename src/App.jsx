import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Stats from './components/Stats';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Global scroll scroll reveal hook
  useEffect(() => {
    const elements = document.querySelectorAll(".section-reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    elements.forEach(el => {
      observer.observe(el);
    });

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <Navbar />
      <CustomCursor />
      <Hero />
      <About />
      <Skills />
      <Stats />
      <Projects />
      <Experience />
      <Education />
      
      <section className="section-reveal glass cta">
        <h2>Let's build something epic ✨</h2>
        <p>Looking for a React Native developer to bring your vision to life? Let's connect.</p>
        <a href="https://wa.me/917698699316" target="_blank" rel="noreferrer" className="btn btn-primary">Chat on WhatsApp</a>
      </section>

      <Contact />
      <Footer />
    </>
  );
}

export default App;
