"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { X, MessageCircle, Hotel, Users, Phone, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function LottieChatbot() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://unpkg.com/@lottiefiles/dotlottie-wc@0.8.5/dist/dotlottie-wc.js"
    script.type = "module"
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  const quickActions = [
    {
      icon: Phone,
      label: "Connect to Concierge",
      href: "/concierge",
      description: "24/7 assistance available",
    },
    {
      icon: Hotel,
      label: "Find Hotels",
      href: "/hotels",
      description: "Browse accommodations",
    },
    {
      icon: Users,
      label: "Join Travel Groups",
      href: "/groups",
      description: "Connect with travelers",
    },
    {
      icon: Heart,
      label: "Health & Wellbeing",
      href: "/wellbeing",
      description: "Stay safe and healthy",
    },
  ]

  return (
    <div className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-50 flex items-end gap-2 sm:gap-4">
      <div
        className={`hidden sm:block bg-white rounded-2xl px-6 py-4 shadow-2xl transition-all duration-300 ${
          isHovered && !isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
        }`}
      >
        <p className="text-gray-800 font-medium whitespace-nowrap text-lg">Hi, you need help?</p>
      </div>

      {isOpen && (
        <div className="absolute bottom-24 sm:bottom-32 md:bottom-48 right-0 w-72 sm:w-80 bg-slate-900/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-purple-500/30 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-3 sm:p-4 flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              <h3 className="text-white font-bold text-base sm:text-lg">How can I help?</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-purple-600 h-8 w-8 sm:h-10 sm:w-10"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>

          <div className="p-3 sm:p-4 space-y-2">
            {quickActions.map((action, index) => (
              <Link key={index} href={action.href} onClick={() => setIsOpen(false)}>
                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-slate-800/50 hover:bg-purple-600/30 transition-all cursor-pointer border border-transparent hover:border-purple-500/50 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-600/20 flex items-center justify-center group-hover:bg-purple-600/40 transition-all flex-shrink-0">
                    <action.icon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 group-hover:text-purple-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold text-xs sm:text-sm truncate">{action.label}</p>
                    <p className="text-gray-400 text-xs truncate">{action.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative cursor-pointer transition-transform hover:scale-105 focus:outline-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={containerRef}
          className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-purple-500/30 to-purple-700/30 backdrop-blur-sm border-2 sm:border-4 border-purple-400/50 flex items-center justify-center relative"
        >
          <dotlottie-wc
            src="https://lottie.host/b3e4cac4-349a-4761-b167-2bf30a257e55/Xas0LWY1sY.lottie"
            autoplay
            loop
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </button>
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
