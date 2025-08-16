"use client";

import { useI18n } from "../../lib/i18n";

export default function About() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-neutral-900 to-neutral-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t("about.title")}
          </h1>
          <p className="text-xl text-neutral-300">
            {t("about.subtitle")}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-8 py-12">
        {/* Mission Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {t("about.mission.title")}
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            <p>{t("about.mission.description1")}</p>
            <p>{t("about.mission.description2")}</p>
            <p>{t("about.mission.description3")}</p>
          </div>
        </section>

        {/* Three Column Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* What We Offer */}
          <section className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-lg">
            <div className="text-yellow-500 text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-bold mb-4">
              {t("about.offer.title")}
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">⚡</span>
                {t("about.offer.hosting")}
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">⚡</span>
                {t("about.offer.subdomains")}
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">⚡</span>
                {t("about.offer.templates")}
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">⚡</span>
                {t("about.offer.support")}
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">⚡</span>
                {t("about.offer.ssl")}
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">⚡</span>
                {t("about.offer.community")}
              </li>
            </ul>
          </section>

          {/* Who We Are */}
          <section className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-lg">
            <div className="text-yellow-500 text-4xl mb-4">👥</div>
            <h3 className="text-xl font-bold mb-4">
              {t("about.team.title")}
            </h3>
            <p className="text-sm leading-relaxed">
              {t("about.team.description")}
            </p>
          </section>

          {/* Meet the Creator */}
          <section className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-lg">
            <div className="text-yellow-500 text-4xl mb-4">👤</div>
            <h3 className="text-xl font-bold mb-4">
              {t("about.creator.title")}
            </h3>
            <div className="text-sm">
              <p className="font-semibold text-yellow-600 dark:text-yellow-400 mb-2">
                {t("about.creator.name")}
              </p>
              <p className="leading-relaxed">
                {t("about.creator.description")}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}