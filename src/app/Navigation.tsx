"use client";

import Link from "next/link";
import { useI18n } from "../lib/i18n";

export default function Navigation() {
  const { locale, setLocale, t } = useI18n();

  const handleSwitch = () => {
    setLocale(locale === "en" ? "da" : "en");
  };

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/current-projects", label: t("nav.current") },
    { href: "/previous-projects", label: t("nav.previous") },
    { href: "/about", label: t("nav.about") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-accent">⚡</div>
            <span className="text-xl font-bold text-foreground">
              Heimdal Portal
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-accent `}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <button
              aria-label={t("default.switch_language")}
              onClick={handleSwitch}
              className="rounded px-3 py-1 bg-neutral-800 hover:bg-neutral-700 focus:outline focus:ring"
            >
              {locale === "en" ? "DA" : "EN"}
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <div className="md:hidden">
              <button
                aria-label={t("default.switch_language")}
                onClick={handleSwitch}
                className="rounded px-3 py-1 bg-neutral-800 hover:bg-neutral-700 focus:outline focus:ring"
              >
                {locale === "en" ? "DA" : "EN"}
              </button>
            </div>
            {/*  <Button variant="nordic" size="sm">
              {t("nav.getHosted")}
            </Button> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
