import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-rubik",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  authors: [{ name: site.name, url: site.url }],
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@MusabAhmedNiz",
    title: site.title,
    description: site.description,
    images: [{ url: "/opengraph-image", alt: site.title }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${rubik.variable} ${inter.variable}`}>
      <body className="antialiased min-h-screen bg-background text-on-surface">
        {children}
      </body>
    </html>
  );
}
