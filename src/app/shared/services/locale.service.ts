import { HttpClient } from '@angular/common/http';
import { effect, inject, Injectable, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export type Locale = 'en' | 'da';

interface Translations {
  [key: string]: string | Translations;
}

@Injectable({ providedIn: 'root' })
export class LocaleService {
  private readonly http = inject(HttpClient);
  private readonly translations = signal<Record<Locale, Translations>>({
    en: {},
    da: {},
  });

  public currentLocale = signal<Locale>('en');
  public navItems = [
    { href: '/', label: 'nav.home' },
    { href: '/current-projects', label: 'nav.current' },
    { href: '/previous-projects', label: 'nav.previous' },
    { href: '/about', label: 'nav.about' },
    { href: '/contact', label: 'nav.contact' },
  ];

  constructor() {
    this.initializeLocale();

    effect(() => {
      if (typeof window !== 'undefined') {
        document.documentElement.lang = this.currentLocale();
        localStorage.setItem('locale', this.currentLocale());
      }
    });
  }

  private initializeLocale() {
    const savedLocale = (typeof window !== 'undefined' && localStorage.getItem('locale')) as Locale | null;
    if (savedLocale && (savedLocale === 'en' || savedLocale === 'da')) {
      this.currentLocale.set(savedLocale);
    }
  }

  public async loadTranslations() {
    try {
      const [enTranslations, daTranslations] = await Promise.all([
        firstValueFrom(this.http.get<Translations>('/assets/locales/en.json')),
        firstValueFrom(this.http.get<Translations>('/assets/locales/da.json')),
      ]);

      this.translations.set({
        en: enTranslations,
        da: daTranslations,
      });
    } catch (error) {
      console.error('Failed to load translations:', error);
    }
  }

  public toggleLocale() {
    this.currentLocale.update(current => (current === 'en' ? 'da' : 'en'));
  }

  public setLocale(locale: Locale) {
    this.currentLocale.set(locale);
  }

  public translate(key: string): string {
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
