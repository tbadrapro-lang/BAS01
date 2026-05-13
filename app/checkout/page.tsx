"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, useMemo } from "react"
import { z } from "zod"
import { Minus, Plus, Trash2, MessageCircle, Phone } from "lucide-react"
import { useCart } from "@/app/context/cart-context"
import { SITE } from "@/lib/site"

const PROMO_CODE = "BREAD10"
const PROMO_DISCOUNT = 0.1

const orderSchema = z.object({
  firstName: z.string().min(2, "Prénom trop court"),
  lastName: z.string().min(2, "Nom trop court"),
  phone: z
    .string()
    .min(8, "Téléphone invalide")
    .regex(/^[0-9 +().-]+$/, "Téléphone invalide"),
  email: z.string().email("Email invalide").optional().or(z.literal("")),
  address: z.string().min(5, "Adresse trop courte"),
  postalCode: z.string().regex(/^\d{5}$/, "Code postal invalide"),
  city: z.string().min(2, "Ville requise"),
  instructions: z.string().max(500).optional(),
})

type OrderForm = z.infer<typeof orderSchema>

export default function CheckoutPage() {
  const router = useRouter()
  const { items, total, itemCount, updateQuantity, removeFromCart, clearCart } = useCart()
  const [form, setForm] = useState<OrderForm>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    postalCode: "",
    city: "Boissy-Saint-Léger",
    instructions: "",
  })
  const [errors, setErrors] = useState<Partial<Record<keyof OrderForm, string>>>({})
  const [promo, setPromo] = useState("")
  const [promoApplied, setPromoApplied] = useState(false)
  const [promoMsg, setPromoMsg] = useState("")

  const discount = promoApplied ? total * PROMO_DISCOUNT : 0
  const finalTotal = useMemo(() => Math.max(0, total - discount), [total, discount])

  const applyPromo = () => {
    if (promo.trim().toUpperCase() === PROMO_CODE) {
      setPromoApplied(true)
      setPromoMsg("-10% appliqué ✓")
    } else {
      setPromoApplied(false)
      setPromoMsg("Code invalide")
    }
  }

  const set = <K extends keyof OrderForm>(k: K, v: OrderForm[K]) =>
    setForm(f => ({ ...f, [k]: v }))

  const buildMessage = () => {
    const lines: string[] = []
    lines.push(`🍔 *Nouvelle commande Bread & Smash*`)
    lines.push("")
    lines.push(`*Client*`)
    lines.push(`${form.firstName} ${form.lastName}`)
    lines.push(`📞 ${form.phone}`)
    if (form.email) lines.push(`✉️ ${form.email}`)
    lines.push("")
    lines.push(`*Adresse de livraison*`)
    lines.push(`${form.address}`)
    lines.push(`${form.postalCode} ${form.city}`)
    if (form.instructions) {
      lines.push("")
      lines.push(`*Instructions*`)
      lines.push(form.instructions)
    }
    lines.push("")
    lines.push(`*Commande*`)
    for (const it of items) {
      const price = it.asMenu && it.product.menuPrice ? it.product.menuPrice : it.product.price
      const label = it.asMenu ? ` (Menu)` : ""
      lines.push(`• ${it.quantity}× ${it.product.name}${label} — ${(price * it.quantity).toFixed(2)}€`)
    }
    lines.push("")
    lines.push(`Sous-total : ${total.toFixed(2)}€`)
    if (promoApplied) lines.push(`Promo ${PROMO_CODE} : -${discount.toFixed(2)}€`)
    lines.push(`*Total : ${finalTotal.toFixed(2)}€*`)
    return lines.join("\n")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (items.length === 0) return
    const parsed = orderSchema.safeParse(form)
    if (!parsed.success) {
      const errs: Partial<Record<keyof OrderForm, string>> = {}
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof OrderForm
        if (!errs[key]) errs[key] = issue.message
      }
      setErrors(errs)
      return
    }
    setErrors({})
    const msg = encodeURIComponent(buildMessage())
    const url = `https://wa.me/${SITE.phoneWhatsapp}?text=${msg}`
    window.open(url, "_blank", "noopener,noreferrer")
    clearCart()
    router.push("/success")
  }

  return (
    <div className="relative bg-[#0a0a0a] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h1 className="font-black uppercase tracking-tight text-3xl sm:text-4xl mb-8">
          Commande
        </h1>

        {items.length === 0 ? (
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-10 text-center">
            <div className="text-5xl mb-3">🛒</div>
            <p className="text-zinc-400">Votre panier est vide.</p>
            <Link
              href="/menu"
              className="mt-5 inline-flex items-center justify-center bg-red-600 hover:bg-red-500 text-white font-black uppercase tracking-wide text-sm px-6 min-h-[48px] rounded-full"
            >
              Voir le menu
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1fr_400px] gap-8">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <h2 className="font-black uppercase tracking-tight text-xl">Vos coordonnées</h2>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Prénom" error={errors.firstName}>
                  <input
                    type="text"
                    value={form.firstName}
                    onChange={e => set("firstName", e.target.value)}
                    className="input"
                    autoComplete="given-name"
                  />
                </Field>
                <Field label="Nom" error={errors.lastName}>
                  <input
                    type="text"
                    value={form.lastName}
                    onChange={e => set("lastName", e.target.value)}
                    className="input"
                    autoComplete="family-name"
                  />
                </Field>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Téléphone" error={errors.phone}>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={e => set("phone", e.target.value)}
                    className="input"
                    autoComplete="tel"
                  />
                </Field>
                <Field label="Email (optionnel)" error={errors.email}>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => set("email", e.target.value)}
                    className="input"
                    autoComplete="email"
                  />
                </Field>
              </div>

              <Field label="Adresse" error={errors.address}>
                <input
                  type="text"
                  value={form.address}
                  onChange={e => set("address", e.target.value)}
                  className="input"
                  autoComplete="street-address"
                />
              </Field>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Code postal" error={errors.postalCode}>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={form.postalCode}
                    onChange={e => set("postalCode", e.target.value)}
                    className="input"
                    autoComplete="postal-code"
                  />
                </Field>
                <Field label="Ville" error={errors.city}>
                  <input
                    type="text"
                    value={form.city}
                    onChange={e => set("city", e.target.value)}
                    className="input"
                    autoComplete="address-level2"
                  />
                </Field>
              </div>

              <Field label="Instructions (optionnel)" error={errors.instructions}>
                <textarea
                  rows={3}
                  value={form.instructions}
                  onChange={e => set("instructions", e.target.value)}
                  className="input resize-none"
                  placeholder="Étage, code, allergie…"
                />
              </Field>

              <div className="pt-2 flex flex-col gap-3">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-black uppercase tracking-wide text-sm px-6 min-h-[56px] rounded-full transition"
                >
                  <MessageCircle className="w-5 h-5" />
                  Envoyer la commande par WhatsApp
                </button>
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="w-full inline-flex items-center justify-center gap-2 border-2 border-red-500 text-white hover:bg-red-500/10 font-black uppercase tracking-wide text-sm px-6 min-h-[56px] rounded-full transition"
                >
                  <Phone className="w-5 h-5" />
                  Commander par téléphone
                </a>
              </div>
            </form>

            <aside className="bg-zinc-950/70 border border-zinc-800 rounded-2xl p-5 h-fit lg:sticky lg:top-24">
              <h2 className="font-black uppercase tracking-tight text-lg mb-4">
                Votre panier · {itemCount}
              </h2>
              <ul className="divide-y divide-zinc-900">
                {items.map(it => {
                  const price = it.asMenu && it.product.menuPrice ? it.product.menuPrice : it.product.price
                  return (
                    <li key={`${it.product.id}-${it.asMenu}`} className="py-3 flex gap-3 items-center">
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-sm truncate">
                          {it.product.name}
                          {it.asMenu && <span className="text-amber-400 text-xs ml-1">(Menu)</span>}
                        </div>
                        <div className="text-xs text-zinc-500">{price.toFixed(2)}€</div>
                      </div>
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          aria-label="Diminuer"
                          onClick={() => updateQuantity(it.product.id, it.asMenu, it.quantity - 1)}
                          className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-zinc-900 hover:bg-zinc-800"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-bold w-6 text-center">{it.quantity}</span>
                        <button
                          type="button"
                          aria-label="Augmenter"
                          onClick={() => updateQuantity(it.product.id, it.asMenu, it.quantity + 1)}
                          className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-zinc-900 hover:bg-zinc-800"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          type="button"
                          aria-label="Supprimer"
                          onClick={() => removeFromCart(it.product.id, it.asMenu)}
                          className="inline-flex items-center justify-center w-8 h-8 rounded-full text-red-500 hover:bg-red-500/10 ml-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </li>
                  )
                })}
              </ul>

              <div className="mt-4">
                <label className="text-xs font-bold uppercase tracking-wide text-zinc-400">
                  Code promo
                </label>
                <div className="mt-1 flex gap-2">
                  <input
                    type="text"
                    value={promo}
                    onChange={e => setPromo(e.target.value)}
                    className="input flex-1"
                    placeholder="BREAD10"
                  />
                  <button
                    type="button"
                    onClick={applyPromo}
                    className="bg-amber-400 hover:bg-amber-300 text-black font-black uppercase tracking-wide text-xs px-4 min-h-[48px] rounded-full transition"
                  >
                    OK
                  </button>
                </div>
                {promoMsg && (
                  <p className={`text-xs mt-1 ${promoApplied ? "text-emerald-400" : "text-red-500"}`}>
                    {promoMsg}
                  </p>
                )}
              </div>

              <div className="mt-5 pt-4 border-t border-zinc-900 space-y-1 text-sm">
                <div className="flex justify-between text-zinc-400">
                  <span>Sous-total</span>
                  <span>{total.toFixed(2)}€</span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Promo {PROMO_CODE}</span>
                    <span>-{discount.toFixed(2)}€</span>
                  </div>
                )}
                <div className="flex justify-between font-black text-lg pt-1">
                  <span>Total</span>
                  <span className="text-red-500">{finalTotal.toFixed(2)}€</span>
                </div>
              </div>
            </aside>
          </div>
        )}
      </div>

      <style>{`
        .input {
          width: 100%;
          background: #09090b;
          border: 1px solid #27272a;
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          min-height: 48px;
          color: white;
          font-size: 0.9rem;
          transition: border-color .2s;
        }
        .input:focus { outline: none; border-color: #dc2626; }
        textarea.input { min-height: 80px; }
      `}</style>
    </div>
  )
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="text-xs font-bold uppercase tracking-wide text-zinc-400">{label}</span>
      <div className="mt-1">{children}</div>
      {error && <span className="text-xs text-red-500 mt-1 block">{error}</span>}
    </label>
  )
}
