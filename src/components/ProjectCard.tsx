"use client";

import { useI18n } from '../lib/i18n';
import { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useI18n();

  const statusColorClass = project.status === 'upcoming' 
    ? 'bg-yellow-600 text-yellow-100' 
    : 'bg-green-600 text-green-100';

  const statusText = project.status === 'upcoming' 
    ? t('projects.upcoming') 
    : t('projects.completed');

  return (
    <div className="bg-neutral-800 rounded-lg p-6 border border-neutral-700 hover:border-neutral-600 transition-colors">
      {/* Status badge and title */}
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold text-white flex-1 mr-4">{project.title}</h3>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColorClass}`}>
          {statusText}
        </span>
      </div>

      {/* Description */}
      <p className="text-neutral-300 mb-6 leading-relaxed">
        {project.description}
      </p>

      {/* Project details */}
      <div className="space-y-3 mb-6">
        {/* Date */}
        <div className="flex items-center text-neutral-400">
          <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-sm">
            {project.startDate} - {project.endDate}
          </span>
        </div>

        {/* Participants */}
        <div className="flex items-center text-neutral-400">
          <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="text-sm">
            {project.participants} {t('projects.participants')}
          </span>
        </div>

        {/* Location */}
        <div className="flex items-center text-neutral-400">
          <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-sm">{project.location}</span>
        </div>
      </div>

      {/* Organizer */}
      <div className="mb-6">
        <span className="text-neutral-400 text-sm">{t('projects.organized_by')} </span>
        <span className="text-yellow-400 font-medium text-sm">{project.organizer}</span>
      </div>

      {/* Visit button (only for current projects) */}
      {project.status === 'upcoming' && project.projectUrl && (
        <button className="w-full border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black transition-colors py-2 px-4 rounded-lg font-medium">
          <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          {t('projects.visit_project_site')}
        </button>
      )}
    </div>
  );
}