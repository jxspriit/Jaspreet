import { SkillCategory } from '../models/portfolio.models';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: 'layout-template',
    skills: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'TypeScript', level: 85 },
      { name: 'Angular', level: 88 },
      { name: 'React', level: 80 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Framer Motion', level: 70 },
    ],
  },
  {
    title: 'Backend',
    icon: 'server',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 85 },
      { name: 'REST APIs', level: 88 },
      { name: 'JWT', level: 82 },
      { name: 'Socket.io', level: 75 },
    ],
  },
  {
    title: 'Database',
    icon: 'database',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'Mongoose', level: 82 },
      { name: 'SQL Basics', level: 65 },
    ],
  },
  {
    title: 'Tools',
    icon: 'wrench',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'GitHub', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 85 },
      { name: 'Cloudinary', level: 78 },
      { name: 'Docker Basics', level: 60 },
    ],
  },
];
