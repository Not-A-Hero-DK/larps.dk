"use client";

import { useI18n } from "../lib/i18n";

export default function Home() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern/Texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-900"></div>
        
        {/* Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto px-8 py-24 text-center">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-br from-blue-200 via-white to-slate-300 bg-clip-text text-transparent">
            {t("landing.title")}
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t("landing.subtitle")}
          </p>
          
          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg">
              {t("landing.request_hosting")}
            </button>
            <button className="border-2 border-slate-400 hover:border-slate-300 text-slate-300 hover:text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg">
              {t("landing.view_projects")}
            </button>
          </div>
        </div>
        
        {/* Decorative Element at Bottom */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-6 border-2 border-slate-400 rounded-full animate-pulse"></div>
        </div>
      </section>
    </div>
  );
}
