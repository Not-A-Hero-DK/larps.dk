import { provideHttpClient } from '@angular/common/http';
import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { TranslatePipe } from '@shared/pipes/tr.pipe';
import { LocaleService } from '@shared/services';
import { routes } from './app.routes';

function initializeApp(localeService: LocaleService): Promise<void> {
  return localeService.loadTranslations();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),
    provideAppInitializer(() => initializeApp(inject(LocaleService))),
    TranslatePipe,
  ],
};
