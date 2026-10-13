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
      return storedLang;
    }
  }

  if (typeof navigator !== 'undefined') {
    const userLanguages = navigator.languages || [navigator.language || ''];
    for (const lang of userLanguages) {
      if (!lang) continue;
      const lowerLang = lang.toLowerCase();
      if (lowerLang.startsWith('es')) return 'es';
      if (lowerLang.startsWith('en')) return 'en';
    }
  }

  return 'es';
};

export type Theme = 'light' | 'dark';

const getInitialTheme = (): Theme => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('theme');
    if (storedPrefs === 'light' || storedPrefs === 'dark') {
      return storedPrefs;
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if (userMedia.matches) {
      return 'dark';
    }
  }
  return 'dark';
};

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage());
  const [theme, setTheme] = useState<Theme>(getInitialTheme());
  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleLanguage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    setTimeout(() => {
      setLanguage((prevLang) => (prevLang === 'en' ? 'es' : 'en'));
      setIsTransitioning(false);
    }, 220);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'light' ? 'dark' : 'light');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans min-h-screen flex flex-col selection:bg-blue-500 selection:text-white transition-colors duration-300">
      <Header
        language={language}
        toggleLanguage={toggleLanguage}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <div
        className={`flex-grow flex flex-col transition-opacity duration-200 ease-in-out ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <main className="flex-grow">
          <Hero language={language} />
          <AboutSection language={language} />
          <ProjectsSection language={language} />
          <ContactSection language={language} />
        </main>
        <Footer language={language} />
      </div>
    </div>
  );
};

export default App;