import { Component, ViewEncapsulation } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  LucideAngularModule,
  ArrowRight,
  ShieldCheck,
} from 'lucide-angular';

@Component({
  selector: 'home-hero-section',
  standalone: true,
  imports: [NgFor, LucideAngularModule, RouterModule],
  templateUrl: './home-hero-section.html',
  styleUrl: './home-hero-section.css',
  encapsulation: ViewEncapsulation.None,
})
export class HomeHeroSection {
  readonly ArrowRight = ArrowRight;
  readonly ShieldCheck = ShieldCheck;

  readonly techStack = [
    'Java', 'Spring Boot', 'Angular', 'TypeScript',
    'Docker', 'PostgreSQL', 'REST APIs', 'CI/CD', 'Rust',
  ];

  readonly stats = [
    { value: '5+',    label: 'Years building' },
    { value: '3',     label: 'Live products'  },
    { value: '12+',   label: 'Technologies'   },
    { value: 'BE',    label: 'Based in Belgium' },
  ];
}
