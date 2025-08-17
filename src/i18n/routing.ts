import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'da'],
  defaultLocale: 'da',
  localeDetection: true,
  localeCookie: false,
})
