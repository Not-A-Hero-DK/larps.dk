"use client";

import { useI18n } from "../lib/i18n";

export default function Header() {
  const { locale, setLocale, t } = useI18n();

  const handleSwitch = () => {
    setLocale(locale === "en" ? "da" : "en");
  };

  return (
    <header className="w-full flex items-center justify-between py-4 px-8 bg-neutral-900 text-white">
      <div className="font-bold text-lg">Heimdal Portal</div>
      
      {/* Navigation Menu */}
      <nav className="hidden md:flex items-center gap-6">
        <a href="#" className="text-neutral-300 hover:text-white transition-colors">
          {t("nav.home")}
        </a>
        <a href="#" className="text-neutral-300 hover:text-white transition-colors">
          {t("nav.current_projects")}
        </a>
        <a href="#" className="text-neutral-300 hover:text-white transition-colors">
          {t("nav.previous_projects")}
        </a>
        <a href="#" className="text-neutral-300 hover:text-white transition-colors">
          {t("nav.about_us")}
        </a>
        <a href="#" className="text-neutral-300 hover:text-white transition-colors">
          {t("nav.contact")}
        </a>
      </nav>

      <div className="flex items-center gap-4">
        {/* Language Switcher */}
        <button
          aria-label={t("default.switch_language")}
          onClick={handleSwitch}
          className="rounded px-3 py-1 bg-neutral-800 hover:bg-neutral-700 focus:outline focus:ring"
        >
          {locale === "en" ? "DA" : "EN"}
        </button>
        
        {/* Get Hosted Button */}
        <button className="rounded bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-4 py-2 transition-colors">
          {t("nav.get_hosted")}
        </button>
      </div>
    </header>
  );
}
