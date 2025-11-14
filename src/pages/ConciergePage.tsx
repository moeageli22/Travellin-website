"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Hotel, Car, Utensils, Calendar, MapPin, Sparkles } from "lucide-react"
import { LottieChatbot } from "@/components/lottie-chatbot"
import { SettingsDropdown } from "@/components/settings-dropdown"

const backgrounds = [
  { url: "/new-york-city-skyline-at-sunset-with-skyscrapers.jpg", name: "New York City" },
  { url: "/london-big-ben-and-thames-river-at-dusk.jpg", name: "London" },
  { url: "/maldives-overwater-bungalows-crystal-clear-water.jpg", name: "Paradise Beach" },
  { url: "/paris-eiffel-tower-illuminated-at-night.jpg", name: "Paris" },
  { url: "/tokyo-city-lights-and-neon-signs-at-night.jpg", name: "Tokyo" },
]

const services = [
  {
    icon: Hotel,
    title: "Accommodation Assistance",
    description: "Need help with check-in, room upgrades, or special requests?",
  },
  {
    icon: Car,
    title: "Transportation Services",
    description: "Book airport transfers, car rentals, or local transportation",
  },
  {
    icon: Utensils,
    title: "Restaurant Reservations",
    description: "Reserve tables at the best local restaurants and cafes",
  },
  {
    icon: Calendar,
    title: "Event Booking",
    description: "Get tickets to concerts, shows, and local events",
  },
  {
    icon: MapPin,
    title: "Local Recommendations",
    description: "Discover hidden gems and must-visit attractions",
  },
  {
    icon: Sparkles,
    title: "Special Occasions",
    description: "Plan celebrations, surprises, and memorable moments",
  },
]

export default function ConciergePage() {
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
                <Link
                  href="/wellbeing"
                  className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  Wellbeing
                </Link>
                <Link href="/concierge" className="text-sm font-medium text-white hover:text-white transition-colors">
                  Concierge
                </Link>
                <Link href="/chatbot" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                  AI Assistant
                </Link>
                <Link href="/about" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </div>

              <div className="flex items-center gap-3">
                <SettingsDropdown />
                <Link href="/signin">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full px-6">
                    SIGN IN
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <section className="py-20">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">24/7 Concierge Services</h1>
            <p className="text-lg text-purple-200/90">
              Your personal travel assistant ready to help with anything you need, anytime, anywhere.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">How Can We Help?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-slate-800/60 transition-all"
                >
                  <div className="bg-purple-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-purple-200/80 text-sm leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Contact Concierge</h2>
              <p className="text-purple-200/90">Send us a message and we'll get back to you within minutes.</p>
            </div>

            <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Your Name</label>
                    <Input placeholder="John Doe" className="bg-slate-900/50 border-white/10 text-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Email Address</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      className="bg-slate-900/50 border-white/10 text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Subject</label>
                  <Input placeholder="How can we assist you?" className="bg-slate-900/50 border-white/10 text-white" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Message</label>
                  <Textarea
                    placeholder="Please describe your request in detail..."
                    rows={6}
                    className="bg-slate-900/50 border-white/10 text-white"
                  />
                </div>

                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6 h-auto text-base rounded-full font-semibold">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="bg-purple-600/20 backdrop-blur-sm rounded-3xl p-12 text-center border border-purple-500/30">
              <h2 className="text-2xl font-bold text-white mb-4">Need Immediate Assistance?</h2>
              <p className="text-purple-200/90 mb-8">Our concierge team is available 24/7 via phone or chat</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 h-auto rounded-full font-semibold">
                  Call Now: +1 (800) 123-4567
                </Button>
                <Link href="/chatbot">
                  <Button className="border-white/20 bg-white/10 hover:bg-white/20 text-white px-8 py-6 h-auto rounded-full font-semibold">
                    Chat with AI Assistant
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <LottieChatbot />
      </div>
    </div>
  )
}
