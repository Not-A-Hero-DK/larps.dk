import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@shared/pipes/tr.pipe';
import { LocaleService } from '@shared/services';
import { Button } from '../button/button';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'larp-footer',
  imports: [RouterModule, TranslatePipe, Button],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss'],
})
export class Footer {
  public navItems = inject(LocaleService).navItems;
}
