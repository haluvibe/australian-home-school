import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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

const siteUrl = "https://www.australianhomeschooling.com.au";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Australian Home Schooling — Nurture Curiosity, Grow Together",
    template: "%s | Australian Home Schooling",
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
  authors: [{ name: "Australian Home Schooling" }],
  creator: "Australian Home Schooling",
  publisher: "Australian Home Schooling",
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
    siteName: "Australian Home Schooling",
    title: "Australian Home Schooling — Nurture Curiosity, Grow Together",
    description:
      "Free printable worksheets, Australian Curriculum V9 guides and lesson plans for homeschooling families. Foundation to Year 10.",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Australian Home Schooling",
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
        <Navbar />
        <main className="pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
