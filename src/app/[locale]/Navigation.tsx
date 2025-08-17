'use client'
import Button from '@/components/Button'
import GlobeIcon from '@/components/icons/GlobeIcon'
import { useTheme } from '@/lib/theme'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const t = useTranslations()
  const { theme, toggleTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleLanguageSwitch = () => {
    console.log('test')
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { href: '/', label: t('nav.home') },
    { href: '/current-projects', label: t('nav.current') },
    { href: '/previous-projects', label: t('nav.previous') },
    { href: '/about', label: t('nav.about') },
    { href: '/contact', label: t('nav.contact') },
  ]

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent text-white px-4 py-2 rounded-md z-[60] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
      >
        {t('nav.skip_to_content')}
      </a>

      <nav
        className="fixed top-0 w-full z-50 bg-background backdrop-blur-sm border-b border-border"
        role="navigation"
        aria-label={t('nav.main_navigation')}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
              <div className="text-2xl font-bold text-accent">⚡</div>
              <span className="text-xl font-bold text-foreground">Heimdal Portal</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium transition-colors hover:text-accent rounded-sm px-1 py-1"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="toggle"
                  className=""
                  aria-label={theme === 'dark' ? t('default.light_mode') : t('default.dark_mode')}
                  onClick={toggleTheme}
                >
                  {theme === 'dark' ? '☀️' : '🌙'}
                </Button>
                <Button
                  variant="toggle"
                  className="flex items-center text-accent space-x-1"
                  aria-label={t('default.switch_language')}
                  onClick={handleLanguageSwitch}
                >
                  <GlobeIcon size={16} />
                  <span className="text-sm font-medium"> DA </span>
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button and Controls */}
            <div className="flex items-center space-x-2 md:hidden">
              <Button
                variant="toggle"
                className=""
                aria-label={theme === 'dark' ? t('default.light_mode') : t('default.dark_mode')}
                onClick={toggleTheme}
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </Button>
              <Button
                variant="toggle"
                className="flex items-center text-accent space-x-1"
                aria-label={t('default.switch_language')}
                onClick={handleLanguageSwitch}
              >
                <GlobeIcon size={16} />
                <span className="text-sm font-medium"> DA </span>
              </Button>

              {/* Hamburger Menu Button */}
              <button
                onClick={toggleMobileMenu}
                aria-label={isMobileMenuOpen ? t('nav.close_menu') : t('nav.open_menu')}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                className="rounded-lg px-2 py-1 bg-neutral-800 hover:bg-neutral-700 text-white transition-colors duration-200"
              >
                <div className="w-5 h-5 flex flex-col justify-center items-center space-y-1">
                  <span
                    className={`block w-4 h-0.5 bg-current transition-transform duration-200 ${
                      isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                    }`}
                  />
                  <span
                    className={`block w-4 h-0.5 bg-current transition-opacity duration-200 ${
                      isMobileMenuOpen ? 'opacity-0' : ''
                    }`}
                  />
                  <span
                    className={`block w-4 h-0.5 bg-current transition-transform duration-200 ${
                      isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="bg-card border-t border-border">
            <div className="container mx-auto px-4 py-4">
              <nav className="space-y-2" role="navigation" aria-label={t('nav.mobile_navigation')}>
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="block px-4 py-3 text-sm font-medium text-foreground hover:text-accent hover:bg-neutral-800 rounded-md transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
