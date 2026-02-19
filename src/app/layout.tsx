import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const siteUrl = "https://ainative.school";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AI Native School — Nurture Curiosity, Grow Together",
    template: "%s | AI Native School",
  },
  description:
    "Australia's trusted homeschooling platform. Free printable worksheets, Australian Curriculum V9 guides, lesson plans and community support for families educating Foundation to Year 10.",
  keywords: [
    "homeschooling Australia",
    "Australian Curriculum V9",
    "home education Australia",
    "free printable worksheets",
    "homeschool curriculum",
    "lesson plans Australia",
    "homeschool resources",
    "Foundation to Year 10",
  ],
  authors: [{ name: "AI Native School" }],
  creator: "AI Native School",
  publisher: "AI Native School",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "AI Native School",
    title: "AI Native School — Nurture Curiosity, Grow Together",
    description:
      "Free printable worksheets, Australian Curriculum V9 guides and lesson plans for homeschooling families. Foundation to Year 10.",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Native School",
    description:
      "Free printable worksheets, curriculum guides and lesson plans for Australian homeschooling families.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <body
        className={`${fraunces.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
