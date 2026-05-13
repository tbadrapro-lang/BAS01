import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CartProvider } from "./context/cart-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import StickyOrderButton from "@/components/sticky-order-button"
import { SITE } from "@/lib/site"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "Bread & Smash — Smash Burgers Halal | Boissy-Saint-Léger",
  description:
    "Restaurant halal à Boissy-Saint-Léger. Smash burgers, sandwiches, baguettes garnies avec viande du boucher. Frites maison. Ouvert 7j/7 jusqu'à 23h. Livraison Uber Eats & Deliveroo.",
  keywords: [
    "smash burger halal",
    "sandwich halal",
    "boissy-saint-léger",
    "restaurant halal",
    "frites maison",
    "livraison burger",
    "kefta",
    "merguez",
    "noix de veau",
  ],
  openGraph: {
    title: "Bread & Smash — Smash Burgers Halal",
    description: "La viande du boucher. Les frites maison. Le goût qui claque.",
    type: "website",
    locale: "fr_FR",
    siteName: "Bread & Smash",
    url: SITE.url,
  },
  twitter: { card: "summary_large_image" },
  manifest: "/manifest.json",
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Bread & Smash",
  description:
    "Restaurant halal à Boissy-Saint-Léger. Smash burgers, sandwiches baguettes, frites maison.",
  url: SITE.url,
  telephone: "+33171572705",
  address: {
    "@type": "PostalAddress",
    streetAddress: "38 Rue de Paris",
    addressLocality: "Boissy-Saint-Léger",
    postalCode: "94470",
    addressCountry: "FR",
  },
  geo: { "@type": "GeoCoordinates", latitude: 48.7547, longitude: 2.5053 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "11:00",
      closes: "23:00",
    },
  ],
  servesCuisine: ["Burgers", "Sandwiches", "Halal"],
  priceRange: "€€",
  hasMenu: `${SITE.url}/menu`,
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "153" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <a href="#main" className="skip-link">
          Aller au contenu
        </a>
        <CartProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <StickyOrderButton />
        </CartProvider>
      </body>
    </html>
  )
}
