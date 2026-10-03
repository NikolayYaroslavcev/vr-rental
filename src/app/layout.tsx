import type { Metadata, Viewport } from "next";
import { Inter_Tight, Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";
import { MotionProvider } from "@/components/MotionProvider";
import { TOTAL_GAMES } from "@/lib/games";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["200", "300", "400", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "VRental: Аренда VR-шлемов Meta Quest 3 в Минске",
    template: "%s | VRental",
  },
  description: `Аренда Meta Quest 3 в Минске с бесплатной доставкой. ${TOTAL_GAMES}+ игр, без залога. Играйте в VR у себя дома.`,
  keywords: [
    "аренда VR шлемов Минск",
    "аренда Meta Quest Беларусь",
    "VR аренда Минск",
    "виртуальная реальность аренда",
    "Meta Quest 3 аренда",
    "VR шлем напрокат",
    "VR вечеринка аренда",
    "аренда VR игр",
    "виртуальная реальность Минск",
  ],
  authors: [{ name: "VRental" }],
  creator: "VRental",
  openGraph: {
    title: "VRental: Аренда VR-шлемов Meta Quest 3 в Минске",
    description: `Арендуйте Meta Quest 3 в Минске. Бесплатная доставка, ${TOTAL_GAMES}+ игр, без залога.`,
    url: siteUrl,
    siteName: "VRental",
    locale: "ru_BY",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: "VRental: Аренда VR-шлемов в Минске",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VRental: Аренда VR-шлемов в Минске",
    description: `Арендуйте Meta Quest 3 в Минске. Бесплатная доставка, ${TOTAL_GAMES}+ игр.`,
    images: [`${siteUrl}/og.png`],
  },
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
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: "#162e46",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#business`,
      name: "VRental",
      description: `Аренда VR-шлемов Meta Quest 3 в Минске. Бесплатная доставка, ${TOTAL_GAMES}+ игр, без залога.`,
      url: siteUrl,
      telephone: "+375290000000",
      priceRange: "40-350 BYN",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Минск",
        addressCountry: "BY",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 53.9,
        longitude: 27.56,
      },
      areaServed: {
        "@type": "City",
        name: "Минск",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Аренда VR в Минске",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Аренда Meta Quest 3",
              description: `Полный VR-комплект: шлем Meta Quest 3, контроллеры, зарядка, ${TOTAL_GAMES}+ игр`,
            },
            price: "40",
            priceCurrency: "BYN",
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "VRental",
      url: siteUrl,
      inLanguage: "ru",
      publisher: { "@id": `${siteUrl}/#business` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${interTight.variable} ${manrope.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
