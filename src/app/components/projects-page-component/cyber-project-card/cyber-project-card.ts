import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CyberProject } from '../projects.data';

@Component({
  selector: 'cyber-project-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cyber-project-card.html',
  styleUrl: './cyber-project-card.css',
})
export class CyberProjectCardComponent {
  @Input() project!: CyberProject;

  get typeColor(): string {
    const map: Record<string, string> = {
      Writeup:  'type-writeup',
      Report:   'type-report',
      Tool:     'type-tool',
      Research: 'type-research',
    };
    return map[this.project.type] ?? 'type-writeup';
  }

  get statusLabel(): string {
    const map: Record<string, string> = {
      published: 'Published',
      redacted:  'Redacted',
      wip:       'In Progress',
    };
    return map[this.project.status] ?? '';
  }
}
