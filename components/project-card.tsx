"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { TextureOverlay } from "./texture-overlay"
import { SplitText } from "./split-text"

export interface ProjectCardProps {
  title: string
  number: string
  image: string
  href: string
  size: "large" | "medium" | "small"
  description?: string
  revealDelay?: number
}

export function ProjectCard({ title, number, image, href, size, description, revealDelay = 0 }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [cursor, setCursor] = useState({ x: "50%", y: "50%" })
  const ref = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const sizeClasses = {
    large: "w-full aspect-[4/5]",
    medium: "w-full aspect-square",
    small: "w-full aspect-[3/4]",
  }

  const palette = ["rgba(194, 84, 45, 0.35)", "rgba(184, 150, 63, 0.35)", "rgba(139, 105, 20, 0.35)"]
  const glowColor = palette[(Number.parseInt(number, 10) || 0) % palette.length]
  const cursorX = Number.parseFloat(cursor.x)
  const cursorY = Number.parseFloat(cursor.y)
  const tiltX = ((cursorY - 50) / 50) * 8
  const tiltY = ((cursorX - 50) / 50) * -8

  return (
    <Link
      ref={ref}
      href={href}
      data-cursor="project"
      data-magnetic
      className={`relative block ${sizeClasses[size]} overflow-hidden group transition-transform duration-500`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        const x = ((event.clientX - rect.left) / rect.width) * 100
        const y = ((event.clientY - rect.top) / rect.height) * 100
        setCursor({ x: `${x}%`, y: `${y}%` })
      }}
      style={{
        boxShadow: isHovered
          ? `0 20px 45px rgba(26,24,21,0.18), 0 10px 20px rgba(26,24,21,0.12), 0 0 50px ${glowColor}`
          : "0 10px 24px rgba(26,24,21,0.08)",
        transform: isHovered ? `perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)` : "none",
      }}
    >
      {/* Image container with reveal animation */}
      <div
        className="relative w-full h-full transition-all duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)]"
        style={{
          clipPath: isVisible ? "inset(0% 0 0 0)" : "inset(100% 0 0 0)",
          transitionDelay: `${revealDelay}ms`,
        }}
      >
        {/* Image with hover zoom */}
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className={`object-cover transition-all duration-700 ease-out ${
            isHovered ? "scale-105 brightness-90" : "scale-100 brightness-100"
          }`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />

        <div
          className={`absolute inset-0 bg-gradient-to-t from-[#1A1815]/90 via-[#1A1815]/20 to-transparent transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
        <TextureOverlay texture="stone" opacity={isHovered ? 0.18 : 0.08} blendMode="multiply" />
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? "opacity-70" : "opacity-0"}`}
          style={{
            background: `radial-gradient(circle at ${cursor.x} ${cursor.y}, ${glowColor}, transparent 60%)`,
          }}
        />
      </div>

      <motion.div
        className="absolute top-4 left-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ delay: 0.3 + revealDelay / 1000 }}
      >
        <motion.span
          className="font-mono text-5xl md:text-6xl font-light block"
          animate={{ y: isHovered ? -10 : 0, backgroundPosition: isHovered ? "100% 0%" : "0% 0%" }}
          transition={{ duration: 0.4 }}
          style={{
            backgroundImage: "linear-gradient(135deg, #c2542d, #b8963f)",
            backgroundSize: "200% 200%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {number}
        </motion.span>
      </motion.div>

      <div
        className={`absolute bottom-0 left-0 right-0 p-4 md:p-6 transition-all duration-500 ${
          isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <span className="text-xs uppercase tracking-[0.1em] block mb-1 text-[#B8963F]">({number})</span>
        <SplitText
          as="h3"
          text={title}
          mode="hover-wave"
          className="font-serif text-lg md:text-xl text-[#FAF7F2]"
          stagger={0.015}
        />
        {description && <p className="text-[#E8E2D9] text-sm mt-2 line-clamp-2">{description}</p>}
      </div>

      {/* Arrow indicator */}
      <div
        className={`absolute top-4 right-4 transition-all duration-500 ${
          isHovered ? "translate-x-0 translate-y-0 opacity-100" : "translate-x-2 -translate-y-2 opacity-0"
        }`}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[#FAF7F2]">
          <path d="M5 15L15 5M15 5H7M15 5V13" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>
    </Link>
  )
}
