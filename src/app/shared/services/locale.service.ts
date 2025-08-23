import { effect, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export type Locale = 'en' | 'da';

interface Translations {
  [key: string]: string | Translations;
}

@Injectable({ providedIn: 'root' })
export class LocaleService {
  private http = inject(HttpClient);

  currentLocale = signal<Locale>('en');
  private translations = signal<Record<Locale, Translations>>({
    en: {},
    da: {}
  });

  constructor() {
    this.initializeLocale();
    this.loadTranslations();

    // Apply locale to document when locale changes
    effect(() => {
      if (typeof window !== 'undefined') {
        document.documentElement.lang = this.currentLocale();
        localStorage.setItem('locale', this.currentLocale());
      }
    });
  }

  private initializeLocale() {
    // Load locale from localStorage or default to English
    const savedLocale = (typeof window !== 'undefined' &&
      localStorage.getItem('locale')) as Locale | null;
    if (savedLocale && (savedLocale === 'en' || savedLocale === 'da')) {
      this.currentLocale.set(savedLocale);
    }
  }

  private async loadTranslations() {
    try {
      const [enTranslations, daTranslations] = await Promise.all([
        firstValueFrom(this.http.get<Translations>('/assets/locales/en.json')),
        firstValueFrom(this.http.get<Translations>('/assets/locales/da.json'))
      ]);

      this.translations.set({
        en: enTranslations,
        da: daTranslations
      });
    } catch (error) {
      console.error('Failed to load translations:', error);
      // Fallback to empty translations - could load from embedded fallback
    }
  }

  toggleLocale() {
    this.currentLocale.update((current) => (current === 'en' ? 'da' : 'en'));
  }

  setLocale(locale: Locale) {
    this.currentLocale.set(locale);
  }

  translate(key: string): string {
    const keys = key.split('.');
    let value: string | Translations = this.translations()[this.currentLocale()];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }

    return typeof value === 'string' ? value : key;
  }
}
