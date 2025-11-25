import { Routes } from '@angular/router';
import { ContactComponent } from './components/contact-component/contact-component';
import { HomeComponent } from './components/home-component/home-component';
import { AboutMeComponent } from './components/about-me-component/about-me-component';
import { ProjectsComponent } from './components/projects-component/projects-component';

export const routes: Routes = [
      { path: '', component: HomeComponent},
      { path: 'about-me', component: AboutMeComponent},
      { path: 'projects', component: ProjectsComponent},
      { path: 'contact', component: ContactComponent }
];
