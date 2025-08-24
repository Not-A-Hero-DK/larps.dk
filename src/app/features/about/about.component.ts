import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '@shared/pipes';

@Component({
  selector: 'larp-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [TranslatePipe],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class AboutComponent {}
