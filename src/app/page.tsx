"use client";

import { useI18n } from '../lib/i18n';
import { currentProjects, previousProjects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  const { t } = useI18n();

  const totalProjects = currentProjects.length + previousProjects.length;
  const totalParticipants = [...currentProjects, ...previousProjects]
    .reduce((sum, project) => sum + project.participants, 0);

  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      {/* Current Projects Section */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('projects.current_title')}
            </h1>
            <p className="text-lg text-neutral-400 max-w-4xl mx-auto leading-relaxed">
              {t('projects.current_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Previous Projects Section */}
      <section className="py-16 px-8 bg-neutral-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('projects.previous_title')}
            </h2>
            <p className="text-lg text-neutral-400 max-w-4xl mx-auto leading-relaxed">
              {t('projects.previous_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {previousProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Archive Statistics */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="text-2xl mr-2">📚</span>
            <h3 className="text-3xl font-bold inline">
              {t('projects.archive_title')}
            </h3>
          </div>
          
          <p className="text-lg text-neutral-400 mb-12 leading-relaxed">
            {t('projects.archive_subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                {totalProjects}
              </div>
              <div className="text-neutral-400">
                {t('projects.total_adventures')}
              </div>
            </div>
            <div className="hidden sm:block text-neutral-600 text-2xl">|</div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                {totalParticipants}
              </div>
              <div className="text-neutral-400">
                {t('projects.total_participants')}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
