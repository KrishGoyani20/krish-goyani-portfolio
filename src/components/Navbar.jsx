import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          background: scrolled ? 'rgba(3,7,18,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
          transition: 'all 0.4s ease',
        }}
      >
        {/* Scroll progress */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, height: '2px', width: `${progress}%`, background: 'linear-gradient(90deg, #38bdf8, #818cf8)', boxShadow: '0 0 10px rgba(56,189,248,0.7)', transition: 'width 0.1s linear' }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px 80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <motion.a href="#home" whileHover={{ scale: 1.05 }}
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.8rem', fontWeight: 800, textDecoration: 'none', background: 'linear-gradient(135deg, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Krish.
          </motion.a>

          {/* Desktop links */}
          <ul style={{ display: 'flex', gap: '36px', listStyle: 'none', margin: 0, padding: 0 }} className="hide-mobile">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} style={{ color: '#94a3b8', textDecoration: 'none', fontWeight: 500, fontSize: '0.92rem', fontFamily: "'Inter', sans-serif", transition: 'color 0.3s', position: 'relative' }}
                  onMouseEnter={e => e.target.style.color = '#38bdf8'}
                  onMouseLeave={e => e.target.style.color = '#94a3b8'}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <motion.a href="/KrishGoyani.pdf" download
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(56,189,248,0.4)' }}
            whileTap={{ scale: 0.95 }}
            style={{ padding: '10px 24px', borderRadius: '50px', fontSize: '0.88rem', fontWeight: 600, textDecoration: 'none', fontFamily: "'Inter', sans-serif", background: 'linear-gradient(135deg, #38bdf8, #818cf8)', color: '#030712', display: 'inline-block' }}
            className="hide-mobile">
            Resume
          </motion.a>

          {/* Mobile toggle */}
          <button onClick={() => setIsOpen(!isOpen)} style={{ display: 'none', color: '#94a3b8', background: 'none', border: 'none', padding: '8px' }} className="show-mobile">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}
            style={{ position: 'fixed', top: '70px', left: 0, right: 0, zIndex: 40, background: 'rgba(3,7,18,0.97)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            <ul style={{ listStyle: 'none', margin: 0, padding: '8px 0' }}>
              {navItems.map((item, i) => (
                <motion.li key={item.label} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}>
                  <a href={item.href} onClick={() => setIsOpen(false)}
                    style={{ display: 'block', padding: '14px 28px', color: '#94a3b8', textDecoration: 'none', fontWeight: 500, fontSize: '1rem', fontFamily: "'Inter', sans-serif" }}>
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
          nav > div { padding: 16px 20px !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
