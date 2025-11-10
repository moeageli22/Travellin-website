"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Activity, Moon, Users, Shield, Phone } from "lucide-react"
import { LottieChatbot } from "@/components/lottie-chatbot"

const backgrounds = [
  { url: "/new-york-city-skyline-at-sunset-with-skyscrapers.jpg", name: "New York City" },
  { url: "/london-big-ben-and-thames-river-at-dusk.jpg", name: "London" },
  { url: "/maldives-overwater-bungalows-crystal-clear-water.jpg", name: "Paradise Beach" },
  { url: "/paris-eiffel-tower-illuminated-at-night.jpg", name: "Paris" },
  { url: "/tokyo-city-lights-and-neon-signs-at-night.jpg", name: "Tokyo" },
]

const wellbeingFeatures = [
  {
    icon: Heart,
    title: "Health Monitoring",
    description: "Connect your health apps to track wellness during your trip",
    bgColor: "bg-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: Activity,
    title: "Fitness Integration",
    description: "Find gyms, running routes, and wellness activities nearby",
    bgColor: "bg-red-500/20",
    iconColor: "text-red-400",
  },
  {
    icon: Moon,
    title: "Mental Wellbeing",
    description: "Access meditation, relaxation resources, and quiet spaces",
    bgColor: "bg-purple-500/20",
    iconColor: "text-purple-400",
  },
  {
    icon: Users,
    title: "Stay Connected",
    description: "Regular check-ins for solo travelers to maintain social connection",
    bgColor: "bg-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: Shield,
    title: "Safety Tracking",
    description: "Share your location with trusted contacts for peace of mind",
    bgColor: "bg-teal-500/20",
    iconColor: "text-teal-400",
  },
  {
    icon: Phone,
    title: "Emergency Support",
    description: "24/7 access to emergency services and local healthcare information",
    bgColor: "bg-rose-500/20",
    iconColor: "text-rose-400",
  },
]

export default function WellbeingPage() {
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
                <Link href="/groups" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                  Groups
                </Link>
                <Link href="/wellbeing" className="text-sm font-medium text-white hover:text-white transition-colors">
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Health & Wellbeing Support</h1>
            <p className="text-lg text-purple-200/90">
              Your health and safety matter. Stay connected, supported, and secure throughout your journey.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wellbeingFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-slate-800/60 transition-all"
                >
                  <div className={`${feature.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                    <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-purple-200/80 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-12 text-center border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-4">Traveling Alone?</h2>
              <p className="text-purple-200/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Our solo traveler support system helps you stay connected and safe. Set up check-in reminders, share
                your itinerary with loved ones, and access local support networks.
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 h-auto text-base rounded-full font-semibold">
                Enable Solo Traveler Support
              </Button>
            </div>
          </div>
        </section>

        <LottieChatbot />
      </div>
    </div>
  )
}
