'use client'

import Button from '@/components/Button'
import { useI18n } from '@/lib/i18n'
import Link from 'next/link'

export default function Footer() {
  const { t } = useI18n()

  const navItems = [
    { href: '/', label: t('nav.home') },
    { href: '/current-projects', label: t('nav.current') },
    { href: '/previous-projects', label: t('nav.previous') },
    { href: '/about', label: t('nav.about') },
    { href: '/contact', label: t('nav.contact') },
  ]

  return (
    <footer className="bg-card border-t border-border mt-16" role="contentinfo">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <section className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-accent">⚡</div>
              <span className="text-xl font-bold text-foreground">{t('footer.brand_title')}</span>
            </Link>
            <p className="text-neutral-300 text-sm leading-relaxed">{t('footer.brand_description')}</p>
            <p className="text-neutral-400 text-sm leading-relaxed">{t('footer.brand_mission')}</p>
            <div className="flex items-center space-x-6 pt-2" role="group" aria-label="Service statistics">
              <div className="flex items-center space-x-2">
                <span className="text-accent" aria-hidden="true">🎲</span>
                <span className="text-neutral-300 text-sm">{t('footer.stats_projects')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-accent" aria-hidden="true">♥</span>
                <span className="text-neutral-300 text-sm">{t('footer.stats_uptime')}</span>
              </div>
            </div>
          </section>

          {/* Quick Links Section */}
          <section className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">{t('footer.quick_links')}</h3>
            <nav className="space-y-2" aria-label="Footer navigation">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-neutral-300 hover:text-accent text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-sm"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </section>

          {/* Contact Section */}
          <section className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">{t('footer.contact')}</h3>
            <address className="space-y-3 not-italic">
              <div className="flex items-center space-x-2">
                <span className="text-accent" aria-hidden="true">📧</span>
                <a
                  href="mailto:hosting@larps.dk"
                  className="text-neutral-300 hover:text-accent text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-sm"
                >
                  {t('footer.email')}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-accent" aria-hidden="true">📞</span>
                <a 
                  href="tel:+4530238112" 
                  className="text-neutral-300 hover:text-accent text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-sm"
                >
                  {t('footer.phone')}
                </a>
              </div>
            </address>
            <div className="pt-2">
              <Button href="/contact" variant="secondary" className="text-sm px-6 py-2">
                {t('footer.get_started')}
              </Button>
            </div>
          </section>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <p className="text-neutral-400 text-sm">
                {t('footer.copyright')}
                <a
                  href="https://notahero.dk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-sm"
                >
                  {' ' + t('footer.company_link')}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
