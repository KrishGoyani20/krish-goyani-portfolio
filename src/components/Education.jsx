import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const education = [
  { degree: 'Bachelor of Computer Applications', institution: 'Saurashtra University', college: 'Shree Dharmjivan Das B.Ed College, Amreli, Gujarat', duration: '2023 – 2026', color: '#38bdf8', icon: '🎓' },
  { degree: '12th Commerce (HSC)', institution: 'K.V. Mangukiya School', college: 'Jothan, Surat, Gujarat', duration: '2021 – 2023', color: '#818cf8', icon: '📚' },
];

const Education = () => {
  return (
    <section id="education" style={{ padding: '100px 80px', maxWidth: '1200px', margin: '0 auto' }}>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '60px', textAlign: 'center' }}>
        <p style={{ color: '#38bdf8', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px', fontFamily: "'Inter', sans-serif" }}>Academic Background</p>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>Education</h2>
        <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, #38bdf8, #818cf8)', borderRadius: '2px', margin: '0 auto', boxShadow: '0 0 10px rgba(56,189,248,0.5)' }} />
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
        {education.map((edu, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.6 }}
            whileHover={{ y: -6 }}
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', padding: '36px', transition: 'box-shadow 0.3s, transform 0.3s' }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = `0 20px 60px rgba(0,0,0,0.4), 0 0 30px ${edu.color}15`}
            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
              <div style={{ width: '54px', height: '54px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem', flexShrink: 0, background: `${edu.color}14`, border: `1px solid ${edu.color}28` }}>
                {edu.icon}
              </div>
              <div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>{edu.degree}</h3>
                <p style={{ fontWeight: 600, color: edu.color, marginBottom: '4px', fontSize: '0.92rem', fontFamily: "'Inter', sans-serif" }}>{edu.institution}</p>
                <p style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '14px', fontFamily: "'Inter', sans-serif" }}>{edu.college}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b', fontSize: '0.83rem', fontFamily: "'Inter', sans-serif" }}>
                  <Calendar size={13} />
                  <span>{edu.duration}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <style>{`@media (max-width: 768px) { #education { padding: 70px 24px !important; } }`}</style>
    </section>
  );
};

export default Education;
