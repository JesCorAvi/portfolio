import React, { useState, useEffect, useRef } from 'react';
import { SOCIAL_LINKS } from '../constants';
import { GitHubIcon } from './icons/GitHubIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { ItchIoIcon } from './icons/ItchIoIcon';

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });

    const currentRef = footerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if(currentRef) observer.disconnect();
    };
  }, []);

  return (
        <footer ref={footerRef} className={`bg-slate-100 dark:bg-secondary border-t border-slate-200 dark:border-slate-800 reveal ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
                <p className="text-text-secondary-light dark:text-text-secondary text-sm mb-4 sm:mb-0">
          &copy; {new Date().getFullYear()} Jesús Cordero Ávila. All rights reserved.
        </p>
        <div className="flex items-center space-x-6">
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
      </div>
    </footer>
  );
};

export default Footer;