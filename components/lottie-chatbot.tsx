"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { X, Send, Hotel, Users, Heart, MapPin, Calendar, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

interface Message {
  type: "user" | "bot"
  text: string
  suggestions?: Suggestion[]
  hotelCards?: HotelCard[]
}

interface Suggestion {
  label: string
  action?: () => void
  href?: string
  icon?: React.ElementType
}

interface HotelCard {
  name: string
  location: string
  price: number
  amenities: string[]
  href: string
}

const hotelsDatabase = [
  {
    id: 1,
    name: "Azure Paradise Resort",
    location: "Maldives",
    price: 450,
    amenities: ["Private pool", "Beachfront", "Spa", "Ocean sports"],
    category: ["beach", "luxury", "family"],
    href: "/hotels/1",
  },
  {
    id: 2,
    name: "Skyline Grand Hotel",
    location: "New York",
    price: 380,
    amenities: ["Rooftop bar", "City views", "Gym", "Concierge"],
    category: ["city", "luxury"],
    href: "/hotels/2",
  },
  {
    id: 3,
    name: "Mountain Vista Lodge",
    location: "Swiss Alps",
    price: 320,
    amenities: ["Ski-in/out", "Sauna", "Spa", "Mountain views"],
    category: ["mountain", "ski"],
    href: "/hotels/3",
  },
  {
    id: 4,
    name: "Royal Elegance Suite",
    location: "Paris",
    price: 520,
    amenities: ["Butler service", "Fine dining", "Limousine", "Spa"],
    category: ["city", "luxury", "family"],
    href: "/hotels/4",
  },
  {
    id: 5,
    name: "Modern Heights Hotel",
    location: "Tokyo",
    price: 290,
    amenities: ["Onsen spa", "Rooftop dining", "Gym", "Smart rooms"],
    category: ["city", "accessible"],
    href: "/hotels/5",
  },
  {
    id: 6,
    name: "Coastal Dream Resort",
    location: "Bali",
    price: 395,
    amenities: ["Beachfront villas", "Infinity pool", "Wellness", "Surf classes"],
    category: ["beach", "wellness", "accessible"],
    href: "/hotels/6",
  },
]

