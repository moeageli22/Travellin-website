"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { MapPin, Star, Calendar, Users, CreditCard, X, Check } from "lucide-react"

const hotels = [
  {
    id: 1,
    name: "Azure Paradise Resort",
    location: "Maldives",
    rating: 5,
    price: 450,
    image: "/luxury-maldives-overwater-resort-turquoise-ocean.jpg",
    description: "Luxury overwater villa with pristine ocean views",
    amenities: ["Free WiFi", "Ocean View", "Spa", "Restaurant", "Pool"],
  },
  {
    id: 2,
    name: "Skyline Grand Hotel",
    location: "New York",
    rating: 5,
    price: 380,
    image: "/new-york-city-skyline-night-modern-hotel.jpg",
    description: "Modern hotel in the heart of Manhattan",
    amenities: ["Free WiFi", "City View", "Gym", "Restaurant", "Bar"],
  },
  {
    id: 3,
    name: "Mountain Vista Lodge",
    location: "Swiss Alps",
    rating: 4,
    price: 320,
    image: "/swiss-alps-mountain-lodge-stone-architecture.jpg",
    description: "Cozy mountain retreat with stunning alpine views",
    amenities: ["Free WiFi", "Mountain View", "Fireplace", "Restaurant", "Ski Access"],
  },
  {
    id: 4,
    name: "Royal Elegance Suite",
    location: "Paris",
    rating: 5,
    price: 520,
    image: "/luxury-paris-hotel-room-elegant-interior.jpg",
    description: "Elegant suite near the Eiffel Tower",
    amenities: ["Free WiFi", "City View", "Spa", "Fine Dining", "Concierge"],
  },
  {
    id: 5,
    name: "Modern Heights Hotel",
    location: "Tokyo",
    rating: 5,
    price: 290,
    image: "/modern-tokyo-hotel-minimalist-design-interior.jpg",
    description: "Contemporary hotel in vibrant Shibuya",
    amenities: ["Free WiFi", "City View", "Gym", "Restaurant", "Tech Hub"],
  },
  {
    id: 6,
    name: "Coastal Dream Resort",
    location: "Bali",
    rating: 5,
    price: 395,
    image: "/bali-beach-resort-tropical-ocean-view.jpg",
    description: "Beachfront paradise with tropical gardens",
    amenities: ["Free WiFi", "Beach Access", "Spa", "Pool", "Yoga Classes"],
  },
]

const roomTypes = [
  { id: 1, name: "Standard Room", price: 0, guests: 2 },
  { id: 2, name: "Deluxe Room", price: 100, guests: 2 },
  { id: 3, name: "Suite", price: 250, guests: 4 },
  { id: 4, name: "Presidential Suite", price: 500, guests: 6 },
]

