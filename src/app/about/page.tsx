"use client";

import { useI18n } from "../../lib/i18n";

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <div className="relative min-h-screen text-white overflow-hidden pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-br from-blue-200 via-white to-slate-300 bg-clip-text text-transparent">
            {t("about.title")}
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {t("about.subtitle")}
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-8">
              <span className="text-4xl mr-3">🌉</span>
              <h2 className="text-3xl md:text-4xl font-bold inline">
                {t("about.mission_title")}
              </h2>
            </div>
          </div>
          
          <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
            <p>{t("about.mission_description")}</p>
            <p>{t("about.mission_challenges")}</p>
            <p>{t("about.mission_vision")}</p>
          </div>
        </div>
      </section>

      {/* What We Offer, Who We Are, Meet the Creator Grid */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* What We Offer */}
            <div className="bg-neutral-800/50 rounded-lg p-8 border border-neutral-700">
              <div className="text-center mb-8">
                <span className="text-4xl">🌐</span>
                <h3 className="text-2xl font-bold mt-4 text-yellow-400">
                  {t("about.offer_title")}
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-accent mr-3 mt-1">⚡</span>
                  <span className="text-neutral-300">{t("about.offer_hosting")}</span>
                </div>
                <div className="flex items-start">
                  <span className="text-accent mr-3 mt-1">⚡</span>
                  <span className="text-neutral-300">{t("about.offer_subdomains")}</span>
                </div>
                <div className="flex items-start">
                  <span className="text-accent mr-3 mt-1">⚡</span>
                  <span className="text-neutral-300">{t("about.offer_templates")}</span>
                </div>
                <div className="flex items-start">
                  <span className="text-accent mr-3 mt-1">⚡</span>
                  <span className="text-neutral-300">{t("about.offer_support")}</span>
                </div>
                <div className="flex items-start">
                  <span className="text-accent mr-3 mt-1">⚡</span>
                  <span className="text-neutral-300">{t("about.offer_security")}</span>
                </div>
                <div className="flex items-start">
                  <span className="text-accent mr-3 mt-1">⚡</span>
                  <span className="text-neutral-300">{t("about.offer_community")}</span>
                </div>
              </div>
            </div>

            {/* Who We Are */}
            <div className="bg-neutral-800/50 rounded-lg p-8 border border-neutral-700">
              <div className="text-center mb-8">
                <span className="text-4xl">👥</span>
                <h3 className="text-2xl font-bold mt-4 text-yellow-400">
                  {t("about.who_title")}
                </h3>
              </div>
              
              <p className="text-neutral-300 leading-relaxed">
                {t("about.who_description")}
              </p>
            </div>

            {/* Meet the Creator */}
            <div className="bg-neutral-800/50 rounded-lg p-8 border border-neutral-700">
              <div className="text-center mb-8">
                <span className="text-4xl">👨‍💻</span>
                <h3 className="text-2xl font-bold mt-4 text-yellow-400">
                  {t("about.creator_title")}
                </h3>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-accent">
                  {t("about.creator_name")}
                </h4>
                <p className="text-neutral-300 leading-relaxed text-sm">
                  {t("about.creator_description")}
                </p>
                <p className="text-neutral-300 leading-relaxed text-sm">
                  {t("about.creator_background")}
                </p>
                <p className="text-neutral-300 leading-relaxed text-sm">
                  {t("about.creator_mission")}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-neutral-800/30 rounded-lg p-12 border border-accent/20">
            <h3 className="text-3xl font-bold mb-6">
              {t("about.cta_title")}
            </h3>
            <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
              {t("about.cta_description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-accent text-white hover:bg-accent/90 transition-colors duration-300 h-11 rounded-md px-8">
                {t("about.cta_get_in_touch")}
              </button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-muted/20 border border-accent/30 text-accent hover:bg-accent/10 hover:border-accent hover:shadow-glow transition-all duration-300 h-11 rounded-md px-8">
                {t("about.cta_view_examples")}
              </button>
            </div>
            <p className="text-neutral-400 mt-6 text-sm">
              {t("about.cta_contact")}<br />
              {t("about.cta_join")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}