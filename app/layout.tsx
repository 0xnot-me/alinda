import type { Metadata } from "next";
import { Geist_Mono, Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: ["400"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Linda R. Olsson Inc., Realtor",
  description:
    "Palm Beach FL Luxury Homes & Condos - Linda R. Olsson Inc., Realtor",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
    other: [
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://cdn.photos.sparkplatform.com" />
        <link rel="dns-prefetch" href="https://mlspalmbeach.lindaolsson.com" />
        <link rel="dns-prefetch" href="https://middleware.idxbroker.com" />
      </head>
      <body
        className={`${instrumentSerif.variable} ${geistMono.variable} font-serif antialiased`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
        {/* Defer ads/analytics until after the page is interactive / idle */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17444037255"
          strategy="lazyOnload"
        />
        <Script id="google-ads-gtag" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17444037255');
          `}
        </Script>
      </body>
    </html>
  );
}
