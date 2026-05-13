import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Button } from '@shared/components';
import { TranslatePipe } from '@shared/pipes';

@Component({
  selector: 'larp-not-found',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  imports: [RouterModule, TranslatePipe, Button],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class NotFoundComponent {}
