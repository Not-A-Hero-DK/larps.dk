import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'current-projects', loadComponent: () => import('./pages/current-projects/current-projects.component').then(m => m.CurrentProjectsComponent) },
  { path: 'previous-projects', loadComponent: () => import('./pages/previous-projects/previous-projects.component').then(m => m.PreviousProjectsComponent) },
  { path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) },
  { path: '**', loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent) }
];
