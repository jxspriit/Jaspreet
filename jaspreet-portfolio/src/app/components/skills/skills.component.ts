import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, LayoutTemplate, Server, Database, Wrench } from 'lucide-angular';
import { SKILL_CATEGORIES } from '../../data/skills.data';

const ICON_MAP: Record<string, any> = {
  'layout-template': LayoutTemplate,
  server: Server,
  database: Database,
  wrench: Wrench,
};

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './skills.component.html',
})
export class SkillsComponent {
  readonly categories = SKILL_CATEGORIES;

  iconFor(key: string) {
    return ICON_MAP[key];
  }
}
