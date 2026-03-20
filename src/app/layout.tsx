import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Oliva Gastronomía | Catering & Eventos Gastronómicos",
    template: "%s | Oliva Gastronomía",
  },
  description:
    "Catering y experiencias gastronómicas para eventos sociales, privados y corporativos en Argentina. Cocina de autor, servicio integral y propuestas a medida.",
  keywords: [
    "catering",
    "eventos",
    "gastronomía",
    "catering buenos aires",
    "catering argentina",
    "eventos corporativos",
    "catering casamiento",
    "chef a domicilio",
  ],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://olivagastronomia.com.ar",
    siteName: "Oliva Gastronomía",
    title: "Oliva Gastronomía | Catering & Eventos Gastronómicos",
    description:
      "Catering y experiencias gastronómicas para eventos sociales, privados y corporativos en Argentina.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Oliva Gastronomía",
      },
    ],
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
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
