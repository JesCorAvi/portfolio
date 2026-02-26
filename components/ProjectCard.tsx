import React, { useState, useEffect, useRef } from 'react';
import type { Project } from '../types';
import { GitHubIcon } from './icons/GitHubIcon';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';
import { YouTubeIcon } from './icons/YouTubeIcon';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if(currentRef) observer.disconnect();
    };
  }, []);

  const staggerDelay = index * 100;

  return (
        <div 
      ref={cardRef}
      className={`bg-secondary-light dark:bg-secondary rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col group transition-all duration-300 ease-in-out hover:shadow-medium hover:-translate-y-2 reveal ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${staggerDelay}ms` }}
    >
            <div className="relative aspect-video bg-slate-100 dark:bg-slate-900 flex items-center justify-center overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-text-primary-light dark:text-text-primary mb-2">{project.title}</h3>
                <p className="text-text-secondary-light dark:text-text-secondary text-sm flex-grow mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, index) => (
                        <span key={index} className="bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-text-secondary-light dark:text-text-secondary px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-start space-x-4">
          {project.links.github && (
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-text-secondary-light dark:text-text-secondary hover:text-accent-light dark:hover:text-accent transition-colors" aria-label="GitHub Repository">
              <GitHubIcon className="w-6 h-6" />
            </a>
          )}
          {project.links.live && (
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-text-secondary-light dark:text-text-secondary hover:text-accent-light dark:hover:text-accent transition-colors" aria-label="Live Demo">
              <ExternalLinkIcon className="w-6 h-6" />
            </a>
          )}
          {project.links.itchio && (
                        <a href={project.links.itchio} target="_blank" rel="noopener noreferrer" className="text-text-secondary-light dark:text-text-secondary hover:text-accent-light dark:hover:text-accent transition-colors" aria-label="itch.io Page">
              <ExternalLinkIcon className="w-6 h-6" />
            </a>
          )}
          {project.links.youtube && (
                        <a href={project.links.youtube} target="_blank" rel="noopener noreferrer" className="text-text-secondary-light dark:text-text-secondary hover:text-accent-light dark:hover:text-accent transition-colors" aria-label="YouTube Video">
              <YouTubeIcon className="w-6 h-6" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
