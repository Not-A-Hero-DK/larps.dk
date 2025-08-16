"use client";

import Link from "next/link";
import { useI18n } from "../lib/i18n";

export default function Header() {
  const { locale, setLocale, t } = useI18n();

  const handleSwitch = () => {
    setLocale(locale === "en" ? "da" : "en");
  };

  return (
    <header className="w-full flex items-center justify-between py-4 px-8 bg-neutral-900 text-white">
      <Link href="/" className="font-bold text-lg hover:text-neutral-200">
        Heimdal Portal
      </Link>
      <nav className="flex items-center gap-6">
        <Link href="/about" className="hover:text-neutral-200 transition-colors">
          {t("navigation.about")}
        </Link>
        <button
          aria-label={t("default.switch_language")}
          onClick={handleSwitch}
          className="rounded px-3 py-1 bg-neutral-800 hover:bg-neutral-700 focus:outline focus:ring transition-colors"
        >
          {locale === "en" ? "DA" : "EN"}
        </button>
      </nav>
    </header>
  );
}
