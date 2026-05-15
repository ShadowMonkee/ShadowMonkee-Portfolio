import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectCardComponent } from './project-card-component/project-card-component';
import { CommonModule } from '@angular/common';
import { RevealDirective, RevealStaggerDirective } from '../../../directive/reveal.directive';

@Component({
  selector: 'homepage-projects',
  imports: [RouterModule, ProjectCardComponent, CommonModule, RevealDirective, RevealStaggerDirective],
  templateUrl: './homepage-projects.html',
  styleUrl: './homepage-projects.css',
})
export class HomepageProjects {

  projects = [
  {
    title: 'E-Commerce Platform',
    tech: 'Java · Spring Boot · Angular · CI/CD',
    link: '/projects/ecommerce',
    image: 'assets/Images/ecommerce.png'
  },
  {
    title: 'Non-Profit Community Mobile App',
    tech: 'Java · Spring Boot · REST APIs',
    link: '/projects/nonprofit',
    image: 'assets/Images/nonprofit.png'
  },
  {
    title: 'Rust Cybersecurity Tool',
    tech: 'Rust · Networking · CLI Tooling · Cybersecurity',
    link: '/projects/decebalus',
    image: 'assets/Images/decebalus.png'
  }
];


}
