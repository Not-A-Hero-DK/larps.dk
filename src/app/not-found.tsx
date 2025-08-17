'use client'

import Button from '../components/Button'
import { useI18n } from '../lib/i18n'

export default function NotFound() {
  const i18n = useI18n()
  if (!i18n) return null
  const { t } = i18n

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-8">
      <div className="text-center max-w-2xl mx-auto">
        {/* Sword Icon */}
        <div className="text-6xl mb-8">⚔️</div>
        {/* 404 Text */}
        <h1 className="text-8xl md:text-9xl font-bold text-white mb-6">404</h1>
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6">{t('notfound.title')}</h2>
        {/* Description */}
        <p className="text-lg text-neutral-400 mb-8 leading-relaxed px-4">{t('notfound.description')}</p>
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" variant="secondary">
            {t('notfound.return_home')}
          </Button>
          <Button href="/" variant="primary">
            {t('notfound.explore_projects')}
          </Button>
        </div>
      </div>
    </div>
  )
}
