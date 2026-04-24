import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'Sridix Technology',
    role: 'React Native Developer',
    location: 'Surat, GJ (On Site)',
    duration: 'March 2025 – Present',
    color: '#38bdf8',
    points: [
      'Crafting high-performance cross-platform mobile apps with React Native.',
      'Building robust architectures integrating REST APIs and third-party services.',
      'Writing clean, maintainable code following best development practices.',
      'Collaborating in agile teams, delivering high-quality results consistently.',
    ],
  },
  {
    company: 'Sebzy Enterprise',
    role: 'React Native Developer Intern',
    location: 'Remote',
    duration: 'Jun 2025 – Aug 2025 (2 Months)',
    color: '#818cf8',
    cert: '/SebzyEnterpriseCertificate.jpg',
    certLink: '/SebzyEnterpriseCertificate.jpg',
    points: [
      'Spearheaded remote mobile app development with scalable React Native architecture.',
      'Contributed across the full development lifecycle — design to deployment.',
      'Independently solved critical bugs and delivered production-ready features.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" style={{ padding: '100px 80px', maxWidth: '1200px', margin: '0 auto' }}>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '60px', textAlign: 'center' }}>
        <p style={{ color: '#38bdf8', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px', fontFamily: "'Inter', sans-serif" }}>My Journey</p>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>Work Experience</h2>
        <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, #38bdf8, #818cf8)', borderRadius: '2px', margin: '0 auto', boxShadow: '0 0 10px rgba(56,189,248,0.5)' }} />
      </motion.div>

      <div style={{ position: 'relative' }}>
        {/* Timeline line */}
        <div style={{ position: 'absolute', left: '20px', top: '24px', bottom: '24px', width: '2px', background: 'linear-gradient(180deg, #38bdf8, rgba(56,189,248,0.1))' }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          {experiences.map((exp, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.7 }}
              style={{ position: 'relative', paddingLeft: '60px' }}>
              {/* Dot */}
              <div style={{ position: 'absolute', left: '10px', top: '32px', width: '22px', height: '22px', borderRadius: '50%', background: exp.color, boxShadow: `0 0 16px ${exp.color}80`, border: '3px solid #030712', zIndex: 2 }} />

              <motion.div whileHover={{ x: 4 }}
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', padding: '36px 40px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
                  <div>
                    <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>{exp.company}</h3>
                    <p style={{ fontWeight: 600, color: exp.color, fontSize: '0.95rem', fontFamily: "'Inter', sans-serif" }}>{exp.role}</p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.85rem', color: '#64748b' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: "'Inter', sans-serif" }}><Calendar size={13} />{exp.duration}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: "'Inter', sans-serif" }}><MapPin size={13} />{exp.location}</span>
                  </div>
                </div>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingLeft: 0, listStyle: 'none' }}>
                  {exp.points.map((pt, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.7, fontFamily: "'Inter', sans-serif" }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: exp.color, marginTop: '8px', flexShrink: 0 }} />
                      {pt}
                    </li>
                  ))}
                </ul>

                {exp.cert && (
                  <div style={{ marginTop: '24px' }}>
                    <p style={{ fontSize: '0.85rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '12px' }}>🏆 Internship Certificate</p>
                    <a href={exp.certLink} target="_blank" rel="noreferrer">
                      <motion.img src={exp.cert} alt="Sebzy Certificate"
                        whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(129,140,248,0.3)' }}
                        style={{ width: '140px', height: '90px', objectFit: 'cover', objectPosition: 'top', borderRadius: '10px', border: '1px solid rgba(129,140,248,0.3)', display: 'block', cursor: 'pointer' }}
                        onError={e => { e.target.src = 'https://images.unsplash.com/photo-1589330694653-efa648338b6b?auto=format&fit=crop&q=80&w=300'; }}
                      />
                    </a>
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 768px) { #experience { padding: 70px 24px !important; } }`}</style>
    </section>
  );
};

export default Experience;
