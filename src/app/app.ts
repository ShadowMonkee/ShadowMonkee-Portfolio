import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { TypewritterEffect } from './directive/typewritter-effect';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, TypewritterEffect],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ShadowMonkee-Portfolio');
}
