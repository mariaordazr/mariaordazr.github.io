// // src/components/Contact.jsx
// import React from 'react';
// import { useLanguage } from '../context/LanguageContext';
// import './Contact.css';

// const Contact = () => {
//   const { t } = useLanguage();

//   return (
//     <section id="contact" className="contact-section">
//       <div className="contact-content">
//         <h2 className="section-title">{t.contact.title}</h2>
//         <p className="contact-text">
//           {t.contact.text}
//         </p>
        
//         <a href="mailto:contact@mariaordaz.dev" className="email-button">
//           {t.contact.button}
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Contact.css';

const Contact = () => {
  const { t } = useLanguage();
  
  // Estado para mostrar/ocultar el formulario
  const [showForm, setShowForm] = useState(false);
  
  // Estado para guardar los datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Actualiza el estado cuando el usuario escribe
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construimos el enlace mailto con los datos del formulario
    const subject = encodeURIComponent(`Nuevo mensaje de portafolio: ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\nResponder a: ${formData.email}`);
    
    // Redirige a la aplicación de correo predeterminada
    window.location.href = `mailto:contact@mariaordaz.dev?subject=${subject}&body=${body}`;
    
    // Opcional: Ocultar el formulario después de "enviar"
    setShowForm(false);
    setFormData({ name: '', email: '', message: '' }); // Limpiar campos
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <h2 className="section-title">{t.contact.title}</h2>
        <p className="contact-text">
          {t.contact.text}
        </p>
        
        {/* Renderizado condicional: Botón o Formulario */}
        {!showForm ? (
          <button onClick={() => setShowForm(true)} className="email-button">
            {t.contact.button}
          </button>
        ) : (
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              
              <div className="form-group">
                <label htmlFor="name">{t.contact.nameLabel || 'Nombre'}</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">{t.contact.emailLabel || 'Correo'}</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">{t.contact.messageLabel || 'Mensaje'}</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required
                ></textarea>
              </div>

              <div className="form-actions">
                <button 
                  type="button" 
                  onClick={() => setShowForm(false)} 
                  className="cancel-button"
                >
                  {t.contact.cancelButton || 'Cancelar'}
                </button>
                <button type="submit" className="submit-button">
                  {t.contact.sendButton || 'Enviar'}
                </button>
              </div>

            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;