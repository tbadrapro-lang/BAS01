"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface PreviewCard {
  title: string
  category: string
  price: string
  image: string
  alt: string
}

const CARDS: PreviewCard[] = [
  {
    title: "Smash Burgers",
    category: "smash",
    price: "8.50€",
    image: "/smash/Original_Smash_8.50euro.webp",
    alt: "Original Smash Burger",
  },
  {
    title: "Baguettes",
    category: "baguettes",
    price: "10.90€",
    image: "/baguettes/Bavette_10.90euro.png",
    alt: "Baguette Bavette",
  },
  {
    title: "Sandwiches",
    category: "sandwiches",
    price: "8.00€",
    image: "/sandwiches/Mix_De_Luxe_8.00euro.png",
    alt: "Mix De Luxe sandwich",
  },
]

export default function MenuPreview() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-20 sm:py-24 bg-[#0a0a0a]" id="specialites">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-black uppercase tracking-tight text-4xl sm:text-5xl lg:text-6xl">
            Nos <span className="text-red-500">Spécialités</span>
          </h2>
          <p className="mt-3 text-zinc-400 italic">Trois familles. Une seule obsession : le goût.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          {CARDS.map((c, i) => (
            <motion.div
              key={c.category}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative"
            >
              <Link href={`/menu?category=${c.category}`} className="block">
                <div className="relative aspect-square">
                  <motion.div
                    className="relative w-full h-full"
                    animate={{ y: [0, -14, 0] }}
                    transition={{ duration: 4, delay: i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                    style={{ filter: "drop-shadow(0 25px 40px rgba(220, 38, 38, 0.45))" }}
                  >
                    <Image
                      src={c.image}
                      alt={c.alt}
                      fill
                      sizes="(max-width: 768px) 90vw, 33vw"
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.08 }}
                    className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 z-10 bg-red-600 text-white rounded-full w-20 h-20 sm:w-24 sm:h-24 flex flex-col items-center justify-center font-black shadow-xl shadow-red-900/40"
                  >
                    <span className="text-[10px] uppercase tracking-wide opacity-80">Dès</span>
                    <span className="text-lg sm:text-xl">{c.price}</span>
                  </motion.div>

                  <div className="absolute -bottom-2 -left-2 z-10 bg-emerald-600 text-white text-[10px] sm:text-xs font-black uppercase tracking-wide px-3 py-1.5 rounded-full">
                    100% Halal
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <h3 className="font-black uppercase tracking-tight text-2xl sm:text-3xl transition-colors group-hover:text-red-500">
                    {c.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/menu"
            className="inline-flex items-center justify-center bg-red-600 hover:bg-red-500 text-white font-black uppercase tracking-wide text-base px-8 min-h-[56px] rounded-full transition shadow-lg shadow-red-900/40"
          >
            Commander en ligne
          </Link>
        </div>
      </div>
    </section>
  )
}
