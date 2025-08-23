import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@shared/pipes/tr.pipe';
import { LocaleService } from '@shared/services';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'larp-footer',
  imports: [RouterModule, TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public navItems = inject(LocaleService).navItems;
}
