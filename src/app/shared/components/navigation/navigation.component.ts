import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LocaleService, ThemeService } from '@shared/services';

@Component({
  selector: 'larp-navigation',
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  themeService = inject(ThemeService);
  localeService = inject(LocaleService);

  isMobileMenuOpen = signal(false);

  navItems = [
    { href: '/', label: this.t('nav.home') },
    { href: '/current-projects', label: this.t('nav.current') },
    { href: '/previous-projects', label: this.t('nav.previous') },
    { href: '/about', label: this.t('nav.about') },
    { href: '/contact', label: this.t('nav.contact') },
  ];

  toggleMobileMenu() {
    this.isMobileMenuOpen.update((value) => !value);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }

  t(key: string): string {
    // This will be replaced with proper i18n once we implement it
    // For now, using basic translation lookup
    return this.localeService.translate(key);
  }
}
