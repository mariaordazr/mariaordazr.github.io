// src/components/Contact.jsx
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Contact.css';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <h2 className="section-title">{t.contact.title}</h2>
        <p className="contact-text">
          {t.contact.text}
        </p>
        
        <a href="mailto:Mariahordazr@gmail.com" className="email-button">
          {t.contact.button}
        </a>
      </div>
    </section>
  );
};

export default Contact;