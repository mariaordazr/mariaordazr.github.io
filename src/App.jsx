// App.jsx
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Work from './components/Work'; 

// Asegúrate de tener una foto en src/assets/tu-foto.png
// import heroImage from './assets/tu-foto.png';

function App() {
  return (
    <div className="app-container">
      <Header/>
      <main className="hero-section">
        <div className="hero-content"> {/* Nuevo contenedor flex */}
          <div className="hero-text-container">
             <h1 className="hero-text">
              <span className="hero-line">Hi. I'm Maria Ordaz.<br/>A Software Developer.</span>
            </h1>
            <p className="hero-subtitle">
              Software Engineer specializing in modern software development. 
              I focus on writing clean, scalable code to solve real-world problems and build high-quality digital products.
            </p>
          </div>
          
          <div className="hero-image-container">
             {/* Aquí va tu inspiración tipo Sean Halpin (Avatar/Foto) */}
             {/* <img src={heroImage} alt="Maria Ordaz" className="hero-img" /> */}
          </div>
        </div>
      </main>
      <Work/>
      <Footer/>
    </div>
  );
}

export default App;