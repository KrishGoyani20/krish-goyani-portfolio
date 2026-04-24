import React from 'react';
import { motion } from 'framer-motion';

const highlights = [
  { icon: '🚀', text: 'Building high-performance cross-platform mobile apps with React Native' },
  { icon: '🎨', text: 'Focused on clean UI/UX design with pixel-perfect implementation' },
  { icon: '⚡', text: 'Integrating REST APIs, Firebase, and real-time features seamlessly' },
  { icon: '🛠️', text: 'Writing clean, maintainable code following best development practices' },
  { icon: '🤝', text: 'Collaborating in agile teams, delivering results within deadlines' },
];

const sectionStyle = {
  padding: '100px 80px',
  maxWidth: '1200px',
  margin: '0 auto',
};

const About = () => {
  return (
    <section id="about" style={sectionStyle}>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '60px', textAlign: 'center' }}>
        <p style={{ color: '#38bdf8', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px', fontFamily: "'Inter', sans-serif" }}>Get To Know Me</p>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>About Me</h2>
        <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, #38bdf8, #818cf8)', borderRadius: '2px', margin: '0 auto', boxShadow: '0 0 10px rgba(56,189,248,0.5)' }} />
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' }}>
        {/* Left */}
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', padding: '40px' }}>
          <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '20px' }}>Who I Am</h3>
          <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: '18px', fontSize: '0.97rem', fontFamily: "'Inter', sans-serif" }}>
            I'm a passionate <span style={{ color: '#38bdf8', fontWeight: 500 }}>Mobile App Developer</span> specializing
            in React Native and Firebase, based in Surat, Gujarat. I turn ideas into elegant, high-performance mobile experiences.
          </p>
          <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: '28px', fontSize: '0.97rem', fontFamily: "'Inter', sans-serif" }}>
            Currently working at <span style={{ color: '#fff', fontWeight: 500 }}>Sridix Technology</span>, I'm constantly
            pushing the boundaries of what's possible in mobile development.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {['React Native', 'Firebase', 'Redux', 'JavaScript', 'TypeScript', 'Node.js'].map(tag => (
              <span key={tag} style={{ padding: '6px 14px', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 500, background: 'rgba(56,189,248,0.08)', border: '1px solid rgba(56,189,248,0.2)', color: '#38bdf8', fontFamily: "'Inter', sans-serif" }}>{tag}</span>
            ))}
          </div>
        </motion.div>

        {/* Right */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {highlights.map((item, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ x: 8, transition: { duration: 0.2 } }}
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '14px', padding: '18px 22px', display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <span style={{ fontSize: '1.4rem', marginTop: '2px' }}>{item.icon}</span>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.7, margin: 0, fontFamily: "'Inter', sans-serif" }}>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`@media (max-width: 768px) { #about > div:last-child { grid-template-columns: 1fr !important; } #about { padding: 70px 24px !important; } }`}</style>
    </section>
  );
};

export default About;
