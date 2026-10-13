import type { Project } from './types';

export const EMAIL = 'jesuscorderoavila1@gmail.com';

export const SKILL_CATEGORIES = [
  {
    titleKey: 'catFrontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Ionic']
  },
  {
    titleKey: 'catBackend',
    skills: ['C#', 'ASP.NET Core', '.NET MVC', 'PHP', 'Laravel', 'REST APIs', 'Git']
  },
  {
    titleKey: 'catGames',
    skills: ['Unity', 'Godot Engine', 'Realidad Virtual (VR)', 'WebXR / A-Frame', 'Serious Games']
  }
];

export const PROJECTS: Project[] = [
  {
    title: 'Cthulhu Character Creator',
    descriptionKey: 'cthulhu',
    imageUrl: 'https://i.imgur.com/mLeyJo9.png',
    category: 'web',
    featured: true,
    tags: ['React', 'Web App', 'Tool', 'TTRPG'],
    links: {
      github: 'https://github.com/JesCorAvi/Cthulhu-7e-character-creator',
      live: 'https://cthulhubuilder.pages.dev/'
    },
  },
  {
    title: 'Sandwish Studio',
    descriptionKey: 'sandwishStudio',
    imageUrl: 'https://i.imgur.com/IbobDVx.png',
    category: 'web',
    featured: true,
    tags: ['Web', 'Indie Studio', 'Frontend'],
    links: {
      live: 'https://sandwish-studio.vercel.app/'
    },
  },
  {
    title: 'Into the Unhearth',
    descriptionKey: 'unhearth',
    imageUrl: 'https://i.imgur.com/MkU2XNm.png',
    category: 'game',
    featured: true,
    tags: ['WebXR', 'A-Frame', 'JavaScript', 'VR Horror'],
    links: {
      github: 'https://github.com/JesCorAvi/Into-the-Unhearth',
      live: 'https://jescoravi.github.io/Into-the-Unhearth/'
    },
  },
  {
    title: 'Those Who Are About to Spin',
    descriptionKey: 'spin',
    imageUrl: 'https://img.itch.zone/aW1nLzI0MjczNTU5LnBuZw==/300x240%23c/1vRmHy.png',
    category: 'game',
    tags: ['Godot', 'Strategy', 'Game Off Jam'],
    links: {
      github: 'https://github.com/IES-Rafael-Alberti/GameOff2025-SandwishStudio',
      itchio: 'https://sandwish-studio.itch.io/those-who-are-about-to-spin'
    },
  },
  {
    title: 'Maskness',
    descriptionKey: 'maskness',
    imageUrl: 'https://img.itch.zone/aW1nLzI1MzA1ODM2LnBuZw==/315x250%23c/wTKvAw.png',
    category: 'game',
    tags: ['Godot', 'Arcade', 'MálagaJam 20 (48h)'],
    links: {
      github: 'https://github.com/IES-Rafael-Alberti/Juego-MalagaJam-20-SandWishStudios',
      itchio: 'https://sandwish-studio.itch.io/maskness',
      youtube: 'https://www.youtube.com/watch?v=oWFQrDsZFQs'
    },
  }
];

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/jes%C3%BAs-cordero-%C3%A1vila-574a372b5/',
  github: 'https://github.com/JesCorAvi',
  itchio: 'https://jescoravi.itch.io/',
};