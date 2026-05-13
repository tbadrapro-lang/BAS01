"use client"

import { MapPin, Phone, Clock, MessageCircle } from "lucide-react"
import { SITE } from "@/lib/site"

export default function LocationSection() {
  const whatsappMessage = encodeURIComponent(
    "Bonjour Bread & Smash, j'aimerais passer commande."
  )

  return (
    <section id="contact" className="relative py-20 sm:py-24 bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="font-black uppercase tracking-tight text-4xl sm:text-5xl">
            Où nous <span className="text-red-500">trouver</span>
          </h2>
          <p className="mt-3 text-zinc-400">
            Au cœur de Boissy-Saint-Léger, à 2 pas du RER A.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-5">
            <div className="bg-zinc-950/70 border border-zinc-800 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-red-500 shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-wide text-zinc-500">Adresse</div>
                  <div className="font-bold mt-1">{SITE.address}</div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950/70 border border-zinc-800 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 text-red-500 shrink-0" />
                <div className="w-full">
                  <div className="text-xs uppercase tracking-wide text-zinc-500">Téléphone</div>
                  <a
                    href={`tel:${SITE.phoneTel}`}
                    className="font-bold mt-1 block hover:text-red-500"
                  >
                    {SITE.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950/70 border border-zinc-800 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-1 text-red-500 shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-wide text-zinc-500">Horaires</div>
                  <div className="font-bold mt-1">7j/7 · {SITE.hours}</div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <a
                href={SITE.uberEats}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-black border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-black font-black uppercase tracking-wide text-sm px-5 min-h-[52px] rounded-full transition"
              >
                Uber Eats
              </a>
              <a
                href={SITE.deliveroo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-black border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black font-black uppercase tracking-wide text-sm px-5 min-h-[52px] rounded-full transition"
              >
                Deliveroo
              </a>
            </div>

            <a
              href={`https://wa.me/${SITE.phoneWhatsapp}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-black uppercase tracking-wide text-sm px-5 min-h-[56px] rounded-full transition"
            >
              <MessageCircle className="w-5 h-5" />
              Commander par WhatsApp
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden border border-zinc-800 min-h-[400px]">
            <iframe
              title="Plan Bread & Smash"
              src={`https://www.google.com/maps?q=${SITE.geo.lat},${SITE.geo.lng}&hl=fr&z=16&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[400px]"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
