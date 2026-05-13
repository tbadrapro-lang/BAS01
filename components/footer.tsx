import Link from "next/link"
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react"
import { SITE } from "@/lib/site"

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-900 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 grid gap-10 md:grid-cols-4">
        <div>
          <div className="font-black uppercase tracking-tight text-xl">
            BREAD <span className="text-red-500">&amp;</span> SMASH
          </div>
          <p className="mt-3 text-sm text-zinc-400 italic">{SITE.tagline}</p>
          <div className="mt-4 flex gap-3">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-zinc-900 hover:bg-red-600 transition"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-zinc-900 hover:bg-red-600 transition"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-bold uppercase tracking-wide text-sm mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-zinc-400">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-red-500 shrink-0" />
              <span>{SITE.address}</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 mt-0.5 text-red-500 shrink-0" />
              <a href={`tel:${SITE.phoneTel}`} className="hover:text-white">
                {SITE.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="w-4 h-4 mt-0.5 text-red-500 shrink-0" />
              <span>7j/7 · {SITE.hours}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold uppercase tracking-wide text-sm mb-4">Livraison</h3>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li>
              <a href={SITE.uberEats} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Uber Eats
              </a>
            </li>
            <li>
              <a href={SITE.deliveroo} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Deliveroo
              </a>
            </li>
            <li>
              <Link href="/checkout" className="hover:text-white">
                Commander en ligne
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold uppercase tracking-wide text-sm mb-4">Informations</h3>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li>
              <Link href="/menu" className="hover:text-white">
                Notre menu
              </Link>
            </li>
            <li>
              <Link href="/mentions-legales" className="hover:text-white">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link href="/cgv" className="hover:text-white">
                CGV
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-zinc-900 py-6 text-center text-xs text-zinc-500">
        © 2026 Bread &amp; Smash — Tous droits réservés. 100% Halal.
      </div>
    </footer>
  )
}
