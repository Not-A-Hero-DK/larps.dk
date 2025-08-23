import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Component } from '@angular/core';
import { HomeComponent } from './home.component';
import { LocaleService } from '@shared/services';

// Mock LocaleService
const mockLocaleService = {
  translate: vi.fn((key: string) => {
    const translations: Record<string, string> = {
      'home.title': 'Guardian of LARP Realms',
      'home.subtitle': 'Free hosting for LARP communities worldwide. Share your adventures, connect with players, and bring your stories to life.',
      'home.request_hosting': 'Request Hosting',
      'home.view_projects': 'View Projects'
    };
    return translations[key] || key;
  })
};

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [
        provideRouter([]),
        { provide: LocaleService, useValue: mockLocaleService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should inject LocaleService', () => {
    expect(component.localeService).toBeTruthy();
  });

  it('should have translate method that delegates to LocaleService', () => {
    const result = component.t('home.title');
    expect(result).toBe('Guardian of LARP Realms');
    expect(mockLocaleService.translate).toHaveBeenCalledWith('home.title');
  });

  it('should render the hero section with title and subtitle', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    
    const title = compiled.querySelector('h1');
    expect(title).toBeTruthy();
    expect(title?.textContent?.trim()).toBe('Guardian of LARP Realms');
    
    const subtitle = compiled.querySelector('p');
    expect(subtitle).toBeTruthy();
    expect(subtitle?.textContent?.trim()).toBe('Free hosting for LARP communities worldwide. Share your adventures, connect with players, and bring your stories to life.');
  });

  it('should render action buttons with correct links', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    
    const buttons = compiled.querySelectorAll('a');
    expect(buttons.length).toBe(2);
    
    const requestHostingButton = buttons[0];
    expect(requestHostingButton.getAttribute('routerLink')).toBe('/contact');
    expect(requestHostingButton.textContent?.trim()).toBe('Request Hosting');
    
    const viewProjectsButton = buttons[1];
    expect(viewProjectsButton.getAttribute('routerLink')).toBe('/current-projects');
    expect(viewProjectsButton.textContent?.trim()).toBe('View Projects');
  });

  it('should have proper styling classes', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    
    const container = compiled.querySelector('.min-h-screen');
    expect(container).toBeTruthy();
    
    const title = compiled.querySelector('h1');
    expect(title?.classList.contains('bg-gradient-header')).toBe(true);
    expect(title?.classList.contains('bg-clip-text')).toBe(true);
    expect(title?.classList.contains('text-transparent')).toBe(true);
  });

  it('should render background decorative elements', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    
    const backgroundElements = compiled.querySelectorAll('.absolute.inset-0.pointer-events-none .absolute');
    expect(backgroundElements.length).toBe(2);
  });
});