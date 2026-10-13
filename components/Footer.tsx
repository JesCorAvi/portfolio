import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { GitHubIcon } from './icons/GitHubIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { ItchIoIcon } from './icons/ItchIoIcon';
import { translations } from '../lib/i18n';
import type { Language } from '../App';

interface FooterProps {
  language: Language;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = translations[language].footer;

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
        <div>
          <p className="text-slate-700 dark:text-slate-300 font-semibold text-sm">
            &copy; {new Date().getFullYear()} Jesús Cordero Ávila. {t.rights}
          </p>
          <p className="text-slate-500 dark:text-slate-500 text-xs mt-1">{t.builtWith}</p>
        </div>

        <div className="flex items-center space-x-5">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <GitHubIcon className="w-5 h-5" />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <LinkedInIcon className="w-5 h-5" />
          </a>
          <a
            href={SOCIAL_LINKS.itchio}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="itch.io"
            className="text-slate-500 dark:text-slate-400 hover:text-rose-500 transition-colors"
          >
            <ItchIoIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;