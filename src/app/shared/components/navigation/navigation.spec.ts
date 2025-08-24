import { Navigation } from './navigation';
import { LocaleService } from '@shared/services/locale.service';
import { ThemeService } from '@shared/services/theme.service';
import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('Navigation', () => {
  let component: Navigation;
  let localeService: LocaleService;
  let themeService: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        LocaleService,
        ThemeService
      ]
    });

    localeService = TestBed.inject(LocaleService);
    themeService = TestBed.inject(ThemeService);
    component = new Navigation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with mobile menu closed', () => {
    expect(component.isMobileMenuOpen()).toBe(false);
  });

  it('should toggle mobile menu', () => {
    expect(component.isMobileMenuOpen()).toBe(false);
    
    component.toggleMobileMenu();
    expect(component.isMobileMenuOpen()).toBe(true);
    
    component.toggleMobileMenu();
    expect(component.isMobileMenuOpen()).toBe(false);
  });

  it('should close mobile menu', () => {
    component.isMobileMenuOpen.set(true);
    
    component.closeMobileMenu();
    
    expect(component.isMobileMenuOpen()).toBe(false);
  });

  it('should inject services', () => {
    expect(component.isDanish).toBeDefined();
    expect(component.isDark).toBeDefined();
    expect(component.toggleLocale).toBeDefined();
    expect(component.toggleTheme).toBeDefined();
    expect(component.navItems).toBeDefined();
  });
});