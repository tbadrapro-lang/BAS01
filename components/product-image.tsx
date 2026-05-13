"use client"

import { useState } from "react"
import Image from "next/image"

const EMOJI: Record<string, string> = {
  smash: "🍔",
  baguettes: "🥖",
  sandwiches: "🥙",
  "hot-dog": "🌭",
  accompagnements: "🍟",
  boissons: "🥤",
}

interface Props {
  src: string
  alt: string
  category?: string
  className?: string
  sizes?: string
  priority?: boolean
}

export default function ProductImage({ src, alt, category, className, sizes, priority }: Props) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div className={`flex items-center justify-center text-7xl ${className ?? ""}`}>
        <span aria-label={alt}>{(category && EMOJI[category]) || "🍔"}</span>
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes ?? "(max-width: 768px) 50vw, 25vw"}
      className={className}
      onError={() => setError(true)}
      priority={priority}
    />
  )
}
