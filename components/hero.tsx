"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useEffect, useState } from "react"
import { Flame, Phone, MapPin, Clock, Star, ChevronDown } from "lucide-react"
import { SITE } from "@/lib/site"

function Counter({ to, suffix = "", duration = 1.2 }: { to: number; suffix?: string; duration?: number }) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    let start = 0
    const startTime = performance.now()
    let raf = 0
    const step = (now: number) => {
      const p = Math.min((now - startTime) / (duration * 1000), 1)
      setVal(Math.floor(start + (to - start) * p))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [to, duration])
  return (
    <span>
      {val}
      {suffix}
    </span>
  )
}

export default function Hero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 60, damping: 18 })
  const springY = useSpring(mouseY, { stiffness: 60, damping: 18 })
  const tx = useTransform(springX, [-1, 1], [-12, 12])
  const ty = useTransform(springY, [-1, 1], [-12, 12])

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = (e.clientY / window.innerHeight) * 2 - 1
      mouseX.set(x)
      mouseY.set(y)
    }
    window.addEventListener("mousemove", onMove)
    return () => window.removeEventListener("mousemove", onMove)
  }, [mouseX, mouseY])

  return (
    <section className="relative overflow-hidden min-h-screen bg-[#0a0a0a]">
      {/* Cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-50" aria-hidden="true" />

      {/* Glow orbs */}
      <motion.div
        aria-hidden="true"
        className="absolute -top-40 -left-32 w-[500px] h-[500px] rounded-full bg-red-600/20 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-amber-600/20 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, delay: 1 }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute block w-1 h-1 rounded-full bg-red-500/60"
            style={{ left: `${(i * 53) % 100}%`, top: "100%" }}
            animate={{ y: ["0vh", "-110vh"], opacity: [0, 1, 0] }}
            transition={{
              duration: 8 + (i % 5),
              repeat: Infinity,
              delay: i * 0.4,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-10 pb-20 md:pt-16 md:pb-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[calc(100vh-5rem)]">
        {/* Image — mobile first */}
        <motion.div
          className="order-1 lg:order-2 relative flex justify-center"
          style={{ x: tx, y: ty }}
        >
          <div className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px]">
            <div className="absolute inset-0 -m-10 bg-red-600/30 blur-3xl rounded-full" aria-hidden="true" />
            <div className="absolute inset-0 -m-16 bg-amber-500/15 blur-3xl rounded-full" aria-hidden="true" />
            <motion.div
              className="relative w-full h-full"
              animate={{ y: [0, -20, 0], rotate: [-2, 2, -2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{ filter: "drop-shadow(0 25px 50px rgba(220, 38, 38, 0.5))" }}
            >
              <Image
                src="/smash/Original_Smash_8.50euro.webp"
                alt="Original Smash Burger Bread & Smash"
                fill
                priority
                sizes="(max-width: 768px) 280px, 600px"
                className="object-contain"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="order-2 lg:order-1 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-red-600/15 border border-red-500/30 px-4 py-2 rounded-full mb-6"
          >
            <motion.span
              animate={{ rotate: [0, 12, -8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="text-red-500"
            >
              <Flame className="w-4 h-4" />
            </motion.span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wide text-red-300">
              100% Halal · Viande du boucher
            </span>
          </motion.div>

          <h1 className="font-black uppercase tracking-tight leading-[0.85] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
            <motion.span
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="block text-red-500"
            >
              BREAD
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="block text-white"
            >
              &amp; SMASH
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 text-xl sm:text-2xl italic text-amber-400 font-light"
          >
            « {SITE.tagline} »
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-5 text-base sm:text-lg text-zinc-300 max-w-xl"
          >
            Smash burgers, sandwiches, baguettes garnies. Viande du boucher, frites maison coupées chaque matin. Ouvert 7j/7 à Boissy-Saint-Léger.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-7 flex flex-col sm:flex-row gap-3"
          >
            <a
              href={`tel:${SITE.phoneTel}`}
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-black uppercase tracking-wide text-base px-6 min-h-[56px] rounded-full transition shadow-lg shadow-red-900/50"
            >
              <Phone className="w-5 h-5" />
              {SITE.phone}
            </a>
            <Link
              href="/menu"
              className="inline-flex items-center justify-center gap-2 border-2 border-red-500 text-white hover:bg-red-500/10 font-black uppercase tracking-wide text-base px-6 min-h-[56px] rounded-full transition"
            >
              Voir le menu
            </Link>
          </motion.div>

          {/* Location card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 bg-zinc-950/60 border border-zinc-800 rounded-2xl p-4 max-w-md backdrop-blur"
          >
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              📍 Ouvert 7j/7
            </div>
            <div className="mt-2 flex items-start gap-2 text-sm text-zinc-300">
              <MapPin className="w-4 h-4 mt-0.5 text-red-500 shrink-0" />
              {SITE.address}
            </div>
            <div className="mt-1 flex items-start gap-2 text-sm text-zinc-300">
              <Clock className="w-4 h-4 mt-0.5 text-red-500 shrink-0" />
              {SITE.hours}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-8 grid grid-cols-3 gap-4 max-w-md"
          >
            <div>
              <div className="text-3xl sm:text-4xl font-black text-red-500">
                <Counter to={5} suffix="+" />
              </div>
              <div className="text-xs text-zinc-400 uppercase tracking-wide">Smash burgers</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-red-500">
                <Counter to={15} suffix="+" />
              </div>
              <div className="text-xs text-zinc-400 uppercase tracking-wide">Sandwiches</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-amber-400 flex items-baseline gap-1">
                4.9<Star className="w-4 h-4 fill-amber-400" />
              </div>
              <div className="text-xs text-zinc-400 uppercase tracking-wide">153 avis</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        aria-hidden="true"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-zinc-500"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.6, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  )
}
