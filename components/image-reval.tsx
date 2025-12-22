"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

interface ImageRevealProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
  direction?: "top" | "bottom" | "left" | "right"
}

export function ImageReveal({ src, alt, className, priority, direction = "left" }: ImageRevealProps) {
  const [isRevealed, setIsRevealed] = useState(false)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true)
          observer.disconnect() // Stop observing once revealed
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // Trigger when 10% of the image is visible
      }
    )

    if (imageRef.current) {
      observer.observe(imageRef.current)
    }

    return () => {
      if (imageRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(imageRef.current)
      }
    }
  }, [])

  // Define the clipping mask transition based on direction
  const clipPathStyle = isRevealed
    ? "inset(0 0 0 0)"
    : direction === "left"
    ? "inset(0 0 0 100%)"
    : direction === "right"
    ? "inset(0 100% 0 0)"
    : direction === "top"
    ? "inset(100% 0 0 0)"
    : "inset(0 0 100% 0)"

  return (
    <div ref={imageRef} className={`relative overflow-hidden ${className}`}>
      {/* Ensure you have an image named mural-placeholder.jpg in your /public directory */}
      <Image
        src={src}
        alt={alt}
        width={1000} 
        height={600}
        priority={priority}
        className="w-full h-auto object-cover"
        style={{
          clipPath: clipPathStyle,
          transition: "clip-path 1s cubic-bezier(0.4, 0, 0.2, 1)", // Smooth transition
        }}
      />
    </div>
  )
}
