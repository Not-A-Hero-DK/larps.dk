import { Component, inject } from '@angular/core';
import { LocaleService } from '../../shared/services/locale.service';

@Component({
  selector: 'larp-current-projects',
  template: `
    <div class="relative min-h-screen text-foreground pt-32 pb-16 px-8">
      <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-16">
          <h1
            class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-header bg-clip-text text-transparent"
          >
            {{ t('current.title') }}
          </h1>
          <p class="text-lg text-muted max-w-4xl mx-auto leading-relaxed">
            {{ t('current.subtitle') }}
          </p>
        </div>

        <!-- Featured Project -->
        <div class="mb-16">
          <div class="bg-gradient-to-r from-accent/10 to-transparent rounded-2xl p-8 border border-accent/20">
            <div class="flex items-center gap-3 mb-4">
              <div class="px-3 py-1 bg-accent text-white text-sm font-medium rounded-full">
                {{ t('current.featured') }}
              </div>
              <div class="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full">
                {{ t('current.status.open') }}
              </div>
            </div>
            <h2 class="text-2xl font-bold mb-4 text-accent">{{ t('current.projects.chronicles.title') }}</h2>
            <p class="text-muted mb-6 leading-relaxed">
              {{ t('current.projects.chronicles.description') }}
            </p>
            <div class="grid md:grid-cols-3 gap-4 mb-6">
              <div class="flex items-center gap-2 text-sm">
                <svg class="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <span class="text-muted">{{ t('current.projects.chronicles.date') }}</span>
              </div>
              <div class="flex items-center gap-2 text-sm">
                <svg class="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span class="text-muted">{{ t('current.projects.chronicles.location') }}</span>
              </div>
              <div class="flex items-center gap-2 text-sm">
                <svg class="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                </svg>
                <span class="text-muted">{{ t('current.projects.chronicles.players') }}</span>
              </div>
            </div>
            <a 
              href="#" 
              class="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors"
            >
              {{ t('current.view_details') }}
            </a>
          </div>
        </div>

        <!-- Other Projects Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <!-- Project 1 -->
          <div class="bg-card rounded-xl p-6 border border-border hover:border-accent/50 transition-colors">
            <div class="flex items-center gap-2 mb-4">
              <div class="px-3 py-1 bg-orange-500/20 text-orange-400 text-sm font-medium rounded-full">
                {{ t('current.status.soon') }}
              </div>
            </div>
            <h3 class="text-lg font-semibold mb-3">{{ t('current.projects.shadowrun.title') }}</h3>
            <p class="text-muted text-sm mb-4 leading-relaxed">
              {{ t('current.projects.shadowrun.description') }}
            </p>
            <div class="flex items-center gap-4 text-xs text-muted mb-4">
              <span>{{ t('current.projects.shadowrun.date') }}</span>
              <span>{{ t('current.projects.shadowrun.location') }}</span>
            </div>
            <a href="#" class="text-accent hover:text-accent/80 text-sm font-medium">{{ t('current.learn_more') }} →</a>
          </div>

          <!-- Project 2 -->
          <div class="bg-card rounded-xl p-6 border border-border hover:border-accent/50 transition-colors">
            <div class="flex items-center gap-2 mb-4">
              <div class="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full">
                {{ t('current.status.open') }}
              </div>
            </div>
            <h3 class="text-lg font-semibold mb-3">{{ t('current.projects.nordic.title') }}</h3>
            <p class="text-muted text-sm mb-4 leading-relaxed">
              {{ t('current.projects.nordic.description') }}
            </p>
            <div class="flex items-center gap-4 text-xs text-muted mb-4">
              <span>{{ t('current.projects.nordic.date') }}</span>
              <span>{{ t('current.projects.nordic.location') }}</span>
            </div>
            <a href="#" class="text-accent hover:text-accent/80 text-sm font-medium">{{ t('current.learn_more') }} →</a>
          </div>

          <!-- Project 3 -->
          <div class="bg-card rounded-xl p-6 border border-border hover:border-accent/50 transition-colors">
            <div class="flex items-center gap-2 mb-4">
              <div class="px-3 py-1 bg-red-500/20 text-red-400 text-sm font-medium rounded-full">
                {{ t('current.status.full') }}
              </div>
            </div>
            <h3 class="text-lg font-semibold mb-3">{{ t('current.projects.wasteland.title') }}</h3>
            <p class="text-muted text-sm mb-4 leading-relaxed">
              {{ t('current.projects.wasteland.description') }}
            </p>
            <div class="flex items-center gap-4 text-xs text-muted mb-4">
              <span>{{ t('current.projects.wasteland.date') }}</span>
              <span>{{ t('current.projects.wasteland.location') }}</span>
            </div>
            <a href="#" class="text-accent hover:text-accent/80 text-sm font-medium">{{ t('current.learn_more') }} →</a>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="text-center bg-card rounded-2xl p-12 border border-border">
          <h2 class="text-2xl font-bold mb-4 text-accent">{{ t('current.cta.title') }}</h2>
          <p class="text-muted mb-8 max-w-2xl mx-auto">
            {{ t('current.cta.description') }}
          </p>
          <a 
            routerLink="/contact" 
            class="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors"
          >
            {{ t('current.cta.button') }}
          </a>
        </div>
      </div>
    </div>
  `,
  styleUrl: './current-projects.component.css',
})
export class CurrentProjectsComponent {
  localeService = inject(LocaleService);

  t(key: string): string {
    return this.localeService.translate(key);
  }
}
