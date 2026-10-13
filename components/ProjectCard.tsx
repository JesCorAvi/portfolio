import React, { useState, useEffect, useRef } from 'react';
import type { Project } from '../types';
import { GitHubIcon } from './icons/GitHubIcon';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';
import { YouTubeIcon } from './icons/YouTubeIcon';
import { ItchIoIcon } from './icons/ItchIoIcon';
import { translations } from '../lib/i18n';
import type { Language } from '../App';

interface ProjectCardProps {
  project: Project;
  index: number;
  language: Language;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, language }) => {
  const cardRef = useRef<HTMLElement>(null);
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
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const tProjects = translations[language].projects;
  const translatedDescription =
    tProjects.items[project.descriptionKey as keyof typeof tProjects.items];

  const primaryUrl = project.links.live || project.links.itchio || project.links.github;

  return (
    <article
      ref={cardRef}
      className={`group glass-panel rounded-2xl overflow-hidden flex flex-col transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/40 dark:hover:border-cyan-400/40 hover:-translate-y-1.5 reveal ${
        isVisible ? 'visible' : ''
      }`}
      style={{ transitionDelay: `${(index % 4) * 100}ms` }}
    >
      {/* Cabecera de imagen de borde a borde, con más altura vertical (h-64) para no cortar logos */}
      <div className="relative h-64 w-full overflow-hidden bg-slate-950">
        <a
          href={primaryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full h-full focus:outline-none"
          aria-label={project.title}
        >
          <div className="absolute inset-0 bg-slate-900/15 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
          <img
            src={project.imageUrl}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
          />
        </a>

        <span
          className={`absolute top-3.5 left-3.5 z-20 text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md border shadow-sm ${
            project.category === 'web'
              ? 'bg-blue-600/90 text-white border-blue-400/30'
              : 'bg-cyan-600/90 text-white border-cyan-300/30'
          }`}
        >
          {project.category === 'web' ? tProjects.categoryWeb : tProjects.categoryGame}
        </span>
      </div>

      {/* Cuerpo de la tarjeta */}
      <div className="p-6 sm:p-8 flex flex-col flex-grow bg-white dark:bg-slate-900">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-600 dark:text-slate-300 text-sm flex-grow mb-6 leading-relaxed">
          {translatedDescription}
        </p>

        {/* Etiquetas tecnológicas */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Barra de acciones */}
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 dark:border-slate-800 pt-4">
          <div className="flex flex-wrap items-center gap-3">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 px-3.5 py-2 rounded-lg transition-colors"
                aria-label={tProjects.liveAria}
              >
                <span>{tProjects.visit}</span>
                <ExternalLinkIcon className="w-4 h-4" />
              </a>
            )}

            {project.links.itchio && (
              <a
                href={project.links.itchio}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-white bg-rose-600 hover:bg-rose-700 px-3.5 py-2 rounded-lg transition-colors"
                aria-label={tProjects.itchioAria}
              >
                <ItchIoIcon className="w-4 h-4" />
                <span>{tProjects.playItch}</span>
              </a>
            )}

            {project.links.youtube && (
              <a
                href={project.links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-red-600 dark:hover:text-red-400 bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg transition-colors"
                aria-label={tProjects.youtubeAria}
              >
                <YouTubeIcon className="w-4 h-4" />
                <span>{tProjects.watchVideo}</span>
              </a>
            )}
          </div>

          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white py-1.5 px-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label={tProjects.githubAria}
            >
              <GitHubIcon className="w-5 h-5" />
              <span>{tProjects.code}</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;