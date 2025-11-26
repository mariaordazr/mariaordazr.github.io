// src/components/Header.jsx
import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importamos iconos
import './Header.css';

const Header = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Nuevo estado para el menú
  const { t, toggleLanguage } = useLanguage();

  // Función para cerrar el menú al hacer clic en un enlace (UX móvil)
  const closeMenu = () => setIsMenuOpen(false);

  // Efecto de scroll (ya lo tenías, lo mantenemos igual)
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header">
      <nav className="nav">
        {/* Icono de Hamburguesa (Solo visible en móvil/tablet) */}
        <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Contenedor de enlaces y botón */}
        {/* Agregamos la clase 'active' si el menú está abierto */}
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a 
                href="#home" 
                onClick={() => { setActiveLink('home'); closeMenu(); }} 
                className={activeLink === 'home' ? 'active' : ''}
              >
                {t.header.home}
              </a>
            </li>
            <li className="header__nav-item">
              <a 
                href="#work" 
                onClick={() => { setActiveLink('work'); closeMenu(); }} 
                className={activeLink === 'work' ? 'active' : ''}
              >
                {t.header.work}
              </a>
            </li>
            <li className="header__nav-item">
              <a 
                href="#about" 
                onClick={() => { setActiveLink('about'); closeMenu(); }} 
                className={activeLink === 'about' ? 'active' : ''}
              >
                {t.header.about}
              </a>
            </li>
            <li className="header__nav-item">
              <a 
                href="#contact" 
                onClick={() => { setActiveLink('contact'); closeMenu(); }} 
                className={activeLink === 'contact' ? 'active' : ''}
              >
                {t.header.contact}
              </a>
            </li>
          </ul>
          
          {/* Botón de Idioma (Dentro del menú para que también se oculte en móvil) */}
          <button onClick={() => { toggleLanguage(); closeMenu(); }} className="lang-btn">
            {t.header.btnLang}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;