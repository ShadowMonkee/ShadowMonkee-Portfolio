import { Component } from '@angular/core';
import { TypewritterEffect } from '../../../directive/typewritter-effect';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'home-hero-section',
  imports: [RouterModule, TypewritterEffect],
  templateUrl: './home-hero-section.html',
  styleUrl: './home-hero-section.css',
})
export class HomeHeroSection {

}
