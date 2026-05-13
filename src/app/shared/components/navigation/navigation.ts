import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@shared/pipes';
import { LocaleService, ThemeService } from '@shared/services';
import { Button } from '../button/button';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'larp-navigation',
  imports: [CommonModule, RouterModule, TranslatePipe, Button],
  templateUrl: './navigation.html',
  styleUrls: ['./navigation.scss'],
})
export class Navigation {
  public isMobileMenuOpen = signal(false);
  public isDanish = inject(LocaleService).isDanish;
  public isDark = inject(ThemeService).isDark;
  public toggleLocale = inject(LocaleService).toggleLocale;
  public toggleTheme = inject(ThemeService).toggleTheme;
  public navItems = inject(LocaleService).navItems;

  public toggleMobileMenu() {
    this.isMobileMenuOpen.update(value => !value);
  }

  public closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }
}
