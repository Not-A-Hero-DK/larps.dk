'use client'

import Button from '@/components/Button'
import ProjectCard from '@/components/ProjectCard'
import { currentProjects } from '@/data/projects'
import { useTranslations } from 'next-intl'

export default function CurrentProjectsPage() {
  const t = useTranslations()

  return (
    <div className="relative min-h-screen text-foreground overflow-hidden">
      {/* Main projects section */}
      <section className="pt-32 pb-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('projects.current_title')}</h1>
            <p className="text-lg text-muted max-w-4xl mx-auto leading-relaxed">
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

      {/* Want to Host Your LARP section */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{t('projects.host_cta_title')}</h2>
          <p className="text-lg text-muted mb-12 leading-relaxed">{t('projects.host_cta_subtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#" variant="primary">
              {t('home.request_hosting')}
            </Button>
            <Button href="#" variant="secondary">
              {t('projects.learn_more')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
