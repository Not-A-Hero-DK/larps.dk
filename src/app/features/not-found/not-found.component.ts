import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LocaleService } from '@shared/services';

@Component({
  selector: 'larp-not-found',
  imports: [RouterModule],
  template: `
    <div class="min-h-screen flex items-center justify-center px-8">
      <div class="text-center">
        <h1 class="text-6xl font-bold text-accent mb-4">404</h1>
        <h2 class="text-2xl font-bold text-foreground mb-4">Page Not Found</h2>
        <p class="text-muted mb-8">The page you're looking for doesn't exist.</p>
        <a
          routerLink="/"
          class="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors"
        >
          Return Home
        </a>
      </div>
    </div>
  `,
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {
  localeService = inject(LocaleService);

  t(key: string): string {
    return this.localeService.translate(key);
  }
}
