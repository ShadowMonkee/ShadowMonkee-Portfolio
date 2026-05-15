import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PROJECTS, CYBER_PROJECTS } from './projects.data';
import { ProjectCardComponent } from '../home-component/homepage-projects/project-card-component/project-card-component';
import { CyberProjectCardComponent } from './cyber-project-card/cyber-project-card';
import { RevealDirective, RevealStaggerDirective } from '../../directive/reveal.directive';

type Tab = 'engineering' | 'cybersecurity';

@Component({
  selector: 'projects-page',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent, CyberProjectCardComponent, RevealDirective, RevealStaggerDirective],
  templateUrl: './projects-page-component.html',
  styleUrl: './projects-page-component.css',
})
export class ProjectsPageComponent {
  activeTab: Tab = 'engineering';

  readonly projects = PROJECTS;
  readonly cyberProjects = CYBER_PROJECTS;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const tab = this.route.snapshot.queryParamMap.get('tab');
    if (tab === 'cybersecurity') {
      this.activeTab = 'cybersecurity';
    }
  }

  setTab(tab: Tab) {
    this.activeTab = tab;
  }
}
