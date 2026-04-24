import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const roles = ['React Native Developer', 'Mobile App Developer', 'JavaScript Enthusiast', 'Innovative Coder'];

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (!isDeleting && charIndex <= current.length) {
      timeout = setTimeout(() => { setDisplayText(current.substring(0, charIndex)); setCharIndex(c => c + 1); }, 100);
    } else if (!isDeleting && charIndex > current.length) {
      timeout = setTimeout(() => { setIsDeleting(true); setCharIndex(c => c - 1); }, 1800);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => { setDisplayText(current.substring(0, charIndex)); setCharIndex(c => c - 1); }, 50);
    } else {
      setIsDeleting(false); setRoleIndex(r => (r + 1) % roles.length); setCharIndex(0);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center" style={{ padding: '120px 80px 80px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1fr auto', gap: '80px', alignItems: 'center' }}>

        {/* Left */}
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.25)', borderRadius: '20px', padding: '6px 16px', marginBottom: '28px' }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80', display: 'inline-block', boxShadow: '0 0 8px #4ade80' }}></span>
            <span style={{ color: '#38bdf8', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em' }}>Available for work</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '16px', color: '#fff' }}
          >
            Hi, I'm<br />
            <span style={{ background: 'linear-gradient(135deg, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Krish Goyani
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
            style={{ fontSize: '1.4rem', fontWeight: 400, color: '#38bdf8', marginBottom: '20px', minHeight: '36px', display: 'flex', alignItems: 'center', gap: '4px', fontFamily: "'Inter', sans-serif" }}
          >
            {displayText}<span style={{ color: '#38bdf8', animation: 'blink 1s step-end infinite' }}>|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
            style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: '500px', marginBottom: '44px', fontFamily: "'Inter', sans-serif" }}
          >
            Crafting high-performance mobile apps with React Native. Passionate about
            clean architecture, great UX, and turning ideas into elegant digital products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(56,189,248,0.45)' }}
              whileTap={{ scale: 0.97 }}
              style={{ background: 'linear-gradient(135deg, #38bdf8, #818cf8)', color: '#030712', padding: '14px 34px', borderRadius: '50px', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', fontFamily: "'Inter', sans-serif", display: 'inline-block' }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, borderColor: 'rgba(56,189,248,0.6)' }}
              whileTap={{ scale: 0.97 }}
              style={{ background: 'transparent', color: '#e2e8f0', padding: '14px 34px', borderRadius: '50px', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.18)', fontFamily: "'Inter', sans-serif", display: 'inline-block' }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right — Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }}
          style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          {/* Glow */}
          <div style={{ position: 'absolute', inset: '-30px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(56,189,248,0.18) 0%, transparent 70%)', animation: 'pulse-glow 3s ease-in-out infinite', zIndex: 0 }} />


          {/* Photo */}
          <motion.div
            animate={{ y: [0, -14, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ position: 'relative', zIndex: 5 }}
          >
            <div style={{ width: '340px', height: '340px', borderRadius: '50%', overflow: 'hidden', border: '3px solid rgba(56,189,248,0.35)', boxShadow: '0 0 50px rgba(56,189,248,0.25), 0 0 100px rgba(56,189,248,0.1)', background: 'linear-gradient(135deg, rgba(56,189,248,0.1), rgba(129,140,248,0.05))' }}>
              <img src="/image.jpg" alt="Krish Goyani" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 900px) {
          #home > div { grid-template-columns: 1fr !important; text-align: center; }
          #home > div > div:last-child { display: none !important; }
          #home { padding: 100px 24px 60px !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
