'use client'

import Button from '@/components/Button'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations()

  return (
    <div className="relative min-h-screen text-foreground overflow-hidden">
      {/* Hero Section */}
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-header bg-clip-text text-transparent">
            {t('home.title')}
          </h1>

          <p className="text-xl md:text-2xl text-muted mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('home.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary">
              {t('home.request_hosting')}
            </Button>
            <Button href="/current-projects" variant="primary">
              {t('home.view_projects')}
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 px-8" id="features">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('home.features_title')}</h2>
            <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">{t('home.features_subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-card rounded-lg p-6 border border-border">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-3">{t('home.feature_hosting_title')}</h3>
              <p className="text-muted text-sm leading-relaxed">{t('home.feature_hosting_description')}</p>
            </div>

            <div className="text-center bg-card rounded-lg p-6 border border-border">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">{t('home.feature_setup_title')}</h3>
              <p className="text-muted text-sm leading-relaxed">{t('home.feature_setup_description')}</p>
            </div>

            <div className="text-center bg-card rounded-lg p-6 border border-border">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold mb-3">{t('home.feature_subdomain_title')}</h3>
              <p className="text-muted text-sm leading-relaxed">{t('home.feature_subdomain_description')}</p>
            </div>

            <div className="text-center bg-card rounded-lg p-6 border border-border">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-semibold mb-3">{t('home.feature_community_title')}</h3>
              <p className="text-muted text-sm leading-relaxed">{t('home.feature_community_description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats Section */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="text-2xl mr-2">📚</span>
            <h3 className="text-3xl font-bold inline">{t('home.stats_title')}</h3>
          </div>
          <p className="text-lg text-muted mb-12 leading-relaxed">{t('home.stats_subtitle')}</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">100+</div>
              <div className="text-muted">{t('home.stats_projects')}</div>
            </div>
            <div className="hidden sm:block text-muted text-2xl">|</div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">1000+</div>
              <div className="text-muted">{t('home.stats_participants')}</div>
            </div>
            <div className="hidden sm:block text-muted text-2xl">|</div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">99.9%</div>
              <div className="text-muted">{t('home.stats_uptime')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-card rounded-lg p-8 border border-accent">
            <h3 className="text-3xl font-bold mb-6">{t('home.cta_title')}</h3>
            <p className="text-lg text-muted mb-8 leading-relaxed">{t('home.cta_description')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="secondary">
                {t('home.cta_get_started')}
              </Button>
              <Button href="/about" variant="primary">
                {t('home.cta_learn_more')}
              </Button>
            </div>
            <p className="text-muted mt-6 text-sm">{t('home.cta_contact')}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
