'use client'

import Link from 'next/link'
import { useI18n } from '../lib/i18n'

export default function NotFound() {
  const { t } = useI18n()

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-8">
      <div className="text-center max-w-2xl mx-auto">
        {/* Sword Icon */}
        <div className="text-6xl mb-8">⚔️</div>
        
        {/* 404 Text */}
        <h1 className="text-8xl md:text-9xl font-bold text-white mb-6">404</h1>
        
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6">
          {t('notfound.title')}
        </h2>
        
        {/* Description */}
        <p className="text-lg text-neutral-400 mb-8 leading-relaxed px-4">
          {t('notfound.description')}
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-nordic text-white hover:shadow-glow transform hover:scale-105 transition-all duration-300 h-11 rounded-md px-8"
          >
            {t('notfound.return_home')}
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-muted border border-accent text-accent hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 h-11 rounded-md px-8"
          >
            {t('notfound.explore_projects')}
          </Link>
        </div>
      </div>
    </div>
  )
}