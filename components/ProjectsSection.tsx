import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';
import SectionTitle from './SectionTitle';
import { translations } from '../lib/i18n';
import type { Language } from '../App';
import type { ProjectCategory } from '../types';

interface ProjectsSectionProps {
  language: Language;
}

type FilterOption = 'all' | ProjectCategory;

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ language }) => {
  const [activeFilter, setActiveFilter] = useState<FilterOption>('all');
  const t = translations[language].projects;

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeFilter);

  const filters: { id: FilterOption; label: string }[] = [
    { id: 'all', label: t.filterAll },
    { id: 'web', label: t.filterWeb },
    { id: 'game', label: t.filterGames },
  ];

  return (
    <section
      id="projects"
      className="py-20 md:py-28 bg-slate-100/60 dark:bg-slate-900/30 border-t border-slate-200/60 dark:border-slate-900"
    >
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle subtitle={t.subtitle}>{t.title}</SectionTitle>

        {/* Barra de filtros por categoría */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-xl bg-slate-200/80 dark:bg-slate-900 border border-slate-300/60 dark:border-slate-800">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                    isActive
                      ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-cyan-400 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid de proyectos con proporción óptima */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              language={language}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;