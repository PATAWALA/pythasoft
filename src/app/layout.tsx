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
  title: "Phythasoft - Formations pratiques et accessibles pour tous",
  description: "Inscrivez-vous dès maintenant aux formations Phythasoft : développement web, mobile, bureautique et design graphique, même sans expérience.",
  openGraph: {
    title: "🌱 Rejoignez Phythasoft et changez votre avenir !",
    description: "Formations pratiques en création de sites, bureautique et design, accessibles même aux débutants. Inscrivez-vous gratuitement !",
    url: "https://pythasoft.vercel.app",
    type: "website",
    images: [
      {
        url: "https://pythasoft.vercel.app/cover.png",
        width: 1200,
        height: 630,
        alt: "Phythasoft cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "🌱 Rejoignez Phythasoft et changez votre avenir !",
    description: "Formations pratiques en création de sites, bureautique et design, accessibles même aux débutants. Inscrivez-vous gratuitement !",
    images: ["https://pythasoft.vercel.app/cover.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
