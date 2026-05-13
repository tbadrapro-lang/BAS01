"use client"

import { useMemo, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Search } from "lucide-react"
import { products, CATEGORY_LABELS, CATEGORY_ORDER, type Category } from "@/app/data/products"
import ProductCard from "./product-card"

export default function ProductGrid() {
  const searchParams = useSearchParams()
  const initialCat = searchParams.get("category") as Category | null
  const [category, setCategory] = useState<Category | "all">(
    initialCat && CATEGORY_ORDER.includes(initialCat) ? initialCat : "all"
  )
  const [query, setQuery] = useState("")

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return products.filter(p => {
      if (category !== "all" && p.category !== category) return false
      if (q && !p.name.toLowerCase().includes(q) && !p.description.toLowerCase().includes(q))
        return false
      return true
    })
  }, [category, query])

  return (
    <div>
      <div className="flex flex-col gap-4 mb-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input
            type="search"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Rechercher un produit…"
            className="w-full bg-zinc-950 border border-zinc-800 rounded-full pl-11 pr-4 min-h-[48px] text-sm focus:outline-none focus:border-red-600 transition"
            aria-label="Rechercher un produit"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-4 px-4 pb-2">
          <button
            type="button"
            onClick={() => setCategory("all")}
            className={`shrink-0 px-4 min-h-[44px] rounded-full text-sm font-bold uppercase tracking-wide transition ${
              category === "all"
                ? "bg-red-600 text-white"
                : "bg-zinc-900 text-zinc-300 hover:bg-zinc-800 border border-zinc-800"
            }`}
          >
            Tout
          </button>
          {CATEGORY_ORDER.map(cat => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={`shrink-0 px-4 min-h-[44px] rounded-full text-sm font-bold uppercase tracking-wide transition ${
                category === cat
                  ? "bg-red-600 text-white"
                  : "bg-zinc-900 text-zinc-300 hover:bg-zinc-800 border border-zinc-800"
              }`}
            >
              {CATEGORY_LABELS[cat]}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20 text-zinc-500">
          Aucun produit ne correspond à votre recherche.
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {filtered.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  )
}
