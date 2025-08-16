import type { Metadata } from "next";
import { I18nProvider } from "../lib/i18n";
import "./globals.css";
import Header from "./Header";

export const metadata: Metadata = {
  title: "LARPS.dk - Guardian of LARP Realms",
  description: "Free hosting for LARP communities worldwide",
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
