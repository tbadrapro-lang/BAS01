"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import type { Product } from "@/app/data/products"

export interface CartItem {
  product: Product
  quantity: number
  asMenu: boolean
}

interface CartContextValue {
  items: CartItem[]
  itemCount: number
  total: number
  addToCart: (product: Product, asMenu?: boolean) => void
  removeFromCart: (productId: number, asMenu: boolean) => void
  updateQuantity: (productId: number, asMenu: boolean, quantity: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem("bas01_cart")
      if (stored) setItems(JSON.parse(stored))
    } catch {}
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    localStorage.setItem("bas01_cart", JSON.stringify(items))
  }, [items, hydrated])

  const addToCart = (product: Product, asMenu = false) => {
    setItems(prev => {
      const existing = prev.find(i => i.product.id === product.id && i.asMenu === asMenu)
      if (existing) {
        return prev.map(i =>
          i === existing ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      return [...prev, { product, quantity: 1, asMenu }]
    })
  }

  const removeFromCart = (productId: number, asMenu: boolean) => {
    setItems(prev => prev.filter(i => !(i.product.id === productId && i.asMenu === asMenu)))
  }

  const updateQuantity = (productId: number, asMenu: boolean, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, asMenu)
      return
    }
    setItems(prev =>
      prev.map(i =>
        i.product.id === productId && i.asMenu === asMenu ? { ...i, quantity } : i
      )
    )
  }

  const clearCart = () => setItems([])

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0)
  const total = items.reduce((sum, i) => {
    const price = i.asMenu && i.product.menuPrice ? i.product.menuPrice : i.product.price
    return sum + price * i.quantity
  }, 0)

  return (
    <CartContext.Provider
      value={{ items, itemCount, total, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
