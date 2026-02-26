import React, { useState, useEffect, useRef } from 'react';
import { EMAIL } from '../constants';
import SectionTitle from './SectionTitle';
import { translations } from '../lib/i18n';
import type { Language } from '../App';

interface ContactSectionProps {
    language: Language;
}

const ContactSection: React.FC<ContactSectionProps> = ({ language }) => {
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
  
  const t = translations[language].contact;

  return (
    <section id="contact" className="py-16 md:py-24 text-center">
      <SectionTitle>{t.title}</SectionTitle>
      <div ref={sectionRef}>
                <p className={`max-w-xl mx-auto text-lg text-text-secondary-light dark:text-text-secondary mb-8 reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '100ms' }}>
          {t.description}
        </p>
                <a 
          href={`mailto:${EMAIL}`}
                    className={`inline-block bg-accent-light dark:bg-accent text-white dark:text-black font-bold py-4 px-8 rounded-lg hover:bg-sky-600 dark:hover:bg-gray-300 transition-all transform hover:scale-105 reveal ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '200ms' }}
        >
          {t.button}
        </a>
      </div>
    </section>
  );
};

export default ContactSection;