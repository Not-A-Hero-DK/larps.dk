import { Injectable, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AppService {
  private readonly routerEventsSignal = toSignal(inject(Router).events);

  constructor() {
    effect(() => {
      const event = this.routerEventsSignal();
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
    });
  }
}
