import { Suspense } from "react"
import ProductGrid from "@/components/product-grid"

export const metadata = {
  title: "Notre Menu — Bread & Smash",
  description:
    "Découvrez notre carte : smash burgers, baguettes, sandwiches, frites maison. 100% halal, viande du boucher.",
}

export default function MenuPage() {
  return (
    <div className="relative bg-[#0a0a0a] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <header className="text-center mb-10">
          <h1 className="font-black uppercase tracking-tight text-4xl sm:text-5xl lg:text-6xl">
            Notre <span className="text-red-500">Menu</span>
          </h1>
          <p className="mt-3 text-zinc-400 max-w-xl mx-auto">
            Viande du boucher, frites maison coupées chaque matin. Tous nos produits sont 100% halal.
          </p>
        </header>

        <Suspense fallback={<div className="text-center text-zinc-500 py-20">Chargement…</div>}>
          <ProductGrid />
        </Suspense>
      </div>
    </div>
  )
}
