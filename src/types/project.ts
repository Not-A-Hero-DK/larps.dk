export interface Project {
  id: string
  title: string
  description: string
  startDate: string
  endDate: string
  location: string
  organizer: string
  participants: number
  status: 'upcoming' | 'completed'
  projectUrl?: string
}
