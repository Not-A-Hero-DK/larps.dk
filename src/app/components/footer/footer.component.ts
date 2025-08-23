import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="bg-card border-t border-border py-12 px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Brand Section -->
          <div class="md:col-span-2">
            <div class="flex items-center space-x-2 mb-4">
              <div class="text-2xl font-bold text-accent">⚡</div>
              <span class="text-xl font-bold text-foreground">Heimdal Portal</span>
            </div>
            <p class="text-muted mb-4 max-w-md">
              {{ t('footer.brand_description') }}
            </p>
            <p class="text-muted text-sm">
              {{ t('footer.brand_mission') }}
            </p>
            <div class="flex items-center space-x-6 mt-6 text-sm text-muted">
              <span>{{ t('footer.stats_projects') }}</span>
              <span>{{ t('footer.stats_uptime') }}</span>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="font-semibold text-foreground mb-4">{{ t('footer.quick_links') }}</h3>
            <ul class="space-y-2 text-sm">
              <li><a routerLink="/" class="text-muted hover:text-accent transition-colors">{{ t('nav.home') }}</a></li>
              <li><a routerLink="/current-projects" class="text-muted hover:text-accent transition-colors">{{ t('nav.current') }}</a></li>
              <li><a routerLink="/previous-projects" class="text-muted hover:text-accent transition-colors">{{ t('nav.previous') }}</a></li>
              <li><a routerLink="/about" class="text-muted hover:text-accent transition-colors">{{ t('nav.about') }}</a></li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h3 class="font-semibold text-foreground mb-4">{{ t('footer.contact') }}</h3>
            <ul class="space-y-2 text-sm">
              <li>
                <a href="mailto:hosting@larps.dk" class="text-muted hover:text-accent transition-colors">
                  {{ t('footer.email') }}
                </a>
              </li>
              <li>
                <a href="tel:+4530238112" class="text-muted hover:text-accent transition-colors">
                  {{ t('footer.phone') }}
                </a>
              </li>
            </ul>
            <a routerLink="/contact" 
               class="inline-block mt-4 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors text-sm font-medium">
              {{ t('footer.get_started') }}
            </a>
          </div>
        </div>

        <!-- Copyright -->
        <div class="border-t border-border pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-muted">
          <p>{{ t('footer.copyright') }}</p>
          <a href="#" class="text-muted hover:text-accent transition-colors mt-2 sm:mt-0">
            {{ t('footer.company_link') }}
          </a>
        </div>
      </div>
    </footer>
  `,
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  localeService = inject(LocaleService);

  t(key: string): string {
    return this.localeService.translate(key);
  }
}