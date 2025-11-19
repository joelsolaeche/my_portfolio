import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joel Solaeche - AI Engineer",
  description: "Portfolio of Joel Solaeche, an AI Engineer with +3 years of experience specializing in AI technologies. Also skilled in full stack development with React, JavaScript, and modern web technologies.",
  keywords: ["AI Engineer", "Machine Learning", "AI", "Python", "TensorFlow", "Deep Learning", "Joel Solaeche", "Software Developer", "React", "JavaScript"],
  authors: [{ name: "Joel Solaeche" }],
  creator: "Joel Solaeche",
  openGraph: {
    title: "Joel Solaeche - AI Engineer",
    description: "AI Engineer with +3 years of experience specializing in AI technologies",
    url: "https://joelsolaeche.com",
    siteName: "Joel Solaeche Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joel Solaeche - AI Engineer",
    description: "AI Engineer with +3 years of experience specializing in AI technologies",
    creator: "@joelsolaeche",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-inter antialiased text-slate-100 bg-black" suppressHydrationWarning={true}>
        <LanguageProvider>
          <Header />
          <main>
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