export function LottieChatbot() {
  const containerRef = useRef<HTMLDivElement>(null)
  const chatEndRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      text: "Hi 👋 I can help you find hotels, compare room types, or plan your group trip!",
      suggestions: [
        { label: "Find luxury hotels under $400/night", action: () => handleQuickSuggestion("luxury under 400") },
        { label: "Show accessible hotels nearby", action: () => handleQuickSuggestion("accessible hotels") },
        { label: "Book 3 nights in Maldives", action: () => handleQuickSuggestion("book maldives") },
      ],
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://unpkg.com/@lottiefiles/dotlottie-wc@0.8.5/dist/dotlottie-wc.js"
    script.type = "module"
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const getBotResponse = (userInput: string): Message => {
    const input = userInput.toLowerCase()

    // Price-based searches
    if (input.includes("under") || input.includes("below") || input.includes("less than")) {
      const priceMatch = input.match(/\$?(\d+)/)
      const maxPrice = priceMatch ? Number.parseInt(priceMatch[1]) : 400

      const affordableHotels = hotelsDatabase.filter((h) => h.price <= maxPrice)

      if (affordableHotels.length > 0) {
        return {
          type: "bot",
          text: `Here are ${affordableHotels.length} hotels under $${maxPrice}/night:`,
          hotelCards: affordableHotels.map((h) => ({
            name: h.name,
            location: h.location,
            price: h.price,
            amenities: h.amenities,
            href: h.href,
          })),
          suggestions: [{ label: "View all hotels", href: "/hotels", icon: Hotel }],
        }
      }
    }

    // Beach/ocean hotels
    if (input.includes("beach") || input.includes("ocean") || input.includes("sea") || input.includes("bali")) {
      const beachHotels = hotelsDatabase.filter((h) => h.category.includes("beach"))

      return {
        type: "bot",
        text: "The Coastal Dream Resort in Bali offers beachfront villas with private pools and ocean views. Azure Paradise Resort in Maldives also features overwater suites!",
        hotelCards: beachHotels.map((h) => ({
          name: h.name,
          location: h.location,
          price: h.price,
          amenities: h.amenities,
          href: h.href,
        })),
        suggestions: [
          { label: "See available dates", icon: Calendar },
          { label: "View all beach hotels", href: "/hotels", icon: MapPin },
        ],
      }
    }

    // Family rooms
    if (input.includes("family") || input.includes("kids") || input.includes("children")) {
      return {
        type: "bot",
        text: "Yes! Azure Paradise Resort (Maldives) and Royal Elegance Suite (Paris) both feature spacious family rooms — ideal for 4 guests with connecting suites and breakfast included.",
        suggestions: [
          { label: "View Azure Paradise Resort", href: "/hotels/1", icon: Hotel },
          { label: "View Royal Elegance Suite", href: "/hotels/4", icon: Hotel },
        ],
      }
    }

    // Check-in/out times
    if (input.includes("check-in") || input.includes("check-out") || input.includes("time")) {
      return {
        type: "bot",
        text: "Most hotels offer check-in at 3:00 PM and check-out at 11:00 AM, but I can check your selected hotel's policy if you'd like. 😊",
        suggestions: [{ label: "Browse hotels", href: "/hotels", icon: Hotel }],
      }
    }

    // Accessibility
    if (input.includes("wheelchair") || input.includes("accessible") || input.includes("disability")) {
      const accessibleHotels = hotelsDatabase.filter((h) => h.category.includes("accessible"))

      return {
        type: "bot",
        text: "Absolutely. All Travelinn partner hotels include accessible options — with step-free access, elevators, and accessible bathrooms.",
        hotelCards: accessibleHotels.map((h) => ({
          name: h.name,
          location: h.location,
          price: h.price,
          amenities: h.amenities,
          href: h.href,
        })),
        suggestions: [{ label: "See full accessibility features", href: "/wellbeing", icon: Heart }],
      }
    }

    // Payment methods
    if (input.includes("pay") || input.includes("payment") || input.includes("apple pay") || input.includes("card")) {
      return {
        type: "bot",
        text: "Yes! You can pay securely using Apple Pay, Google Pay, PayPal, or credit/debit cards during checkout. 💳",
        suggestions: [
          { label: "Book a hotel now", href: "/hotels", icon: Hotel },
          { label: "Payment help", href: "/concierge", icon: Phone },
        ],
      }
    }

    // Mountain/ski hotels
    if (input.includes("mountain") || input.includes("ski") || input.includes("snow") || input.includes("alps")) {
      const mountainHotels = hotelsDatabase.filter((h) => h.category.includes("mountain") || h.category.includes("ski"))

      return {
        type: "bot",
        text: "Mountain Vista Lodge in the Swiss Alps features ski-in/ski-out access, cozy fireplaces, and panoramic mountain views!",
        hotelCards: mountainHotels.map((h) => ({
          name: h.name,
          location: h.location,
          price: h.price,
          amenities: h.amenities,
          href: h.href,
        })),
        suggestions: [{ label: "See winter packages", href: "/hotels/3", icon: Hotel }],
      }
    }

    // City hotels
    if (
      input.includes("city") ||
      input.includes("urban") ||
      input.includes("new york") ||
      input.includes("paris") ||
      input.includes("tokyo")
    ) {
      const cityHotels = hotelsDatabase.filter((h) => h.category.includes("city"))

      return {
        type: "bot",
        text: "I found amazing city hotels for you! From Manhattan to Paris, each offers unique luxury experiences in the heart of the city.",
        hotelCards: cityHotels.slice(0, 3).map((h) => ({
          name: h.name,
          location: h.location,
          price: h.price,
          amenities: h.amenities,
          href: h.href,
        })),
        suggestions: [{ label: "View all city hotels", href: "/hotels", icon: MapPin }],
      }
    }

    // Booking modifications
    if (input.includes("change") || input.includes("modify") || input.includes("cancel")) {
      return {
        type: "bot",
        text: "Sure — bookings can be modified up to 48 hours before check-in, depending on hotel policy. Would you like me to check your booking details?",
        suggestions: [
          { label: "Contact concierge", href: "/concierge", icon: Phone },
          { label: "View booking policy", href: "/hotels", icon: Hotel },
        ],
      }
    }

    // Health/wellbeing/wellness
    if (
      input.includes("health") ||
      input.includes("wellbeing") ||
      input.includes("wellness") ||
      input.includes("safety") ||
      input.includes("spa")
    ) {
      const wellnessHotels = hotelsDatabase.filter((h) => h.category.includes("wellness"))

      return {
        type: "bot",
        text: "Your health and safety are our priority. Coastal Dream Resort in Bali offers yoga, spa rituals, and wellness programs. Stay safe and healthy! 😊",
        hotelCards: wellnessHotels.map((h) => ({
          name: h.name,
          location: h.location,
          price: h.price,
          amenities: h.amenities,
          href: h.href,
        })),
        suggestions: [{ label: "Health & Wellbeing", href: "/wellbeing", icon: Heart }],
      }
    }

    // Travel groups/communities
    if (input.includes("group") || input.includes("community") || input.includes("friends") || input.includes("meet")) {
      return {
        type: "bot",
        text: "Join our vibrant travel communities! Connect with fellow travelers, share experiences, and plan group adventures together.",
        suggestions: [{ label: "Browse Communities", href: "/groups", icon: Users }],
      }
    }

    // Concierge
    if (
      input.includes("concierge") ||
      input.includes("help") ||
      input.includes("assist") ||
      input.includes("support")
    ) {
      return {
        type: "bot",
        text: "Our 24/7 concierge team is here to help you with anything — bookings, changes, recommendations, or special requests. How can we assist? 😊",
        suggestions: [{ label: "Connect to Concierge", href: "/concierge", icon: Phone }],
      }
    }

    // Luxury hotels
    if (input.includes("luxury") || input.includes("premium") || input.includes("5 star")) {
      const luxuryHotels = hotelsDatabase.filter((h) => h.category.includes("luxury"))

      return {
        type: "bot",
        text: "Our premium collection features world-class luxury hotels with exceptional service and amenities:",
        hotelCards: luxuryHotels.map((h) => ({
          name: h.name,
          location: h.location,
          price: h.price,
          amenities: h.amenities,
          href: h.href,
        })),
        suggestions: [{ label: "View luxury collection", href: "/hotels", icon: Hotel }],
      }
    }

    // Hotels general
    if (
      input.includes("hotel") ||
      input.includes("accommodation") ||
      input.includes("stay") ||
      input.includes("room")
    ) {
      return {
        type: "bot",
        text: "Browse our curated collection of luxury hotels worldwide — each handpicked for exceptional experiences. What destination interests you?",
        suggestions: [
          { label: "View All Hotels", href: "/hotels", icon: Hotel },
          { label: "Show beach hotels", action: () => handleQuickSuggestion("beach hotels") },
          { label: "Show city hotels", action: () => handleQuickSuggestion("city hotels") },
        ],
      }
    }

    // Maldives specific
    if (input.includes("maldives")) {
      return {
        type: "bot",
        text: "Azure Paradise Resort in the Maldives offers overwater villas with private decks and glass-floor lagoon views. Prices start from $450/night. Would you like to see available dates?",
        hotelCards: [
          {
            name: "Azure Paradise Resort",
            location: "Maldives",
            price: 450,
            amenities: ["Private pool", "Beachfront", "Spa", "Ocean sports"],
            href: "/hotels/1",
          },
        ],
        suggestions: [
          { label: "Book Azure Paradise", href: "/hotels/1", icon: Hotel },
          { label: "See available dates", icon: Calendar },
        ],
      }
    }

    // Default friendly response
    return {
      type: "bot",
      text: "I can help you find hotels, compare room types, check prices, or answer questions about facilities, accessibility, and bookings. What are you interested in? 😊",
      suggestions: [
        { label: "Find beach hotels", action: () => handleQuickSuggestion("beach hotels") },
        { label: "Hotels under $400", action: () => handleQuickSuggestion("hotels under 400") },
        { label: "Family-friendly rooms", action: () => handleQuickSuggestion("family rooms") },
      ],
    }
  }

  const handleQuickSuggestion = (suggestion: string) => {
    setInputValue(suggestion)
    // Trigger send after a brief delay
    setTimeout(() => {
      handleSendMessage(suggestion)
    }, 100)
  }

  const handleSendMessage = (customInput?: string) => {
    const messageText = customInput || inputValue
    if (!messageText.trim()) return

    // Add user message
    const userMessage: Message = { type: "user", text: messageText }
    setMessages((prev) => [...prev, userMessage])

    // Show typing indicator
    setIsTyping(true)

    // Get bot response after a short delay
    setTimeout(() => {
      setIsTyping(false)
      const botResponse = getBotResponse(messageText)
      setMessages((prev) => [...prev, botResponse])
    }, 800)

    setInputValue("")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <div className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-50 flex items-end gap-2 sm:gap-4">
      <div
        className={`hidden sm:block bg-white rounded-2xl px-6 py-4 shadow-2xl transition-all duration-300 ${
          isHovered && !isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
        }`}
      >
        <p className="text-gray-800 font-medium whitespace-nowrap text-lg">Need help planning your trip?</p>
      </div>

      {isOpen && (
        <div className="absolute bottom-24 sm:bottom-32 md:bottom-48 right-0 w-80 sm:w-96 h-[500px] bg-slate-900/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-purple-500/30 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300 flex flex-col">
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-4 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center relative">
                <span className="text-2xl">🤖</span>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-purple-700"></span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">AI Travel Assistant</h3>
                <p className="text-purple-200 text-xs">Online · Here to help you</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-purple-600 h-10 w-10"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Messages area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl p-3 ${
                    message.type === "user"
                      ? "bg-purple-600 text-white rounded-br-sm"
                      : "bg-slate-800 text-white rounded-bl-sm"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>

                  {message.hotelCards && (
                    <div className="mt-3 space-y-2">
                      {message.hotelCards.map((hotel, idx) => (
                        <Link
                          key={idx}
                          href={hotel.href}
                          onClick={() => setIsOpen(false)}
                          className="block p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-all border border-purple-500/30 hover:border-purple-400"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h4 className="text-sm font-semibold text-white">{hotel.name}</h4>
                              <div className="flex items-center gap-1 text-xs text-purple-300 mt-1">
                                <MapPin className="w-3 h-3" />
                                <span>{hotel.location}</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <span className="text-purple-400 text-xs">from</span>
                              <div className="text-white font-bold">${hotel.price}</div>
                              <span className="text-gray-400 text-xs">/night</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {hotel.amenities.slice(0, 3).map((amenity, i) => (
                              <span key={i} className="text-xs bg-purple-600/30 text-purple-200 px-2 py-1 rounded">
                                {amenity}
                              </span>
                            ))}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Suggestions */}
                  {message.suggestions && (
                    <div className="mt-3 space-y-2">
                      {message.suggestions.map((suggestion, idx) => {
                        if (suggestion.action) {
                          return (
                            <button
                              key={idx}
                              onClick={suggestion.action}
                              className="flex items-center gap-2 p-2 rounded-lg bg-slate-700/50 hover:bg-purple-600/50 transition-all border border-purple-500/30 hover:border-purple-400 w-full text-left"
                            >
                              {suggestion.icon && <suggestion.icon className="w-4 h-4 text-purple-300" />}
                              <span className="text-xs font-medium text-white">{suggestion.label}</span>
                            </button>
                          )
                        }
                        return (
                          <Link
                            key={idx}
                            href={suggestion.href || "#"}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-2 p-2 rounded-lg bg-slate-700/50 hover:bg-purple-600/50 transition-all border border-purple-500/30 hover:border-purple-400"
                          >
                            {suggestion.icon && <suggestion.icon className="w-4 h-4 text-purple-300" />}
                            <span className="text-xs font-medium text-white">{suggestion.label}</span>
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-slate-800 text-white rounded-2xl rounded-bl-sm p-3">
                  <div className="flex gap-1">
                    <span
                      className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></span>
                    <span
                      className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></span>
                    <span
                      className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          <div className="p-4 border-t border-slate-800 flex-shrink-0 bg-slate-900/50">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about hotels..."
                className="flex-1 bg-slate-800 border-slate-700 text-white placeholder:text-gray-400 focus:border-purple-500"
              />
              <Button
                onClick={() => handleSendMessage()}
                className="bg-purple-600 hover:bg-purple-700 text-white"
                size="icon"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">Powered by Travelinn AI · Secure · 24/7 available</p>
          </div>
        </div>
      )}

      {/* Chatbot button */}
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
