import { effect, Injectable, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  public currentTheme = signal<Theme>('dark');

  constructor() {
    const savedTheme = (typeof window !== 'undefined' && localStorage.getItem('theme')) as Theme | null;
    if (savedTheme) {
      this.currentTheme.set(savedTheme);
    } else if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: light)').matches) {
      this.currentTheme.set('light');
    }

    effect(() => {
      if (typeof window !== 'undefined') {
        document.documentElement.setAttribute('data-theme', this.currentTheme());
        localStorage.setItem('theme', this.currentTheme());
      }
    });
  }

  public toggleTheme() {
    this.currentTheme.update(current => (current === 'light' ? 'dark' : 'light'));
  }
}
