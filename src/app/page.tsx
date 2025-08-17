'use client'

import Button from '../components/Button'
import ProjectCard from '../components/ProjectCard'
import { currentProjects, previousProjects } from '../data/projects'
import { useI18n } from '../lib/i18n'

export default function Home() {
  const { t } = useI18n()

  const totalProjects = currentProjects.length + previousProjects.length
  const totalParticipants = [...currentProjects, ...previousProjects].reduce(
    (sum, project) => sum + project.participants,
    0,
  )

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/hero-nordic.jpg)',
            }}
            aria-hidden="true"
          >
            <div
              className="absolute inset-0 bg-gradient-hero opacity-90"
              style={{
                backgroundImage:
                  'linear-gradient(135deg, hsl(215 25% 8%) 0%, hsl(215 35% 15%) 50%, hsl(215 25% 8%) 100%)',
              }}
            />
          </div>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-br from-blue-200 via-white to-slate-300 bg-clip-text text-transparent">
            {t('landing.title')}
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('landing.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#" variant="secondary">
              {t('landing.request_hosting')}
            </Button>
            <Button href="#" variant="primary">
              {t('landing.view_projects')}
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('projects.current_title')}</h1>
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
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('projects.previous_title')}</h2>
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
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="text-2xl mr-2">📚</span>
            <h3 className="text-3xl font-bold inline">{t('projects.archive_title')}</h3>
          </div>
          <p className="text-lg text-neutral-400 mb-12 leading-relaxed">{t('projects.archive_subtitle')}</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">{totalProjects}</div>
              <div className="text-neutral-400">{t('projects.total_adventures')}</div>
            </div>
            <div className="hidden sm:block text-neutral-600 text-2xl">|</div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">{totalParticipants}</div>
              <div className="text-neutral-400">{t('projects.total_participants')}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
