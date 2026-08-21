import { StatItem, ContactInfo, GithubStat } from '../models/portfolio.models';

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export const TYPED_ROLES: string[] = [
  'Full-Stack Developer',
  'Angular Developer',
  'MERN Stack Developer',
  'Backend Developer',
  'UI Developer',
];

export const ABOUT_STATS: StatItem[] = [
  { value: '10+', label: 'Projects Shipped' },
  { value: '5+', label: 'Core Technologies' },
  { value: '1+', label: 'Years Learning & Building' },
  { value: '100%', label: 'Passion for Development' },
];

export const TECH_MARQUEE: string[] = [
  'Angular', 'TypeScript', 'React', 'JavaScript', 'Node.js', 'Express',
  'MongoDB', 'Mongoose', 'Tailwind CSS', 'Git', 'GitHub', 'Socket.io', 'Cloudinary',
];

export const GITHUB_STATS: GithubStat[] = [
  { icon: 'folder-git-2', value: '24+', label: 'Repositories' },
  { icon: 'git-commit-horizontal', value: '600+', label: 'Contributions' },
  { icon: 'rocket', value: '10+', label: 'Projects Shipped' },
  { icon: 'code-2', value: '8+', label: 'Technologies Used' },
];

export const CONTACT_INFO: ContactInfo[] = [
  { icon: 'mail', label: 'Email', value: 'js2510870@gmail.com', href: 'mailto:js2510870@gmail.com' },
  { icon: 'github', label: 'GitHub', value: 'github.com/jxspriit', href: 'https://github.com/jxspriit' },
  { icon: 'linkedin', label: 'LinkedIn', value: 'linkedin.com/in/jaspreetsingh', href: 'https://linkedin.com/in/jaspreet-singh-902831305' },
  { icon: 'map-pin', label: 'Location', value: 'India', href: '#' },
];
