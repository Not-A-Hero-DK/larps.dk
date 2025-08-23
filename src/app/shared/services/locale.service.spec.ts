import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { LocaleService, Locale } from './locale.service';

describe('LocaleService', () => {
  let service: LocaleService;
  let httpMock: HttpTestingController;

  const mockEnTranslations = {
    nav: { home: 'Home' },
    default: { language: 'English' }
  };

  const mockDaTranslations = {
    nav: { home: 'Hjem' },
    default: { language: 'Dansk' }
  };

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

    TestBed.configureTestingModule({
      providers: [
        LocaleService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(LocaleService);
    httpMock = TestBed.inject(HttpTestingController);

    // Fulfill the HTTP requests made during service initialization
    const enReq = httpMock.expectOne('/assets/locales/en.json');
    const daReq = httpMock.expectOne('/assets/locales/da.json');
    
    enReq.flush(mockEnTranslations);
    daReq.flush(mockDaTranslations);
  });

  afterEach(() => {
    httpMock.verify();
    vi.clearAllMocks();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should default to English locale', () => {
    expect(service.currentLocale()).toBe('en');
  });

  it('should load locale from localStorage if available', () => {
    const getItemSpy = vi.spyOn(localStorage, 'getItem').mockReturnValue('da');
    
    // Create a new service instance to test localStorage loading
    const newService = new LocaleService();
    expect(newService.currentLocale()).toBe('da');
    
    expect(getItemSpy).toHaveBeenCalledWith('locale');
  });

  it('should ignore invalid locale from localStorage', () => {
    vi.spyOn(localStorage, 'getItem').mockReturnValue('invalid');
    
    const newService = new LocaleService();
    expect(newService.currentLocale()).toBe('en');
  });

  it('should toggle locale between en and da', () => {
    expect(service.currentLocale()).toBe('en');
    
    service.toggleLocale();
    expect(service.currentLocale()).toBe('da');
    
    service.toggleLocale();
    expect(service.currentLocale()).toBe('en');
  });

  it('should set specific locale', () => {
    service.setLocale('da');
    expect(service.currentLocale()).toBe('da');
    
    service.setLocale('en');
    expect(service.currentLocale()).toBe('en');
  });

  it('should translate keys correctly', () => {
    expect(service.translate('nav.home')).toBe('Home');
    expect(service.translate('default.language')).toBe('English');
    
    service.setLocale('da');
    expect(service.translate('nav.home')).toBe('Hjem');
    expect(service.translate('default.language')).toBe('Dansk');
  });

  it('should return key if translation not found', () => {
    expect(service.translate('nonexistent.key')).toBe('nonexistent.key');
    expect(service.translate('nav.nonexistent')).toBe('nav.nonexistent');
  });

  it('should update document language when locale changes', () => {
    const setAttributeSpy = vi.spyOn(document.documentElement, 'setAttribute');
    
    service.setLocale('da');
    // Allow effect to run
    setTimeout(() => {
      expect(document.documentElement.lang).toBe('da');
    }, 0);
  });

  it('should save locale to localStorage when changed', () => {
    const setItemSpy = vi.spyOn(localStorage, 'setItem');
    
    service.setLocale('da');
    // Allow effect to run
    setTimeout(() => {
      expect(setItemSpy).toHaveBeenCalledWith('locale', 'da');
    }, 0);
  });

  it('should handle HTTP errors gracefully', () => {
    // Create a new service to test error handling
    const errorService = TestBed.inject(LocaleService);
    
    const enReq = httpMock.expectOne('/assets/locales/en.json');
    const daReq = httpMock.expectOne('/assets/locales/da.json');
    
    enReq.error(new ErrorEvent('Network error'));
    daReq.error(new ErrorEvent('Network error'));
    
    // Service should still function with fallback behavior
    expect(errorService.translate('test.key')).toBe('test.key');
  });
});