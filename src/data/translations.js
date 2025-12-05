// src/data/translations.js

export const translations = {
  en: {
    header: {
      home: "Home",
      work: "Work",
      about: "About me",
      contact: "Contact",
      btnLang: "ES"
    },
    hero: {
      greeting: "Hi. I'm Maria Ordaz.",
      role: "A Software Developer.",
      subtitle: "Software Engineer specializing in modern software development. I focus on writing clean, scalable code to solve real-world problems and build high-quality digital products."
    },
    work: {
      title: "Selected Work",
      projects: [
        {
          id: 1,
          title: "Oil Well Signal Processing",
          description: "Thesis Project: Developed a Python system using Pandas and Scikit-learn to detect anomalies in oil well signals, improving data accuracy through statistical models.",
          tags: ["Python", "Scikit-learn", "Pandas", "Data Science"],
          link: "#"
        },
        {
          id: 2,
          title: "Corporate Web Platform",
          description: "Full-stack development for Grupo Caroni Computer. Optimized internal management and digital presence using a relational database structure.",
          tags: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
          link: "https://caronicomputer.com"
        },
        
      ]
    },
    about: {
      title: "About me",
      bio1: "I am a **Computer Engineer** graduated from UCAB. I specialize in transforming complex problems into simple and functional interfaces.",
      bio2: "Currently, I combine Full Stack development (PHP/MySQL) with my passion for modern technologies like React and Python. I am always looking to optimize processes and learn new tools.",
      techTitle: "Tech Stack",
      expTitle: "Experience",
      experience: [
        {
          role: "Web Developer",
          company: "Grupo Caroni Computer",
          period: "Sept 2025 - Present",
          desc: "Development and optimization of web solutions using PHP, MySQL, HTML, and CSS for the company's internal management and digital presence."
        },
        {
          role: "Thesis Student - Data Processing",
          company: "BLC Oil & Gas",
          period: "May 2023 - May 2025",
          desc: "Developed algorithms in Python (Pandas, Scikit-learn) for anomaly detection in oil well signals."
        },
        {
          role: "IT Consultant Support",
          company: "MASISA (TechSolutions)",
          period: "Jun 2022 - Mar 2023",
          desc: "Technical support, infrastructure maintenance, and computer equipment optimization."
        }
      ]
    },
    contact: {
      title: "Let's work together",
      text: "I am currently available for new projects. If you have an idea or need help with web development, I'd love to hear from you!",
      button: "Say Hello 👋"
    }
  },
  es: {
    header: {
      home: "Inicio",
      work: "Proyectos",
      about: "Sobre mí",
      contact: "Contacto",
      btnLang: "EN"
    },
    hero: {
      greeting: "Hola. Soy María Ordaz.",
      role: "Desarrolladora de Software.",
      subtitle: "Ingeniera en Informática especializada en desarrollo de software moderno. Me enfoco en escribir código limpio y escalable para resolver problemas reales."
    },
    work: {
      title: "Proyectos Destacados",
      projects: [
        {
          id: 1,
          title: "Procesamiento de Señales Petroleras",
          description: "Tesis de Grado: Desarrollo de sistema en Python (Pandas, Scikit-learn) para detectar anomalías en pozos petroleros, mejorando la precisión de lectura.",
          tags: ["Python", "Scikit-learn", "Pandas", "Ciencia de Datos"],
          link: "#"
        },
        {
          id: 2,
          title: "Plataforma Web Corporativa",
          description: "Desarrollo Full-stack para Grupo Caroni Computer. Optimización de gestión interna y presencia digital usando bases de datos relacionales.",
          tags: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
          link: "https://caronicomputer.com"
        },
      ]
    },
    about: {
      title: "Sobre mí",
      bio1: "Soy **Ingeniera en Informática** graduada de la UCAB. Me especializo en transformar problemas complejos en interfaces simples y funcionales.",
      bio2: "Actualmente combino el desarrollo Full Stack (PHP/MySQL) con mi pasión por tecnologías modernas como React y Python. Siempre busco optimizar procesos.",
      techTitle: "Tecnologías",
      expTitle: "Experiencia",
      experience: [
        {
          role: "Desarrolladora Web",
          company: "Grupo Caroni Computer",
          period: "Sept 2025 - Present",
          desc: "Desarrollo y optimización de soluciones web utilizando PHP, MySQL, HTML y CSS para la gestión interna."
        },
        {
          role: "Tesista - Procesamiento de Datos",
          company: "BLC Oil & Gas",
          period: "May 2023 - May 2025",
          desc: "Desarrollo de algoritmos en Python para la detección de anomalías en señales de pozos petroleros."
        },
        {
          role: "Consultor de Soporte IT",
          company: "MASISA (TechSolutions)",
          period: "Jun 2022 - Mar 2023",
          desc: "Soporte técnico, mantenimiento de infraestructura y optimización de equipos informáticos."
        }
      ]
    },
    contact: {
      title: "Trabajemos juntos",
      text: "Actualmente estoy disponible para nuevos proyectos. Si tienes una idea o necesitas ayuda, ¡me encantaría escucharte!",
      button: "Saludar 👋"
    }
  }
};