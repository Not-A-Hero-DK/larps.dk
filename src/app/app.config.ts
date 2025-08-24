import { provideHttpClient } from '@angular/common/http';
import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { TranslatePipe } from '@shared/pipes';
import { AppService, LocaleService } from '@shared/services';
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function initializeApp(localeService: LocaleService, _appService: AppService): Promise<void> {
  return localeService.loadTranslations();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),
    provideAppInitializer(() => initializeApp(inject(LocaleService), inject(AppService))),
    TranslatePipe,
  ],
};
