import { Component } from '@angular/core';
import { RevealDirective, RevealStaggerDirective } from '../../../directive/reveal.directive';

@Component({
  selector: 'about-snapshot-section',
  standalone: true,
  imports: [RevealDirective, RevealStaggerDirective],
  templateUrl: './about-snapshot-section.html',
  styleUrl: './about-snapshot-section.css',
})
export class AboutSnapshotSection {}
