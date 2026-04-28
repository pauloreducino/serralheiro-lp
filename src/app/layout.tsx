import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Barlow } from "next/font/google";
import "./globals.css";

/* ── Google Fonts ──────────────────────────────────────────────────── */
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  preload: true,
});

const barlow = Barlow({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  preload: true,
});

/* ── SEO Metadata ─────────────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL("https://ferroforteserralheria.com.br"),
  title: {
    default: "Ferro Forte Serralheria | Portões, Grades e Estruturas Metálicas",
    template: "%s | Ferro Forte Serralheria",
  },
  description:
    "Serralheria especializada em portões automáticos, grades de segurança, estruturas metálicas e corrimãos. Atendemos São Paulo e região. Orçamento grátis pelo WhatsApp!",
  keywords: [
    "serralheiro",
    "serralheria",
    "portão automático",
    "grades de segurança",
    "estrutura metálica",
    "corrimão",
    "portão de ferro",
    "portão de alumínio",
    "guarda corpo",
    "cobertura metálica",
    "São Paulo",
    "serralheiro São Paulo",
    "portão sob medida",
    "serralheria próxima",
  ],
  authors: [{ name: "Ferro Forte Serralheria" }],
  creator: "Ferro Forte Serralheria",
  publisher: "Ferro Forte Serralheria",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://ferroforteserralheria.com.br",
    title: "Ferro Forte Serralheria | Portões, Grades e Estruturas Metálicas",
    description:
      "Serralheria especializada com +15 anos de experiência. Portões automáticos, grades de segurança e estruturas metálicas sob medida. Orçamento grátis!",
    siteName: "Ferro Forte Serralheria",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ferro Forte Serralheria - Trabalhos em metal de alta qualidade",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ferro Forte Serralheria | Portões e Estruturas Metálicas",
    description:
      "Serralheiro com +15 anos de experiência. Portões, grades e estruturas. Orçamento grátis!",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://ferroforteserralheria.com.br",
  },
  verification: {
    google: "sua-chave-google-search-console",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111111",
};

/* ── JSON-LD Schema ────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://ferroforteserralheria.com.br",
  name: "Ferro Forte Serralheria",
  description:
    "Serralheria especializada em portões automáticos, grades de segurança e estruturas metálicas.",
  url: "https://ferroforteserralheria.com.br",
  telephone: "+55-11-99999-9999",
  email: "contato@ferroforteserralheria.com.br",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua das Ferragens, 123",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    postalCode: "01000-000",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -23.5505,
    longitude: -46.6333,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "07:30",
      closes: "13:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/ferroforteserralheria",
    "https://wa.me/5511999999999",
  ],
  priceRange: "$$",
  image: "https://ferroforteserralheria.com.br/images/og-image.jpg",
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: -23.5505,
      longitude: -46.6333,
    },
    geoRadius: "50000",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${bebasNeue.variable} ${barlow.variable}`}>
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="font-body antialiased bg-iron text-steel-200 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
