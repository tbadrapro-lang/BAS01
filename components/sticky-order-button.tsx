"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

const HIDDEN = ["/menu", "/checkout", "/success"]

export default function StickyOrderButton() {
  const pathname = usePathname() || "/"
  const hidden = HIDDEN.some(p => pathname === p || pathname.startsWith(p + "/"))

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-4 left-4 right-4 z-40 md:hidden"
        >
          <Link
            href="/menu"
            className="w-full flex items-center justify-center bg-red-600 text-white font-black uppercase tracking-wide text-base px-5 min-h-[56px] rounded-full shadow-2xl shadow-red-900/60"
          >
            🍔 Voir le menu &amp; Commander
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
