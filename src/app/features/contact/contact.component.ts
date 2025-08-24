import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslatePipe } from '@shared/pipes';

@Component({
  selector: 'larp-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [ReactiveFormsModule, TranslatePipe],
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);

  public submitStatus = '';
  public isSubmitting = false;
  public contactForm = this.fb.group({
    name: this.fb.control<string>('', [Validators.required, Validators.minLength(1)]),
    email: this.fb.control<string | null>(null, [Validators.required, Validators.email]),
    larpName: this.fb.control<string | null>(null, [Validators.required, Validators.minLength(2)]),
    message: this.fb.control<string | null>(null, [Validators.required, Validators.minLength(10)]),
  });

  public onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      // In a real implementation, this would send the form data to a server
      console.log('Form submitted:', this.contactForm.value);

      // Simulate API call
      setTimeout(() => {
        this.isSubmitting = false;
        // Show success message or redirect
        alert('Form submitted successfully!');
        this.contactForm.reset();
      }, 2000);
    }
  }
}
