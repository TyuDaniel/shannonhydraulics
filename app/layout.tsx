import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Shannon Hydraulics LTD | Hydraulic Hose Repair, Cylinders, Pumps & Supplies — Limerick, Ireland",
  description:
    "Shannon Hydraulics LTD in Limerick, Ireland, specialists in hydraulic hose repair, hydraulic cylinder & ram repair, supply of hydraulic pumps, valves, motors, power packs, oil, grease, seals, filters, chains, couplings, lifting gear, copper brake pipes, and more. Serving clients across Ireland.",
  keywords: [
    "hydraulic hose repair Limerick",
    "hydraulic hose repair Ireland",
    "hydraulic cylinder repair Limerick",
    "hydraulic ram repair",
    "hydraulic pump supply Ireland",
    "hydraulic valve supply",
    "hydraulic motor supply",
    "hydraulic power pack",
    "hydraulic oil Limerick",

    "power washer hose repair",
    "heavy duty chains Ireland",
    "quick release couplings",
    "log splitter cylinders",
    "lifting slings shackles",
    "copper brake pipes",
    "JCB spare parts Ireland",
    "Hitachi spare parts",
    "CAT hose repairs",
    "forestry hoses oil Ireland",
    "hydraulic seal kits",
    "oil filters filtration",
    "bucket teeth shackles",
    "industrial paint supplies",
    "Shannon Hydraulics",
    "hydraulic repairs Limerick",
    "hydraulic supplies Ireland",
  ],
  openGraph: {
    title: "Shannon Hydraulics LTD | Hydraulic Repairs & Supplies — Limerick, Ireland",
    description:
      "Ireland's trusted provider for hydraulic hose repair, cylinder repair, pumps, valves, motors, oil, and more. Based in Limerick, serving clients nationwide.",
    url: "https://shannonhydraulics.ie",
    siteName: "Shannon Hydraulics LTD",
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shannon Hydraulics LTD | Hydraulic Repairs & Supplies — Limerick",
    description:
      "Hydraulic hose repair, cylinder repair, pumps, valves, oil, and more. Limerick, Ireland.",
  },
  alternates: {
    canonical: "https://shannonhydraulics.ie",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://shannonhydraulics.ie/#business",
      name: "Shannon Hydraulics LTD",
      alternateName: "Shannon Hydraulics",
      description:
        "Shannon Hydraulics LTD is a specialist hydraulic service provider in Limerick, Ireland. We repair and supply hydraulic hoses, cylinders, rams, pumps, valves, motors, power packs, oil, grease, seals, filters, chains, couplings, lifting gear, copper brake pipes, and more. Serving clients across Ireland.",
      url: "https://shannonhydraulics.ie",
      telephone: "+353-61-294-492",
      email: "shannonhydraulics@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Unit 1, Crossagalla Industrial Estate",
        addressLocality: "Limerick",
        addressRegion: "County Limerick",
        postalCode: "V94 WP9F",
        addressCountry: "IE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 52.6487,
        longitude: -8.5932,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "17:00",
        },
      ],
      sameAs: [
        "https://www.facebook.com/ShannonHydraulicsPlantSale/",
      ],
      areaServed: {
        "@type": "Country",
        name: "Ireland",
      },
      priceRange: "$$",
      image: "https://shannonhydraulics.ie/images/shannonhydraulics.png",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Hydraulic Services & Products",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hydraulic Hose Supply & Repair" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hydraulic Cylinder & Ram Repair" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Heavy-Duty Chain Supply & Testing" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Power Washer Lance & Hose Repair" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Copper Brake Pipe Assembly & Supply" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "JCB, Hitachi & CAT Spare Parts" } },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "3",
        bestRating: "5",
        worstRating: "1",
      },
      review: [
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Jonathan Blackmore" },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody: "Needed a new power washer hose dog chewed through the old one. Called into Darius and gave him the old hose and he said call back in a half hour... Highly recommend him.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Cian O'Flynn" },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody: "Bought a replacement hose for my power washer here... The hose made up by Shannon Hydraulics was of far superior quality than the original... Very happy with the service.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Denis Hogan" },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody: "A friend recommended I contact Darius about a seized hydraulic hand pump... he recommended a suitable replacement and made a suitable hose. Great service.",
        },
      ],
    }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className={`${inter.className} bg-black text-white min-h-screen`}>
            <Header />
            {children}
            <Footer />
          </div>
          <Analytics /> {/* Added here to capture all pages */}
        </ThemeProvider>
      </body>
    </html>
  );
}
