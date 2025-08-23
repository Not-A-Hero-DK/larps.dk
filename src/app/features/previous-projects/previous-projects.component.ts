import { Component } from '@angular/core';
import { ProjectCard } from '@shared/components';
import { TranslatePipe } from '@shared/pipes';
import { Project } from '@shared/types';

@Component({
  templateUrl: './previous-projects.component.html',
  styleUrls: ['./previous-projects.component.scss'],
  imports: [TranslatePipe, ProjectCard],
})
export class PreviousProjectsComponent {
  public previousProjects: Project[] = [
    {
      id: 'siege-jormunheim',
      title: 'The Siege of Jormunheim',
      description:
        'A massive castle siege LARP that brought together 200 players for an epic battle between light and darkness.',
      startDate: 'September 8, 2023',
      endDate: 'September 10, 2023',
      location: 'Helsingør, Denmark',
      organizer: 'Iron Crown Collective',
      participants: 200,
      status: 'completed',
    },
    {
      id: 'tales-nine-realms',
      title: 'Tales of the Nine Realms',
      description:
        'An immersive journey through Norse cosmology, where players explored different realms connected by Yggdrasil.',
      startDate: 'June 23, 2023',
      endDate: 'June 25, 2023',
      location: 'Aarhus, Denmark',
      organizer: 'World Tree Productions',
      participants: 150,
      status: 'completed',
    },
    {
      id: 'bloodstone-prophecy',
      title: 'The Bloodstone Prophecy',
      description:
        'A mystical LARP centered around ancient Nordic magic, where participants channeled the power of runes and ancient gods.',
      startDate: 'April 14, 2023',
      endDate: 'April 16, 2023',
      location: 'Copenhagen, Denmark',
      organizer: 'Runic Circle Guild',
      participants: 75,
      status: 'completed',
    },
    {
      id: 'vikings-end',
      title: "Viking's End",
      description: "The conclusion of a three-year campaign following a Viking clan's journey from raiders to rulers.",
      startDate: 'November 11, 2022',
      endDate: 'November 13, 2022',
      location: 'Aalborg, Denmark',
      organizer: 'Longship Legacy',
      participants: 120,
      status: 'completed',
    },
    {
      id: 'frost-giants-gambit',
      title: "The Frost Giant's Gambit",
      description:
        'A winter LARP where heroes faced the coming of an eternal winter and the machinations of the frost giants.',
      startDate: 'February 3, 2023',
      endDate: 'February 5, 2023',
      location: 'Esbjerg, Denmark',
      organizer: "Winter's Edge Collective",
      participants: 90,
      status: 'completed',
    },
    {
      id: 'odins-chosen',
      title: "Odin's Chosen",
      description:
        'An honor-based LARP exploring themes of sacrifice, wisdom, and the price of knowledge in the halls of Valhalla.',
      startDate: 'August 18, 2022',
      endDate: 'August 20, 2022',
      location: 'Vejle, Denmark',
      organizer: "All-Father's Guild",
      participants: 110,
      status: 'completed',
    },
  ];
  public totalProjects = this.previousProjects.length + this.previousProjects.length;
  public totalParticipants = [...this.previousProjects, ...this.previousProjects].reduce(
    (sum, project) => sum + project.participants,
    0,
  );
}
