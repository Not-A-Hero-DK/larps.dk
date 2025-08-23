import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;

  beforeEach(() => {
    // Mock LocaleService
    const mockLocaleService = {
      translate: vi.fn((key: string) => key)
    };

    component = new NotFoundComponent();
    component.localeService = mockLocaleService as any;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have localeService', () => {
    expect(component.localeService).toBeTruthy();
  });

  it('should have translate method', () => {
    const result = component.t('not_found.title');
    expect(result).toBe('not_found.title');
    expect(component.localeService.translate).toHaveBeenCalledWith('not_found.title');
  });
});