import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export type Language = 'en' | 'es';

const getInitialLanguage = (): Language => {
    const browserLang = navigator.language || (navigator as { userLanguage?: string }).userLanguage;
  return browserLang.startsWith('es') ? 'es' : 'en';
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

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'en' ? 'es' : 'en');
  };

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'light' ? 'dark' : 'light');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
            <div className="bg-primary-light dark:bg-primary text-text-primary-light dark:text-text-primary font-sans min-h-screen">
            <Header language={language} toggleLanguage={toggleLanguage} theme={theme} toggleTheme={toggleTheme} />
      <main className="max-w-5xl mx-auto px-6 py-8">
        <Hero language={language} />
        <AboutSection language={language} />
        <ProjectsSection language={language} />
        <ContactSection language={language} />
      </main>
      <Footer />
    </div>
  );
};

export default App;