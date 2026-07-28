import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "BAUKRA — Catálogo digital de servicios",
  description:
    "Landing pages, catálogos digitales y páginas web diseñadas a medida con dirección visual, estrategia de conversión e inteligencia artificial aplicada.",
  openGraph: {
    title: "BAUKRA — Catálogo digital de servicios",
    description:
      "Landing pages, catálogos digitales y páginas web diseñadas a medida con dirección visual, estrategia de conversión e IA aplicada.",
    locale: "es_EC",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
