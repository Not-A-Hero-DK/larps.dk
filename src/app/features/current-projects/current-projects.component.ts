import { Component, inject } from '@angular/core';
import { LocaleService } from '../../shared/services/locale.service';

@Component({
  selector: 'larp-current-projects',
  template: `
    <div class="relative min-h-screen text-foreground pt-32 pb-16 px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h1
            class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-header bg-clip-text text-transparent"
          >
            Current Projects
          </h1>
          <p class="text-lg text-muted max-w-4xl mx-auto leading-relaxed">
            Upcoming LARP adventures currently hosted on Heimdal Portal.
          </p>
        </div>
        <div class="text-center text-muted">
          <p>Projects will be displayed here.</p>
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
