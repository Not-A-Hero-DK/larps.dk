import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer, Navigation } from '@shared/components';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, Navigation, Footer],
  selector: 'larp-root',
  styleUrls: ['./app.scss'],
  template: `
    <larp-navigation />
    <main id="main-content" role="main">
      <router-outlet />
    </main>
    <larp-footer />
  `,
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class App {}
