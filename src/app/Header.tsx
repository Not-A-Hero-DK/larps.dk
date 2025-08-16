"use client";

import { useI18n } from "../lib/i18n";
import { useTheme } from "../lib/theme";

export default function Header() {
  const { locale, setLocale, t } = useI18n();
  const { theme, toggleTheme } = useTheme();

  const handleLanguageSwitch = () => {
    setLocale(locale === "en" ? "da" : "en");
  };

  return (
    <header className="w-full flex items-center justify-between py-4 px-8 bg-neutral-900 dark:bg-neutral-800 text-white">
      <div className="font-bold text-lg">Heimdal Portal</div>
      <div className="flex items-center gap-4">
        <button
          aria-label={theme === "light" ? t("default.dark_mode") : t("default.light_mode")}
          onClick={toggleTheme}
          className="rounded px-3 py-1 bg-neutral-800 hover:bg-neutral-700 dark:bg-neutral-700 dark:hover:bg-neutral-600 focus:outline focus:ring transition-colors"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
        <button
          aria-label={t("default.switch_language")}
          onClick={handleLanguageSwitch}
          className="rounded px-3 py-1 bg-neutral-800 hover:bg-neutral-700 dark:bg-neutral-700 dark:hover:bg-neutral-600 focus:outline focus:ring transition-colors"
        >
          {locale === "en" ? "DA" : "EN"}
        </button>
      </div>
    </header>
  );
}
