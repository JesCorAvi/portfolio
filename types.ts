export interface ProjectLink {
  github?: string;
  live?: string;
  itchio?: string;
  youtube?: string;
}

export type ProjectCategory = 'web' | 'game';

export interface Project {
  title: string;
  descriptionKey: string;
  imageUrl: string;
  category: ProjectCategory;
  featured?: boolean;
  tags: string[];
  links: ProjectLink;
}