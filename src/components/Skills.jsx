import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  { title: 'Languages', icon: '💻', color: '#38bdf8', skills: [{ name: 'JavaScript', level: 70 }, { name: 'TypeScript', level: 65 }, { name: 'HTML/CSS', level: 90 }, { name: 'C / C++', level: 60 }] },
  { title: 'Frameworks', icon: '⚛️', color: '#818cf8', skills: [{ name: 'React Native', level: 100 }, { name: 'Redux', level: 80 }, { name: 'Express.js', level: 60 }, { name: 'Axios', level: 85 }] },
  { title: 'Databases', icon: '🗄️', color: '#22d3ee', skills: [{ name: 'Firebase', level: 70 }, { name: 'SQLite', level: 80 }, { name: 'MongoDB', level: 65 }] },
  { title: 'Tools', icon: '🛠️', color: '#a78bfa', skills: [{ name: 'VS Code', level: 90 }, { name: 'Android Studio', level: 85 }, { name: 'GitHub', level: 80 }, { name: 'Postman', level: 75 }] },
  { title: 'Operating Systems', icon: '🖥️', color: '#34d399', skills: [{ name: 'Windows', level: 90 }, { name: 'Mac OS', level: 80 }, { name: 'Linux', level: 70 }] },
  { title: 'Languages Spoken', icon: '🗣️', color: '#fb923c', skills: [{ name: 'Gujarati', level: 100 }, { name: 'Hindi', level: 100 }, { name: 'English', level: 70 }] },
];

const Skills = () => {
  return (
    <section id="skills" style={{ padding: '100px 80px', maxWidth: '1200px', margin: '0 auto' }}>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '60px', textAlign: 'center' }}>
        <p style={{ color: '#38bdf8', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px', fontFamily: "'Inter', sans-serif" }}>What I Know</p>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>Technical Arsenal</h2>
        <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, #38bdf8, #818cf8)', borderRadius: '2px', margin: '0 auto', boxShadow: '0 0 10px rgba(56,189,248,0.5)' }} />
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
        {skillCategories.map((cat, ci) => (
          <motion.div key={ci}
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: ci * 0.08, duration: 0.6 }}
            whileHover={{ y: -6 }}
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', padding: '32px', transition: 'box-shadow 0.3s, transform 0.3s' }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = `0 20px 60px rgba(0,0,0,0.4), 0 0 30px ${cat.color}18`}
            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '28px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', background: `${cat.color}14`, border: `1px solid ${cat.color}28` }}>
                {cat.icon}
              </div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: '#fff', fontSize: '1.05rem', margin: 0 }}>{cat.title}</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {cat.skills.map((skill, si) => (
                <div key={si}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ color: '#cbd5e1', fontSize: '0.88rem', fontFamily: "'Inter', sans-serif" }}>{skill.name}</span>
                    <span style={{ color: cat.color, fontSize: '0.78rem', fontWeight: 600 }}>{skill.level}%</span>
                  </div>
                  <div style={{ width: '100%', height: '5px', borderRadius: '10px', background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
                    <motion.div
                      initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: si * 0.1 + ci * 0.05, ease: 'easeOut' }}
                      style={{ height: '100%', borderRadius: '10px', background: `linear-gradient(90deg, ${cat.color}, ${cat.color}80)`, boxShadow: `0 0 8px ${cat.color}60` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <style>{`@media (max-width: 768px) { #skills { padding: 70px 24px !important; } }`}</style>
    </section>
  );
};

export default Skills;
