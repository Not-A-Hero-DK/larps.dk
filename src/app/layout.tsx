import type { Metadata } from "next";
import { I18nProvider } from "../lib/i18n";
import "./globals.css";
import Header from "./Header";

export const metadata: Metadata = {
  title: "Heimdal Portal - Guardian of LARP Realms",
  description: "Free hosting for LARP communities worldwide. Share your adventures, connect with players, and bring your stories to life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <I18nProvider>
          <Header />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
