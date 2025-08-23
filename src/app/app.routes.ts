import { Routes } from '@angular/router';
import {
  AboutComponent,
  ContactComponent,
  CurrentProjectsComponent,
  HomeComponent,
  NotFoundComponent,
  PreviousProjectsComponent,
} from './features';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'current-projects', component: CurrentProjectsComponent },
  { path: 'previous-projects', component: PreviousProjectsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotFoundComponent },
];
