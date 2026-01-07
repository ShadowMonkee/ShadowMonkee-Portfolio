import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECTS } from './projects.data';
import { ProjectCardComponent } from '../home-component/homepage-projects/project-card-component/project-card-component';

@Component({
  selector: 'projects-page',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects-page-component.html',
  styleUrl: './projects-page-component.css'
})
export class ProjectsPageComponent {
  projects = PROJECTS;
}
