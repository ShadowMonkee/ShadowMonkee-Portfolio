import { Component } from '@angular/core';
import { PROJECTS } from '../projects.data';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'project-details',
  imports: [CommonModule],
  templateUrl: './project-details.html',
  styleUrl: './project-details.css',
})
export class ProjectDetails {
  project: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');

    this.project = PROJECTS.find(p => p.slug === slug);
  }
}
