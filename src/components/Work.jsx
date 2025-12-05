// src/components/Work.jsx
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Work.css';

const Work = () => {
  const { t } = useLanguage(); // Accedemos a los datos traducidos

  return (
    <section id="work" className="work-section">
      <h2 className="section-title">{t.work.title}</h2>
      <div className="projects-grid">
        {t.work.projects.map((project) => (
          // <a href={project.link} key={project.id} className="project-card" target="_blank" rel="noopener noreferrer">
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map(tag => <span key={tag}>{tag}</span>)}
              </div>
              <a href={project.link} key={project.id} className="project-link" target="_blank" rel="noopener noreferrer">{project.view}</a>
            </div>
          // </a>
        ))}
      </div>
    </section>
  );
};

export default Work;