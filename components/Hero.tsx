import React, { useState, useEffect, useRef } from 'react';
import { SOCIAL_LINKS } from '../constants';
import { translations } from '../lib/i18n';
import { ArrowRight, Sparkles } from 'lucide-react';
import type { Language } from '../App';

interface HeroProps {
  language: Language;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const t = translations[language].hero;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden py-16 md:py-24"
    >
      {/* Fondo de cuadrícula y luces ambientales */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 dark:opacity-25 pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[720px] h-[500px] md:h-[720px] bg-gradient-to-tr from-blue-600/20 to-cyan-400/15 dark:from-blue-600/15 dark:to-cyan-500/10 rounded-full blur-[110px] pointer-events-none"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Avatar + Badge de estado */}
        <div
          className={`flex flex-col items-center reveal ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '0ms' }}
        >
          <div className="relative inline-block p-1 rounded-full bg-gradient-to-tr from-blue-600 via-sky-500 to-cyan-400 mb-6 shadow-xl shadow-blue-500/15">
            <img
              src="https://avatars.githubusercontent.com/u/74388155?v=4"
              alt="Jesús Cordero Ávila"
              width={128}
              height={128}
              fetchPriority="high"
              className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-white dark:border-slate-950 object-cover"
            />
            <span
              className="absolute bottom-2 right-2 w-4 h-4 bg-emerald-500 border-2 border-white dark:border-slate-950 rounded-full"
              title={t.badge}
            ></span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 dark:bg-blue-400/10 text-blue-700 dark:text-cyan-300 border border-blue-500/20 dark:border-cyan-400/20 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
        </div>

        {/* Título Principal */}
        <h1
          className={`text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-4 reveal ${
            isVisible ? 'visible' : ''
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          Jesús Cordero Ávila
        </h1>

        {/* Subtítulo con gradiente */}
        <h2
          className={`text-xl sm:text-2xl md:text-4xl font-bold text-gradient mb-6 reveal ${
            isVisible ? 'visible' : ''
          }`}
          style={{ transitionDelay: '180ms' }}
        >
          {t.subtitle}
        </h2>

        {/* Propuesta de valor */}
        <p
          className={`text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed reveal ${
            isVisible ? 'visible' : ''
          }`}
          style={{ transitionDelay: '260ms' }}
        >
          {t.description}
        </p>

        {/* Botones CTA */}
        <div
          className={`flex flex-col sm:flex-row justify-center items-center gap-4 reveal ${
            isVisible ? 'visible' : ''
          }`}
          style={{ transitionDelay: '340ms' }}
        >
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold py-3.5 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-blue-500/25"
          >
            <span>{t.viewWork}</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 font-semibold py-3.5 px-8 rounded-xl hover:border-blue-500/50 dark:hover:border-cyan-400/50 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all duration-300"
          >
            {t.contactBtn}
          </a>

          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 font-semibold py-3.5 px-5 rounded-xl transition-colors"
          >
            {t.connect}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;