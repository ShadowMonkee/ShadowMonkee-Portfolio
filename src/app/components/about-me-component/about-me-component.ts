import { Component } from '@angular/core';
import { DescriptionComponent } from './description-component/description-component';

@Component({
  selector: 'about-me-component',
  imports: [DescriptionComponent],
  templateUrl: './about-me-component.html',
  styleUrl: './about-me-component.css',
})
export class AboutMeComponent {

}
