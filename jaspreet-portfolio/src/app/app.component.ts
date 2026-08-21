import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ServicesComponent } from './components/services/services.component';
import { TechMarqueeComponent } from './components/tech-marquee/tech-marquee.component';
import { GithubStatsComponent } from './components/github-stats/github-stats.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollSpyService } from './services/scroll-spy.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    ServicesComponent,
    TechMarqueeComponent,
    GithubStatsComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit, OnDestroy {
  private sectionObserver?: IntersectionObserver;
  private revealObserver?: IntersectionObserver;

  constructor(private spy: ScrollSpyService) {}

  ngAfterViewInit(): void {
    this.setupScrollSpy();
    this.setupRevealAnimations();
  }

  ngOnDestroy(): void {
    this.sectionObserver?.disconnect();
    this.revealObserver?.disconnect();
  }

  private setupScrollSpy(): void {
    const sections = document.querySelectorAll('section[id]');

    this.sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.spy.setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => this.sectionObserver!.observe(section));
  }

  private setupRevealAnimations(): void {
    const reveals = document.querySelectorAll('.reveal');

    this.revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            this.revealObserver!.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    reveals.forEach((el) => this.revealObserver!.observe(el));
  }
}
