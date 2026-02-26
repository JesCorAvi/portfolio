import React from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';
import SectionTitle from './SectionTitle';
import { translations } from '../lib/i18n';
import type { Language } from '../App';

interface ProjectsSectionProps {
    language: Language;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ language }) => {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle>{translations[language].projects.title}</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;