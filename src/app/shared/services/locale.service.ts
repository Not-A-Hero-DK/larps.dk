import { HttpClient } from '@angular/common/http';
import { effect, inject, Injectable, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';

interface Translations {
  [key: string]: string | Translations;
}

@Injectable({ providedIn: 'root' })
export class LocaleService {
  private readonly http = inject(HttpClient);
  private readonly translations = signal<Record<'en' | 'da', Translations>>({ en: {}, da: {} });

  public isDanish = signal<boolean>(true);
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
      document.documentElement.lang = this.isDanish() ? 'da' : 'en';
      localStorage.setItem('locale', this.isDanish() ? 'true' : 'false');
    });
  }

  private initializeLocale() {
    const isDanish = localStorage.getItem('locale');
    if (isDanish) {
      this.isDanish.set(isDanish === 'true');
    }
  }

  public async loadTranslations() {
    try {
      const [enTranslations, daTranslations] = await Promise.all([
        firstValueFrom(this.http.get<Translations>('/assets/locales/en.json')),
        firstValueFrom(this.http.get<Translations>('/assets/locales/da.json')),
      ]);

      this.translations.set({ en: enTranslations, da: daTranslations });
    } catch (error) {
      console.error('Failed to load translations:', error);
    }
  }

  public toggleLocale() {
    this.isDanish.update(current => !current);
  }

  public setDanishLocale(locale: boolean) {
    this.isDanish.set(locale);
  }

  public translate(key: string): string {
    const keys = key.split('.');
    let value: string | Translations = this.translations()[this.isDanish() ? 'da' : 'en'];

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
