import { PreviousProjectsComponent } from './previous-projects.component';

describe('PreviousProjectsComponent', () => {
  let component: PreviousProjectsComponent;

  beforeEach(() => {
    // Mock LocaleService
    const mockLocaleService = {
      translate: vi.fn((key: string) => key)
    };

    component = new PreviousProjectsComponent();
    component.localeService = mockLocaleService as any;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have localeService', () => {
    expect(component.localeService).toBeTruthy();
  });

  it('should have translate method', () => {
    const result = component.t('previous.title');
    expect(result).toBe('previous.title');
    expect(component.localeService.translate).toHaveBeenCalledWith('previous.title');
  });
});