export interface Project {
  id: number;
  title: string;
  tagline: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'frontend' | 'fullstack' | 'backend';
  features: string[];
  githubUrl: string;
  liveUrl: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface TimelineItem {
  id: number;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  type: 'education' | 'experience' | 'milestone';
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  href: string;
}

export interface GithubStat {
  icon: string;
  value: string;
  label: string;
}
