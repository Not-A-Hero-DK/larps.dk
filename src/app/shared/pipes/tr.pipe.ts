import { Pipe, PipeTransform, inject } from '@angular/core';
import { LocaleService } from '../services/locale.service';

@Pipe({ name: 'tr', pure: false })
export class TranslatePipe implements PipeTransform {
  private readonly localeService = inject(LocaleService);

  public transform(key: string): string {
    return this.localeService.translate(key);
  }
}
