import { CurrentProjectsComponent } from './current-projects.component';

describe('CurrentProjectsComponent', () => {
  let component: CurrentProjectsComponent;

  beforeEach(() => {
    // Mock LocaleService
    const mockLocaleService = {
      translate: vi.fn((key: string) => key)
    };

    component = new CurrentProjectsComponent();
    component.localeService = mockLocaleService as any;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have localeService', () => {
    expect(component.localeService).toBeTruthy();
  });

  it('should have translate method', () => {
    const result = component.t('current.title');
    expect(result).toBe('current.title');
    expect(component.localeService.translate).toHaveBeenCalledWith('current.title');
  });
});