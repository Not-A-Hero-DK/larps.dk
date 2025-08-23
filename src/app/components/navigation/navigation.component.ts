import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Skip to main content link for accessibility -->
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent text-white px-4 py-2 rounded-md z-[60] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
    >
      {{ t('nav.skip_to_content') }}
    </a>

    <nav
      class="fixed top-0 w-full z-50 bg-background backdrop-blur-sm border-b border-border"
      role="navigation"
      [attr.aria-label]="t('nav.main_navigation')"
    >
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <a routerLink="/" class="flex items-center space-x-2" (click)="closeMobileMenu()">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-accent">
              <path d="M16 2L27 7V18C27 25 16 30 16 30C16 30 5 25 5 18V7L16 2Z" 
                    fill="currentColor" 
                    opacity="0.1"/>
              <path d="M16 3L26 7.5V18C26 23.5 16 28 16 28C16 28 6 23.5 6 18V7.5L16 3Z" 
                    stroke="currentColor" 
                    stroke-width="1.5" 
                    fill="none"/>
              <g transform="translate(16, 16)">
                <line x1="0" y1="-8" x2="0" y2="8" 
                      stroke="currentColor" 
                      stroke-width="2"/>
                <line x1="-3" y1="-5" x2="3" y2="-5" 
                      stroke="currentColor" 
                      stroke-width="1.5"/>
                <line x1="-4" y1="0" x2="4" y2="0" 
                      stroke="currentColor" 
                      stroke-width="1.5"/>
                <line x1="-3" y1="5" x2="3" y2="5" 
                      stroke="currentColor" 
                      stroke-width="1.5"/>
              </g>
            </svg>
            <span class="text-xl font-bold text-foreground">Heimdal Portal</span>
          </a>
          
          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <nav class="flex space-x-6" role="navigation" [attr.aria-label]="t('nav.main_navigation')">
              <a 
                *ngFor="let item of navItems" 
                [routerLink]="item.href"
                class="text-sm font-medium text-foreground hover:text-accent transition-colors"
                routerLinkActive="text-accent"
              >
                {{ item.label }}
              </a>
            </nav>
            
            <!-- Desktop Controls -->
            <div class="flex items-center space-x-2">
              <!-- Theme Toggle -->
              <button
                (click)="themeService.toggleTheme()"
                [attr.aria-label]="themeService.theme() === 'dark' ? t('default.light_mode') : t('default.dark_mode')"
                class="rounded-lg px-2 py-1 bg-button-toggle hover:bg-card transition-colors duration-200"
              >
                <span class="text-sm">{{ themeService.theme() === 'dark' ? '☀️' : '🌙' }}</span>
              </button>
              
              <!-- Language Toggle -->
              <button
                (click)="localeService.toggleLocale()"
                [attr.aria-label]="localeService.currentLocale() === 'en' ? t('default.switch_language') : 'Switch to English'"
                class="rounded-lg px-3 py-1 bg-button-toggle hover:bg-card transition-colors duration-200 text-sm font-medium"
              >
                {{ localeService.currentLocale() === 'en' ? 'DA' : 'EN' }}
              </button>
            </div>
          </div>
          
          <!-- Mobile Menu Button -->
          <div class="md:hidden flex items-center space-x-2">
            <!-- Mobile Theme Toggle -->
            <button
              (click)="themeService.toggleTheme()"
              [attr.aria-label]="themeService.theme() === 'dark' ? t('default.light_mode') : t('default.dark_mode')"
              class="rounded-lg px-2 py-1 bg-neutral-800 hover:bg-neutral-700 text-white transition-colors duration-200"
            >
              <span class="text-sm">{{ themeService.theme() === 'dark' ? '☀️' : '🌙' }}</span>
            </button>
            
            <!-- Mobile Language Toggle -->
            <button
              (click)="localeService.toggleLocale()"
              [attr.aria-label]="localeService.currentLocale() === 'en' ? t('default.switch_language') : 'Switch to English'"
              class="rounded-lg px-2 py-1 bg-neutral-800 hover:bg-neutral-700 text-white transition-colors duration-200 text-sm font-medium"
            >
              {{ localeService.currentLocale() === 'en' ? 'DA' : 'EN' }}
            </button>
            
            <!-- Hamburger Menu -->
            <button
              (click)="toggleMobileMenu()"
              [attr.aria-label]="isMobileMenuOpen() ? t('nav.close_menu') : t('nav.open_menu')"
              [attr.aria-expanded]="isMobileMenuOpen()"
              aria-controls="mobile-menu"
              class="rounded-lg px-2 py-1 bg-neutral-800 hover:bg-neutral-700 text-white transition-colors duration-200"
            >
              <div class="w-5 h-5 flex flex-col justify-center items-center space-y-1">
                <span
                  class="block w-4 h-0.5 bg-current transition-transform duration-200"
                  [class.rotate-45]="isMobileMenuOpen()"
                  [class.translate-y-1.5]="isMobileMenuOpen()"
                ></span>
                <span
                  class="block w-4 h-0.5 bg-current transition-opacity duration-200"
                  [class.opacity-0]="isMobileMenuOpen()"
                ></span>
                <span
                  class="block w-4 h-0.5 bg-current transition-transform duration-200"
                  [class.-rotate-45]="isMobileMenuOpen()"
                  [class.-translate-y-1.5]="isMobileMenuOpen()"
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div
        id="mobile-menu"
        class="md:hidden transition-all duration-300 ease-in-out overflow-hidden"
        [class.max-h-96]="isMobileMenuOpen()"
        [class.opacity-100]="isMobileMenuOpen()"
        [class.max-h-0]="!isMobileMenuOpen()"
        [class.opacity-0]="!isMobileMenuOpen()"
        [attr.aria-hidden]="!isMobileMenuOpen()"
      >
        <div class="bg-card border-t border-border">
          <div class="container mx-auto px-4 py-4">
            <nav class="space-y-2" role="navigation" [attr.aria-label]="t('nav.mobile_navigation')">
              <a
                *ngFor="let item of navItems"
                [routerLink]="item.href"
                (click)="closeMobileMenu()"
                class="block px-4 py-3 text-sm font-medium text-foreground hover:text-accent hover:bg-neutral-800 rounded-md transition-colors"
                routerLinkActive="text-accent"
              >
                {{ item.label }}
              </a>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  `,
  styleUrl: './navigation.component.css'
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
    this.isMobileMenuOpen.update(value => !value);
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