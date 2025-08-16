"use client";

import { useState } from "react";
import { useI18n } from "../../lib/i18n";

interface FormData {
  name: string;
  email: string;
  larpName: string;
  description: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  larpName?: string;
  description?: string;
}

export default function ContactForm() {
  const { t } = useI18n();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    larpName: "",
    description: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t("contact.form.fields.name.required");
    }

    if (!formData.email.trim()) {
      newErrors.email = t("contact.form.fields.email.required");
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t("contact.form.fields.email.invalid");
    }

    if (!formData.larpName.trim()) {
      newErrors.larpName = t("contact.form.fields.larpName.required");
    }

    if (!formData.description.trim()) {
      newErrors.description = t("contact.form.fields.description.required");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call - in real implementation, this would send to a backend
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For now, just log the form data and show success
      console.log("Form submitted:", formData);
      
      setSubmitStatus('success');
      setFormData({
        name: "",
        email: "",
        larpName: "",
        description: "",
      });
    } catch (error) {
      console.error("Failed to submit form:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors";
  const labelClasses = "block text-sm font-medium text-neutral-300 mb-2";
  const errorClasses = "text-red-400 text-sm mt-1";

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {t("contact.title")}
        </h1>
        <p className="text-lg text-neutral-400">
          {t("contact.subtitle")}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-neutral-800 rounded-xl p-8 border border-neutral-700">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold">{t("contact.form.title")}</h2>
          </div>
          
          <p className="text-neutral-400 mb-8">
            {t("contact.form.description")}
          </p>

          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-900/50 border border-green-700 rounded-lg text-green-300">
              {t("contact.form.success")}
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-900/50 border border-red-700 rounded-lg text-red-300">
              {t("contact.form.error")}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            {/* Name Field */}
            <div className="mb-6">
              <label htmlFor="name" className={labelClasses}>
                {t("contact.form.fields.name.label")}
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleInputChange('name')}
                placeholder={t("contact.form.fields.name.placeholder")}
                className={`${inputClasses} ${errors.name ? 'border-red-500 focus:ring-red-500' : ''}`}
                aria-describedby={errors.name ? "name-error" : undefined}
                aria-invalid={errors.name ? 'true' : 'false'}
                required
              />
              {errors.name && (
                <div id="name-error" className={errorClasses} role="alert">
                  {errors.name}
                </div>
              )}
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <label htmlFor="email" className={labelClasses}>
                {t("contact.form.fields.email.label")}
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange('email')}
                placeholder={t("contact.form.fields.email.placeholder")}
                className={`${inputClasses} ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
                aria-describedby={errors.email ? "email-error" : undefined}
                aria-invalid={errors.email ? 'true' : 'false'}
                required
              />
              {errors.email && (
                <div id="email-error" className={errorClasses} role="alert">
                  {errors.email}
                </div>
              )}
            </div>

            {/* LARP Name Field */}
            <div className="mb-6">
              <label htmlFor="larpName" className={labelClasses}>
                {t("contact.form.fields.larpName.label")}
              </label>
              <input
                type="text"
                id="larpName"
                value={formData.larpName}
                onChange={handleInputChange('larpName')}
                placeholder={t("contact.form.fields.larpName.placeholder")}
                className={`${inputClasses} ${errors.larpName ? 'border-red-500 focus:ring-red-500' : ''}`}
                aria-describedby={errors.larpName ? "larpName-error" : undefined}
                aria-invalid={errors.larpName ? 'true' : 'false'}
                required
              />
              {errors.larpName && (
                <div id="larpName-error" className={errorClasses} role="alert">
                  {errors.larpName}
                </div>
              )}
            </div>

            {/* Description Field */}
            <div className="mb-8">
              <label htmlFor="description" className={labelClasses}>
                {t("contact.form.fields.description.label")}
              </label>
              <textarea
                id="description"
                value={formData.description}
                onChange={handleInputChange('description')}
                placeholder={t("contact.form.fields.description.placeholder")}
                rows={5}
                className={`${inputClasses} resize-y min-h-[120px] ${errors.description ? 'border-red-500 focus:ring-red-500' : ''}`}
                aria-describedby={errors.description ? "description-error" : undefined}
                aria-invalid={errors.description ? 'true' : 'false'}
                required
              />
              {errors.description && (
                <div id="description-error" className={errorClasses} role="alert">
                  {errors.description}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-800"
              aria-describedby="submit-status"
            >
              <div className="flex items-center justify-center gap-2">
                {isSubmitting && (
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                )}
                {isSubmitting ? t("contact.form.submitting") : t("contact.form.submit")}
              </div>
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          {/* Direct Contact */}
          <div className="bg-neutral-800 rounded-xl p-8 border border-neutral-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold">{t("contact.info.direct.title")}</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-neutral-300 mb-1">
                  {t("contact.info.direct.email")}
                </h3>
                <a 
                  href="mailto:hosting@larps.dk"
                  className="text-blue-400 hover:text-blue-300 underline transition-colors"
                >
                  {t("contact.info.direct.emailAddress")}
                </a>
              </div>
              
              <div>
                <h3 className="font-medium text-neutral-300 mb-1">
                  {t("contact.info.direct.responseTime")}
                </h3>
                <p className="text-neutral-400">
                  {t("contact.info.direct.responseTimeValue")}
                </p>
              </div>
            </div>
          </div>

          {/* Requirements */}
          <div className="bg-neutral-800 rounded-xl p-8 border border-neutral-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold">{t("contact.info.requirements.title")}</h2>
            </div>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-neutral-300">{t("contact.info.requirements.items.0")}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-neutral-300">{t("contact.info.requirements.items.1")}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-neutral-300">{t("contact.info.requirements.items.2")}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-neutral-300">{t("contact.info.requirements.items.3")}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-neutral-300">{t("contact.info.requirements.items.4")}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}