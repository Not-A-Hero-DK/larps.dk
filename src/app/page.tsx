"use client";

import { useI18n } from "../lib/i18n";

export default function Home() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center min-h-[80vh] px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          {t("landing.title")}
        </h1>
        <p className="text-xl md:text-2xl text-neutral-300 mb-12 max-w-4xl leading-relaxed">
          {t("landing.subtitle")}
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6">
          <button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 transition-colors flex items-center gap-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            {t("landing.request_hosting")}
          </button>
          <button className="rounded-full border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-semibold px-8 py-4 transition-colors flex items-center gap-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            {t("landing.view_projects")}
          </button>
        </div>
      </main>
    </div>
  );
}
