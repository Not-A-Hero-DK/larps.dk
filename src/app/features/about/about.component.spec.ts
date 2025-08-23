import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AboutComponent } from './about.component';
import { LocaleService } from '../../shared/services/locale.service';

// Mock LocaleService
const mockLocaleService = {
  translate: vi.fn((key: string) => {
    const translations: Record<string, string> = {
      'about.title': 'About Heimdal Portal',
      'about.subtitle': 'Guardian of the digital bridge between LARP organizers and their communities.',
      'about.mission.title': 'Our Mission',
      'about.mission.description': 'We believe every LARP deserves a professional online presence.',
      'about.mission.vision': 'From small local gatherings to international events, we support the entire spectrum.',
      'about.stats.title': 'Our Impact',
      'about.stats.projects': 'Active Projects',
      'about.stats.uptime': 'Uptime Guarantee',
      'about.stats.players': 'Players Served',
      'about.stats.countries': 'Countries',
      'about.services.title': 'What We Offer',
      'about.services.hosting.title': 'Free Hosting',
      'about.services.hosting.description': 'Professional web hosting with no hidden costs.',
      'about.services.customization.title': 'Custom Design',
      'about.services.customization.description': 'Tailored website designs that capture your LARP\'s unique atmosphere.',
      'about.services.support.title': '24/7 Support',
      'about.services.support.description': 'Our team of LARP enthusiasts provides technical support.',
      'about.team.title': 'Meet the Guardians',
      'about.team.description': 'We\'re a passionate team of developers, designers, and LARP veterans.',
      'about.team.contact_cta': 'Get to Know Us'
    };
    return translations[key] || key;
  })
};

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent],
      providers: [
        provideRouter([]),
        { provide: LocaleService, useValue: mockLocaleService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
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
    const result = component.t('about.title');
    expect(result).toBe('About Heimdal Portal');
    expect(mockLocaleService.translate).toHaveBeenCalledWith('about.title');
  });

  it('should render the hero section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    
    const title = compiled.querySelector('h1');
    expect(title).toBeTruthy();
    expect(title?.textContent?.trim()).toBe('About Heimdal Portal');
    
    const subtitle = compiled.querySelector('p');
    expect(subtitle).toBeTruthy();
    expect(subtitle?.textContent?.trim()).toBe('Guardian of the digital bridge between LARP organizers and their communities.');
  });

  it('should render the mission section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    
    expect(compiled.textContent).toContain('Our Mission');
    expect(compiled.textContent).toContain('We believe every LARP deserves a professional online presence.');
    expect(compiled.textContent).toContain('From small local gatherings to international events, we support the entire spectrum.');
  });

  it('should render the stats section with correct data', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    
    expect(compiled.textContent).toContain('Our Impact');
    expect(compiled.textContent).toContain('150+');
    expect(compiled.textContent).toContain('99.9%');
    expect(compiled.textContent).toContain('25,000+');
    expect(compiled.textContent).toContain('15');
  });

  it('should render the services section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    
    expect(compiled.textContent).toContain('What We Offer');
    expect(compiled.textContent).toContain('Free Hosting');
    expect(compiled.textContent).toContain('Custom Design');
    expect(compiled.textContent).toContain('24/7 Support');
  });

  it('should render service cards with icons', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    
    const serviceCards = compiled.querySelectorAll('.bg-card.rounded-xl.p-6');
    expect(serviceCards.length).toBe(3);
    
    const icons = compiled.querySelectorAll('.w-12.h-12.bg-accent\\/20.rounded-lg svg');
    expect(icons.length).toBe(3);
  });

  it('should render the team section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    
    expect(compiled.textContent).toContain('Meet the Guardians');
    expect(compiled.textContent).toContain('We\'re a passionate team of developers, designers, and LARP veterans.');
  });

  it('should render contact CTA button with proper routing', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    
    const ctaButton = compiled.querySelector('a[routerLink="/contact"]');
    expect(ctaButton).toBeTruthy();
    expect(ctaButton?.textContent?.trim()).toBe('Get to Know Us');
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

  it('should render stats with proper layout', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    
    const statsContainer = compiled.querySelector('.space-y-4');
    expect(statsContainer).toBeTruthy();
    
    const statItems = statsContainer?.querySelectorAll('.flex.justify-between.items-center');
    expect(statItems?.length).toBe(4);
  });

  it('should use grid layout for services', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    
    const servicesGrid = compiled.querySelector('.grid.md\\:grid-cols-2.lg\\:grid-cols-3');
    expect(servicesGrid).toBeTruthy();
  });
});