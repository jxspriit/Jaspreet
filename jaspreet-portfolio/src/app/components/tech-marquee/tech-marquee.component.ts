import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TECH_MARQUEE } from '../../data/misc.data';

@Component({
  selector: 'app-tech-marquee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-marquee.component.html',
})
export class TechMarqueeComponent {
  readonly items = TECH_MARQUEE;
}
