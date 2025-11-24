// src/components/About.jsx
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './About.css';

const skills = [
  "React", "JavaScript (ES6+)", "Node.js", "Python", 
  "PHP", "MySQL", "MongoDB", "Git", "HTML/CSS"
];

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-bio">
          <h2 className="section-title">{t.about.title}</h2>
          {/* Usamos dangerouslySetInnerHTML solo si necesitamos negritas en el texto traducido, 
              o simplemente renderizamos texto plano */}
          <p className="bio-text">{t.about.bio1.replace(/\*\*/g, '')}</p> 
          <p className="bio-text">{t.about.bio2}</p>

          <div className="skills-container">
            <h3 className="subsection-title">{t.about.techTitle}</h3>
            <div className="skills-grid">
              {skills.map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="about-experience">
          <h3 className="subsection-title">{t.about.expTitle}</h3>
          <div className="timeline">
            {t.about.experience.map((exp, index) => (
              <div key={index} className="timeline-item">
                <span className="timeline-period">{exp.period}</span>
                <h4 className="timeline-role">{exp.role}</h4>
                <h5 className="timeline-company">{exp.company}</h5>
                <p className="timeline-desc">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;