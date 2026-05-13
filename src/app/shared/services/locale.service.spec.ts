import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { LocaleService } from './locale.service';

describe('LocaleService', () => {
  let service: LocaleService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    localStorage.clear();
    vi.spyOn(document.documentElement, 'setAttribute');
    
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    
    service = TestBed.inject(LocaleService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize with Danish as default', () => {
    expect(service.isDanish()).toBe(true);
  });

  it('should load locale from localStorage', () => {
    localStorage.setItem('isDanish', 'false');
    
    const newService = TestBed.inject(LocaleService);
    
    expect(newService.isDanish()).toBe(false);
  });

  it('should toggle locale', () => {
    const initialValue = service.isDanish();
    
    service.toggleLocale();
    
    expect(service.isDanish()).toBe(!initialValue);
  });

  it('should set Danish locale', () => {
    service.setDanishLocale(false);
    expect(service.isDanish()).toBe(false);
    
    service.setDanishLocale(true);
    expect(service.isDanish()).toBe(true);
  });

  it('should set document language attribute', () => {
    service.toggleLocale();
    
    expect(document.documentElement.setAttribute).toHaveBeenCalledWith(
      'lang', 
      service.isDanish() ? 'da' : 'en'
    );
  });

  it('should load translations from JSON files', async () => {
    const enTranslations = { 'nav.home': 'Home' };
    const daTranslations = { 'nav.home': 'Hjem' };

    const loadPromise = service.loadTranslations();

    const enReq = httpTestingController.expectOne('/assets/locales/en.json');
    const daReq = httpTestingController.expectOne('/assets/locales/da.json');

    enReq.flush(enTranslations);
    daReq.flush(daTranslations);

    await loadPromise;

    expect(service.translate('nav.home')).toBe('Hjem'); // Danish is default
  });

  it('should translate nested keys', async () => {
    const translations = { 
      nav: { 
        home: 'Hjem',
        about: 'Om'
      } 
    };

    service.loadTranslations();
    
    const enReq = httpTestingController.expectOne('/assets/locales/en.json');
    const daReq = httpTestingController.expectOne('/assets/locales/da.json');

    enReq.flush({});
    daReq.flush(translations);

    expect(service.translate('nav.home')).toBe('Hjem');
    expect(service.translate('nav.about')).toBe('Om');
  });

  it('should return key if translation not found', () => {
    expect(service.translate('nonexistent.key')).toBe('nonexistent.key');
  });

  it('should handle translation loading errors', async () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    
    const loadPromise = service.loadTranslations();

    const enReq = httpTestingController.expectOne('/assets/locales/en.json');
    const daReq = httpTestingController.expectOne('/assets/locales/da.json');

    enReq.error(new ProgressEvent('error'));
    daReq.error(new ProgressEvent('error'));

    await loadPromise;

    expect(consoleSpy).toHaveBeenCalledWith('Failed to load translations:', expect.any(Error));
  });

  it('should have correct navigation items', () => {
    expect(service.navItems).toEqual([
      { href: '/', label: 'nav.home' },
      { href: '/current-projects', label: 'nav.current' },
      { href: '/previous-projects', label: 'nav.previous' },
      { href: '/about', label: 'nav.about' },
      { href: '/contact', label: 'nav.contact' },
    ]);
  });
});