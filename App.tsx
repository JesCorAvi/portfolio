import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export type Language = 'en' | 'es';

const getInitialLanguage = (): Language => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedLang = window.localStorage.getItem('language');
    if (storedLang === 'en' || storedLang === 'es') {
      return storedLang as Language;
    }
  }

  if (typeof navigator !== 'undefined') {
    const userLanguages = navigator.languages || [navigator.language || (navigator as any).userLanguage || ''];
    for (const lang of userLanguages) {
      if (!lang) continue;
      const lowerLang = lang.toLowerCase();
      if (lowerLang.startsWith('es')) return 'es';
      if (lowerLang.startsWith('en')) return 'en';
    }
  }

  return 'en';
};

export type Theme = 'light' | 'dark';

const getInitialTheme = (): Theme => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('theme');
    if (typeof storedPrefs === 'string') {
      return storedPrefs as Theme;
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if (userMedia.matches) {
      return 'dark';
    }
  }
  return 'light';
};

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage());
  const [theme, setTheme] = useState<Theme>(getInitialTheme());
  
  // Nuevo estado para controlar la animación
  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleLanguage = () => {
    // Si ya está en medio de una animación, ignoramos el clic para evitar parpadeos
    if (isTransitioning) return;
    
    // 1. Iniciamos el desvanecimiento (fade out)
    setIsTransitioning(true);
    
    // 2. Esperamos a que la opacidad baje antes de cambiar el texto
    setTimeout(() => {
      setLanguage(prevLang => prevLang === 'en' ? 'es' : 'en');
      
      // 3. Volvemos a mostrar el contenido (fade in)
      setIsTransitioning(false);
    }, 300); // 300ms coincide con la clase duration-300 de Tailwind
  };

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'light' ? 'dark' : 'light');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="bg-primary-light dark:bg-primary text-text-primary-light dark:text-text-primary font-sans min-h-screen flex flex-col">
      <Header language={language} toggleLanguage={toggleLanguage} theme={theme} toggleTheme={toggleTheme} />
      
      {/* Contenedor que aplica la transición de opacidad */}
      <div 
        className={`flex-grow transition-opacity duration-300 ease-in-out ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <main className="max-w-5xl mx-auto px-6 py-8">
          <Hero language={language} />
          <AboutSection language={language} />
          <ProjectsSection language={language} />
          <ContactSection language={language} />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;