"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Coffee, Dumbbell, Music, BookOpen, Gamepad2, UsersRound } from "lucide-react"
import { LottieChatbot } from "@/components/lottie-chatbot"

const backgrounds = [
  { url: "/new-york-city-skyline-at-sunset-with-skyscrapers.jpg", name: "New York City" },
  { url: "/london-big-ben-and-thames-river-at-dusk.jpg", name: "London" },
  { url: "/maldives-overwater-bungalows-crystal-clear-water.jpg", name: "Paradise Beach" },
  { url: "/paris-eiffel-tower-illuminated-at-night.jpg", name: "Paris" },
  { url: "/tokyo-city-lights-and-neon-signs-at-night.jpg", name: "Tokyo" },
]

const communities = [
  {
    icon: Coffee,
    title: "Food & Dining",
    travelers: "2,341 travelers",
    bgColor: "bg-orange-500/20",
    iconColor: "text-orange-400",
  },
  {
    icon: Dumbbell,
    title: "Fitness & Sports",
    travelers: "1,892 travelers",
    bgColor: "bg-red-500/20",
    iconColor: "text-red-400",
  },
  {
    icon: Music,
    title: "Music & Nightlife",
    travelers: "3,156 travelers",
    bgColor: "bg-purple-500/20",
    iconColor: "text-purple-400",
  },
  {
    icon: BookOpen,
    title: "Culture & Arts",
    travelers: "1,567 travelers",
    bgColor: "bg-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: Gamepad2,
    title: "Gaming & Entertainment",
    travelers: "2,089 travelers",
    bgColor: "bg-green-500/20",
    iconColor: "text-green-400",
  },
  {
    icon: UsersRound,
    title: "Social Meetups",
    travelers: "4,234 travelers",
    bgColor: "bg-pink-500/20",
    iconColor: "text-pink-400",
  },
]

export default function GroupsPage() {
  const [currentBg, setCurrentBg] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden">
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentBg ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${bg.url})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-800/60 to-slate-900/80" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10">
        <nav className="border-b border-white/10 bg-slate-900/40 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <Link href="/" className="flex items-center">
                <span className="text-xl font-semibold text-white">Travelinn</span>
              </Link>

              <div className="hidden md:flex items-center gap-8">
                <Link href="/" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
                <Link href="/hotels" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                  Hotels
                </Link>
                <Link href="/groups" className="text-sm font-medium text-white hover:text-white transition-colors">
                  Groups
                </Link>
                <Link
                  href="/wellbeing"
                  className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  Wellbeing
                </Link>
                <Link
                  href="/concierge"
                  className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  Concierge
                </Link>
                <Link href="/chatbot" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                  AI Assistant
                </Link>
                <Link href="/about" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
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

        <section className="py-16">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Connect with Like-Minded Travelers</h1>
            <p className="text-lg text-purple-200/90">
              Find and connect with other travelers who share your interests. Make new friends and explore together.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {communities.map((community, index) => (
                <div
                  key={index}
                  className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-slate-800/60 transition-all"
                >
                  <div className={`${community.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                    <community.icon className={`w-8 h-8 ${community.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{community.title}</h3>
                  <p className="text-purple-200/70 mb-6">{community.travelers}</p>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg">
                    Join Community
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <LottieChatbot />
      </div>
    </div>
  )
}
