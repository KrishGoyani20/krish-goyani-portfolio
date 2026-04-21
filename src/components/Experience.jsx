import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="section-reveal glass">
      <h2>Work Experience</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="card">
            <h3>Sridix Technology</h3>
            <p style={{ color: '#38bdf8', marginBottom: '5px', fontWeight: 600 }}>React Native Developer | Surat, GJ</p>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '15px' }}>March 2025 - Present (On Site)</p>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Passionate React Native developer crafting high-performance, cross-platform mobile applications with a strong focus on clean UI/UX and scalability.
              </p>
              <p>
                Experienced in building robust mobile architectures, integrating REST APIs, third-party services, and real-time features to enhance functionality and user experience.
              </p>
              <p>
                I follow best development practices, write clean and maintainable code, and enjoy solving complex technical problems in fast-paced environments.
              </p>
              <p>
                Comfortable working in agile and remote teams, consistently delivering high-quality results within deadlines while continuously improving app performance.
              </p>
              <p>
                Always eager to learn modern technologies and stay updated with the latest trends in mobile development.
              </p>
            </div>
          </div>
        </div>
        <div className="timeline-item">
          <div className="card">
            <h3>Sebzy Enterprise</h3>
            <p style={{ color: '#38bdf8', marginBottom: '5px', fontWeight: 600 }}>React Native Developer Intern | Remote</p>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '15px' }}>Jun 2025 - August 2025 (2 Months)</p>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Spearheaded remote mobile app development during my internship, driving scalable React Native architecture and implementing advanced features while collaborating across distributed teams.
              </p>
              <p>
                Contributed to the full development lifecycle, from concept and design to testing and deployment, ensuring high code quality and smooth user experiences.
              </p>
              <p>
                This foundational experience strengthened my ability to independently troubleshoot critical bugs and deliver reliable, production-ready features on tight schedules.
              </p>
            </div>
            <div style={{ marginTop: '20px' }}>
              <p style={{ fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '10px', fontWeight: 600 }}>🏆 Internship Certificate</p>
              <a href="/SebzyEnterpriseCertificate.jpg" target="_blank" rel="noreferrer" className="cert-link">
                <img 
                  src="/SebzyEnterpriseCertificate.jpg" 
                  alt="Sebzy Enterprise Internship Certificate"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1589330694653-efa648338b6b?auto=format&fit=crop&q=80&w=300'; }}
                  title="Click to view full certificate"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
