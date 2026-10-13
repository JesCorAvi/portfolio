import React, { useState, useEffect, useRef } from 'react';
import { EMAIL, SOCIAL_LINKS } from '../constants';
import SectionTitle from './SectionTitle';
import { translations } from '../lib/i18n';
import { Mail, Copy, Check, ExternalLink } from 'lucide-react';
import type { Language } from '../App';

interface ContactSectionProps {
  language: Language;
}

const ContactSection: React.FC<ContactSectionProps> = ({ language }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);

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

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.disconnect();
    };
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  const t = translations[language].contact;

  return (
    <section
      id="contact"
      className="py-20 md:py-28 border-t border-slate-200/60 dark:border-slate-900"
    >
      <div className="max-w-4xl mx-auto px-6">
        <SectionTitle subtitle={t.subtitle}>{t.title}</SectionTitle>

        <div
          ref={sectionRef}
          className={`glass-panel p-8 sm:p-12 rounded-3xl text-center relative overflow-hidden reveal ${
            isVisible ? 'visible' : ''
          }`}
        >
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            {t.description}
          </p>

          {/* Dirección de correo visible */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-mono text-sm mb-8">
            <Mail className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
            <span>{EMAIL}</span>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-3.5 px-8 rounded-xl transition-all transform hover:-translate-y-0.5 shadow-lg shadow-blue-500/25"
            >
              <Mail className="w-4 h-4" />
              <span>{t.button}</span>
            </a>

            <button
              onClick={handleCopyEmail}
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 dark:hover:border-cyan-400/50 font-semibold py-3.5 px-6 rounded-xl transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400">{t.copied}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>{t.copyEmail}</span>
                </>
              )}
            </button>

            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 font-semibold py-3.5 px-5 rounded-xl transition-colors"
            >
              <span>{t.linkedinCta}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;