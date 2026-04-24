import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Link2, Globe, MapPin, Send, MessageSquare } from 'lucide-react';

const socials = [
  { icon: Mail, label: 'Email', value: 'krishgoyani13@gmail.com', href: 'mailto:krishgoyani13@gmail.com', color: '#38bdf8' },
  { icon: Link2, label: 'LinkedIn', value: 'linkedin.com/in/krishgoyani', href: 'https://www.linkedin.com/in/krishgoyani', color: '#818cf8' },
  { icon: MapPin, label: 'Location', value: 'Surat, Gujarat, India', href: '#', color: '#22d3ee' },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:krishgoyani13@gmail.com?subject=Portfolio Contact from ${form.name}&body=${form.message}%0A%0AFrom: ${form.email}`;
  };

  return (
    <section id="contact" style={{ padding: '100px 80px', maxWidth: '1200px', margin: '0 auto' }}>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '60px', textAlign: 'center' }}>
        <p style={{ color: '#38bdf8', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px', fontFamily: "'Inter', sans-serif" }}>Get In Touch</p>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>Let's Connect</h2>
        <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, #38bdf8, #818cf8)', borderRadius: '2px', margin: '0 auto', boxShadow: '0 0 10px rgba(56,189,248,0.5)' }} />
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
        {/* Left */}
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>Let's build something epic ✨</h3>
          <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: '40px', fontSize: '0.97rem', fontFamily: "'Inter', sans-serif" }}>
            Looking for a React Native developer to bring your vision to life? Whether it's a project discussion,
            a job opportunity, or just want to say hi — my inbox is always open.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
            {socials.map((s, i) => (
              <motion.a key={i} href={s.href} target={s.href !== '#' ? '_blank' : undefined} rel="noreferrer"
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                whileHover={{ x: 8 }}
                style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '18px 22px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '14px', textDecoration: 'none', transition: 'border-color 0.3s' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: `${s.color}14`, border: `1px solid ${s.color}28` }}>
                  <s.icon size={16} style={{ color: s.color }} />
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '2px', fontFamily: "'Inter', sans-serif" }}>{s.label}</p>
                  <p style={{ color: '#e2e8f0', fontSize: '0.9rem', fontWeight: 500, fontFamily: "'Inter', sans-serif" }}>{s.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.a href="https://wa.me/917698699316" target="_blank" rel="noreferrer"
            whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(56,189,248,0.4)' }} whileTap={{ scale: 0.97 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '14px 32px', borderRadius: '50px', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', fontFamily: "'Inter', sans-serif", background: 'linear-gradient(135deg, #38bdf8, #818cf8)', color: '#030712' }}>
            <MessageSquare size={17} />Chat on WhatsApp
          </motion.a>
        </motion.div>

        {/* Right — Form */}
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <form onSubmit={handleSubmit} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', padding: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.85rem', marginBottom: '8px', fontFamily: "'Inter', sans-serif" }}>Your Name</label>
              <input name="name" value={form.name} onChange={handleChange} placeholder="Krish Goyani" required className="neon-input" />
            </div>
            <div>
              <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.85rem', marginBottom: '8px', fontFamily: "'Inter', sans-serif" }}>Email Address</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="hello@example.com" required className="neon-input" />
            </div>
            <div>
              <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.85rem', marginBottom: '8px', fontFamily: "'Inter', sans-serif" }}>Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project..." required rows={5} className="neon-input" style={{ resize: 'none' }} />
            </div>
            <motion.button type="submit"
              whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(56,189,248,0.4)' }} whileTap={{ scale: 0.97 }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '14px', borderRadius: '12px', fontWeight: 700, fontSize: '0.95rem', border: 'none', cursor: 'pointer', fontFamily: "'Inter', sans-serif", background: 'linear-gradient(135deg, #38bdf8, #818cf8)', color: '#030712', marginTop: '4px' }}>
              <Send size={16} />Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
      <style>{`@media (max-width: 768px) { #contact { padding: 70px 24px !important; } #contact > div:last-child { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
};

export default Contact;
