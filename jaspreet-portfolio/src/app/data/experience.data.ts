import { TimelineItem } from '../models/portfolio.models';

export const TIMELINE: TimelineItem[] = [
  {
    id: 1,
    year: '2024',
    title: 'BCA — 1st Year',
    subtitle: 'Bachelor of Computer Applications',
    description:
      'Building a strong foundation in data structures, algorithms and web fundamentals while pursuing full-stack development on the side.',
    type: 'education',
  },
  {
    id: 2,
    year: '2026',
    title: 'MERN Stack Internship',
    subtitle: 'Backend Development Intern',
    description:
      'Worked on production-style features across the MERN stack — building REST APIs, integrating authentication and shipping UI components under demo deadlines.',
    type: 'experience',
  },
  {
    id: 3,
    year: '2026',
    title: 'Full-Stack Development',
    subtitle: 'Independent Projects',
    description:
      'Building production-style applications end-to-end using Angular, React, Node.js, Express and MongoDB — from database schema to deployed UI.',
    type: 'milestone',
  },
];
