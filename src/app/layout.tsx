import type { Metadata } from 'next'
import { I18nProvider } from '../lib/i18n'
import { ThemeProvider } from '../lib/theme'
import './globals.css'
import Navigation from './Navigation'

export const metadata: Metadata = {
  title: 'Heimdal Portal - Guardian of LARP Realms',
  description:
    'Free hosting for LARP communities worldwide. Share your adventures, connect with players, and bring your stories to life.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ThemeProvider>
          <I18nProvider>
            <Navigation />
            {children}
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
