'use client'

import Button from '@/components/Button'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

interface FormData {
  name: string
  email: string
  larpName: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  larpName?: string
  message?: string
}

export default function ContactPage() {
  const t = useTranslations()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    larpName: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = t('contact.form_validation_name_required')
    }

    if (!formData.email.trim()) {
      newErrors.email = t('contact.form_validation_email_required')
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t('contact.form_validation_email_invalid')
    }

    if (!formData.larpName.trim()) {
      newErrors.larpName = t('contact.form_validation_larp_name_required')
    }

    if (!formData.message.trim()) {
      newErrors.message = t('contact.form_validation_message_required')
    } else if (formData.message.trim().length < 20) {
      newErrors.message = t('contact.form_validation_message_min_length')
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate form submission (in real app, this would call an API)
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Reset form and show success
      setFormData({ name: '', email: '', larpName: '', message: '' })
      setSubmitStatus('success')
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="pt-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-br from-blue-200 via-white to-slate-300 bg-clip-text text-transparent">
            {t('contact.title')}
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="pt-16 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Send Message Form */}
            <div className="bg-card rounded-lg p-8 border border-neutral-700">
              <div className="text-center mb-8">
                <span className="text-4xl">💬</span>
                <h2 className="text-2xl font-bold mt-4 text-yellow-400">{t('contact.send_message')}</h2>
                <p className="text-neutral-400 mt-2">{t('contact.send_message_description')}</p>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-800/20 border border-green-600 rounded-lg">
                  <p className="text-green-300 text-sm">{t('contact.form_success')}</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-800/20 border border-red-600 rounded-lg">
                  <p className="text-red-300 text-sm">{t('contact.form_error')}</p>
                </div>
              )}

              <form className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                    {t('contact.form_name_label')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t('contact.form_name_placeholder')}
                    autoComplete="name"
                    className={`w-full px-4 py-3 border rounded-lg text-white placeholder-neutral-400 transition-colors ${
                      errors.name ? 'border-red-500' : 'border-neutral-600 focus:border-accent'
                    }`}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-400" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                    {t('contact.form_email_label')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t('contact.form_email_placeholder')}
                    className={`w-full px-4 py-3 border rounded-lg text-white placeholder-neutral-400 transition-colors ${
                      errors.email ? 'border-red-500' : 'border-neutral-600 focus:border-accent'
                    }`}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-400" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* LARP Name Field */}
                <div>
                  <label htmlFor="larpName" className="block text-sm font-medium text-neutral-300 mb-2">
                    {t('contact.form_larp_name_label')}
                  </label>
                  <input
                    type="text"
                    id="larpName"
                    name="larpName"
                    autoComplete="off"
                    value={formData.larpName}
                    onChange={handleInputChange}
                    placeholder={t('contact.form_larp_name_placeholder')}
                    className={`w-full px-4 py-3 border rounded-lg text-white placeholder-neutral-400 transition-colors ${
                      errors.larpName ? 'border-red-500' : 'border-neutral-600 focus:border-accent'
                    }`}
                    aria-describedby={errors.larpName ? 'larpName-error' : undefined}
                    aria-invalid={!!errors.larpName}
                  />
                  {errors.larpName && (
                    <p id="larpName-error" className="mt-1 text-sm text-red-400" role="alert">
                      {errors.larpName}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                    {t('contact.form_message_label')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    autoComplete="off"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t('contact.form_message_placeholder')}
                    className={`w-full px-4 py-3 border rounded-lg text-white placeholder-neutral-400 transition-colors resize-vertical ${
                      errors.message ? 'border-red-500' : 'border-neutral-600 focus:border-accent'
                    }`}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-sm text-red-400" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button variant="secondary" disabled={isSubmitting} onClick={handleSubmit}>
                  📧 {isSubmitting ? t('contact.form_sending') : <>{t('contact.form_submit')}</>}
                </Button>
              </form>
            </div>

            {/* Direct Contact & What We Need */}
            <div className="space-y-8">
              {/* Direct Contact */}
              <div className="bg-card rounded-lg p-8 border border-neutral-700">
                <div className="text-center mb-8">
                  <span className="text-4xl">📧</span>
                  <h2 className="text-2xl font-bold mt-4 text-yellow-400">{t('contact.direct_contact')}</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{t('contact.email_label')}</h3>
                    <p className="text-accent text-lg">{t('contact.email_address')}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{t('contact.response_time_label')}</h3>
                    <p className="text-neutral-300">{t('contact.response_time')}</p>
                  </div>
                </div>
              </div>

              {/* What We Need */}
              <div className="bg-card rounded-lg p-8 border border-neutral-700">
                <div className="text-center mb-8">
                  <span className="text-4xl">🛡️</span>
                  <h2 className="text-2xl font-bold mt-4 text-yellow-400">{t('contact.what_we_need')}</h2>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-accent mr-3 mt-1">⚡</span>
                    <span className="text-neutral-300">{t('contact.need_larp_name')}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-accent mr-3 mt-1">⚡</span>
                    <span className="text-neutral-300">{t('contact.need_subdomain')}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-accent mr-3 mt-1">⚡</span>
                    <span className="text-neutral-300">{t('contact.need_participants')}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-accent mr-3 mt-1">⚡</span>
                    <span className="text-neutral-300">{t('contact.need_requirements')}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-accent mr-3 mt-1">⚡</span>
                    <span className="text-neutral-300">{t('contact.need_content')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
