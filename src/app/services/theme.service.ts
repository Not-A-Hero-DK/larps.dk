import { Injectable, signal, effect, inject, DOCUMENT } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private document = inject(DOCUMENT);
  
  theme = signal<Theme>('dark');

  constructor() {
    // Load theme from localStorage or default to dark
    const savedTheme = (typeof window !== 'undefined' && localStorage.getItem('theme')) as Theme | null;
    if (savedTheme) {
      this.theme.set(savedTheme);
    } else {
      // Check system preference
      if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: light)').matches) {
        this.theme.set('light');
      }
    }

    // Apply theme to document when theme changes
    effect(() => {
      if (typeof window !== 'undefined') {
        this.document.documentElement.setAttribute('data-theme', this.theme());
        localStorage.setItem('theme', this.theme());
      }
    });
  }

  toggleTheme() {
    this.theme.update(current => current === 'light' ? 'dark' : 'light');
  }

  setTheme(theme: Theme) {
    this.theme.set(theme);
  }
}