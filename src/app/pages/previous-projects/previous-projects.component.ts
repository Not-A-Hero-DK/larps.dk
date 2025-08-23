import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-previous-projects',
  imports: [CommonModule],
  template: `
    <div class="relative min-h-screen text-foreground pt-32 pb-16 px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-header bg-clip-text text-transparent">
            Previous Projects
          </h1>
          <p class="text-lg text-muted max-w-4xl mx-auto leading-relaxed">
            Legendary adventures that have already concluded.
          </p>
        </div>
        <div class="text-center text-muted">
          <p>Previous projects will be displayed here.</p>
        </div>
      </div>
    </div>
  `,
  styleUrl: './previous-projects.component.css'
})
export class PreviousProjectsComponent {
  localeService = inject(LocaleService);

  t(key: string): string {
    return this.localeService.translate(key);
  }
}