import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, GraduationCap, ChevronDown } from 'lucide-angular';
import { ABOUT_STATS } from '../../data/misc.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  readonly stats = ABOUT_STATS;
  readonly expanded = signal(false);
  readonly icons = { GraduationCap, ChevronDown };

  toggle(): void {
    this.expanded.update((v) => !v);
  }
}
