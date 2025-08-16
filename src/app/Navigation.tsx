"use client";

import Link from "next/link";
import GlobeIcon from "../components/icons/GlobeIcon";
import { useI18n } from "../lib/i18n";
import { useTheme } from "../lib/theme";

export default function Navigation() {
  const { locale, setLocale, t } = useI18n();
  const { theme, toggleTheme } = useTheme();

  const handleLanguageSwitch = () => {
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
            <div className="flex items-center space-x-2">
              <button
                aria-label={
                  theme === "dark"
                    ? t("default.light_mode")
                    : t("default.dark_mode")
                }
                onClick={toggleTheme}
                className="rounded-lg text-sm font-medium px-2 py-1 bg-neutral-800 hover:cursor-pointer hover:bg-neutral-700 transition-colors duration-200"
              >
                {theme === "dark" ? "☀️" : "🌙"}
              </button>
              <button
                aria-label={t("default.switch_language")}
                onClick={handleLanguageSwitch}
                className="flex items-center text-accent space-x-1 rounded-lg px-2 py-1 bg-neutral-800 hover:cursor-pointer hover:bg-neutral-700 transition-colors duration-200"
              >
                <GlobeIcon size={16} />
                <span className="text-sm font-medium">
                  {locale === "en" ? "DA" : "EN"}
                </span>
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="md:hidden flex items-center space-x-2">
              <button
                aria-label={
                  theme === "dark"
                    ? t("default.light_mode")
                    : t("default.dark_mode")
                }
                onClick={toggleTheme}
                className="rounded-lg px-2 py-1 bg-neutral-800 hover:bg-neutral-700 hover:cursor-pointer text-white transition-colors duration-200"
              >
                {theme === "dark" ? "☀️" : "🌙"}
              </button>
              <button
                aria-label={t("default.switch_language")}
                onClick={handleLanguageSwitch}
                className="flex items-center space-x-2 rounded-lg px-2 py-1 bg-neutral-800 bg-accent/10 text-accent hover:cursor-pointer hover:bg-accent hover:text-white border border-accent/20 hover:border-accent transition-all duration-200"
              >
                <GlobeIcon size={16} />
                <span className="text-sm font-medium">
                  {locale === "en" ? "DA" : "EN"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
