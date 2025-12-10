import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeHeroSection } from './home-hero-section/home-hero-section';
import { AboutSnapshotSection } from './about-snapshot-section/about-snapshot-section';
import { SkillsSection } from './skills-section/skills-section';
import { HomepageProjects } from './homepage-projects/homepage-projects';
import { HomepageServices } from './homepage-services/homepage-services';

@Component({
  selector: 'app-home-component',
  imports: [RouterModule, HomeHeroSection, AboutSnapshotSection, SkillsSection, HomepageProjects, HomepageServices],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {

}
