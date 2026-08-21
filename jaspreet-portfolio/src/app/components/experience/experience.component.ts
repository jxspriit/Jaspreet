import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, GraduationCap, Briefcase, Rocket } from 'lucide-angular';
import { TIMELINE } from '../../data/experience.data';

const ICON_MAP: Record<string, any> = {
  education: GraduationCap,
  experience: Briefcase,
  milestone: Rocket,
};

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  readonly timeline = TIMELINE;

  iconFor(type: string) {
    return ICON_MAP[type];
  }
}
