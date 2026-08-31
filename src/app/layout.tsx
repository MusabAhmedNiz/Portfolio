import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
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
  title: "MusabNiz - Full Stack Developer",
  description:
    "Portfolio of Musab — full-stack developer building web apps with Next.js, React, and TypeScript. Auth, payments, file uploads, and a homelab on the side.",
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
