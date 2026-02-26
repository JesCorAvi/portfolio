
export interface ProjectLink {
  github?: string;
  live?: string;
  itchio?: string;
  youtube?: string;
}

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  links: ProjectLink;
}
