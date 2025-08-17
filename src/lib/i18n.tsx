'use client'

import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react'

export type Locale = 'en' | 'da'
export type Translations = Record<string, unknown>

interface I18nContextProps {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextProps | undefined>(undefined)

function getNested(obj: unknown, path: string): string | undefined {
  const result = path.split('.').reduce((o: unknown, k: string) => {
    return o && typeof o === 'object' && k in o ? (o as Record<string, unknown>)[k] : undefined
  }, obj)
  return typeof result === 'string' ? result : undefined
}

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>('en')
  const [translations, setTranslations] = useState<Translations>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(`/locales/${locale}.json`)
      .then((res) => res.json())
      .then((data) => {
        setTranslations(data)
        setLoading(false)
      })
      .catch(() => {
        setTranslations({})
        setLoading(false)
      })
  }, [locale])

  const t = useCallback(
    (key: string) => {
      const value = getNested(translations, key)
      return value || key
    },
    [translations],
  )

  const contextValue = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t])

  if (loading) return null
  return <I18nContext.Provider value={contextValue}>{children}</I18nContext.Provider>
}

export const useI18n = () => {
  const context = useContext(I18nContext)
  if (!context) throw new Error('useI18n must be used within I18nProvider')
  return context
}
