"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Star } from "lucide-react"

const hotels = [
  {
    id: 1,
    name: "Azure Paradise Resort",
    location: "Maldives",
    rating: 5,
    price: 450,
    image: "/luxury-maldives-overwater-resort-turquoise-ocean.jpg",
    description:
      "Nestled over turquoise waters in the heart of the Maldives, Azure Paradise Resort offers the ultimate overwater villa experience. Each suite features a private deck, glass-floor lagoon views, and direct ocean access.",
    amenities: ["Infinity pool", "Spa", "Fine dining", "Ocean sports", "Private butler"],
  },
  {
    id: 2,
    name: "Skyline Grand Hotel",
    location: "New York",
    rating: 5,
    price: 380,
    image: "/new-york-city-skyline-night-modern-hotel.jpg",
    description:
      "Located in the vibrant heart of Manhattan, Skyline Grand Hotel blends modern luxury with skyline views that never sleep. Floor-to-ceiling windows overlook the cityscape.",
    amenities: ["Rooftop bar", "24-hour concierge", "Gym & spa", "Smart rooms"],
  },
  {
    id: 3,
    name: "Mountain Vista Lodge",
    location: "Swiss Alps",
    rating: 4,
    price: 320,
    image: "/swiss-alps-mountain-lodge-stone-architecture.jpg",
    description:
      "Perched high in the snow-kissed Alps, Mountain Vista Lodge invites you to relax amid panoramic mountain views and cozy alpine charm. Each chalet-style suite features rustic wood interiors and fireplaces.",
    amenities: ["Ski-in/out access", "Sauna", "Spa", "Gourmet restaurant"],
  },
  {
    id: 4,
    name: "Royal Elegance Suite",
    location: "Paris",
    rating: 5,
    price: 520,
    image: "/luxury-paris-hotel-room-elegant-interior.jpg",
    description:
      "Experience Parisian grandeur at Royal Elegance Suite, set in a restored 19th-century mansion minutes from the Champs-Élysées. Ornate interiors and marble bathrooms exude timeless sophistication.",
    amenities: ["Fine-dining restaurant", "In-room butler", "Limousine service", "Spa"],
  },
  {
    id: 5,
    name: "Modern Heights Hotel",
    location: "Tokyo",
    rating: 5,
    price: 290,
    image: "/modern-tokyo-hotel-minimalist-design-interior.jpg",
    description:
      "A sleek urban retreat in Shinjuku, Modern Heights Hotel merges Japanese minimalism with smart-room technology. Guests enjoy breathtaking skyline views and in-room tablets for concierge services.",
    amenities: ["Onsen spa", "Rooftop restaurant", "Gym", "Automated check-in"],
  },
  {
    id: 6,
    name: "Coastal Dream Resort",
    location: "Bali",
    rating: 5,
    price: 395,
    image: "/bali-beach-resort-tropical-ocean-view.jpg",
    description:
      "A serene beachfront paradise surrounded by palm trees and coral-blue waters, Coastal Dream Resort is perfect for those seeking relaxation and culture. Enjoy sunrise yoga and Balinese spa rituals.",
    amenities: ["Beachfront villas", "Infinity pool", "Wellness center", "Surf classes"],
  },
]

export default function HotelsPage() {
  return (
    <div className="min-h-screen bg-[#0a0e27]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#1a1f3a]/80 backdrop-blur-md border-b border-white/10">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <span className="text-white text-xl font-semibold">Travelinn</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/hotels" className="text-purple-400 hover:text-purple-300 transition-colors">
                Hotels
              </Link>
              <Link href="/groups" className="text-gray-300 hover:text-white transition-colors">
                Groups
              </Link>
              <Link href="/wellbeing" className="text-gray-300 hover:text-white transition-colors">
                Wellbeing
              </Link>
              <Link href="/concierge" className="text-gray-300 hover:text-white transition-colors">
                Concierge
              </Link>
              <Link href="/chatbot" className="text-gray-300 hover:text-white transition-colors">
                Chatbot
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                About Us
              </Link>
            </div>

            <Link href="/signin">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full">SIGN IN</Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Hotels</h1>
            <p className="text-lg text-purple-300">Discover luxurious stays handpicked by our AI</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel) => (
              <div
                key={hotel.id}
                className="group bg-[#1a1f3a] rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={hotel.image || "/placeholder.svg"}
                    alt={hotel.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white">{hotel.name}</h3>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: hotel.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-purple-300 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>{hotel.location}</span>
                  </div>

                  <div className="mb-4">
                    <p className="text-white text-lg">{hotel.description}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-purple-400 text-sm font-semibold">Amenities:</h4>
                    <ul className="list-disc list-inside text-white">
                      {hotel.amenities.map((amenity, index) => (
                        <li key={index}>{amenity}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-purple-400 text-sm">from </span>
                      <span className="text-white text-2xl font-bold">${hotel.price}</span>
                      <span className="text-gray-400 text-sm"> /night</span>
                    </div>
                    <Link href={`/hotels/${hotel.id}`}>
                      <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg">
                        BOOK
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
