import { ProjectCard } from './project-card';
import { Project } from '@shared/types';
import { LocaleService } from '@shared/services/locale.service';
import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('ProjectCard', () => {
  let component: ProjectCard;
  let localeService: LocaleService;

  const mockProject: Project = {
    id: '1',
    title: 'Test Project',
    description: 'Test Description',
    startDate: '2024-01-01',
    endDate: '2024-01-03',
    location: 'Test Location',
    organizer: 'Test Organizer',
    participants: 25,
    status: 'upcoming',
    projectUrl: 'https://test.com'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        LocaleService
      ]
    });

    localeService = TestBed.inject(LocaleService);
    component = new ProjectCard();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should compute status color class for upcoming project', () => {
    // Mock project signal
    Object.defineProperty(component, 'project', {
      value: () => ({ ...mockProject, status: 'upcoming' })
    });
    
    expect(component.statusColorClass()).toBe('bg-yellow-600 text-yellow-100');
  });

  it('should compute status color class for completed project', () => {
    // Mock project signal
    Object.defineProperty(component, 'project', {
      value: () => ({ ...mockProject, status: 'completed' })
    });
    
    expect(component.statusColorClass()).toBe('bg-green-600 text-green-100');
  });

  it('should compute status text using translation service', () => {
    const translateSpy = vi.spyOn(localeService, 'translate').mockReturnValue('Upcoming');
    
    // Mock project signal
    Object.defineProperty(component, 'project', {
      value: () => mockProject
    });
    
    expect(component.statusText()).toBe('Upcoming');
    expect(translateSpy).toHaveBeenCalledWith('projects.upcoming');
  });
});