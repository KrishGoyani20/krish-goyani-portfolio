import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GitBranch } from 'lucide-react';

const projects = [
  {
    title: 'PG Management System',
    description: 'A comprehensive mobile platform designed to streamline accommodation management, bookings, and facility tracking for PG owners and tenants.',
    img: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    tags: ['React Native', 'Firebase', 'Redux'],
    color: '#38bdf8',
  },
  {
    title: 'Shayari App',
    description: 'An elegant application for discovering, sharing, and saving poetic verses, featuring a clean UI, personalized feeds, and social sharing.',
    img: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    tags: ['React Native', 'Firebase', 'Firestore'],
    color: '#818cf8',
  },
  {
    title: 'Chat Application',
    description: 'A seamless real-time communication platform built with Firebase backend, ensuring instant message delivery with an intuitive interface.',
    img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    tags: ['React Native', 'Firebase', 'Real-time DB'],
    color: '#22d3ee',
  },
];

const Projects = () => {
  return (
    <section id="projects" style={{ padding: '100px 80px', maxWidth: '1200px', margin: '0 auto' }}>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '60px', textAlign: 'center' }}>
        <p style={{ color: '#38bdf8', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px', fontFamily: "'Inter', sans-serif" }}>My Work</p>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>Featured Projects</h2>
        <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, #38bdf8, #818cf8)', borderRadius: '2px', margin: '0 auto', boxShadow: '0 0 10px rgba(56,189,248,0.5)' }} />
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
        {projects.map((proj, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.6 }}
            whileHover={{ y: -10 }}
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', overflow: 'hidden', transition: 'box-shadow 0.4s, transform 0.4s' }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = `0 30px 80px rgba(0,0,0,0.5), 0 0 40px ${proj.color}12`}
            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
          >
            {/* Image */}
            <div style={{ position: 'relative', overflow: 'hidden', height: '210px' }}>
              <motion.img src={proj.img} alt={proj.title}
                whileHover={{ scale: 1.07 }} transition={{ duration: 0.5 }}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, rgba(3,7,18,0.7), transparent)`, opacity: 0, transition: 'opacity 0.3s' }}
                onMouseEnter={e => e.target.style.opacity = 1} onMouseLeave={e => e.target.style.opacity = 0} />
            </div>

            {/* Content */}
            <div style={{ padding: '28px 28px 32px' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                {proj.tags.map(tag => (
                  <span key={tag} style={{ fontSize: '0.75rem', padding: '4px 12px', borderRadius: '20px', fontWeight: 500, background: `${proj.color}12`, border: `1px solid ${proj.color}28`, color: proj.color, fontFamily: "'Inter', sans-serif" }}>{tag}</span>
                ))}
              </div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>{proj.title}</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '24px', fontFamily: "'Inter', sans-serif" }}>{proj.description}</p>
              <div style={{ display: 'flex', gap: '12px' }}>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '9px 18px', borderRadius: '10px', fontSize: '0.8rem', fontWeight: 600, border: 'none', cursor: 'pointer', background: `${proj.color}14`, border: `1px solid ${proj.color}28`, color: proj.color, fontFamily: "'Inter', sans-serif" }}>
                  <ExternalLink size={13} />Live Demo
                </motion.button>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '9px 18px', borderRadius: '10px', fontSize: '0.8rem', fontWeight: 600, border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer', background: 'rgba(255,255,255,0.05)', color: '#94a3b8', fontFamily: "'Inter', sans-serif" }}>
                  <GitBranch size={13} />GitHub
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <style>{`@media (max-width: 768px) { #projects { padding: 70px 24px !important; } }`}</style>
    </section>
  );
};

export default Projects;
