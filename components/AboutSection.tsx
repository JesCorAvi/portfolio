import React, { useState, useEffect, useRef } from 'react';
import { SKILLS } from '../constants';
import SectionTitle from './SectionTitle';
import { translations } from '../lib/i18n';
import type { Language } from '../App';

interface AboutSectionProps {
    language: Language;
}

const AboutSection: React.FC<AboutSectionProps> = ({ language }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
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
      if(currentRef) observer.disconnect();
    };
  }, []);
  
  const t = translations[language].about;

  return (
    <section id="about" className="py-16 md:py-24 bg-secondary-light dark:bg-secondary rounded-xl">
      <SectionTitle>{t.title}</SectionTitle>
      
      <div ref={sectionRef} className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
        
        {/* COLUMNA IZQUIERDA: Descripción y Habilidades */}
        <div className={`reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '100ms' }}>
          <h3 className="text-2xl font-bold text-text-primary-light dark:text-text-primary mb-6 border-b border-slate-200 dark:border-slate-700 pb-2">
            {t.profileTitle}
          </h3>
          <p className="text-lg text-text-secondary-light dark:text-text-secondary mb-8 whitespace-pre-wrap leading-relaxed">
            {t.description}
          </p>
          
          <h3 className="text-xl font-bold text-text-primary-light dark:text-text-primary mb-4">
            {t.skillsIntro}
          </h3>
          <div className="flex flex-wrap gap-3">
            {SKILLS.map((skill, index) => (
              <div key={index} className="bg-slate-100 dark:bg-slate-800 text-text-secondary-light dark:text-text-secondary font-medium px-4 py-2 rounded-lg text-sm shadow-sm transition-colors hover:text-accent-light dark:hover:text-accent border border-transparent hover:border-accent-light dark:hover:border-accent">
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* COLUMNA DERECHA: Experiencia y Educación */}
        <div className={`reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
          
          {/* Experiencia */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-text-primary-light dark:text-text-primary mb-6 border-b border-slate-200 dark:border-slate-700 pb-2">
              {t.trajectoryTitle}
            </h3>
            
            <div className="relative border-l-2 border-accent-light dark:border-accent pl-5 ml-2">
              <div className="absolute w-3 h-3 bg-accent-light dark:bg-accent rounded-full -left-[7px] top-1.5 shadow-[0_0_0_3px_rgba(56,189,248,0.2)] dark:shadow-[0_0_0_3px_rgba(14,165,233,0.2)]"></div>
              <h4 className="text-lg font-bold text-text-primary-light dark:text-text-primary">{t.trajectorySubtitle}</h4>
              <p className="text-sm font-semibold text-accent-light dark:text-accent mb-1">{t.trajectoryCompany}</p>
              <p className="text-xs text-text-secondary-light dark:text-text-secondary mb-3">{t.trajectoryDate}</p>
              <p className="text-sm text-text-secondary-light dark:text-text-secondary leading-relaxed">
                {t.trajectoryDesc}
              </p>
            </div>
          </div>

          {/* Educación */}
          <div>
            <h3 className="text-2xl font-bold text-text-primary-light dark:text-text-primary mb-6 border-b border-slate-200 dark:border-slate-700 pb-2">
              {t.educationTitle}
            </h3>
            
            <div className="relative border-l-2 border-accent-light dark:border-accent pl-5 ml-2 space-y-8">
              
              <div>
                <div className="absolute w-3 h-3 bg-accent-light dark:bg-accent rounded-full -left-[7px] mt-1.5 shadow-[0_0_0_3px_rgba(56,189,248,0.2)] dark:shadow-[0_0_0_3px_rgba(14,165,233,0.2)]"></div>
                <h4 className="text-md font-bold text-text-primary-light dark:text-text-primary leading-snug">{t.edu1Title}</h4>
                <p className="text-sm font-semibold text-accent-light dark:text-accent mt-1">{t.edu1School}</p>
                <p className="text-xs text-text-secondary-light dark:text-text-secondary mb-2">{t.edu1Date}</p>
                <p className="text-sm text-text-secondary-light dark:text-text-secondary leading-relaxed">{t.edu1Desc}</p>
              </div>

              <div>
                <div className="absolute w-3 h-3 bg-accent-light dark:bg-accent rounded-full -left-[7px] mt-1.5 shadow-[0_0_0_3px_rgba(56,189,248,0.2)] dark:shadow-[0_0_0_3px_rgba(14,165,233,0.2)]"></div>
                <h4 className="text-md font-bold text-text-primary-light dark:text-text-primary leading-snug">{t.edu2Title}</h4>
                <p className="text-sm font-semibold text-accent-light dark:text-accent mt-1">{t.edu2School}</p>
                <p className="text-xs text-text-secondary-light dark:text-text-secondary">{t.edu2Date}</p>
              </div>
              
              <div className="pt-2">
                <div className="absolute w-3 h-3 bg-slate-300 dark:bg-slate-600 rounded-full -left-[7px] mt-1.5"></div>
                <h4 className="text-sm font-bold text-text-primary-light dark:text-text-primary mb-3">{t.otherTitles}</h4>
                <ul className="list-disc list-inside text-sm text-text-secondary-light dark:text-text-secondary space-y-1.5">
                  <li>{t.certEnglish}</li>
                  <li>{t.license}</li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;