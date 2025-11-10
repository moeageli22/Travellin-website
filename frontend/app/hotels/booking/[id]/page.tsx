"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { MapPin, Star, Users, Bed } from "lucide-react"
import { useParams, useRouter } from "next/navigation"

const hotels = [
  {
    id: 1,
    name: "Azure Paradise Resort",
    location: "Maldives",
    address: "North Male Atoll, Maldives",
    rating: 5,
    price: 450,
    image: "/luxury-maldives-overwater-resort-turquoise-ocean.jpg",
    rooms: [
      { id: 1, type: "Overwater Villa", price: 450, beds: "1 King Bed", guests: 2 },
      { id: 2, type: "Beach Villa", price: 380, beds: "1 King Bed", guests: 2 },
      { id: 3, type: "Family Suite", price: 650, beds: "2 Queen Beds", guests: 4 },
      { id: 4, type: "Presidential Suite", price: 1200, beds: "1 King Bed + Living Room", guests: 4 },
    ],
  },
  {
    id: 2,
    name: "Skyline Grand Hotel",
    location: "New York",
    address: "Times Square, New York, NY 10036",
    rating: 5,
    price: 380,
    image: "/new-york-city-skyline-night-modern-hotel.jpg",
    rooms: [
      { id: 1, type: "Deluxe Room", price: 380, beds: "1 Queen Bed", guests: 2 },
      { id: 2, type: "Executive Suite", price: 550, beds: "1 King Bed", guests: 2 },
      { id: 3, type: "Penthouse", price: 1500, beds: "2 King Beds + Living Area", guests: 6 },
    ],
  },
  {
    id: 3,
    name: "Mountain Vista Lodge",
    location: "Swiss Alps",
    address: "Zermatt, Switzerland",
    rating: 4,
    price: 320,
    image: "/swiss-alps-mountain-lodge-stone-architecture.jpg",
    rooms: [
      { id: 1, type: "Mountain View Room", price: 320, beds: "1 Queen Bed", guests: 2 },
      { id: 2, type: "Alpine Suite", price: 480, beds: "1 King Bed + Fireplace", guests: 3 },
      { id: 3, type: "Chalet", price: 800, beds: "3 Bedrooms", guests: 6 },
    ],
  },
  {
    id: 4,
    name: "Royal Elegance Suite",
    location: "Paris",
    address: "Champs-Élysées, 75008 Paris, France",
    rating: 5,
    price: 520,
    image: "/luxury-paris-hotel-room-elegant-interior.jpg",
    rooms: [
      { id: 1, type: "Classic Room", price: 520, beds: "1 Queen Bed", guests: 2 },
      { id: 2, type: "Luxury Suite", price: 780, beds: "1 King Bed", guests: 2 },
      { id: 3, type: "Royal Penthouse", price: 2000, beds: "2 King Beds + Terrace", guests: 4 },
    ],
  },
  {
    id: 5,
    name: "Modern Heights Hotel",
    location: "Tokyo",
    address: "Shibuya, Tokyo 150-0002, Japan",
    rating: 5,
    price: 290,
    image: "/modern-tokyo-hotel-minimalist-design-interior.jpg",
    rooms: [
      { id: 1, type: "Standard Room", price: 290, beds: "1 Queen Bed", guests: 2 },
      { id: 2, type: "Deluxe Room", price: 420, beds: "1 King Bed", guests: 2 },
      { id: 3, type: "Executive Suite", price: 650, beds: "1 King Bed + Office", guests: 3 },
    ],
  },
  {
    id: 6,
    name: "Coastal Dream Resort",
    location: "Bali",
    address: "Seminyak Beach, Bali, Indonesia",
    rating: 5,
    price: 395,
    image: "/bali-beach-resort-tropical-ocean-view.jpg",
    rooms: [
      { id: 1, type: "Garden View Room", price: 395, beds: "1 King Bed", guests: 2 },
      { id: 2, type: "Ocean View Suite", price: 580, beds: "1 King Bed + Balcony", guests: 2 },
      { id: 3, type: "Private Villa", price: 950, beds: "2 Bedrooms + Pool", guests: 4 },
    ],
  },
]

