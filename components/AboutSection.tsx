import React, { useState, useEffect, useRef } from 'react';
import { SKILL_CATEGORIES } from '../constants';
import { translations } from '../lib/i18n';
import SectionTitle from './SectionTitle';
import type { Language } from '../App';
import { BookOpen, Car, Briefcase, GraduationCap, UserCheck } from 'lucide-react';

interface AboutSectionProps {
  language: Language;
}

const AboutSection: React.FC<AboutSectionProps> = ({ language }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
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

  const t = translations[language].about;

  return (
    <section id="about" className="py-20 md:py-28 relative border-t border-slate-200/60 dark:border-slate-900">
      <div ref={sectionRef} className="max-w-6xl mx-auto px-6">
        <div className={`reveal ${isVisible ? 'visible' : ''}`}>
          <SectionTitle subtitle={t.subtitle}>{t.title}</SectionTitle>
        </div>

        {/* Tarjeta Superior: Perfil Profesional (antes oculta) */}
        <div
          className={`glass-panel p-6 sm:p-8 rounded-2xl mb-12 border-l-4 border-l-blue-500 reveal ${
            isVisible ? 'visible' : ''
          }`}
          style={{ transitionDelay: '80ms' }}
        >
          <div className="flex items-center gap-3 mb-3">
            <UserCheck className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{t.profileTitle}</h3>
          </div>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line text-base">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* COLUMNA IZQUIERDA: Stack Tecnológico y Certificaciones */}
          <div className="lg:col-span-5 space-y-6">
            <div
              className={`reveal ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: '150ms' }}
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                {t.skillsTitle}
              </h3>

              <div className="space-y-4">
                {SKILL_CATEGORIES.map((category, idx) => (
                  <div
                    key={idx}
                    className="glass-panel p-6 rounded-2xl hover:border-blue-500/40 dark:hover:border-cyan-400/30 transition-colors"
                  >
                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-3.5">
                      {t[category.titleKey as keyof typeof t]}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200/80 dark:border-slate-700/80 hover:border-blue-500/40 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Panel de Certificaciones y Otros usando i18n */}
                <div className="glass-panel p-6 rounded-2xl hover:border-blue-500/40 transition-colors">
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-4">
                    {t.otherTitles}
                  </h4>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 dark:text-white">
                          {t.certEnglish}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {t.certEnglishIssuer}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200/60 dark:border-cyan-800/60 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
                        <Car className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 dark:text-white">
                          {t.license}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {t.licenseDesc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: Trayectoria Profesional y Académica */}
          <div className="lg:col-span-7">
            <div
              className={`reveal ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: '220ms' }}
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                {t.trajectorySectionTitle}
              </h3>

              <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3.5 space-y-8 pb-2">
                {/* 1. Experiencia Profesional ControlNet (Destacada) */}
                <div className="relative pl-8 group">
                  <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-500 rounded-full -left-[9px] top-1.5 ring-4 ring-blue-500/20 transition-transform duration-300 group-hover:scale-125"></div>
                  <div className="glass-panel p-6 rounded-2xl border-blue-500/30 dark:border-blue-500/30 hover:-translate-y-0.5 transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-wider">
                        <Briefcase className="w-3.5 h-3.5" />
                        {t.trajectoryDate}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                      {t.trajectorySubtitle}
                    </h4>
                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3">
                      {t.trajectoryCompany}
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                      {t.trajectoryDesc}
                    </p>
                  </div>
                </div>

                {/* 2. Especialización en Videojuegos y VR */}
                <div className="relative pl-8 group">
                  <div className="absolute w-3.5 h-3.5 bg-cyan-500 rounded-full -left-[8px] top-1.5 group-hover:scale-125 transition-transform duration-300"></div>
                  <div className="glass-panel p-6 rounded-2xl hover:-translate-y-0.5 transition-all duration-300">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-2">
                      <GraduationCap className="w-3.5 h-3.5" />
                      {t.edu1Date}
                    </span>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                      {t.edu1Title}
                    </h4>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3">
                      {t.edu1School}
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                      {t.edu1Desc}
                    </p>
                  </div>
                </div>

                {/* 3. Ciclo Superior DAW */}
                <div className="relative pl-8 group">
                  <div className="absolute w-3.5 h-3.5 bg-slate-400 dark:bg-slate-600 rounded-full -left-[8px] top-1.5 group-hover:bg-blue-500 transition-colors duration-300"></div>
                  <div className="glass-panel p-6 rounded-2xl hover:-translate-y-0.5 transition-all duration-300">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                      <GraduationCap className="w-3.5 h-3.5" />
                      {t.edu2Date}
                    </span>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                      {t.edu2Title}
                    </h4>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">
                      {t.edu2School}
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                      {t.edu2Desc}
                    </p>
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