import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LocaleService } from '@shared/services/index';

@Component({
  selector: 'larp-footer',
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  localeService = inject(LocaleService);

  t(key: string): string {
    return this.localeService.translate(key);
  }
}
