import { Component, inject } from '@angular/core';
import { LocaleService } from '../../shared/services/locale.service';

@Component({
  selector: 'larp-about',
  template: `
    <div class="relative min-h-screen text-foreground pt-32 pb-16 px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h1
            class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-header bg-clip-text text-transparent"
          >
            About Heimdal Portal
          </h1>
          <p class="text-lg text-muted max-w-4xl mx-auto leading-relaxed">
            Guardian of the digital bridge between LARP organizers and their communities.
          </p>
        </div>
        <div class="text-center text-muted">
          <p>About content will be displayed here.</p>
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
