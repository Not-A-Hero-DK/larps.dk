import { TestBed } from '@angular/core/testing';
import { Router, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';
import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;
  let router: Router;
  let routerEventsSubject: Subject<any>;

  beforeEach(() => {
    routerEventsSubject = new Subject();
    
    const routerSpy = {
      events: routerEventsSubject.asObservable()
    };

    // Mock window.scrollTo
    vi.spyOn(window, 'scrollTo').mockImplementation(() => {});

    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    });
    
    service = TestBed.inject(AppService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should scroll to top on NavigationEnd event', () => {
    const navigationEndEvent = new NavigationEnd(1, '/', '/');
    
    routerEventsSubject.next(navigationEndEvent);

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  });

  it('should not scroll on non-NavigationEnd events', () => {
    routerEventsSubject.next({ type: 'other-event' });

    expect(window.scrollTo).not.toHaveBeenCalled();
  });
});