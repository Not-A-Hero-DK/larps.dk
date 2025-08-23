import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent, NavigationComponent } from '@shared/components';

@Component({
  selector: 'larp-root',
  imports: [RouterOutlet, NavigationComponent, FooterComponent],
  styleUrls: ['./app.scss'],
  template: `
    <larp-navigation />
    <main id="main-content" role="main">
      <router-outlet />
    </main>
    <larp-footer />
  `,
})
export class App {
  title = 'Heimdal Portal - Guardian of LARP Realms';
}
