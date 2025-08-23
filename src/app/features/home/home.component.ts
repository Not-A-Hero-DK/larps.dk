import { Component, inject } from '@angular/core';
import { LocaleService } from '@shared/services';

@Component({
  selector: 'larp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  localeService = inject(LocaleService);

  t(key: string): string {
    return this.localeService.translate(key);
  }
}
