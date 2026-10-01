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
      if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); }
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const t = translations[language].hero;

  return (
    <section ref={sectionRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-40 dark:opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 dark:bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className={`reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0ms' }}>
          <div className="inline-block p-1 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 mb-8">
            <img
              src="https://avatars.githubusercontent.com/u/74388155?v=4"
              alt="Jesús Cordero Ávila"
              className="w-32 h-32 rounded-full border-4 border-white dark:border-slate-950 object-cover"
            />
          </div>
        </div>
        
        <h1 className={`text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4 reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '100ms' }}>
          Jesús Cordero <br className="md:hidden" /> Ávila
        </h1>
        
        <h2 className={`text-2xl md:text-4xl font-bold text-gradient mb-6 reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
          {t.subtitle}
        </h2>
        
        <p className={`text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '300ms' }}>
          {t.description}
        </p>
        
        <div className={`flex flex-col sm:flex-row justify-center items-center gap-4 reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '400ms' }}>
          <a href="#projects" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold py-3 px-8 rounded-xl transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
            {t.viewWork}
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 font-semibold py-3 px-8 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all transform hover:scale-105">
            {t.connect}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;