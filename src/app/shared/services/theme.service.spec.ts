import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
    
    // Mock document.documentElement.setAttribute
    vi.spyOn(document.documentElement, 'setAttribute');
    
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize with dark theme as default', () => {
    expect(service.isDark()).toBe(true);
  });

  it('should set theme from localStorage if available', () => {
    localStorage.setItem('isDarkTheme', 'false');
    
    service = TestBed.inject(ThemeService);
    
    expect(service.isDark()).toBe(false);
  });

  it('should toggle theme', () => {
    const initialValue = service.isDark();
    
    service.toggleTheme();
    
    expect(service.isDark()).toBe(!initialValue);
  });

  it('should set data-theme attribute on document element', () => {
    service.toggleTheme(); // This will trigger the effect
    
    expect(document.documentElement.setAttribute).toHaveBeenCalledWith(
      'data-theme', 
      service.isDark() ? 'dark' : 'light'
    );
  });

  it('should save theme preference to localStorage', () => {
    service.toggleTheme();
    
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'isDarkTheme', 
      service.isDark().toString()
    );
  });
});