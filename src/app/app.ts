import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer, Navigation } from '@shared/components';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'larp-root',
  imports: [RouterOutlet, Navigation, Footer],
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
