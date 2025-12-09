import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeHeroSection } from './home-hero-section/home-hero-section';
import { AboutSnapshotSection } from './about-snapshot-section/about-snapshot-section';
import { SkillsSection } from './skills-section/skills-section';

@Component({
  selector: 'app-home-component',
  imports: [RouterModule, HomeHeroSection, AboutSnapshotSection, SkillsSection],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {

}
