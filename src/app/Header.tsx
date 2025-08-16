"use client";

import { useI18n } from "../lib/i18n";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const { locale, setLocale, t } = useI18n();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSwitch = () => {
    setLocale(locale === "en" ? "da" : "en");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <header className="w-full bg-neutral-900 text-white shadow-lg" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-yellow-400 text-2xl mr-2" aria-hidden="true">⚡</span>
              <h1 className="font-bold text-lg lg:text-xl">Heimdal Portal</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6" role="navigation" aria-label="Main navigation">
              <Link 
                href="/" 
                className="text-yellow-400 hover:text-yellow-300 font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-neutral-900 rounded px-2 py-1"
                aria-current="page"
              >
                Home
              </Link>
              <a 
                href="/current-projects" 
                className="text-white hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-neutral-900 rounded px-2 py-1"
              >
                Current Projects
              </a>
              <a 
                href="/previous-projects" 
                className="text-white hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-neutral-900 rounded px-2 py-1"
              >
                Previous Projects
              </a>
              <a 
                href="/about" 
                className="text-white hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-neutral-900 rounded px-2 py-1"
              >
                About Us
              </a>
              <a 
                href="/contact" 
                className="text-white hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-neutral-900 rounded px-2 py-1"
              >
                Contact
              </a>
            </nav>

            {/* Right side controls */}
            <div className="flex items-center gap-4">
              {/* Language Switcher */}
              <div className="flex items-center gap-2">
                <span className="text-sm" aria-hidden="true">🌐</span>
                <button
                  aria-label={t("default.switch_language")}
                  onClick={handleSwitch}
                  className="rounded px-2 py-1 bg-neutral-800 hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-neutral-900 text-sm font-medium transition-colors"
                >
                  {locale === "en" ? "EN" : "DA"}
                </button>
                <button
                  aria-label={t("default.switch_language")}
                  onClick={handleSwitch}
                  className="rounded px-2 py-1 bg-neutral-800 hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-neutral-900 text-sm font-medium transition-colors"
                >
                  {locale === "en" ? "DA" : "EN"}
                </button>
              </div>

              {/* Get Hosted Button */}
              <a
                href="/get-hosted"
                className="hidden sm:inline-flex items-center bg-yellow-500 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-neutral-900 transition-colors"
              >
                Get Hosted
              </a>

              {/* Mobile menu button */}
              <button
                type="button"
                className="lg:hidden p-2 rounded-md text-white hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-neutral-900"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-neutral-800">
              <Link
                href="/"
                className="block text-yellow-400 px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400"
                aria-current="page"
              >
                Home
              </Link>
              <a
                href="/current-projects"
                className="block text-white hover:text-yellow-300 px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                Current Projects
              </a>
              <a
                href="/previous-projects"
                className="block text-white hover:text-yellow-300 px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                Previous Projects
              </a>
              <a
                href="/about"
                className="block text-white hover:text-yellow-300 px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                About Us
              </a>
              <a
                href="/contact"
                className="block text-white hover:text-yellow-300 px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                Contact
              </a>
              <a
                href="/get-hosted"
                className="block bg-yellow-500 text-black px-3 py-2 rounded-md text-base font-medium hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 mx-3 mt-4"
              >
                Get Hosted
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
