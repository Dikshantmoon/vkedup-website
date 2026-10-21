import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "./site-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "VKEDUP — Business Stories, Simplified",
  description:
    "VKEDUP explains business through company stories, startup journeys, business models, and practical growth lessons.",
  applicationName: "VKEDUP",
  keywords: [
    "business stories",
    "company stories",
    "startup stories",
    "business models",
    "growth strategies",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "VKEDUP",
    title: "VKEDUP — Business Stories, Simplified",
    description:
      "Company stories, startup journeys, business models, and practical growth lessons—made simple.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "VKEDUP — Business Stories, Simplified",
    description:
      "Company stories, startup journeys, business models, and practical growth lessons—made simple.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
