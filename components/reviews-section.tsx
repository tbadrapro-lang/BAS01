"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Star } from "lucide-react"

interface Review {
  name: string
  initials: string
  color: string
  date: string
  text: string
}

const REVIEWS: Review[] = [
  {
    name: "Karim B.",
    initials: "KB",
    color: "from-red-500 to-amber-500",
    date: "Il y a 2 semaines",
    text: "Le meilleur smash burger de la région ! Viande bien grillée, frites maison croustillantes, accueil au top. Je recommande la Pastrame Smash, une tuerie.",
  },
  {
    name: "Sarah L.",
    initials: "SL",
    color: "from-pink-500 to-red-600",
    date: "Il y a 1 mois",
    text: "Service rapide, produits frais et de qualité. La baguette Bavette est ma préférée. Ambiance jeune et conviviale, parfait pour une pause déj rapide.",
  },
  {
    name: "Mehdi A.",
    initials: "MA",
    color: "from-amber-500 to-orange-600",
    date: "Il y a 3 semaines",
    text: "Excellent rapport qualité-prix. Tout est halal, viande du boucher, on sent la différence. Les frites cheddar bacon valent le détour !",
  },
]

export default function ReviewsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} id="avis" className="relative py-20 sm:py-24 bg-gradient-to-b from-[#0a0a0a] via-zinc-950 to-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-black uppercase tracking-tight text-4xl sm:text-5xl">
            Ils en <span className="text-red-500">parlent</span>
          </h2>
          <div className="mt-4 inline-flex items-center gap-3 bg-zinc-900/60 border border-zinc-800 px-5 py-2 rounded-full">
            <div className="flex" aria-label="Note 4.9 sur 5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-black text-lg">4.9/5</span>
            <span className="text-zinc-400 text-sm">— 153 avis Google</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <motion.article
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-zinc-950/70 border border-zinc-800 rounded-2xl p-6 backdrop-blur hover:border-red-600/50 transition"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${r.color} flex items-center justify-center font-black text-white`}
                >
                  {r.initials}
                </div>
                <div>
                  <div className="font-bold">{r.name}</div>
                  <div className="text-xs text-zinc-500">{r.date}</div>
                </div>
              </div>
              <div className="mt-3 flex" aria-label="5 étoiles">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mt-3 text-sm text-zinc-300 leading-relaxed">{r.text}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Bread+%26+Smash+Boissy-Saint-L%C3%A9ger"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-zinc-700 hover:border-red-500 text-white font-bold uppercase tracking-wide text-sm px-6 min-h-[48px] rounded-full transition"
          >
            Voir tous les avis Google
          </a>
        </div>
      </div>
    </section>
  )
}
