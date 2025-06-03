"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scaleIn" | "fadeInUp"
  delay?: number
}

export function AnimatedSection({ children, className = "", animation = "fadeInUp", delay = 0 }: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation()

  const animationClasses = {
    fadeIn: "animate-fade-in",
    slideUp: "animate-slide-up",
    slideLeft: "animate-slide-left",
    slideRight: "animate-slide-right",
    scaleIn: "animate-scale-in",
    fadeInUp: "animate-fade-in-up",
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? animationClasses[animation] : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
