"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "../lib/i18n";

export default function Header() {
  const { locale, setLocale, t } = useI18n();
  const pathname = usePathname();

  const handleSwitch = () => {
    setLocale(locale === "en" ? "da" : "en");
  };

  const navItems = [
    { href: "/", label: t("navigation.home") },
    { href: "/contact", label: t("navigation.contact") },
  ];

  return (
    <header className="w-full flex items-center justify-between py-4 px-8 bg-neutral-900 text-white">
      <div className="flex items-center gap-8">
        <Link href="/" className="font-bold text-lg hover:text-yellow-400 transition-colors">
          Heimdal Portal
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-yellow-400 ${
                pathname === item.href
                  ? "text-yellow-400"
                  : "text-neutral-300"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      
      <div className="flex items-center gap-4">
        {/* Mobile menu - simple version */}
        <div className="md:hidden">
          <select
            value={pathname}
            onChange={(e) => window.location.href = e.target.value}
            className="bg-neutral-800 text-white rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            aria-label="Navigation menu"
          >
            {navItems.map((item) => (
              <option key={item.href} value={item.href}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
        
        <button
          aria-label={t("default.switch_language")}
          onClick={handleSwitch}
          className="rounded px-3 py-1 bg-neutral-800 hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors"
        >
          {locale === "en" ? "DA" : "EN"}
        </button>
      </div>
    </header>
  );
}
