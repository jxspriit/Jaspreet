import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollSpyService {
  /** Currently active section id, e.g. "about" */
  readonly activeSection = signal<string>('home');

  setActive(id: string): void {
    this.activeSection.set(id);
  }
}
