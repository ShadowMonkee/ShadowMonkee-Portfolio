import { Routes } from '@angular/router';
import { ContactComponent } from './components/contact-component/contact-component';
import { HomeComponent } from './components/home-component/home-component';
import { AboutMeComponent } from './components/about-me-component/about-me-component';
import { ProjectsPageComponent } from './components/projects-page-component/projects-page-component';

export const routes: Routes = [
      { path: '', component: HomeComponent},
      { path: 'about-me', component: AboutMeComponent},
      { path: 'projects', component: ProjectsPageComponent},
      { path: 'contact', component: ContactComponent },
      { path: 'projects/cyber/:id',
            loadComponent: () =>
            import('./components/projects-page-component/cyber-details/cyber-details')
                  .then(m => m.CyberDetailsComponent) },
      { path: 'projects/:slug',
            loadComponent: () =>
            import('./components/projects-page-component/project-details/project-details')
                  .then(m => m.ProjectDetails) }
];
