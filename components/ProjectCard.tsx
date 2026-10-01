import React, { useState, useEffect, useRef } from 'react';
import type { Project } from '../types';
import { GitHubIcon } from './icons/GitHubIcon';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';
import { YouTubeIcon } from './icons/YouTubeIcon';
import { translations } from '../lib/i18n';
import type { Language } from '../App';

interface ProjectCardProps {
  project: Project;
  index: number;
  language: Language;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, language }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); }
    }, { threshold: 0.1 });
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const tProjects = translations[language].projects;
  const translatedDescription = tProjects.items[project.descriptionKey as keyof typeof tProjects.items];

  return (
    <div 
      ref={cardRef}
      className={`group glass-panel rounded-2xl overflow-hidden flex flex-col transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 reveal ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative h-60 w-full overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
        />
      </div>
      
      <div className="p-8 flex flex-col flex-grow relative z-20 bg-white dark:bg-slate-900">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{project.title}</h3>
        <p className="text-slate-600 dark:text-slate-300 text-sm flex-grow mb-6 leading-relaxed">
          {translatedDescription}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag, tagIndex) => (
            <span key={tagIndex} className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="mt-auto flex items-center justify-start space-x-5 border-t border-slate-100 dark:border-slate-800 pt-4">
          {project.links.github && (
            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-500 transition-colors" aria-label={tProjects.githubAria}>
              <GitHubIcon className="w-6 h-6" />
            </a>
          )}
          {project.links.live && (
            <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-bold text-blue-500 hover:text-cyan-400 transition-colors" aria-label={tProjects.liveAria}>
              <span>{tProjects.visit}</span>
              <ExternalLinkIcon className="w-4 h-4" />
            </a>
          )}
          {project.links.itchio && (
            <a href={project.links.itchio} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-500 transition-colors" aria-label={tProjects.itchioAria}>
              <ExternalLinkIcon className="w-6 h-6" />
            </a>
          )}
          {project.links.youtube && (
            <a href={project.links.youtube} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-red-500 transition-colors" aria-label={tProjects.youtubeAria}>
              <YouTubeIcon className="w-6 h-6" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;