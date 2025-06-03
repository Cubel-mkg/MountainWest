"use client"

import { useStaggeredAnimation } from "@/hooks/use-scroll-animation"
import type { ReactNode } from "react"

interface StaggeredCardsProps {
  children: ReactNode[]
  className?: string
  delay?: number
}

export function StaggeredCards({ children, className = "", delay = 150 }: StaggeredCardsProps) {
  const { ref, visibleItems } = useStaggeredAnimation(children.length, delay)

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className={`transition-all duration-700 ease-out ${
            visibleItems.includes(index) ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
