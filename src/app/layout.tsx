import { I18nProvider } from '@/lib/i18n'
import { ThemeProvider } from '@/lib/theme'
import type { Metadata } from 'next'
import Footer from './Footer'
import Navigation from './Navigation'
import './globals.css'

export const metadata: Metadata = {
  title: 'Heimdal Portal - Guardian of LARP Realms',
  description:
    'Free hosting for LARP communities worldwide. Share your adventures, connect with players, and bring your stories to life.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <I18nProvider>
            <Navigation />
            {children}
            <Footer />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
