import React from 'react';

const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "C", percentage: 60 },
      { name: "C++", percentage: 60 },
      { name: "CSS", percentage: 85 },
      { name: "HTML", percentage: 90 },
      { name: "JavaScript", percentage: 70 },
      { name: "TypeScript", percentage: 65 }
    ]
  },
  {
    category: "Libraries & Frameworks",
    skills: [
      { name: "React Native", percentage: 100 },
      { name: "Express Js", percentage: 60 },
      { name: "Redux", percentage: 80 },
      { name: "Firebase", percentage: 70 },
      { name: "Axios", percentage: 85 }
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "Firebase", percentage: 70 },
      { name: "SQLite", percentage: 80 },
      { name: "MongoDB", percentage: 65 }
    ]
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "VS Code", percentage: 90 },
      { name: "Android Studio", percentage: 85 },
      { name: "GitHub", percentage: 80 },
      { name: "Teams", percentage: 90 },
      { name: "Postman", percentage: 75 }
    ]
  },
  {
    category: "Operating Systems",
    skills: [
      { name: "Windows", percentage: 90 },
      { name: "Mac OS", percentage: 80 },
      { name: "Linux", percentage: 70 }
    ]
  },
  {
    category: "Spoken Languages",
    skills: [
      { name: "English", percentage: 70 },
      { name: "Hindi", percentage: 100 },
      { name: "Gujarati", percentage: 100 }
    ]
  }
];

const Skills = () => {
  return (
    <section className="section-reveal glass" id="skills">
      <h2>Technical Arsenal</h2>
      <div id="skills-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
        {skillsData.map((category, idx) => (
          <div key={idx} className="card" style={{ padding: '25px', background: 'rgba(56,189,248,0.03)' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#38bdf8' }}>{category.category}</h3>
            <div className="skills-column">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="skill-box">
                  <div className="skill-name"><span>{skill.name}</span></div>
                  <div className="skill-bar">
                    <span className="skill-per" style={{ width: `${skill.percentage}%` }}></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
