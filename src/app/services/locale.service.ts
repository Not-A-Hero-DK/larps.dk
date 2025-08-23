import { Injectable, signal, effect, inject, DOCUMENT } from '@angular/core';

export type Locale = 'en' | 'da';

interface Translations {
  [key: string]: string | Translations;
}

@Injectable({
  providedIn: 'root'
})
export class LocaleService {
  private document = inject(DOCUMENT);
  
  currentLocale = signal<Locale>('en');
  
  private translations: Record<Locale, Translations> = {
    en: {
      default: {
        cancel: 'Cancel',
        submit: 'Submit',
        language: 'English',
        switch_language: 'Switch to Danish',
        dark_mode: 'Dark Mode',
        light_mode: 'Light Mode'
      },
      nav: {
        home: 'Home',
        current: 'Current Projects',
        previous: 'Previous Projects',
        about: 'About Us',
        contact: 'Contact',
        getHosted: 'Get Hosted',
        skip_to_content: 'Skip to main content',
        main_navigation: 'Main navigation',
        mobile_navigation: 'Mobile navigation',
        open_menu: 'Open navigation menu',
        close_menu: 'Close navigation menu'
      },
      home: {
        title: 'Guardian of LARP Realms',
        subtitle: 'Free hosting for LARP communities worldwide. Share your adventures, connect with players, and bring your stories to life.',
        request_hosting: 'Request Hosting',
        view_projects: 'View Projects'
      },
      footer: {
        brand_title: 'Heimdal Portal',
        brand_description: 'Empowering the LARP community with free, professional hosting solutions.',
        brand_mission: 'Building bridges between organizers and players across the Nordic realms.',
        stats_projects: '100+ Projects',
        stats_uptime: '99.9% Uptime',
        quick_links: 'Quick Links',
        contact: 'Contact',
        email: 'hosting@larps.dk',
        phone: '+45 30 23 81 12',
        get_started: 'Get Started',
        copyright: '© 2025 Heimdal Portal. All rights reserved.',
        company_link: 'Not A Hero ApS'
      }
    },
    da: {
      default: {
        cancel: 'Afbryd',
        submit: 'Send',
        language: 'Dansk',
        switch_language: 'Skift til Engelsk',
        dark_mode: 'Mørk tilstand',
        light_mode: 'Lys tilstand'
      },
      nav: {
        home: 'Hjem',
        current: 'Nuværende Projekter',
        previous: 'Tidligere Projekter',
        about: 'Om Os',
        contact: 'Kontakt',
        getHosted: 'Få Hosting',
        skip_to_content: 'Spring til hovedindhold',
        main_navigation: 'Hovednavigation',
        mobile_navigation: 'Mobil navigation',
        open_menu: 'Åbn navigationsmenuen',
        close_menu: 'Luk navigationsmenuen'
      },
      home: {
        title: 'Vogter af LARP Riger',
        subtitle: 'Gratis hosting til LARP-fællesskaber verden over. Del dine eventyr, forbind med spillere og bring dine historier til live.',
        request_hosting: 'Anmod om Hosting',
        view_projects: 'Se Projekter'
      },
      footer: {
        brand_title: 'Heimdal Portal',
        brand_description: 'Styrker LARP-fællesskabet med gratis, professionelle hosting-løsninger.',
        brand_mission: 'Bygger broer mellem arrangører og spillere på tværs af de nordiske riger.',
        stats_projects: '100+ Projekter',
        stats_uptime: '99.9% Oppetid',
        quick_links: 'Hurtige Links',
        contact: 'Kontakt',
        email: 'hosting@larps.dk',
        phone: '+45 30 23 81 12',
        get_started: 'Kom i Gang',
        copyright: '© 2025 Heimdal Portal. Alle rettigheder forbeholdes.',
        company_link: 'Not A Hero ApS'
      }
    }
  };

  constructor() {
    // Load locale from localStorage or default to English
    const savedLocale = (typeof window !== 'undefined' && localStorage.getItem('locale')) as Locale | null;
    if (savedLocale && (savedLocale === 'en' || savedLocale === 'da')) {
      this.currentLocale.set(savedLocale);
    }

    // Apply locale to document when locale changes
    effect(() => {
      if (typeof window !== 'undefined') {
        this.document.documentElement.lang = this.currentLocale();
        localStorage.setItem('locale', this.currentLocale());
      }
    });
  }

  toggleLocale() {
    this.currentLocale.update(current => current === 'en' ? 'da' : 'en');
  }

  setLocale(locale: Locale) {
    this.currentLocale.set(locale);
  }

  translate(key: string): string {
    const keys = key.split('.');
    let value: string | Translations = this.translations[this.currentLocale()];
    
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