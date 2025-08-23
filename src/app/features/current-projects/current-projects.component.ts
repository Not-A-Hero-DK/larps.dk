import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProjectCard } from '@shared/components';
import { TranslatePipe } from '@shared/pipes';
import { Project } from '@shared/types';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './current-projects.component.html',
  styleUrls: ['./current-projects.component.scss'],
  imports: [TranslatePipe, ProjectCard],
})
export class CurrentProjectsComponent {
  public currentProjects: Project[] = [
    {
      id: 'last-saga-midgard',
      title: 'The Last Saga of Midgard',
      description:
        'An epic Nordic LARP set in the twilight of the gods, where heroes must prevent Ragnarök or embrace the ending of all things.',
      startDate: 'March 15, 2024',
      endDate: 'March 17, 2024',
      location: 'Silkeborg, Denmark',
      organizer: 'Nordic Legends Guild',
      participants: 120,
      status: 'upcoming',
      projectUrl: '#',
    },
    {
      id: 'skjaldborg-chronicles',
      title: 'Skjaldborg Chronicles',
      description:
        'A political intrigue LARP focused on Viking-age diplomacy, trade wars, and the complex relationships between Norse jarls.',
      startDate: 'April 22, 2024',
      endDate: 'April 24, 2024',
      location: 'Roskilde, Denmark',
      organizer: "Raven's Wing Productions",
      participants: 80,
      status: 'upcoming',
      projectUrl: '#',
    },
    {
      id: 'volsung-legacy',
      title: 'The Völsung Legacy',
      description:
        'A generational saga following the descendants of Sigurd the Dragon Slayer through three centuries of Nordic history.',
      startDate: 'May 10, 2024',
      endDate: 'May 12, 2024',
      location: 'Odense, Denmark',
      organizer: 'Saga Weavers Collective',
      participants: 95,
      status: 'upcoming',
      projectUrl: '#',
    },
  ];
}
