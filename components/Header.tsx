import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { GitHubIcon } from './icons/GitHubIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { ItchIoIcon } from './icons/ItchIoIcon';
import ThemeSwitcher from './ThemeSwitcher';
import type { Language, Theme } from '../App';

interface HeaderProps {
    language: Language;
    toggleLanguage: () => void;
    theme: Theme;
    toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ language, toggleLanguage, theme, toggleTheme }) => {
  return (
        <header className="bg-primary-light/80 dark:bg-primary/80 backdrop-blur-lg sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 opacity-0 animate-fade-in-down">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="text-lg font-bold text-text-primary-light dark:text-text-primary hover:text-accent-light dark:hover:text-accent transition-colors">
          Jesús Cordero Ávila
        </a>
                <div className="flex items-center space-x-4">
          <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
          <div className="w-px h-6 bg-slate-300 dark:bg-slate-700"></div>
                    <button 
            onClick={toggleLanguage} 
            className="text-sm font-bold text-text-secondary-light dark:text-text-secondary hover:text-accent-light dark:hover:text-accent transition-colors uppercase"
            aria-label="Change language"
          >
            {language === 'en' ? 'ES' : 'EN'}
          </button>
                    <div className="w-px h-6 bg-slate-300 dark:bg-slate-700"></div>
                    <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-text-secondary-light dark:text-text-secondary hover:text-accent-light dark:hover:text-accent transition-colors">
            <GitHubIcon className="w-6 h-6" />
          </a>
                    <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-text-secondary-light dark:text-text-secondary hover:text-accent-light dark:hover:text-accent transition-colors">
            <LinkedInIcon className="w-6 h-6" />
          </a>
                    <a href={SOCIAL_LINKS.itchio} target="_blank" rel="noopener noreferrer" aria-label="itch.io" className="text-text-secondary-light dark:text-text-secondary hover:text-accent-light dark:hover:text-accent transition-colors">
            <ItchIoIcon className="w-6 h-6" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;