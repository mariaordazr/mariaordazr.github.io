// src/App.jsx
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import { LanguageProvider, useLanguage } from './context/LanguageContext'; // Importar Contexto

// Componente interno para poder usar el hook useLanguage
const MainContent = () => {
  const { t } = useLanguage(); // Obtenemos las traducciones

  return (
    <div className="app-container">
      <Header />
      <main className="hero-section" id="home"> {/* ID Home agregado */}
        <div className="hero-content">
          <div className="hero-text-container">
            <h1 className="hero-text">
              <span className="hero-line">{t.hero.greeting}<br/>{t.hero.role}</span>
            </h1>
            <p className="hero-subtitle">
              {t.hero.subtitle}
            </p>
          </div>
          <div className="hero-image-container">
            {/* Imagen opcional */}
          </div>
        </div>
      </main>
      <Work />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}

export default App;