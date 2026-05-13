"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Flame, Plus } from "lucide-react"
import type { Product } from "@/app/data/products"
import { useCart } from "@/app/context/cart-context"
import ProductImage from "./product-image"

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart()
  const [added, setAdded] = useState<"single" | "menu" | null>(null)

  const handleAdd = (asMenu: boolean) => {
    addToCart(product, asMenu)
    setAdded(asMenu ? "menu" : "single")
    setTimeout(() => setAdded(null), 1200)
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-zinc-950/70 border border-zinc-800 rounded-2xl p-4 hover:border-red-600/50 transition"
    >
      <div className="relative aspect-square">
        <div className="absolute top-1 left-1 z-10 bg-emerald-600 text-white text-[10px] font-black uppercase tracking-wide px-2 py-1 rounded-full">
          Halal
        </div>
        {product.isBestSeller && (
          <div className="absolute top-1 right-1 z-10 bg-amber-500 text-black text-[10px] font-black uppercase tracking-wide px-2 py-1 rounded-full flex items-center gap-1">
            <Flame className="w-3 h-3" />
            Best
          </div>
        )}
        <div
          className="relative w-full h-full transition-transform duration-500 group-hover:scale-105"
          style={{ filter: "drop-shadow(0 18px 30px rgba(220, 38, 38, 0.35))" }}
        >
          <ProductImage
            src={product.image}
            alt={product.name}
            category={product.category}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-contain"
          />
        </div>
      </div>

      <div className="mt-3">
        <h3 className="font-black uppercase tracking-tight text-base sm:text-lg leading-tight">
          {product.name}
        </h3>
        {product.spiceLevel && product.spiceLevel > 0 && (
          <div className="mt-1 flex gap-0.5" aria-label={`Niveau de piment ${product.spiceLevel} sur 3`}>
            {Array.from({ length: product.spiceLevel }).map((_, i) => (
              <Flame key={i} className="w-3.5 h-3.5 fill-red-500 text-red-500" />
            ))}
          </div>
        )}
        <p className="mt-1.5 text-xs text-zinc-400 line-clamp-2 leading-snug">
          {product.description}
        </p>
        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-xl font-black text-red-500">{product.price.toFixed(2)}€</span>
          {product.menuPrice && (
            <span className="text-xs text-zinc-500">Menu {product.menuPrice.toFixed(2)}€</span>
          )}
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2">
          {product.menuPrice ? (
            <button
              type="button"
              onClick={() => handleAdd(true)}
              className="inline-flex items-center justify-center gap-1 bg-amber-400 hover:bg-amber-300 text-black text-xs font-black uppercase tracking-wide min-h-[48px] rounded-full transition"
            >
              {added === "menu" ? "Ajouté ✓" : "+ Menu"}
            </button>
          ) : (
            <div />
          )}
          <button
            type="button"
            onClick={() => handleAdd(false)}
            className={`inline-flex items-center justify-center gap-1 ${
              product.menuPrice ? "" : "col-span-2"
            } bg-red-600 hover:bg-red-500 text-white text-xs font-black uppercase tracking-wide min-h-[48px] rounded-full transition`}
          >
            <Plus className="w-4 h-4" />
            {added === "single" ? "Ajouté ✓" : "Ajouter"}
          </button>
        </div>
      </div>
    </motion.div>
  )
}
