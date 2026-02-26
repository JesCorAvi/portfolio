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
      <div ref={sectionRef} className="max-w-3xl mx-auto text-center px-4">
                <p className={`text-lg text-text-secondary-light dark:text-text-secondary mb-2 whitespace-pre-wrap reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '100ms' }}>
          {t.description}
        </p>
                <p className={`text-lg text-text-secondary-light dark:text-text-secondary mb-8 reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
          {t.skillsIntro}
        </p>
        <div className={`flex flex-wrap justify-center gap-3 reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '300ms' }}>
          {SKILLS.map((skill, index) => (
                        <div key={index} className="bg-slate-100 dark:bg-slate-800 text-text-secondary-light dark:text-text-secondary font-medium px-4 py-2 rounded-lg text-sm">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;