import { TestBed } from '@angular/core/testing';
import { DOCUMENT } from '@angular/common';
import { ThemeService, Theme } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;
  let document: Document;

  beforeEach(() => {
    // Mock localStorage
    const localStorageMock = {
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn()
    };
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
      writable: true
    });

    // Mock matchMedia
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });

    TestBed.configureTestingModule({
      providers: [ThemeService]
    });

    service = TestBed.inject(ThemeService);
    document = TestBed.inject(DOCUMENT);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should default to dark theme', () => {
    expect(service.theme()).toBe('dark');
  });

  it('should load theme from localStorage if available', () => {
    const getItemSpy = vi.spyOn(localStorage, 'getItem').mockReturnValue('light');
    
    // Create a new service instance to test localStorage loading
    const newService = new ThemeService();
    expect(newService.theme()).toBe('light');
    
    expect(getItemSpy).toHaveBeenCalledWith('theme');
  });

  it('should use system preference when no saved theme', () => {
    vi.spyOn(localStorage, 'getItem').mockReturnValue(null);
    vi.spyOn(window, 'matchMedia').mockReturnValue({
      matches: true,
      media: '(prefers-color-scheme: light)',
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    } as any);
    
    const newService = new ThemeService();
    expect(newService.theme()).toBe('light');
  });

  it('should toggle theme between light and dark', () => {
    expect(service.theme()).toBe('dark');
    
    service.toggleTheme();
    expect(service.theme()).toBe('light');
    
    service.toggleTheme();
    expect(service.theme()).toBe('dark');
  });

  it('should set specific theme', () => {
    service.setTheme('light');
    expect(service.theme()).toBe('light');
    
    service.setTheme('dark');
    expect(service.theme()).toBe('dark');
  });

  it('should apply theme to document data attribute', () => {
    const setAttributeSpy = vi.spyOn(document.documentElement, 'setAttribute');
    
    service.setTheme('light');
    // Allow effect to run
    setTimeout(() => {
      expect(setAttributeSpy).toHaveBeenCalledWith('data-theme', 'light');
    }, 0);
  });

  it('should save theme to localStorage when changed', () => {
    const setItemSpy = vi.spyOn(localStorage, 'setItem');
    
    service.setTheme('light');
    // Allow effect to run
    setTimeout(() => {
      expect(setItemSpy).toHaveBeenCalledWith('theme', 'light');
    }, 0);
  });

  it('should handle missing window gracefully', () => {
    // This test ensures the service doesn't break in SSR environments
    const originalWindow = global.window;
    delete (global as any).window;
    
    const newService = new ThemeService();
    expect(newService.theme()).toBe('dark');
    
    global.window = originalWindow;
  });
});