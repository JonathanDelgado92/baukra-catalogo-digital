import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";

// ANALÍTICA — descomenta y agrega tus IDs reales cuando los tengas.
// Google Analytics (GA4):
// <Script src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX`} strategy="afterInteractive" />
// <Script id="ga4" strategy="afterInteractive">{`
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());
//   gtag('config', 'G-XXXXXXX');
// `}</Script>
//
// Google Search Console: agrega la etiqueta de verificación en `metadata.verification.google`
// (arriba, junto a openGraph) con el código que te da Search Console.
//
// Meta Pixel:
// <Script id="meta-pixel" strategy="afterInteractive">{`
//   !function(f,b,e,v,n,t,s){...}(window, document,'script',
//   'https://connect.facebook.net/en_US/fbevents.js');
//   fbq('init', 'TU_PIXEL_ID');
//   fbq('track', 'PageView');
// `}</Script>

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

// SEO / metadata reference — edit here to update how BAUKRA shares on Google,
// WhatsApp, and social media. See README-EDITAR.md for the full guide.
export const metadata: Metadata = {
  metadataBase: new URL("https://catalogobaukra.netlify.app"),
  title: "BAUKRA — Catálogo digital de servicios",
  description:
    "Landing pages, catálogos digitales y páginas web diseñadas a medida con dirección visual, estrategia de conversión e inteligencia artificial aplicada.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BAUKRA — Catálogo digital de servicios",
    description:
      "Landing pages, catálogos digitales y páginas web diseñadas a medida con dirección visual, estrategia de conversión e IA aplicada.",
    locale: "es_EC",
    type: "website",
    url: "/",
    // TODO: agrega una imagen de vista previa (1200x630px) en /public/og-image.jpg
    // y descomenta la línea de abajo para que se vea al compartir por WhatsApp/redes.
    // images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "BAUKRA — Catálogo digital de servicios",
    description:
      "Landing pages, catálogos digitales y páginas web diseñadas a medida con IA aplicada bajo dirección humana.",
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
