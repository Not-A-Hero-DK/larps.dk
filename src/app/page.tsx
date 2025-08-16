"use client";

import { useI18n } from "../lib/i18n";

export default function Home() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <main id="main-content" className="relative">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t("landing.title")}
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            {t("landing.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/request-hosting"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-200 transform hover:scale-105"
            >
              <span className="mr-2" aria-hidden="true">🏠</span>
              {t("landing.request_hosting")}
            </a>
            
            <a
              href="/projects"
              className="inline-flex items-center border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-200"
            >
              <span className="mr-2" aria-hidden="true">➡️</span>
              {t("landing.view_projects")}
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="mt-20" aria-hidden="true">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full mx-auto relative">
              <div className="w-1 h-3 bg-gray-400 rounded-full mx-auto mt-2 animate-bounce"></div>
            </div>
          </div>
        </section>
      </main>

      {/* Featured Projects Section */}
      <section className="bg-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Discover the legendary adventures hosted on our platform
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Project 1 */}
            <article className="bg-slate-700 rounded-lg p-6 hover:bg-slate-600 transition-colors focus-within:ring-2 focus-within:ring-blue-400">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">The Last Saga of Midgard</h3>
                <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                  Upcoming
                </span>
              </div>
              
              <p className="text-gray-300 mb-4">
                An epic Nordic LARP set in the twilight of the gods, where heroes must prevent Ragnarök.
              </p>

              <div className="space-y-2 mb-6 text-sm text-gray-400">
                <div className="flex items-center">
                  <span className="mr-2" aria-hidden="true">📅</span>
                  <span>March 15-17, 2024</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2" aria-hidden="true">👥</span>
                  <span>120 participants</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2" aria-hidden="true">📍</span>
                  <span>Silkeborg, Denmark</span>
                </div>
              </div>

              <p className="text-sm text-gray-400 mb-4">
                Organized by: <span className="text-yellow-400">Nordic Legends Guild</span>
              </p>

              <a
                href="/projects/last-saga-midgard"
                className="inline-flex items-center border border-gray-500 text-gray-300 px-4 py-2 rounded hover:bg-gray-600 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
              >
                <span className="mr-2" aria-hidden="true">🔗</span>
                Visit Project Site
              </a>
            </article>

            {/* Project 2 */}
            <article className="bg-slate-700 rounded-lg p-6 hover:bg-slate-600 transition-colors focus-within:ring-2 focus-within:ring-blue-400">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">The Siege of Jormunheim</h3>
                <span className="bg-green-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                  Completed
                </span>
              </div>
              
              <p className="text-gray-300 mb-4">
                A massive castle siege that brought together 200 players for an epic battle.
              </p>

              <div className="space-y-2 mb-6 text-sm text-gray-400">
                <div className="flex items-center">
                  <span className="mr-2" aria-hidden="true">📅</span>
                  <span>September 8-10, 2023</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2" aria-hidden="true">👥</span>
                  <span>200 participants</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2" aria-hidden="true">📍</span>
                  <span>Helsingør, Denmark</span>
                </div>
              </div>

              <p className="text-sm text-gray-400 mb-4">
                Organized by: <span className="text-yellow-400">Iron Crown Collective</span>
              </p>

              <a
                href="/projects/siege-jormunheim"
                className="inline-flex items-center border border-gray-500 text-gray-300 px-4 py-2 rounded hover:bg-gray-600 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
              >
                <span className="mr-2" aria-hidden="true">🔗</span>
                Visit Project Site
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              About Heimdal Portal
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Named after the Norse god who guards the rainbow bridge Bifrost, Heimdal Portal 
              serves as the guardian of the digital realm for LARP communities worldwide. We 
              bridge the gap between your creative vision and the online world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="bg-slate-700 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-yellow-400" aria-hidden="true">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Free Hosting</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Complete hosting solution at no cost to LARP organizers. Focus on your stories, not server costs.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="bg-slate-700 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-yellow-400" aria-hidden="true">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Quick Setup</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Get your LARP website online in minutes with our streamlined process and beautiful templates.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="bg-slate-700 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-yellow-400" aria-hidden="true">🌐</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Subdomain Magic</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Your unique subdomain on larps.dk - professional, memorable, and perfectly suited for your LARP.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center">
              <div className="bg-slate-700 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-yellow-400" aria-hidden="true">💛</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Community Driven</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Built by LARPers, for LARPers. We understand the LARP community&apos;s unique needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
