import type { Project } from './types';

export const EMAIL = 'jesuscorderoavila1@gmail.com';

export const SKILLS = [
  'HTML5', 'CSS', 'JavaScript', 'PHP', 
  'Godot', 'Unity', 'Git', 'Figma'
];

export const PROJECTS: Project[] = [
  {
    title: 'Cthulhu Character Creator',
    descriptionKey: 'cthulhu',
    imageUrl: 'https://i.imgur.com/mLeyJo9.png',
    tags: ['Web App', 'React', 'Tool', 'TTRPG'],
    links: {
      github: 'https://github.com/JesCorAvi/Cthulhu-7e-character-creator',
      live: 'https://cthulhubuilder.pages.dev/',
    },
  },
  {
    title: 'Those Who Are About to Spin',
    descriptionKey: 'spin',
    imageUrl: 'https://img.itch.zone/aW1nLzI0MjczNTU5LnBuZw==/300x240%23c/1vRmHy.png',
    tags: ['Game', 'Godot', 'Game Jam', 'Game Off 2025'],
    links: {
      github: 'https://github.com/IES-Rafael-Alberti/GameOff2025-SandwishStudio',
      itchio: 'https://sandwish-studio.itch.io/those-who-are-about-to-spin',
    },
  },
  {
    title: 'Maskness',
    descriptionKey: 'maskness',
    imageUrl: 'https://img.itch.zone/aW1nLzI1MzA1ODM2LnBuZw==/315x250%23c/wTKvAw.png',
    tags: ['Game', 'Godot', 'Game Jam', 'MálagaJam 20'],
    links: {
      github: 'https://github.com/IES-Rafael-Alberti/Juego-MalagaJam-20-SandWishStudios',
      itchio: 'https://sandwish-studio.itch.io/maskness',
      youtube: 'https://www.youtube.com/watch?v=oWFQrDsZFQs',
    },
  },
  {
    title: 'Into the Unhearth',
    descriptionKey: 'unhearth',
    imageUrl: 'https://i.imgur.com/MkU2XNm.png',
    tags: ['Game', 'WebXR', 'A-Frame', 'JavaScript'],
    links: {
      github: 'https://github.com/JesCorAvi/Into-the-Unhearth',
      live: 'https://jescoravi.github.io/Into-the-Unhearth/',
    },
  }
];

export const SOCIAL_LINKS = {
    linkedin: 'https://www.linkedin.com/in/jes%C3%BAs-cordero-%C3%A1vila-574a372b5/',
    github: 'https://github.com/JesCorAvi',
    itchio: 'https://jescoravi.itch.io/',
};