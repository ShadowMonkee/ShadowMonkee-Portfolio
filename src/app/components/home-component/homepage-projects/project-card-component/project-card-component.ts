import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'project-card',
  imports: [RouterModule],
  templateUrl: './project-card-component.html',
  styleUrls: ['./project-card-component.css']
})
export class ProjectCardComponent {
  @Input() title!: string;
  @Input() tech!: string;
  @Input() link!: string;
  @Input() image!: string;
}
