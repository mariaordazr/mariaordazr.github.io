import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <h2 className="section-title">Let's work together</h2>
        <p className="contact-text">
          Actualmente estoy disponible para nuevos proyectos. Si tienes una idea 
          o necesitas ayuda con desarrollo web, ¡me encantaría escucharte!
        </p>
        
        <a href="mailto:Mariahordazr@gmail.com" className="email-button">
          Say Hello 👋
        </a>
      </div>
    </section>
  );
};

export default Contact;