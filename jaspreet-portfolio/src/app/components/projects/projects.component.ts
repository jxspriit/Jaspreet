import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Github, ExternalLink, ArrowRight, X } from 'lucide-angular';
import { PROJECTS } from '../../data/projects.data';
import { Project } from '../../models/portfolio.models';

type FilterKey = 'all' | 'frontend' | 'fullstack' | 'backend';

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'fullstack', label: 'Full Stack' },
  { key: 'backend', label: 'Backend' },
];

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  readonly filters = FILTERS;
  readonly activeFilter = signal<FilterKey>('all');
  readonly selectedProject = signal<Project | null>(null);

  readonly icons = { Github, ExternalLink, ArrowRight, X };

  readonly filteredProjects = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'all') return PROJECTS;
    return PROJECTS.filter((p) => p.category === filter);
  });

  setFilter(key: FilterKey): void {
    this.activeFilter.set(key);
  }

  openDetails(project: Project): void {
    this.selectedProject.set(project);
  }

  closeDetails(): void {
    this.selectedProject.set(null);
  }
}