export default function BookingPage() {
  const params = useParams()
  const router = useRouter()
  const hotelId = Number.parseInt(params.id as string)
  const hotel = hotels.find((h) => h.id === hotelId)

  const [selectedRoom, setSelectedRoom] = useState<number | null>(null)
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [guests, setGuests] = useState(2)

  if (!hotel) {
    return <div>Hotel not found</div>
  }

  const selectedRoomData = hotel.rooms.find((r) => r.id === selectedRoom)
  const nights =
    checkIn && checkOut
      ? Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24))
      : 0
  const total = selectedRoomData && nights > 0 ? selectedRoomData.price * nights : 0

  const handleContinue = () => {
    if (!selectedRoom || !checkIn || !checkOut) {
      alert("Please select room type and dates")
      return
    }
    router.push(
      `/hotels/checkout?hotel=${hotelId}&room=${selectedRoom}&checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}`,
    )
  }

  return (
    <div className="min-h-screen bg-[#0a0e27]">
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#1a1f3a]/80 backdrop-blur-md border-b border-white/10">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <span className="text-white text-xl font-semibold">Travelinn</span>
            </Link>
            <Link href="/signin">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full">SIGN IN</Button>
            </Link>
          </div>
        </nav>
      </header>

      <main className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <Link href="/hotels" className="text-purple-400 hover:text-purple-300 mb-6 inline-block">
            ← Back to Hotels
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-[#1a1f3a] rounded-2xl overflow-hidden border border-purple-500/20">
                <div className="relative h-80">
                  <Image src={hotel.image || "/placeholder.svg"} alt={hotel.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h1 className="text-3xl font-bold text-white mb-2">{hotel.name}</h1>
                      <div className="flex items-center gap-2 text-purple-300 mb-2">
                        <MapPin className="w-5 h-5" />
                        <span>{hotel.address}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: hotel.rating }).map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#1a1f3a] rounded-2xl p-6 border border-purple-500/20">
                <h2 className="text-2xl font-bold text-white mb-4">Select Your Stay</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <Label htmlFor="checkIn" className="text-white mb-2 block">
                      Check-in Date
                    </Label>
                    <Input
                      id="checkIn"
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="bg-[#0a0e27] border-purple-500/30 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="checkOut" className="text-white mb-2 block">
                      Check-out Date
                    </Label>
                    <Input
                      id="checkOut"
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="bg-[#0a0e27] border-purple-500/30 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="guests" className="text-white mb-2 block">
                      Number of Guests
                    </Label>
                    <Input
                      id="guests"
                      type="number"
                      min="1"
                      max="10"
                      value={guests}
                      onChange={(e) => setGuests(Number.parseInt(e.target.value))}
                      className="bg-[#0a0e27] border-purple-500/30 text-white"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-[#1a1f3a] rounded-2xl p-6 border border-purple-500/20">
                <h2 className="text-2xl font-bold text-white mb-4">Choose Room Type</h2>
                <div className="space-y-4">
                  {hotel.rooms.map((room) => (
                    <div
                      key={room.id}
                      onClick={() => setSelectedRoom(room.id)}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        selectedRoom === room.id
                          ? "border-purple-500 bg-purple-500/10"
                          : "border-purple-500/20 hover:border-purple-500/40"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">{room.type}</h3>
                          <div className="flex items-center gap-4 text-purple-300 text-sm">
                            <div className="flex items-center gap-1">
                              <Bed className="w-4 h-4" />
                              <span>{room.beds}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              <span>Up to {room.guests} guests</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-white">${room.price}</div>
                          <div className="text-sm text-gray-400">per night</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-[#1a1f3a] rounded-2xl p-6 border border-purple-500/20 sticky top-24">
                <h2 className="text-2xl font-bold text-white mb-4">Booking Summary</h2>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-300">
                    <span>Hotel:</span>
                    <span className="text-white font-semibold">{hotel.name}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Room Type:</span>
                    <span className="text-white font-semibold">{selectedRoomData?.type || "Not selected"}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Check-in:</span>
                    <span className="text-white font-semibold">{checkIn || "Not selected"}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Check-out:</span>
                    <span className="text-white font-semibold">{checkOut || "Not selected"}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Guests:</span>
                    <span className="text-white font-semibold">{guests}</span>
                  </div>
                  {nights > 0 && (
                    <div className="flex justify-between text-gray-300">
                      <span>Nights:</span>
                      <span className="text-white font-semibold">{nights}</span>
                    </div>
                  )}
                </div>

                {selectedRoomData && nights > 0 && (
                  <div className="border-t border-purple-500/20 pt-4 mb-6">
                    <div className="flex justify-between text-gray-300 mb-2">
                      <span>
                        ${selectedRoomData.price} × {nights} nights
                      </span>
                      <span className="text-white">${selectedRoomData.price * nights}</span>
                    </div>
                    <div className="flex justify-between text-xl font-bold text-white">
                      <span>Total:</span>
                      <span className="text-purple-400">${total}</span>
                    </div>
                  </div>
                )}

                <Button
                  onClick={handleContinue}
                  disabled={!selectedRoom || !checkIn || !checkOut}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue to Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
