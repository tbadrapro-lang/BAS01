"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Copy, Check } from "lucide-react"

const KEY = "bas01_welcome_seen"
const CODE = "BREAD10"

export default function WelcomePopup() {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    if (localStorage.getItem(KEY)) return
    const t = setTimeout(() => setOpen(true), 3000)
    return () => clearTimeout(t)
  }, [])

  const close = () => {
    setOpen(false)
    try {
      localStorage.setItem(KEY, "1")
    } catch {}
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CODE)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {}
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={close}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={e => e.stopPropagation()}
            className="relative w-full max-w-sm bg-gradient-to-br from-zinc-900 to-black border border-red-600/40 rounded-3xl p-8 text-center shadow-2xl shadow-red-900/40"
            role="dialog"
            aria-modal="true"
            aria-labelledby="welcome-title"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Fermer"
              className="absolute top-3 right-3 inline-flex items-center justify-center w-9 h-9 rounded-full bg-zinc-800 hover:bg-zinc-700 transition"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-5xl mb-2">🍔</div>
            <h2 id="welcome-title" className="font-black uppercase tracking-tight text-2xl">
              Bienvenue !
            </h2>
            <p className="mt-2 text-sm text-zinc-300">
              <span className="text-red-500 font-black text-lg">-10%</span> sur votre première commande en ligne.
            </p>

            <button
              type="button"
              onClick={copy}
              className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-black uppercase tracking-wide text-sm px-5 min-h-[52px] rounded-full transition"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? "Code copié !" : `Code : ${CODE}`}
            </button>

            <p className="mt-3 text-xs text-zinc-500">À renseigner au checkout.</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
