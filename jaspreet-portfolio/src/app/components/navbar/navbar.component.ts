import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Github, Linkedin, Menu, X, FileDown } from 'lucide-angular';
import { NAV_LINKS } from '../../data/misc.data';
import { ScrollSpyService } from '../../services/scroll-spy.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  readonly navLinks = NAV_LINKS;
  readonly scrolled = signal(false);
  readonly menuOpen = signal(false);

  readonly icons = { Github, Linkedin, Menu, X, FileDown };

  constructor(public spy: ScrollSpyService) {}

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 24);
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  isActive(href: string): boolean {
    return href === `#${this.spy.activeSection()}`;
  }
}
