import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://bas01.vercel.app"
  return [
    { url: base, lastModified: new Date(), priority: 1 },
    { url: `${base}/menu`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/checkout`, lastModified: new Date(), priority: 0.7 },
    { url: `${base}/mentions-legales`, lastModified: new Date(), priority: 0.3 },
    { url: `${base}/cgv`, lastModified: new Date(), priority: 0.3 },
  ]
}
