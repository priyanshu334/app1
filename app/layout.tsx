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

// SEO Metadata
export const metadata: Metadata = {
  title: {
    default: "Vikaasgarh",
    template: "%s | Vikaasgarh",
  },
  description: "Empowering growth and development through innovation and collaboration at Vikaasgarh.",
  keywords: ["vikaasgarh", "development", "growth", "innovation", "community"],
  authors: [{ name: "Vikaasgarh Team", url: "https://vikaasgarh.com" }],
  creator: "Vikaasgarh Team",
  metadataBase: new URL("https://vikaasgarh.com"),
  openGraph: {
    title: "Vikaasgarh",
    description: "Empowering growth and development through innovation and collaboration.",
    url: "https://vikaasgarh.com",
    siteName: "Vikaasgarh",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vikaasgarh - Empowering Growth",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikaasgarh",
    description: "Empowering growth and development through innovation and collaboration.",
    creator: "@vikaasgarh",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
