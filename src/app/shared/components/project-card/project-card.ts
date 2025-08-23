import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { TranslatePipe } from '@shared/pipes';
import { LocaleService } from '@shared/services';
import { Project } from '@shared/types';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'larp-project-card',
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
  imports: [TranslatePipe],
})
export class ProjectCard {
  private readonly tr = inject(LocaleService);

  readonly project = input<Project>();

  public statusColorClass =
    this.project()?.status === 'upcoming' ? 'bg-yellow-600 text-yellow-100' : 'bg-green-600 text-green-100';

  public statusText =
    this.project()?.status === 'upcoming'
      ? this.tr.translate('projects.upcoming')
      : this.tr.translate('projects.completed');
}
