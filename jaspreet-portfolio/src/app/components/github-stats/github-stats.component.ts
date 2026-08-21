import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, FolderGit2, GitCommitHorizontal, Rocket, Code2 } from 'lucide-angular';
import { GITHUB_STATS } from '../../data/misc.data';

const ICON_MAP: Record<string, any> = {
  'folder-git-2': FolderGit2,
  'git-commit-horizontal': GitCommitHorizontal,
  rocket: Rocket,
  'code-2': Code2,
};

@Component({
  selector: 'app-github-stats',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './github-stats.component.html',
})
export class GithubStatsComponent {
  readonly stats = GITHUB_STATS;

  iconFor(key: string) {
    return ICON_MAP[key];
  }
}
