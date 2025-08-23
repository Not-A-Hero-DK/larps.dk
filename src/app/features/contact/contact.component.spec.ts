import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { ContactComponent } from './contact.component';
import { LocaleService } from '../../shared/services/locale.service';

// Mock LocaleService
const mockLocaleService = {
  translate: vi.fn((key: string) => {
    const translations: Record<string, string> = {
      'contact.title': 'Contact Us',
      'contact.subtitle': 'Ready to bring your LARP to the digital realm?',
      'contact.form.title': 'Get Your Project Started',
      'contact.form.name': 'Full Name',
      'contact.form.name_placeholder': 'Enter your full name',
      'contact.form.name_required': 'Name is required',
      'contact.form.email': 'Email Address',
      'contact.form.email_placeholder': 'Enter your email address',
      'contact.form.email_required': 'Valid email is required',
      'contact.form.organization': 'Organization/Group',
      'contact.form.organization_placeholder': 'LARP group, organization, or event name',
      'contact.form.project_type': 'Project Type',
      'contact.form.project_type_placeholder': 'Select project type',
      'contact.form.project_types.fantasy': 'Fantasy',
      'contact.form.project_types.scifi': 'Science Fiction',
      'contact.form.project_types.horror': 'Horror',
      'contact.form.project_types.historical': 'Historical',
      'contact.form.project_types.modern': 'Modern',
      'contact.form.project_types.other': 'Other',
      'contact.form.message': 'Project Description',
      'contact.form.message_placeholder': 'Tell us about your LARP project...',
      'contact.form.message_required': 'Please describe your project',
      'contact.form.submit': 'Send Message',
      'contact.form.submitting': 'Sending...',
      'contact.form.success': 'Thank you! We\'ll get back to you within 24 hours.',
      'contact.info.title': 'Get in Touch',
      'contact.info.email.title': 'Email Us',
      'contact.info.email.description': 'For hosting requests and general inquiries',
      'contact.info.phone.title': 'Call Us',
      'contact.info.phone.description': 'Available Monday-Friday, 9AM-5PM CET',
      'contact.info.hours.title': 'Response Time',
      'contact.info.hours.description': 'We typically respond within 24 hours',
      'contact.faq.title': 'Quick Questions',
      'contact.faq.hosting.question': 'Is hosting really free?',
      'contact.faq.hosting.answer': 'Yes! We provide free hosting with custom domains, SSL certificates, and professional support.',
      'contact.faq.requirements.question': 'What do you need from us?',
      'contact.faq.requirements.answer': 'Just basic information about your LARP, desired features, and any specific design preferences.',
      'contact.faq.timeline.question': 'How long does setup take?',
      'contact.faq.timeline.answer': 'Most projects are live within 1-2 weeks, depending on complexity and customization needs.'
    };
    return translations[key] || key;
  })
};

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    // Mock window.alert
    global.alert = vi.fn();

    await TestBed.configureTestingModule({
      imports: [ContactComponent, ReactiveFormsModule],
      providers: [
        FormBuilder,
        { provide: LocaleService, useValue: mockLocaleService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize contact form with proper validators', () => {
    expect(component.contactForm).toBeTruthy();
    expect(component.contactForm.get('name')?.hasError('required')).toBe(true);
    expect(component.contactForm.get('email')?.hasError('required')).toBe(true);
    expect(component.contactForm.get('message')?.hasError('required')).toBe(true);
    expect(component.contactForm.get('organization')?.hasError('required')).toBe(false);
    expect(component.contactForm.get('projectType')?.hasError('required')).toBe(false);
  });

  it('should validate email format', () => {
    const emailControl = component.contactForm.get('email');
    
    emailControl?.setValue('invalid-email');
    expect(emailControl?.hasError('email')).toBe(true);
    
    emailControl?.setValue('valid@email.com');
    expect(emailControl?.hasError('email')).toBe(false);
  });

  it('should validate minimum length for name and message', () => {
    const nameControl = component.contactForm.get('name');
    const messageControl = component.contactForm.get('message');
    
    nameControl?.setValue('a');
    expect(nameControl?.hasError('minlength')).toBe(true);
    
    messageControl?.setValue('short');
    expect(messageControl?.hasError('minlength')).toBe(true);
    
    nameControl?.setValue('John Doe');
    messageControl?.setValue('This is a longer message with more than 10 characters');
    expect(nameControl?.hasError('minlength')).toBe(false);
    expect(messageControl?.hasError('minlength')).toBe(false);
  });

  it('should render the contact form with all fields', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    
    expect(compiled.querySelector('#name')).toBeTruthy();
    expect(compiled.querySelector('#email')).toBeTruthy();
    expect(compiled.querySelector('#organization')).toBeTruthy();
    expect(compiled.querySelector('#projectType')).toBeTruthy();
    expect(compiled.querySelector('#message')).toBeTruthy();
    expect(compiled.querySelector('button[type="submit"]')).toBeTruthy();
  });

  it('should render contact information section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    
    expect(compiled.textContent).toContain('hosting@larps.dk');
    expect(compiled.textContent).toContain('+45 30 23 81 12');
  });

  it('should render FAQ section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    
    expect(compiled.textContent).toContain('Is hosting really free?');
    expect(compiled.textContent).toContain('What do you need from us?');
    expect(compiled.textContent).toContain('How long does setup take?');
  });

  it('should disable submit button when form is invalid', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const submitButton = compiled.querySelector('button[type="submit"]') as HTMLButtonElement;
    
    expect(submitButton.disabled).toBe(true);
  });

  it('should enable submit button when form is valid', () => {
    component.contactForm.patchValue({
      name: 'John Doe',
      email: 'john@example.com',
      message: 'This is a valid message with enough characters'
    });
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    const submitButton = compiled.querySelector('button[type="submit"]') as HTMLButtonElement;
    
    expect(submitButton.disabled).toBe(false);
  });

  it('should call onSubmit when form is submitted with valid data', () => {
    const onSubmitSpy = vi.spyOn(component, 'onSubmit');
    
    component.contactForm.patchValue({
      name: 'John Doe',
      email: 'john@example.com',
      message: 'This is a valid message with enough characters'
    });
    
    const compiled = fixture.nativeElement as HTMLElement;
    const form = compiled.querySelector('form') as HTMLFormElement;
    form.dispatchEvent(new Event('submit'));
    
    expect(onSubmitSpy).toHaveBeenCalled();
  });

  it('should handle form submission correctly', async () => {
    component.contactForm.patchValue({
      name: 'John Doe',
      email: 'john@example.com',
      message: 'This is a valid message with enough characters'
    });
    
    expect(component.isSubmitting).toBe(false);
    
    component.onSubmit();
    expect(component.isSubmitting).toBe(true);
    
    // Wait for the simulated async operation
    await new Promise(resolve => setTimeout(resolve, 2100));
    
    expect(component.isSubmitting).toBe(false);
    expect(global.alert).toHaveBeenCalledWith('Thank you! We\'ll get back to you within 24 hours.');
  });

  it('should show validation errors when fields are touched and invalid', () => {
    const nameControl = component.contactForm.get('name');
    const emailControl = component.contactForm.get('email');
    const messageControl = component.contactForm.get('message');
    
    nameControl?.markAsTouched();
    emailControl?.markAsTouched();
    messageControl?.markAsTouched();
    
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Name is required');
    expect(compiled.textContent).toContain('Valid email is required');
    expect(compiled.textContent).toContain('Please describe your project');
  });

  it('should use translate method for all text content', () => {
    component.t('contact.title');
    expect(mockLocaleService.translate).toHaveBeenCalledWith('contact.title');
  });
});