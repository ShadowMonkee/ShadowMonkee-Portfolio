import { Component } from '@angular/core';
import { RevealDirective, RevealStaggerDirective } from '../../../directive/reveal.directive';

@Component({
  selector: 'homepage-services',
  standalone: true,
  imports: [RevealDirective, RevealStaggerDirective],
  templateUrl: './homepage-services.html',
  styleUrl: './homepage-services.css',
})
export class HomepageServices {}
