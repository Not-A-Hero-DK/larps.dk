import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;

  beforeEach(() => {
    // Mock dependencies
    const mockLocaleService = {
      translate: vi.fn((key: string) => key)
    };

    const mockFormBuilder = {
      group: vi.fn().mockReturnValue({
        get: vi.fn().mockReturnValue({
          hasError: vi.fn().mockReturnValue(false),
          setValue: vi.fn(),
          markAsTouched: vi.fn()
        }),
        patchValue: vi.fn(),
        valid: true,
        reset: vi.fn()
      })
    };

    component = new ContactComponent();
    component.localeService = mockLocaleService as any;
    component.contactForm = mockFormBuilder.group({}) as any;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have localeService', () => {
    expect(component.localeService).toBeTruthy();
  });

  it('should have contactForm', () => {
    expect(component.contactForm).toBeTruthy();
  });

  it('should have translate method', () => {
    const result = component.t('contact.title');
    expect(result).toBe('contact.title');
    expect(component.localeService.translate).toHaveBeenCalledWith('contact.title');
  });

  it('should initialize isSubmitting as false', () => {
    expect(component.isSubmitting).toBe(false);
  });

  it('should have onSubmit method', () => {
    expect(component.onSubmit).toBeDefined();
    expect(typeof component.onSubmit).toBe('function');
  });
});