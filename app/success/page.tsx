"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

export default function SuccessPage() {
  return (
    <div className="min-h-[70vh] bg-[#0a0a0a] flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-lg">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 14 }}
          className="mx-auto w-24 h-24 rounded-full bg-emerald-600 flex items-center justify-center shadow-2xl shadow-emerald-900/40"
        >
          <Check className="w-12 h-12 text-white" strokeWidth={3} />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 font-black uppercase tracking-tight text-3xl sm:text-4xl"
        >
          Commande envoyée !
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-3 text-zinc-400"
        >
          Votre commande a été transmise via WhatsApp. L&apos;équipe Bread &amp; Smash vous rappelle pour confirmer.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-red-600 hover:bg-red-500 text-white font-black uppercase tracking-wide text-sm px-6 min-h-[52px] rounded-full transition"
          >
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/menu"
            className="inline-flex items-center justify-center border-2 border-zinc-700 hover:border-red-500 text-white font-black uppercase tracking-wide text-sm px-6 min-h-[52px] rounded-full transition"
          >
            Voir le menu
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
