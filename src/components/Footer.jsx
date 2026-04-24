import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '50px 80px', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '40px' }}>
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        style={{ color: '#475569', fontSize: '0.9rem', fontFamily: "'Inter', sans-serif", display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', flexWrap: 'wrap' }}>
        © 2026 Krish Goyani · Built with
        <span style={{ color: '#38bdf8' }}>♥</span>
        using React & Tailwind CSS
      </motion.p>
    </footer>
  );
};

export default Footer;
