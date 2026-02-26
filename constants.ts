
import type { Project } from './types';

export const EMAIL = 'jesuscorderoavila1@gmail.com';

export const SKILLS = [
  'HTML5', 'CSS', 'JavaScript', 'PHP', 
  'Godot', 'Unity', 'Git', 'Figma'
];

export const PROJECTS: Project[] = [
  {
    title: 'Cthulhu Character Creator',
    description: 'A web-based tool to easily create and manage characters for the Cthulhu tabletop RPG.',
    imageUrl: 'https://i.imgur.com/mLeyJo9.png',
    tags: ['Web App', 'React', 'Tool', 'TTRPG'],
    links: {
      github: 'https://github.com/JesCorAvi/Cthulhu-7e-character-creator',
      live: 'https://cthulhubuilder.pages.dev/',
    },
  },
  {
    title: 'Those Who Are About to Spin',
    description: "Create your roulette and fight gladiators to beat the game. Upgrade your pieces and combine them to make synergies. Don't forget the passives! For each empty slot of your roulette they will boost your units. This game was made in one month.",
    imageUrl: 'https://img.itch.zone/aW1nLzI0MjczNTU5LnBuZw==/300x240%23c/1vRmHy.png',
    tags: ['Game', 'Godot', 'Game Jam', 'Game Off 2025'],
    links: {
      github: 'https://github.com/IES-Rafael-Alberti/GameOff2025-SandwishStudio',
      itchio: 'https://sandwish-studio.itch.io/those-who-are-about-to-spin',
    },
  },
  {
    title: 'Maskness',
    description: 'You work as a security guard at an illegal party in an industrial park. Allow entry to those wearing the correct masks and get the highest score. This game is made in 48 hours.',
    imageUrl: 'https://img.itch.zone/aW1nLzI1MzA1ODM2LnBuZw==/315x250%23c/wTKvAw.png',
    tags: ['Game', 'Godot', 'Game Jam', 'MálagaJam 20'],
    links: {
      github: 'https://github.com/IES-Rafael-Alberti/Juego-MalagaJam-20-SandWishStudios',
      itchio: 'https://sandwish-studio.itch.io/maskness',
      youtube: 'https://www.youtube.com/watch?v=oWFQrDsZFQs',
    },
  },
];

export const SOCIAL_LINKS = {
    linkedin: 'https://www.linkedin.com/in/jes%C3%BAs-cordero-%C3%A1vila-574a372b5/',
    github: 'https://github.com/JesCorAvi',
    itchio: 'https://jescoravi.itch.io/',
};