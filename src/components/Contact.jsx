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
  
  const [showForm, setShowForm] = useState(false);
  const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      // REEMPLAZA ESTE ENLACE CON TU ENDPOINT DE FORMSPREE
      const response = await fetch("https://formspree.io/f/xjgzwzpg", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Limpiar
        
        // Ocultar formulario después de 3 segundos
        setTimeout(() => {
          setShowForm(false);
          setStatus('');
        }, 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <h2 className="section-title">{t.contact.title}</h2>
        <p className="contact-text">
          {t.contact.text}
        </p>
        
        {!showForm ? (
          <button onClick={() => setShowForm(true)} className="email-button">
            {t.contact.button}
          </button>
        ) : (
          <div className="contact-form-container">
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '2rem 0', color: '#043B27' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>¡Mensaje enviado con éxito!</h3>
                <p>Me pondré en contacto contigo muy pronto.</p>
              </div>
            ) : (
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
                    disabled={status === 'sending'}
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
                    disabled={status === 'sending'}
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
                    disabled={status === 'sending'}
                  ></textarea>
                </div>

                {status === 'error' && (
                  <p style={{ color: 'red', fontSize: '0.9rem', marginBottom: '1rem' }}>
                    Hubo un error al enviar el mensaje. Inténtalo de nuevo.
                  </p>
                )}

                <div className="form-actions">
                  <button 
                    type="button" 
                    onClick={() => setShowForm(false)} 
                    className="cancel-button"
                    disabled={status === 'sending'}
                  >
                    {t.contact.cancelButton || 'Cancelar'}
                  </button>
                  <button 
                    type="submit" 
                    className="submit-button"
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? 'Enviando...' : (t.contact.sendButton || 'Enviar')}
                  </button>
                </div>

              </form>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;