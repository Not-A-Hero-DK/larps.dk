import Button from '@/components/Button'
import { useTranslations } from 'next-intl'

export default function NotFound() {
  const t = useTranslations()

  return (
    <div className="flex items-center justify-center bg-background px-8">
      <div className="text-center max-w-2xl mx-auto">
        <div className="text-6xl mb-8">⚔️</div>
        <h1 className="text-8xl md:text-9xl font-bold text-white mb-6">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6">{t('notfound.title')}</h2>
        <p className="text-lg text-neutral-400 mb-8 leading-relaxed px-4">{t('notfound.description')}</p>
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
