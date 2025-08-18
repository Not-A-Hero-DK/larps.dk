import { ThemeProvider } from '@/lib/theme'
import type { Metadata } from 'next'
import { NextIntlClientProvider, useLocale } from 'next-intl'
import '../globals.css'
import Footer from './Footer'
import Navigation from './Navigation'

export const metadata: Metadata = {
  title: 'Heimdal Portal - Guardian of LARP Realms',
  description:
    'Free hosting for LARP communities worldwide. Share your adventures, connect with players, and bring your stories to life.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale = useLocale()
  return (
    <html lang={locale}>
      <body>
        <ThemeProvider>
          <NextIntlClientProvider>
            <Navigation />
            <main id="main-content" role="main">
              {children}
            </main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
