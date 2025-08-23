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
import { routes } from './app.routes';
import { LocaleService } from './shared/services/locale.service';

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
