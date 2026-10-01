import React, { useState, useEffect, useRef } from 'react';
import { SKILL_CATEGORIES } from '../constants';
import { translations } from '../lib/i18n';
import type { Language } from '../App';

interface AboutSectionProps { language: Language; }

const AboutSection: React.FC<AboutSectionProps> = ({ language }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); }
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  
  const t = translations[language].about;

  return (
    <section id="about" className="py-24 relative">
      <div ref={sectionRef} className="max-w-6xl mx-auto px-6">
        
        <div className={`text-center mb-16 reveal ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">{t.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* COLUMNA IZQUIERDA: Aptitudes (Skills) */}
          <div className="lg:col-span-5 space-y-8">
            <div className={`reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '100ms' }}>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                {t.skillsTitle}
              </h3>
              <div className="space-y-4">
                {SKILL_CATEGORIES.map((category, idx) => (
                  <div key={idx} className="glass-panel p-6 rounded-2xl group hover:border-blue-500/30 transition-colors">
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                      {t[category.titleKey as keyof typeof t]}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium px-3 py-1.5 rounded-md border border-slate-200 dark:border-slate-700">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: Timeline Cronológico */}
          <div className="lg:col-span-7">
            <div className={`reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
                {t.trajectorySectionTitle}
              </h3>
              
              <div className="relative border-l border-slate-200 dark:border-slate-800 ml-3 space-y-10 pb-4">
                
                {/* 1. Especialización (Sept 2025 - Jun 2026) */}
                <div className="relative pl-8 group">
                  <div className="absolute w-3 h-3 bg-slate-300 dark:bg-slate-600 rounded-full -left-[6.5px] top-1.5 group-hover:bg-cyan-400 transition-colors duration-300"></div>
                  <div className="p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 block">{t.edu1Date}</span>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{t.edu1Title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{t.edu1School}</p>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                      {t.edu1Desc}
                    </p>
                  </div>
                </div>

                {/* 2. Experiencia Profesional ControlNet (Mar 2024 - Jun 2024) */}
                <div className="relative pl-8 group">
                  <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[8.5px] top-1 shadow-[0_0_10px_rgba(59,130,246,0.6)] group-hover:scale-125 transition-transform duration-300"></div>
                  <div className="glass-panel p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2 block">{t.trajectoryDate}</span>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{t.trajectorySubtitle}</h4>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">{t.trajectoryCompany}</p>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                      {t.trajectoryDesc}
                    </p>
                  </div>
                </div>

                {/* 3. Ciclo Superior DAW (Sept 2021 - Jun 2024) */}
                <div className="relative pl-8 group">
                  <div className="absolute w-3 h-3 bg-slate-300 dark:bg-slate-600 rounded-full -left-[6.5px] top-1.5 group-hover:bg-cyan-400 transition-colors duration-300"></div>
                  <div className="p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 block">{t.edu2Date}</span>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{t.edu2Title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{t.edu2School}</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;