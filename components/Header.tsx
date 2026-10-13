import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../constants';
import { GitHubIcon } from './icons/GitHubIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { ItchIoIcon } from './icons/ItchIoIcon';
import ThemeSwitcher from './ThemeSwitcher';
import { translations } from '../lib/i18n';
import { Menu, X } from 'lucide-react';
import type { Language, Theme } from '../App';

interface HeaderProps {
  language: Language;
  toggleLanguage: () => void;
  theme: Theme;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ language, toggleLanguage, theme, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language].nav;

  const navItems = [
    { label: t.about, href: '#about' },
    { label: t.projects, href: '#projects' },
    { label: t.contact, href: '#contact' },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl sticky top-0 z-50 border-b border-slate-200/80 dark:border-slate-800/80">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex justify-between items-center">
        {/* Marca / Nombre */}
        <a
          href="#"
          className="text-base sm:text-lg font-extrabold tracking-tight text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"></span>
          <span>Jesús Cordero Ávila</span>
        </a>

        {/* Navegación Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors py-1"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="w-px h-5 bg-slate-200 dark:bg-slate-800"></div>

          {/* Controles y Redes */}
          <div className="flex items-center space-x-2">
            <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1.5 rounded-lg text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-slate-200/60 dark:hover:bg-slate-800/60 transition-colors uppercase tracking-wider"
              aria-label="Change language"
            >
              {language === 'en' ? 'ES' : 'EN'}
            </button>

            <div className="w-px h-5 bg-slate-200 dark:bg-slate-800 mx-1"></div>

            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/60 transition-colors"
            >
              <GitHubIcon className="w-5 h-5" />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200/60 dark:hover:bg-slate-800/60 transition-colors"
            >
              <LinkedInIcon className="w-5 h-5" />
            </a>
            <a
              href={SOCIAL_LINKS.itchio}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="itch.io"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-rose-500 dark:hover:text-rose-400 hover:bg-slate-200/60 dark:hover:bg-slate-800/60 transition-colors"
            >
              <ItchIoIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Controles Móvil */}
        <div className="flex md:hidden items-center space-x-1">
          <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
          <button
            onClick={toggleLanguage}
            className="px-2 py-1.5 rounded-lg text-xs font-bold text-slate-700 dark:text-slate-200 uppercase"
            aria-label="Change language"
          >
            {language === 'en' ? 'ES' : 'EN'}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800/60 transition-colors"
            aria-label={mobileMenuOpen ? t.closeMenu : t.openMenu}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Menú desplegable Móvil */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl px-6 py-5 space-y-4">
          <ul className="flex flex-col space-y-3 text-base font-semibold text-slate-800 dark:text-slate-200">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="block py-1.5 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center space-x-5">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <GitHubIcon className="w-6 h-6" />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <LinkedInIcon className="w-6 h-6" />
            </a>
            <a
              href={SOCIAL_LINKS.itchio}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="itch.io"
              className="text-slate-600 dark:text-slate-400 hover:text-rose-500 transition-colors"
            >
              <ItchIoIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;