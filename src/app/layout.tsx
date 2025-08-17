import { ThemeProvider } from '@/lib/theme'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import Footer from './[locale]/Footer'
import Navigation from './[locale]/Navigation'
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
