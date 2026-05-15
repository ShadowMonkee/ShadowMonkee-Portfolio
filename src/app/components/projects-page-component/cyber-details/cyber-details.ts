import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CYBER_PROJECTS, CyberProject } from '../projects.data';

@Component({
  selector: 'cyber-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cyber-details.html',
  styleUrl: './cyber-details.css',
})
export class CyberDetailsComponent {
  project: CyberProject | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.project = CYBER_PROJECTS.find(p => p.id === id);
  }

  get typeClass(): string {
    return `type-${this.project?.type.toLowerCase()}`;
  }

  get statusLabel(): string {
    switch (this.project?.status) {
      case 'published': return 'Published';
      case 'redacted':  return 'Redacted';
      case 'wip':       return 'In Progress';
      default:          return '';
    }
  }

  severityClass(severity: string): string {
    return `sev-${severity.toLowerCase()}`;
  }
}
