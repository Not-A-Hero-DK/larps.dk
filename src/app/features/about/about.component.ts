import { Component, inject } from '@angular/core';
import { LocaleService } from '../../shared/services/locale.service';

@Component({
  selector: 'larp-about',
  template: `
    <div class="relative min-h-screen text-foreground pt-32 pb-16 px-8">
      <div class="max-w-7xl mx-auto">
        <!-- Hero Section -->
        <div class="text-center mb-16">
          <h1
            class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-header bg-clip-text text-transparent"
          >
            {{ t('about.title') }}
          </h1>
          <p class="text-lg text-muted max-w-4xl mx-auto leading-relaxed">
            {{ t('about.subtitle') }}
          </p>
        </div>

        <!-- Mission Section -->
        <div class="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 class="text-3xl font-bold mb-6 text-accent">{{ t('about.mission.title') }}</h2>
            <p class="text-muted leading-relaxed mb-6">
              {{ t('about.mission.description') }}
            </p>
            <p class="text-muted leading-relaxed">
              {{ t('about.mission.vision') }}
            </p>
          </div>
          <div class="bg-card rounded-2xl p-8 border border-border">
            <h3 class="text-xl font-semibold mb-4 text-accent">{{ t('about.stats.title') }}</h3>
            <div class="space-y-4">
              <div class="flex justify-between items-center">
                <span class="text-muted">{{ t('about.stats.projects') }}</span>
                <span class="font-bold">150+</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-muted">{{ t('about.stats.uptime') }}</span>
                <span class="font-bold">99.9%</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-muted">{{ t('about.stats.players') }}</span>
                <span class="font-bold">25,000+</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-muted">{{ t('about.stats.countries') }}</span>
                <span class="font-bold">15</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Services Section -->
        <div class="mb-20">
          <h2 class="text-3xl font-bold mb-12 text-center text-accent">{{ t('about.services.title') }}</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-card rounded-xl p-6 border border-border hover:border-accent/50 transition-colors">
              <div class="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold mb-2">{{ t('about.services.hosting.title') }}</h3>
              <p class="text-muted text-sm">{{ t('about.services.hosting.description') }}</p>
            </div>
            
            <div class="bg-card rounded-xl p-6 border border-border hover:border-accent/50 transition-colors">
              <div class="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold mb-2">{{ t('about.services.customization.title') }}</h3>
              <p class="text-muted text-sm">{{ t('about.services.customization.description') }}</p>
            </div>
            
            <div class="bg-card rounded-xl p-6 border border-border hover:border-accent/50 transition-colors">
              <div class="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold mb-2">{{ t('about.services.support.title') }}</h3>
              <p class="text-muted text-sm">{{ t('about.services.support.description') }}</p>
            </div>
          </div>
        </div>

        <!-- Team Section -->
        <div class="text-center">
          <h2 class="text-3xl font-bold mb-8 text-accent">{{ t('about.team.title') }}</h2>
          <p class="text-muted max-w-2xl mx-auto leading-relaxed mb-8">
            {{ t('about.team.description') }}
          </p>
          <a 
            routerLink="/contact" 
            class="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors"
          >
            {{ t('about.team.contact_cta') }}
          </a>
        </div>
      </div>
    </div>
  `,
  styleUrl: './about.component.css',
})
export class AboutComponent {
  localeService = inject(LocaleService);

  t(key: string): string {
    return this.localeService.translate(key);
  }
}
