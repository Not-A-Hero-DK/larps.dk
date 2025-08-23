import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Component } from '@angular/core';
import { App } from './app';

// Mock components for testing
@Component({
  selector: 'larp-navigation',
  template: '<nav>Navigation</nav>'
})
class MockNavigationComponent {}

@Component({
  selector: 'larp-footer',
  template: '<footer>Footer</footer>'
})
class MockFooterComponent {}

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideZonelessChangeDetection(),
        provideRouter([])
      ],
    })
    .overrideComponent(App, {
      remove: { imports: [] },
      add: { imports: [MockNavigationComponent, MockFooterComponent] }
    })
    .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have the correct title', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app.title).toBe('Heimdal Portal - Guardian of LARP Realms');
  });

  it('should render navigation and footer', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    expect(compiled.querySelector('nav')).toBeTruthy();
    expect(compiled.querySelector('footer')).toBeTruthy();
  });

  it('should render main content area with router outlet', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    const main = compiled.querySelector('main');
    expect(main).toBeTruthy();
    expect(main?.getAttribute('id')).toBe('main-content');
    expect(main?.getAttribute('role')).toBe('main');
  });
});
