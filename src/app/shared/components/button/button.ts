import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'larp-button',
  templateUrl: './button.html',
  styleUrl: './button.scss',
  imports: [],
})
export class Button {
  readonly label = input<string>();
  readonly variant = input<'primary' | 'secondary' | 'toggle'>('primary');
  readonly class = input<string>();
  readonly disabled = input<boolean>(false);

  public variants = {
    primary: 'bg-muted px-8 py-3 border border-accent text-accent hover:bg-accent hover:border-accent hover:text-black',
    secondary: 'bg-gradient-nordic px-8 py-3 text-white hover:shadow-glow transform',
    toggle:
      'rounded-lg text-sm font-medium px-2 py-1 bg-neutral-800 hover:bg-button-toggle transition-colors duration-200 text-foreground',
  };
}
