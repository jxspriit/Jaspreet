import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Github, Linkedin, Mail } from 'lucide-angular';
import { NAV_LINKS } from '../../data/misc.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  readonly navLinks = NAV_LINKS;
  readonly year = new Date().getFullYear();
  readonly icons = { Github, Linkedin, Mail };
}
