import { Component, inject } from '@angular/core';
import { LocaleService } from '@shared/services';

@Component({
  selector: 'larp-previous-projects',
  template: `
    <div class="relative min-h-screen text-foreground pt-32 pb-16 px-8">
      <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-16">
          <h1
            class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-header bg-clip-text text-transparent"
          >
            {{ t('previous.title') }}
          </h1>
          <p class="text-lg text-muted max-w-4xl mx-auto leading-relaxed">
            {{ t('previous.subtitle') }}
          </p>
        </div>

        <!-- Filters -->
        <div class="flex flex-wrap gap-4 justify-center mb-12">
          <button class="px-4 py-2 bg-accent text-white rounded-lg font-medium">{{ t('previous.filters.all') }}</button>
          <button class="px-4 py-2 bg-card border border-border text-foreground rounded-lg hover:border-accent/50 transition-colors">{{ t('previous.filters.fantasy') }}</button>
          <button class="px-4 py-2 bg-card border border-border text-foreground rounded-lg hover:border-accent/50 transition-colors">{{ t('previous.filters.scifi') }}</button>
          <button class="px-4 py-2 bg-card border border-border text-foreground rounded-lg hover:border-accent/50 transition-colors">{{ t('previous.filters.horror') }}</button>
          <button class="px-4 py-2 bg-card border border-border text-foreground rounded-lg hover:border-accent/50 transition-colors">{{ t('previous.filters.historical') }}</button>
        </div>

        <!-- Projects Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <!-- Project 1 -->
          <div class="bg-card rounded-xl border border-border overflow-hidden hover:border-accent/50 transition-colors">
            <div class="h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
              <div class="text-center">
                <svg class="w-16 h-16 text-accent mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
                <div class="px-3 py-1 bg-gray-500/20 text-gray-400 text-sm font-medium rounded-full">
                  {{ t('previous.status.completed') }}
                </div>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-lg font-semibold mb-2">{{ t('previous.projects.vampire.title') }}</h3>
              <p class="text-muted text-sm mb-4 leading-relaxed">
                {{ t('previous.projects.vampire.description') }}
              </p>
              <div class="flex items-center justify-between text-xs text-muted mb-4">
                <span>{{ t('previous.projects.vampire.date') }}</span>
                <span>{{ t('previous.projects.vampire.participants') }}</span>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span class="text-sm">4.8</span>
                </div>
                <a href="#" class="text-accent hover:text-accent/80 text-sm font-medium">{{ t('previous.view_gallery') }} →</a>
              </div>
            </div>
          </div>

          <!-- Project 2 -->
          <div class="bg-card rounded-xl border border-border overflow-hidden hover:border-accent/50 transition-colors">
            <div class="h-48 bg-gradient-to-br from-green-500/20 to-yellow-500/20 flex items-center justify-center">
              <div class="text-center">
                <svg class="w-16 h-16 text-accent mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
                <div class="px-3 py-1 bg-gray-500/20 text-gray-400 text-sm font-medium rounded-full">
                  {{ t('previous.status.completed') }}
                </div>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-lg font-semibold mb-2">{{ t('previous.projects.medieval.title') }}</h3>
              <p class="text-muted text-sm mb-4 leading-relaxed">
                {{ t('previous.projects.medieval.description') }}
              </p>
              <div class="flex items-center justify-between text-xs text-muted mb-4">
                <span>{{ t('previous.projects.medieval.date') }}</span>
                <span>{{ t('previous.projects.medieval.participants') }}</span>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span class="text-sm">4.9</span>
                </div>
                <a href="#" class="text-accent hover:text-accent/80 text-sm font-medium">{{ t('previous.view_gallery') }} →</a>
              </div>
            </div>
          </div>

          <!-- Project 3 -->
          <div class="bg-card rounded-xl border border-border overflow-hidden hover:border-accent/50 transition-colors">
            <div class="h-48 bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center">
              <div class="text-center">
                <svg class="w-16 h-16 text-accent mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <div class="px-3 py-1 bg-gray-500/20 text-gray-400 text-sm font-medium rounded-full">
                  {{ t('previous.status.completed') }}
                </div>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-lg font-semibold mb-2">{{ t('previous.projects.cyberpunk.title') }}</h3>
              <p class="text-muted text-sm mb-4 leading-relaxed">
                {{ t('previous.projects.cyberpunk.description') }}
              </p>
              <div class="flex items-center justify-between text-xs text-muted mb-4">
                <span>{{ t('previous.projects.cyberpunk.date') }}</span>
                <span>{{ t('previous.projects.cyberpunk.participants') }}</span>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span class="text-sm">4.7</span>
                </div>
                <a href="#" class="text-accent hover:text-accent/80 text-sm font-medium">{{ t('previous.view_gallery') }} →</a>
              </div>
            </div>
          </div>

          <!-- More projects... -->
          <div class="bg-card rounded-xl border border-border overflow-hidden hover:border-accent/50 transition-colors">
            <div class="h-48 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
              <div class="text-center">
                <svg class="w-16 h-16 text-accent mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                </svg>
                <div class="px-3 py-1 bg-gray-500/20 text-gray-400 text-sm font-medium rounded-full">
                  {{ t('previous.status.completed') }}
                </div>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-lg font-semibold mb-2">{{ t('previous.projects.steampunk.title') }}</h3>
              <p class="text-muted text-sm mb-4 leading-relaxed">
                {{ t('previous.projects.steampunk.description') }}
              </p>
              <div class="flex items-center justify-between text-xs text-muted mb-4">
                <span>{{ t('previous.projects.steampunk.date') }}</span>
                <span>{{ t('previous.projects.steampunk.participants') }}</span>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span class="text-sm">4.6</span>
                </div>
                <a href="#" class="text-accent hover:text-accent/80 text-sm font-medium">{{ t('previous.view_gallery') }} →</a>
              </div>
            </div>
          </div>

          <div class="bg-card rounded-xl border border-border overflow-hidden hover:border-accent/50 transition-colors">
            <div class="h-48 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 flex items-center justify-center">
              <div class="text-center">
                <svg class="w-16 h-16 text-accent mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                </svg>
                <div class="px-3 py-1 bg-gray-500/20 text-gray-400 text-sm font-medium rounded-full">
                  {{ t('previous.status.completed') }}
                </div>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-lg font-semibold mb-2">{{ t('previous.projects.space.title') }}</h3>
              <p class="text-muted text-sm mb-4 leading-relaxed">
                {{ t('previous.projects.space.description') }}
              </p>
              <div class="flex items-center justify-between text-xs text-muted mb-4">
                <span>{{ t('previous.projects.space.date') }}</span>
                <span>{{ t('previous.projects.space.participants') }}</span>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span class="text-sm">4.9</span>
                </div>
                <a href="#" class="text-accent hover:text-accent/80 text-sm font-medium">{{ t('previous.view_gallery') }} →</a>
              </div>
            </div>
          </div>

          <div class="bg-card rounded-xl border border-border overflow-hidden hover:border-accent/50 transition-colors">
            <div class="h-48 bg-gradient-to-br from-amber-500/20 to-red-500/20 flex items-center justify-center">
              <div class="text-center">
                <svg class="w-16 h-16 text-accent mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
                <div class="px-3 py-1 bg-gray-500/20 text-gray-400 text-sm font-medium rounded-full">
                  {{ t('previous.status.completed') }}
                </div>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-lg font-semibold mb-2">{{ t('previous.projects.postapoc.title') }}</h3>
              <p class="text-muted text-sm mb-4 leading-relaxed">
                {{ t('previous.projects.postapoc.description') }}
              </p>
              <div class="flex items-center justify-between text-xs text-muted mb-4">
                <span>{{ t('previous.projects.postapoc.date') }}</span>
                <span>{{ t('previous.projects.postapoc.participants') }}</span>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span class="text-sm">4.8</span>
                </div>
                <a href="#" class="text-accent hover:text-accent/80 text-sm font-medium">{{ t('previous.view_gallery') }} →</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Load More -->
        <div class="text-center">
          <button class="px-8 py-4 bg-card border border-border text-foreground rounded-lg hover:border-accent/50 transition-colors font-medium">
            {{ t('previous.load_more') }}
          </button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./previous-projects.component.scss'],
})
export class PreviousProjectsComponent {
  localeService = inject(LocaleService);

  t(key: string): string {
    return this.localeService.translate(key);
  }
}
