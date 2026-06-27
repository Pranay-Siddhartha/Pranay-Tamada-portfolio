import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pranay Siddhartha | Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, Django, and AI-powered web applications. Building modern interfaces that are both beautiful and functional.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "Django",
    "AI",
    "Web Development",
    "Portfolio",
  ],
  authors: [{ name: "Pranay Siddhartha" }],
  openGraph: {
    title: "Pranay Siddhartha | Full Stack Developer",
    description:
      "Full Stack Developer crafting AI-powered applications and polished user experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-background text-text-primary antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