export default function HotelDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const hotel = hotels.find((h) => h.id === Number.parseInt(params.id))
  const [step, setStep] = useState(1)
  const [bookingData, setBookingData] = useState({
    roomType: roomTypes[0],
    checkIn: "",
    checkOut: "",
    guests: 2,
  })
  const [paymentMethod, setPaymentMethod] = useState("")
  const [showConfirmation, setShowConfirmation] = useState(false)

  if (!hotel) {
    return <div className="min-h-screen bg-[#0a0e27] flex items-center justify-center text-white">Hotel not found</div>
  }

  const totalPrice = hotel.price + bookingData.roomType.price
  const nights = 3 // Default for demo

  const handleRoomSelect = (room: (typeof roomTypes)[0]) => {
    setBookingData({ ...bookingData, roomType: room })
  }

  const handlePayment = () => {
    if (paymentMethod) {
      setShowConfirmation(true)
      setTimeout(() => {
        router.push("/hotels")
      }, 3000)
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0e27]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#1a1f3a]/80 backdrop-blur-md border-b border-white/10">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <span className="text-white text-xl font-semibold">Travelinn</span>
            </Link>
            <Link href="/hotels">
              <Button variant="ghost" className="text-gray-300 hover:text-white">
                <X className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="bg-[#1a1f3a] rounded-2xl p-8 max-w-md mx-4 border border-purple-500/40">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <Check className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Booking Confirmed!</h2>
              <p className="text-purple-300 mb-4">Your reservation has been successfully confirmed.</p>
              <p className="text-gray-400 text-sm">Redirecting to hotels page...</p>
            </div>
          </div>
        </div>
      )}

      <main className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Progress Steps */}
          <div className="mb-8 flex items-center justify-center gap-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step >= s ? "bg-purple-600 text-white" : "bg-gray-700 text-gray-400"
                  }`}
                >
                  {s}
                </div>
                {s < 3 && <div className={`w-16 h-1 ${step > s ? "bg-purple-600" : "bg-gray-700"}`} />}
              </div>
            ))}
          </div>

          {/* Step 1: Room Selection */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="relative h-80 rounded-2xl overflow-hidden">
                <Image src={hotel.image || "/placeholder.svg"} alt={hotel.name} fill className="object-cover" />
              </div>

              <div className="bg-[#1a1f3a] rounded-2xl p-6 border border-purple-500/20">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-white mb-2">{hotel.name}</h1>
                    <div className="flex items-center gap-2 text-purple-300 mb-2">
                      <MapPin className="w-5 h-5" />
                      <span>{hotel.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: hotel.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-purple-400 text-sm">from </span>
                    <span className="text-white text-3xl font-bold">${hotel.price}</span>
                    <span className="text-gray-400 text-sm"> /night</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{hotel.description}</p>

                <div className="flex flex-wrap gap-2">
                  {hotel.amenities.map((amenity) => (
                    <span key={amenity} className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#1a1f3a] rounded-2xl p-6 border border-purple-500/20">
                <h2 className="text-2xl font-bold text-white mb-4">Select Room Type</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {roomTypes.map((room) => (
                    <button
                      key={room.id}
                      onClick={() => handleRoomSelect(room)}
                      className={`p-4 rounded-xl border-2 transition-all text-left ${
                        bookingData.roomType.id === room.id
                          ? "border-purple-500 bg-purple-600/20"
                          : "border-gray-700 hover:border-purple-500/50"
                      }`}
                    >
                      <h3 className="text-lg font-semibold text-white mb-1">{room.name}</h3>
                      <p className="text-purple-300 text-sm mb-2">Up to {room.guests} guests</p>
                      <p className="text-white font-bold">{room.price === 0 ? "Included" : `+$${room.price}/night`}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <Button
                  onClick={() => setStep(2)}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg text-lg"
                >
                  Continue
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Booking Details */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="bg-[#1a1f3a] rounded-2xl p-6 border border-purple-500/20">
                <h2 className="text-2xl font-bold text-white mb-6">Booking Details</h2>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-purple-300 mb-2">Check-in Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
                        <input
                          type="date"
                          value={bookingData.checkIn}
                          onChange={(e) => setBookingData({ ...bookingData, checkIn: e.target.value })}
                          className="w-full pl-12 pr-4 py-3 bg-[#0a0e27] border border-purple-500/30 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-purple-300 mb-2">Check-out Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
                        <input
                          type="date"
                          value={bookingData.checkOut}
                          onChange={(e) => setBookingData({ ...bookingData, checkOut: e.target.value })}
                          className="w-full pl-12 pr-4 py-3 bg-[#0a0e27] border border-purple-500/30 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-purple-300 mb-2">Number of Guests</label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
                      <input
                        type="number"
                        min="1"
                        max={bookingData.roomType.guests}
                        value={bookingData.guests}
                        onChange={(e) => setBookingData({ ...bookingData, guests: Number.parseInt(e.target.value) })}
                        className="w-full pl-12 pr-4 py-3 bg-[#0a0e27] border border-purple-500/30 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#1a1f3a] rounded-2xl p-6 border border-purple-500/20">
                <h3 className="text-xl font-bold text-white mb-4">Booking Summary</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>{hotel.name}</span>
                    <span className="text-white font-semibold">${hotel.price}/night</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{bookingData.roomType.name}</span>
                    <span className="text-white font-semibold">
                      {bookingData.roomType.price === 0 ? "Included" : `+$${bookingData.roomType.price}/night`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>{nights} nights</span>
                  </div>
                  <div className="border-t border-purple-500/30 pt-2 mt-2 flex justify-between text-lg">
                    <span className="text-white font-bold">Total</span>
                    <span className="text-purple-400 font-bold">${totalPrice * nights}</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <Button
                  onClick={() => setStep(1)}
                  variant="outline"
                  className="border-purple-500 text-purple-300 hover:bg-purple-600/20 px-8 py-3 rounded-lg text-lg"
                >
                  Back
                </Button>
                <Button
                  onClick={() => setStep(3)}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg text-lg"
                >
                  Continue to Payment
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Payment */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="bg-[#1a1f3a] rounded-2xl p-6 border border-purple-500/20">
                <h2 className="text-2xl font-bold text-white mb-6">Payment Method</h2>

                <div className="space-y-4">
                  <button
                    onClick={() => setPaymentMethod("apple")}
                    className={`w-full p-4 rounded-xl border-2 transition-all flex items-center gap-4 ${
                      paymentMethod === "apple"
                        ? "border-purple-500 bg-purple-600/20"
                        : "border-gray-700 hover:border-purple-500/50"
                    }`}
                  >
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xl"></span>
                    </div>
                    <div className="text-left flex-1">
                      <h3 className="text-lg font-semibold text-white">Apple Pay</h3>
                      <p className="text-gray-400 text-sm">Pay securely with Apple Pay</p>
                    </div>
                  </button>

                  <button
                    onClick={() => setPaymentMethod("google")}
                    className={`w-full p-4 rounded-xl border-2 transition-all flex items-center gap-4 ${
                      paymentMethod === "google"
                        ? "border-purple-500 bg-purple-600/20"
                        : "border-gray-700 hover:border-purple-500/50"
                    }`}
                  >
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-xl">G</span>
                    </div>
                    <div className="text-left flex-1">
                      <h3 className="text-lg font-semibold text-white">Google Pay</h3>
                      <p className="text-gray-400 text-sm">Pay securely with Google Pay</p>
                    </div>
                  </button>

                  <button
                    onClick={() => setPaymentMethod("card")}
                    className={`w-full p-4 rounded-xl border-2 transition-all flex items-center gap-4 ${
                      paymentMethod === "card"
                        ? "border-purple-500 bg-purple-600/20"
                        : "border-gray-700 hover:border-purple-500/50"
                    }`}
                  >
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left flex-1">
                      <h3 className="text-lg font-semibold text-white">Credit Card</h3>
                      <p className="text-gray-400 text-sm">Pay with credit or debit card</p>
                    </div>
                  </button>
                </div>

                {paymentMethod === "card" && (
                  <div className="mt-6 space-y-4">
                    <div>
                      <label className="block text-purple-300 mb-2">Card Number</label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-3 bg-[#0a0e27] border border-purple-500/30 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-purple-300 mb-2">Expiry Date</label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full px-4 py-3 bg-[#0a0e27] border border-purple-500/30 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-purple-300 mb-2">CVV</label>
                        <input
                          type="text"
                          placeholder="123"
                          className="w-full px-4 py-3 bg-[#0a0e27] border border-purple-500/30 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-[#1a1f3a] rounded-2xl p-6 border border-purple-500/20">
                <h3 className="text-xl font-bold text-white mb-4">Final Summary</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>{hotel.name}</span>
                    <span className="text-white font-semibold">${hotel.price}/night</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{bookingData.roomType.name}</span>
                    <span className="text-white font-semibold">
                      {bookingData.roomType.price === 0 ? "Included" : `+$${bookingData.roomType.price}/night`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>
                      {nights} nights × ${totalPrice}
                    </span>
                    <span className="text-white font-semibold">${totalPrice * nights}</span>
                  </div>
                  <div className="border-t border-purple-500/30 pt-2 mt-2 flex justify-between text-xl">
                    <span className="text-white font-bold">Total Amount</span>
                    <span className="text-purple-400 font-bold">${totalPrice * nights}</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <Button
                  onClick={() => setStep(2)}
                  variant="outline"
                  className="border-purple-500 text-purple-300 hover:bg-purple-600/20 px-8 py-3 rounded-lg text-lg"
                >
                  Back
                </Button>
                <Button
                  onClick={handlePayment}
                  disabled={!paymentMethod}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Complete Booking
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
