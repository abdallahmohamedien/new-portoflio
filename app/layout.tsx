import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

/*
 * Self-hosted fonts (no network needed at build time).
 * Latin-subset variable WOFF2 files, originally served by Google Fonts.
 * Licensed under the SIL OFL 1.1 — see app/fonts/OFL-*.txt.
 * next/font generates a metric-matched fallback to avoid layout shift.
 */

/** Body copy, labels and UI text. One variable file covers every weight. */
const inter = localFont({
  src: "./fonts/inter-latin-variable.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

/** Headings & prominent titles (site uses 500–700). */
const sora = localFont({
  src: "./fonts/sora-latin-variable.woff2",
  variable: "--font-sora",
  weight: "400 800",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdallah Mohamedien | Junior Frontend Developer",
  description:
    "Portfolio of Abdallah Mohamedien, Junior Frontend Developer at Wexcute (Cairo, Egypt), building responsive web apps with React, Next.js, Vue.js, TypeScript and Tailwind CSS.",
};

export const viewport: Viewport = {
  themeColor: "#080B12",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`} suppressHydrationWarning>
      <head>
        {/* Marks JS as available before first paint, so scroll-reveal styles never hide content without JS. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body suppressHydrationWarning className="bg-ink-950 font-sans text-fg antialiased">
        {children}
      </body>
    </html>
  );
}
