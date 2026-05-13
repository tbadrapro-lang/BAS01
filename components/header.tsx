"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, ShoppingCart, Phone } from "lucide-react"
import { useCart } from "@/app/context/cart-context"
import { SITE } from "@/lib/site"

const NAV = [
  { href: "/", label: "Accueil" },
  { href: "/menu", label: "Menu" },
  { href: "/#avis", label: "Avis" },
  { href: "/#contact", label: "Contact" },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { itemCount } = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? "bg-black/90 backdrop-blur-md border-b border-red-900/40" : "bg-black/60 backdrop-blur"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="font-black uppercase tracking-tight text-xl md:text-2xl">
            BREAD <span className="text-red-500">&amp;</span> SMASH
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {NAV.map(n => (
              <Link
                key={n.href}
                href={n.href}
                className="text-sm font-semibold uppercase tracking-wide text-zinc-300 hover:text-white transition"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <a
              href={`tel:${SITE.phoneTel}`}
              className="hidden sm:inline-flex items-center gap-2 text-xs md:text-sm font-bold text-zinc-300 hover:text-white"
            >
              <Phone className="w-4 h-4" />
              {SITE.phone}
            </a>
            <Link
              href="/menu"
              className="hidden md:inline-flex items-center justify-center bg-red-600 hover:bg-red-500 text-white font-bold uppercase tracking-wide text-sm px-5 min-h-[44px] rounded-full transition"
            >
              Commander
            </Link>
            <Link
              href="/checkout"
              aria-label="Voir le panier"
              className="relative inline-flex items-center justify-center min-h-[44px] min-w-[44px] rounded-full bg-zinc-900 border border-zinc-800 hover:border-red-600 transition"
            >
              <ShoppingCart className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-black rounded-full min-w-[20px] h-5 px-1 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            <button
              type="button"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              onClick={() => setOpen(o => !o)}
              className="md:hidden inline-flex items-center justify-center min-h-[44px] min-w-[44px] rounded-full bg-zinc-900 border border-zinc-800"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="px-4 pb-4 flex flex-col gap-2 border-t border-zinc-900/80">
          {NAV.map(n => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block text-base font-semibold uppercase tracking-wide text-zinc-200 py-3"
            >
              {n.label}
            </Link>
          ))}
          <Link
            href="/menu"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center bg-red-600 text-white font-bold uppercase tracking-wide text-sm px-5 min-h-[48px] rounded-full"
          >
            Commander
          </Link>
        </nav>
      </div>
    </header>
  )
}
