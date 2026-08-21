import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Github, Linkedin, Mail, ArrowDown, FileDown } from 'lucide-angular';
import { TYPED_ROLES } from '../../data/misc.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './hero.component.html',
})
export class HeroComponent implements OnInit, OnDestroy {
  readonly icons = { Github, Linkedin, Mail, ArrowDown, FileDown };
  readonly typedText = signal('');

  private roles = TYPED_ROLES;
  private roleIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private timeoutId: ReturnType<typeof setTimeout> | null = null;

  ngOnInit(): void {
    this.tick();
  }

  ngOnDestroy(): void {
    if (this.timeoutId) clearTimeout(this.timeoutId);
  }

  private tick(): void {
    const current = this.roles[this.roleIndex];
    const speed = this.deleting ? 40 : 85;

    if (!this.deleting && this.charIndex <= current.length) {
      this.typedText.set(current.slice(0, this.charIndex));
      this.charIndex++;
    } else if (this.deleting && this.charIndex >= 0) {
      this.typedText.set(current.slice(0, this.charIndex));
      this.charIndex--;
    }

    let nextDelay = speed;

    if (!this.deleting && this.charIndex > current.length) {
      this.deleting = true;
      nextDelay = 1400;
    } else if (this.deleting && this.charIndex < 0) {
      this.deleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      this.charIndex = 0;
      nextDelay = 300;
    }

    this.timeoutId = setTimeout(() => this.tick(), nextDelay);
  }
}
