import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from '@shared/components';
import { TranslatePipe } from '@shared/pipes';

@Component({
  selector: 'larp-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [TranslatePipe, Button, RouterLink],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class AboutComponent {}
