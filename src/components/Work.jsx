import React from 'react';
import './Work.css';

const projects = [
  {
    id: 1,
    title: "Portfolio V1",
    description: "Mi primer portafolio desarrollado con React.",
    tags: ["React", "CSS", "Vite"],
    link: "#"
  },
  {
    id: 2,
    title: "App de Gestión",
    description: "Sistema para gestión de inventarios.",
    tags: ["Node.js", "MongoDB"],
    link: "#"
  }
  // Agrega más proyectos aquí
];

const Work = () => {
  return (
    <section id="work" className="work-section">
      <h2 className="section-title">Selected Work</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <a href={project.link} key={project.id} className="project-card">
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map(tag => <span key={tag}>{tag}</span>)}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Work;