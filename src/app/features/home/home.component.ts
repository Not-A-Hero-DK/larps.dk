import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from '@shared/components';
import { TranslatePipe } from '@shared/pipes';

@Component({
  selector: 'larp-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [TranslatePipe, Button, RouterLink],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class HomeComponent {}
