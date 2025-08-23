import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LocaleService } from '../../shared/services/locale.service';

@Component({
  selector: 'larp-contact',
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="relative min-h-screen text-foreground pt-32 pb-16 px-8">
      <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-16">
          <h1
            class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-header bg-clip-text text-transparent"
          >
            {{ t('contact.title') }}
          </h1>
          <p class="text-lg text-muted max-w-4xl mx-auto leading-relaxed">
            {{ t('contact.subtitle') }}
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-16">
          <!-- Contact Form -->
          <div class="bg-card rounded-2xl p-8 border border-border">
            <h2 class="text-2xl font-bold mb-6 text-accent">{{ t('contact.form.title') }}</h2>
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium mb-2">{{ t('contact.form.name') }}</label>
                <input
                  type="text"
                  id="name"
                  formControlName="name"
                  class="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-accent focus:outline-none transition-colors"
                  [placeholder]="t('contact.form.name_placeholder')"
                />
                @if (contactForm.get('name')?.invalid && contactForm.get('name')?.touched) {
                  <p class="text-red-400 text-sm mt-1">{{ t('contact.form.name_required') }}</p>
                }
              </div>

              <div>
                <label for="email" class="block text-sm font-medium mb-2">{{ t('contact.form.email') }}</label>
                <input
                  type="email"
                  id="email"
                  formControlName="email"
                  class="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-accent focus:outline-none transition-colors"
                  [placeholder]="t('contact.form.email_placeholder')"
                />
                @if (contactForm.get('email')?.invalid && contactForm.get('email')?.touched) {
                  <p class="text-red-400 text-sm mt-1">{{ t('contact.form.email_required') }}</p>
                }
              </div>

              <div>
                <label for="organization" class="block text-sm font-medium mb-2">{{ t('contact.form.organization') }}</label>
                <input
                  type="text"
                  id="organization"
                  formControlName="organization"
                  class="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-accent focus:outline-none transition-colors"
                  [placeholder]="t('contact.form.organization_placeholder')"
                />
              </div>

              <div>
                <label for="projectType" class="block text-sm font-medium mb-2">{{ t('contact.form.project_type') }}</label>
                <select
                  id="projectType"
                  formControlName="projectType"
                  class="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-accent focus:outline-none transition-colors"
                >
                  <option value="">{{ t('contact.form.project_type_placeholder') }}</option>
                  <option value="fantasy">{{ t('contact.form.project_types.fantasy') }}</option>
                  <option value="scifi">{{ t('contact.form.project_types.scifi') }}</option>
                  <option value="horror">{{ t('contact.form.project_types.horror') }}</option>
                  <option value="historical">{{ t('contact.form.project_types.historical') }}</option>
                  <option value="modern">{{ t('contact.form.project_types.modern') }}</option>
                  <option value="other">{{ t('contact.form.project_types.other') }}</option>
                </select>
              </div>

              <div>
                <label for="message" class="block text-sm font-medium mb-2">{{ t('contact.form.message') }}</label>
                <textarea
                  id="message"
                  formControlName="message"
                  rows="5"
                  class="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-accent focus:outline-none transition-colors resize-none"
                  [placeholder]="t('contact.form.message_placeholder')"
                ></textarea>
                @if (contactForm.get('message')?.invalid && contactForm.get('message')?.touched) {
                  <p class="text-red-400 text-sm mt-1">{{ t('contact.form.message_required') }}</p>
                }
              </div>

              <button
                type="submit"
                [disabled]="contactForm.invalid || isSubmitting"
                class="w-full px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {{ isSubmitting ? t('contact.form.submitting') : t('contact.form.submit') }}
              </button>
            </form>
          </div>

          <!-- Contact Information -->
          <div class="space-y-8">
            <!-- Contact Details -->
            <div class="bg-card rounded-2xl p-8 border border-border">
              <h2 class="text-2xl font-bold mb-6 text-accent">{{ t('contact.info.title') }}</h2>
              <div class="space-y-6">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold mb-1">{{ t('contact.info.email.title') }}</h3>
                    <p class="text-muted text-sm mb-2">{{ t('contact.info.email.description') }}</p>
                    <a href="mailto:hosting@larps.dk" class="text-accent hover:text-accent/80 font-medium">
                      hosting@larps.dk
                    </a>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold mb-1">{{ t('contact.info.phone.title') }}</h3>
                    <p class="text-muted text-sm mb-2">{{ t('contact.info.phone.description') }}</p>
                    <a href="tel:+4530238112" class="text-accent hover:text-accent/80 font-medium">
                      +45 30 23 81 12
                    </a>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold mb-1">{{ t('contact.info.hours.title') }}</h3>
                    <p class="text-muted text-sm">{{ t('contact.info.hours.description') }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- FAQ -->
            <div class="bg-card rounded-2xl p-8 border border-border">
              <h2 class="text-2xl font-bold mb-6 text-accent">{{ t('contact.faq.title') }}</h2>
              <div class="space-y-4">
                <div>
                  <h3 class="font-semibold mb-2">{{ t('contact.faq.hosting.question') }}</h3>
                  <p class="text-muted text-sm">{{ t('contact.faq.hosting.answer') }}</p>
                </div>
                <div>
                  <h3 class="font-semibold mb-2">{{ t('contact.faq.requirements.question') }}</h3>
                  <p class="text-muted text-sm">{{ t('contact.faq.requirements.answer') }}</p>
                </div>
                <div>
                  <h3 class="font-semibold mb-2">{{ t('contact.faq.timeline.question') }}</h3>
                  <p class="text-muted text-sm">{{ t('contact.faq.timeline.answer') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  localeService = inject(LocaleService);

  contactForm: FormGroup;
  isSubmitting = false;

  constructor() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      organization: [''],
      projectType: [''],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  t(key: string): string {
    return this.localeService.translate(key);
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      // In a real implementation, this would send the form data to a server
      console.log('Form submitted:', this.contactForm.value);
      
      // Simulate API call
      setTimeout(() => {
        this.isSubmitting = false;
        // Show success message or redirect
        alert(this.t('contact.form.success'));
        this.contactForm.reset();
      }, 2000);
    }
  }
}
