import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '@shared/pipes';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [TranslatePipe],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class HomeComponent {}
