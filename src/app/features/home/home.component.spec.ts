import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;

  beforeEach(() => {
    // Mock LocaleService
    const mockLocaleService = {
      translate: vi.fn((key: string) => key)
    };

    component = new HomeComponent();
    component.localeService = mockLocaleService as any;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have localeService', () => {
    expect(component.localeService).toBeTruthy();
  });

  it('should have translate method', () => {
    const result = component.t('home.title');
    expect(result).toBe('home.title');
    expect(component.localeService.translate).toHaveBeenCalledWith('home.title');
  });
});