import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-colophon">
        <p>© {new Date().getFullYear()} Maria Ordaz</p>
      </div>
      
      <div className="footer-social">
        <a href="https://github.com/mariaordazr" target="_blank" rel="noopener noreferrer">
          <FaGithub className="social-icon" />
        </a>
        <a href="https://linkedin.com/in/mariaordazr" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" />
        </a>
        <a href="https://wa.me/584249187030" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="social-icon" />
        </a>
        <a href="https://instagram.com/mariaordaz.dev" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon" />
        </a>
      </div>
      
      <div className="footer-links">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;