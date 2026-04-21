import React from 'react';

const Education = () => {
  return (
    <section className="section-reveal glass">
      <h2>Education</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="card">
            <h3>Bachelor of Computer Applications</h3>
            <p style={{ color: '#38bdf8', marginBottom: '10px', fontWeight: 600 }}>2023 - 2026</p>
            <p><strong>Saurashtra University</strong><br />Shree Dharmjivan Das B.Ed College, Amreli, Gujarat</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="card">
            <h3>12th Commerce (HSC)</h3>
            <p style={{ color: '#38bdf8', marginBottom: '10px', fontWeight: 600 }}>2021 - 2023</p>
            <p>K.V. Mangukiya School Jothan, Surat, Gujarat</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
