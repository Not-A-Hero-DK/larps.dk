import { Component, inject } from '@angular/core';
import { LocaleService } from '../../shared/services/locale.service';

@Component({
  selector: 'larp-contact',
  template: `
    <div class="relative min-h-screen text-foreground pt-32 pb-16 px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h1
            class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-header bg-clip-text text-transparent"
          >
            Contact Us
          </h1>
          <p class="text-lg text-muted max-w-4xl mx-auto leading-relaxed">
            Ready to bring your LARP to the digital realm? Get in touch with us.
          </p>
        </div>
        <div class="text-center text-muted">
          <p>Contact form will be displayed here.</p>
          <p class="mt-4">
            Email:
            <a href="mailto:hosting@larps.dk" class="text-accent hover:text-accent/80"
              >hosting@larps.dk</a
            >
          </p>
        </div>
      </div>
    </div>
  `,
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  localeService = inject(LocaleService);

  t(key: string): string {
    return this.localeService.translate(key);
  }
}
