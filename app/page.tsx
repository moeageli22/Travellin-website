"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LottieChatbot } from "@/components/lottie-chatbot"

const backgrounds = [
  {
    url: "/new-york-city-skyline-at-sunset-with-skyscrapers.jpg",
    name: "New York City",
  },
  {
    url: "/london-big-ben-and-thames-river-at-dusk.jpg",
    name: "London",
  },
  {
    url: "/maldives-overwater-bungalows-crystal-clear-water.jpg",
    name: "Paradise Beach",
  },
  {
    url: "/paris-eiffel-tower-illuminated-at-night.jpg",
    name: "Paris",
  },
  {
    url: "/tokyo-city-lights-and-neon-signs-at-night.jpg",
    name: "Tokyo",
  },
]

export default function HomePage() {
  const [currentBg, setCurrentBg] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Slideshow */}
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentBg ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${bg.url})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-800/50 to-slate-900/70" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="border-b border-white/10 bg-slate-900/40 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <Link href="/" className="flex items-center">
                <span className="text-xl font-semibold text-white">Travelinn</span>
              </Link>

              <div className="hidden md:flex items-center gap-8">
                <Link href="/" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
                  Home
                </Link>
                <Link href="/hotels" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
                  Hotels
                </Link>
                <Link href="/groups" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
                  Groups
                </Link>
                <Link
                  href="/wellbeing"
                  className="text-sm font-medium text-white hover:text-white/80 transition-colors"
                >
                  Wellbeing
                </Link>
                <Link
                  href="/concierge"
                  className="text-sm font-medium text-white hover:text-white/80 transition-colors"
                >
                  Concierge
                </Link>
                <Link href="/about" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
                  About Us
                </Link>
              </div>

              <Link href="/signin">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full px-6">
                  SIGN IN
                </Button>
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4">
          <div className="max-w-4xl text-center">
            <h1 className="mb-6 text-5xl font-bold text-white sm:text-6xl md:text-7xl text-balance leading-tight">
              Discover Your Next Adventure
            </h1>
            <p className="mb-10 text-lg text-purple-200/90 sm:text-xl text-pretty max-w-3xl mx-auto leading-relaxed">
              Connect with fellow travelers, find perfect accommodations, and create unforgettable experiences around
              the world.
            </p>
            <Link href="/hotels">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white text-base font-semibold px-10 py-6 h-auto rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                EXPLORE HOTELS
              </Button>
            </Link>
          </div>
        </div>

        {/* Floating Chat Button */}
        <LottieChatbot />
      </div>
    </div>
  )
}
