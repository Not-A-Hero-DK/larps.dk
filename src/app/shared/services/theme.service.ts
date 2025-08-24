import { effect, Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  public isDark = signal<boolean>(true);

  constructor() {
    const isDarkModeEnabled = localStorage.getItem('isDarkTheme');
    if (isDarkModeEnabled === 'false') {
      this.isDark.set(false);
    } else if (isDarkModeEnabled === 'true') {
      this.isDark.set(true);
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      this.isDark.set(false);
    }

    effect(() => {
      document.documentElement.setAttribute('data-theme', this.isDark() ? 'dark' : 'light');
      localStorage.setItem('isDarkTheme', this.isDark() ? 'true' : 'false');
    });
  }

  public toggleTheme() {
    this.isDark.update(current => !current);
  }
}
