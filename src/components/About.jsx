import React from 'react';
import './About.css';

const skills = [
  "React", "JavaScript (ES6+)", "Node.js", "Python", 
  "PHP", "MySQL", "MongoDB", "Git", "HTML/CSS"
];

const experience = [
  {
    role: "Web Developer",
    company: "Grupo Caroni Computer",
    period: "Sept 2025 - Present",
    desc: "Desarrollo y optimización de soluciones web utilizando PHP, MySQL, HTML y CSS para la gestión interna y presencia digital de la empresa."
  },
  {
    role: "Tesista - Procesamiento de Datos",
    company: "BLC Oil & Gas",
    period: "May 2023 - May 2025",
    desc: "Desarrollo de algoritmos en Python (Pandas, Scikit-learn) para la detección de anomalías en señales de pozos petroleros."
  },
  {
    role: "IT Consultant Support",
    company: "MASISA (TechSolutions)",
    period: "Jun 2022 - Mar 2023",
    desc: "Soporte técnico, mantenimiento de infraestructura y optimización de equipos informáticos."
  }
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Columna Izquierda: Bio y Skills */}
        <div className="about-bio">
          <h2 className="section-title">About Me</h2>
          <p className="bio-text">
            Soy <strong>Ingeniera en Informática</strong> graduada de la UCAB. Me especializo en transformar problemas complejos en interfaces simples y funcionales.
          </p>
          <p className="bio-text">
            Actualmente combino el desarrollo Full Stack (PHP/MySQL) con mi pasión por las tecnologías modernas como React y Python. Siempre estoy buscando optimizar procesos y aprender nuevas herramientas.
          </p>

          <div className="skills-container">
            <h3 className="subsection-title">Tech Stack</h3>
            <div className="skills-grid">
              {skills.map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Columna Derecha: Timeline de Experiencia */}
        <div className="about-experience">
          <h3 className="subsection-title">Experience</h3>
          <div className="timeline">
            {experience.map((exp, index) => (
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