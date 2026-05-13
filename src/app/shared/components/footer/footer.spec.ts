import { Footer } from './footer';
import { LocaleService } from '@shared/services/locale.service';
import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('Footer', () => {
  let component: Footer;
  let localeService: LocaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        LocaleService
      ]
    });

    localeService = TestBed.inject(LocaleService);
    component = new Footer();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should inject navigation items from locale service', () => {
    expect(component.navItems).toBeDefined();
    expect(Array.isArray(component.navItems)).toBe(true);
  });
});