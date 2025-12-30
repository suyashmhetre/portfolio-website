"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    setIsTransitioning(true)
    const timer = setTimeout(() => setIsTransitioning(false), 1200)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <>
      <div
        className="fixed inset-0 z-[9998] bg-[#C2542D] origin-bottom"
        style={{
          transition: `transform 800ms cubic-bezier(0.76, 0, 0.24, 1)`,
          transform: isTransitioning ? "translateY(0)" : "translateY(100%)",
          transitionDelay: "0ms",
        }}
      />
      <div
        className="fixed inset-0 z-[9997] bg-[#B8963F] origin-bottom"
        style={{
          transition: `transform 800ms cubic-bezier(0.76, 0, 0.24, 1)`,
          transform: isTransitioning ? "translateY(0)" : "translateY(100%)",
          transitionDelay: "100ms",
        }}
      />
      <div
        className={`fixed inset-0 z-[9996] bg-[#1A1815] origin-bottom transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isTransitioning ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ transitionDelay: "200ms" }}
      />

      {/* Content */}
      <div
        className={`transition-opacity duration-500 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
        style={{ transitionDelay: isTransitioning ? "0ms" : "800ms" }}
      >
        {children}
      </div>
    </>
  )
}
