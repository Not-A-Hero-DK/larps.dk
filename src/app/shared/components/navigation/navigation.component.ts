import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@shared/pipes/tr.pipe';
import { LocaleService, ThemeService } from '@shared/services';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'larp-navigation',
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  public isMobileMenuOpen = signal(false);
  public currentLocale = inject(LocaleService).currentLocale;
  public currentTheme = inject(ThemeService).currentTheme;
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
