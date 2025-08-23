import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@shared/pipes';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  imports: [RouterModule, TranslatePipe],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class NotFoundComponent {}
