import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationComponent, FooterComponent],
  template: `
    <app-navigation></app-navigation>
    <main id="main-content" role="main">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
  styleUrl: './app.css'
})
export class App {
  title = 'Heimdal Portal - Guardian of LARP Realms';
}
