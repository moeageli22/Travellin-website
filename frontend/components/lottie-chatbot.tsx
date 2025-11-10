"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

export function LottieChatbot() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://unpkg.com/@lottiefiles/dotlottie-wc@0.8.5/dist/dotlottie-wc.js"
    script.type = "module"
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-end gap-4">
      <div
        className={`bg-white rounded-2xl px-6 py-4 shadow-2xl transition-all duration-300 ${
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
        }`}
      >
        <p className="text-gray-800 font-medium whitespace-nowrap text-lg">Hi, you need help?</p>
      </div>

      <Link
        href="/chatbot"
        className="relative cursor-pointer transition-transform hover:scale-105"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={containerRef}
          className="w-40 h-40 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-purple-500/30 to-purple-700/30 backdrop-blur-sm border-4 border-purple-400/50 flex items-center justify-center relative"
        >
          <dotlottie-wc
            src="https://lottie.host/b3e4cac4-349a-4761-b167-2bf30a257e55/Xas0LWY1sY.lottie"
            autoplay
            loop
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </Link>
    </div>
  )
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "dotlottie-wc": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src: string
        autoplay?: boolean
        loop?: boolean
      }
    }
  }
}
