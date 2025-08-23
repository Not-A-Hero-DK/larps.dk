import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;

  beforeEach(() => {
    // Mock LocaleService
    const mockLocaleService = {
      translate: vi.fn((key: string) => key)
    };

    component = new FooterComponent();
    component.localeService = mockLocaleService as any;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have localeService', () => {
    expect(component.localeService).toBeTruthy();
  });

  it('should have translate method', () => {
    const result = component.t('footer.brand_title');
    expect(result).toBe('footer.brand_title');
    expect(component.localeService.translate).toHaveBeenCalledWith('footer.brand_title');
  });
});