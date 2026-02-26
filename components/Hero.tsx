import React, { useState, useEffect, useRef } from 'react';
import { SOCIAL_LINKS } from '../constants';
import { translations } from '../lib/i18n';
import type { Language } from '../App';

interface HeroProps {
    language: Language;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.disconnect();
    };
  }, []);

  const t = translations[language].hero;

  return (
    <section ref={sectionRef} className="text-center py-20 md:py-28">
      <div className="relative z-10">
        <img
          src="https://avatars.githubusercontent.com/u/74388155?v=4"
          alt="Jesús Cordero Ávila"
          className={`w-32 h-32 rounded-full mx-auto mb-6 reveal ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '0ms' }}
        />
                <h1 
          className={`text-4xl md:text-6xl font-black text-text-primary-light dark:text-text-primary leading-tight reveal ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '100ms' }}
        >
          Jesús Cordero Ávila
        </h1>
                <p 
          className={`mt-4 text-xl md:text-2xl text-accent-light dark:text-accent font-medium reveal ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '200ms' }}
        >
          {t.subtitle}
        </p>
                <p 
          className={`mt-6 max-w-2xl mx-auto text-lg text-text-secondary-light dark:text-text-secondary reveal ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '300ms' }}
        >
          {t.description}
        </p>
        <div 
          className={`mt-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 reveal ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '400ms' }}
        >
                        <a
              href="#projects"
                            className="bg-accent-light dark:bg-accent text-white dark:text-black font-bold py-3 px-8 rounded-lg hover:bg-sky-600 dark:hover:bg-gray-300 transition-all transform hover:scale-105 w-full sm:w-auto"
            >
              {t.viewWork}
            </a>
                        <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary-light dark:bg-secondary text-text-primary-light dark:text-text-primary font-bold py-3 px-8 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all transform hover:scale-105 w-full sm:w-auto"
            >
              {t.connect}
            </a>
          </div>
      </div>
    </section>
  );
};

export default Hero;