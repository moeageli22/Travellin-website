"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { MapPin, Star, CalendarIcon, Users, CreditCard, X, Check, ChevronLeft, ChevronRight } from "lucide-react"
import { format } from "date-fns"

export default function HotelBooking({ hotel }: { hotel: any }) {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [bookingData, setBookingData] = useState({
    roomType: hotel?.rooms[0] || null,
    checkIn: "",
    checkOut: "",
    guests: 2,
    specialRequests: "",
  })
  const [checkInDate, setCheckInDate] = useState<Date>()
  const [checkOutDate, setCheckOutDate] = useState<Date>()
  const [paymentMethod, setPaymentMethod] = useState("")
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
  })
  const [showConfirmation, setShowConfirmation] = useState(false)

  const calculateNights = () => {
    if (checkInDate && checkOutDate) {
      const diffTime = Math.abs(checkOutDate.getTime() - checkInDate.getTime())
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      return diffDays > 0 ? diffDays : 1
    }
    return 1
  }

  const nights = calculateNights()
  const totalPrice = bookingData.roomType ? bookingData.roomType.price * nights : 0

  const handleRoomSelect = (room: any) => {
    setBookingData({ ...bookingData, roomType: room })
  }

  const handlePayment = () => {
    if (paymentMethod) {
      setShowConfirmation(true)
      setTimeout(() => {
        router.push("/hotels")
      }, 4000)
    }
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % hotel.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + hotel.images.length) % hotel.images.length)
  }

  const bookingId = `#TRV-${Math.floor(10000 + Math.random() * 90000)}`

  return (
    <div className="min-h-screen bg-[#0a0e27]">
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

      {showConfirmation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-[#1a1f3a] rounded-2xl p-8 max-w-lg w-full mx-4 border border-purple-500/40">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <Check className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">Booking Confirmed!</h2>
              <p className="text-purple-300 mb-4">Thank you for choosing {hotel.name}.</p>
              <div className="w-full bg-[#0a0e27] rounded-lg p-4 mb-4 text-left">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Booking ID:</span>
                    <span className="text-purple-400 font-mono font-semibold">{bookingId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Check-in:</span>
                    <span className="text-white">{checkInDate ? format(checkInDate, "PPP") : "Not set"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Check-out:</span>
                    <span className="text-white">{checkOutDate ? format(checkOutDate, "PPP") : "Not set"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-white">
                      {nights} {nights === 1 ? "night" : "nights"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Paid:</span>
                    <span className="text-green-400 font-bold">${totalPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Payment via:</span>
                    <span className="text-white capitalize">
                      {paymentMethod === "apple"
                        ? "Apple Pay"
                        : paymentMethod === "google"
                          ? "Google Pay"
                          : paymentMethod === "paypal"
                            ? "PayPal"
                            : "Credit Card"}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                You'll receive a confirmation email shortly with your digital receipt and check-in details.
              </p>
              <Button
                onClick={() => router.push("/hotels")}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2 rounded-lg"
              >
                Return to Hotels
              </Button>
            </div>
          </div>
        </div>
      )}

      <main className="pt-24 pb-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8 flex items-center justify-center gap-2 md:gap-4">
            {[
              { num: 1, label: "Room" },
              { num: 2, label: "Details" },
              { num: 3, label: "Payment" },
            ].map((s, idx) => (
              <div key={s.num} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-semibold transition-all ${
                      step >= s.num ? "bg-purple-600 text-white scale-110" : "bg-gray-700 text-gray-400"
                    }`}
                  >
                    {s.num}
                  </div>
                  <span
                    className={`text-xs mt-1 hidden md:block ${step >= s.num ? "text-purple-400" : "text-gray-500"}`}
                  >
                    {s.label}
                  </span>
                </div>
                {idx < 2 && <div className={`w-12 md:w-20 h-1 ${step > s.num ? "bg-purple-600" : "bg-gray-700"}`} />}
              </div>
            ))}
          </div>

          {step === 1 && (
            <div className="space-y-6">
              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden group">
                <Image
                  src={hotel.images[currentImageIndex] || "/placeholder.svg"}
                  alt={hotel.name}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity z-10"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity z-10"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {hotel.images.map((_: any, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === currentImageIndex ? "bg-white w-6" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="bg-[#1a1f3a] rounded-2xl p-4 md:p-6 border border-purple-500/20">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                  <div className="flex-1">
                    <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">{hotel.name}</h1>
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
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">{hotel.description}</p>

                <div className="flex flex-wrap gap-2">
                  {hotel.amenities.map((amenity: string) => (
                    <span key={amenity} className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#1a1f3a] rounded-2xl p-4 md:p-6 border border-purple-500/20">
                <h2 className="text-2xl font-bold text-white mb-4">Select Your Room Type</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-purple-500/30">
                        <th className="pb-3 text-purple-300 font-semibold">Room Type</th>
                        <th className="pb-3 text-purple-300 font-semibold">Description</th>
                        <th className="pb-3 text-purple-300 font-semibold">Price (per night)</th>
                        <th className="pb-3 text-purple-300 font-semibold">Guests</th>
                        <th className="pb-3 text-purple-300 font-semibold"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {hotel.rooms.map((room: any) => (
                        <tr
                          key={room.id}
                          className={`border-b border-purple-500/20 transition-colors ${
                            bookingData.roomType?.id === room.id ? "bg-purple-600/10" : "hover:bg-purple-600/5"
                          }`}
                        >
                          <td className="py-4">
                            <span className="text-white font-semibold">{room.name}</span>
                          </td>
                          <td className="py-4 text-gray-400 text-sm max-w-xs">{room.description}</td>
                          <td className="py-4">
                            <span className="text-white font-bold text-lg">${room.price}</span>
                          </td>
                          <td className="py-4 text-gray-300">{room.guests}</td>
                          <td className="py-4">
                            <Button
                              onClick={() => handleRoomSelect(room)}
                              variant={bookingData.roomType?.id === room.id ? "default" : "outline"}
                              className={
                                bookingData.roomType?.id === room.id
                                  ? "bg-purple-600 hover:bg-purple-700 text-white"
                                  : "border-purple-500 text-purple-300 hover:bg-purple-600/20"
                              }
                              size="sm"
                            >
                              {bookingData.roomType?.id === room.id ? "Selected" : "Select"}
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex justify-end">
                <Button
                  onClick={() => setStep(2)}
                  disabled={!bookingData.roomType}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue →
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="bg-[#1a1f3a] rounded-2xl p-4 md:p-6 border border-purple-500/20">
                <h2 className="text-2xl font-bold text-white mb-6">Complete Your Booking</h2>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-purple-300 mb-2 font-medium">Check-in Date</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal bg-[#0a0e27] border-purple-500/30 hover:border-purple-500 hover:bg-[#0a0e27] text-white"
                          >
                            <CalendarIcon className="mr-2 h-5 w-5 text-purple-400" />
                            {checkInDate ? format(checkInDate, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-[#1a1f3a] border-purple-500/30">
                          <Calendar
                            mode="single"
                            selected={checkInDate}
                            onSelect={setCheckInDate}
                            disabled={(date) => date < new Date()}
                            initialFocus
                            className="bg-[#1a1f3a] text-white"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div>
                      <label className="block text-purple-300 mb-2 font-medium">Check-out Date</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal bg-[#0a0e27] border-purple-500/30 hover:border-purple-500 hover:bg-[#0a0e27] text-white"
                          >
                            <CalendarIcon className="mr-2 h-5 w-5 text-purple-400" />
                            {checkOutDate ? format(checkOutDate, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-[#1a1f3a] border-purple-500/30">
                          <Calendar
                            mode="single"
                            selected={checkOutDate}
                            onSelect={setCheckOutDate}
                            disabled={(date) => date < (checkInDate || new Date())}
                            initialFocus
                            className="bg-[#1a1f3a] text-white"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  <div>
                    <label className="block text-purple-300 mb-2 font-medium">Number of Guests</label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
                      <input
                        type="number"
                        min="1"
                        max={bookingData.roomType?.guests || 2}
                        value={bookingData.guests}
                        onChange={(e) => setBookingData({ ...bookingData, guests: Number.parseInt(e.target.value) })}
                        className="w-full pl-12 pr-4 py-3 bg-[#0a0e27] border border-purple-500/30 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-purple-300 mb-2 font-medium">Special Requests (Optional)</label>
                    <textarea
                      value={bookingData.specialRequests}
                      onChange={(e) => setBookingData({ ...bookingData, specialRequests: e.target.value })}
                      placeholder="e.g., Need wheelchair access, dietary requirements, early check-in..."
                      rows={3}
                      className="w-full px-4 py-3 bg-[#0a0e27] border border-purple-500/30 rounded-lg text-white focus:border-purple-500 focus:outline-none resize-none"
                    />
                    <p className="text-gray-400 text-sm mt-2">
                      We'll make sure your stay is as comfortable as possible.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1a1f3a] rounded-2xl p-4 md:p-6 border border-purple-500/20">
                <h3 className="text-xl font-bold text-white mb-4">Booking Summary</h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex justify-between">
                    <span>{hotel.name}</span>
                    <span className="text-white font-semibold">{hotel.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Room: {bookingData.roomType?.name}</span>
                    <span className="text-white font-semibold">${bookingData.roomType?.price}/night</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration</span>
                    <span className="text-white font-semibold">
                      {nights} {nights === 1 ? "night" : "nights"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Guests</span>
                    <span className="text-white font-semibold">{bookingData.guests}</span>
                  </div>
                  <div className="border-t border-purple-500/30 pt-3 mt-3 flex justify-between text-lg">
                    <span className="text-white font-bold">Total</span>
                    <span className="text-purple-400 font-bold text-2xl">${totalPrice}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <Button
                  onClick={() => setStep(1)}
                  variant="outline"
                  className="border-purple-500 text-purple-300 hover:bg-purple-600/20 px-8 py-3 rounded-lg text-lg"
                >
                  ← Back
                </Button>
                <Button
                  onClick={() => setStep(3)}
                  disabled={!checkInDate || !checkOutDate || !bookingData.roomType}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Proceed to Payment →
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="bg-[#1a1f3a] rounded-2xl p-4 md:p-6 border border-purple-500/20">
                <h2 className="text-2xl font-bold text-white mb-2">Secure Payment</h2>
                <p className="text-gray-400 text-sm mb-6">
                  Choose your preferred payment method and confirm your stay.
                </p>

                <div className="space-y-4">
                  <button
                    onClick={() => {
                      setPaymentMethod("apple")
                      setCardDetails({ cardNumber: "", expiryDate: "", cvv: "", cardholderName: "" })
                    }}
                    className={`w-full p-4 rounded-xl border-2 transition-all flex items-center gap-4 ${
                      paymentMethod === "apple"
                        ? "border-purple-500 bg-purple-600/20"
                        : "border-gray-700 hover:border-purple-500/50"
                    }`}
                  >
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center p-2">
                      <Image
                        src="/apple-pay-logo.png"
                        alt="Apple Pay"
                        width={56}
                        height={56}
                        className="object-contain"
                      />
                    </div>
                    <div className="text-left flex-1">
                      <h3 className="text-lg font-semibold text-white">Apple Pay</h3>
                      <p className="text-gray-400 text-sm">Pay securely with Apple Pay</p>
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      setPaymentMethod("google")
                      setCardDetails({ cardNumber: "", expiryDate: "", cvv: "", cardholderName: "" })
                    }}
                    className={`w-full p-4 rounded-xl border-2 transition-all flex items-center gap-4 ${
                      paymentMethod === "google"
                        ? "border-purple-500 bg-purple-600/20"
                        : "border-gray-700 hover:border-purple-500/50"
                    }`}
                  >
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center p-2">
                      <Image
                        src="/google-pay-logo.png"
                        alt="Google Pay"
                        width={56}
                        height={56}
                        className="object-contain"
                      />
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
                    <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center">
                      <CreditCard className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-left flex-1">
                      <h3 className="text-lg font-semibold text-white">Credit / Debit Card</h3>
                      <p className="text-gray-400 text-sm">Pay with Visa, MasterCard, or AmEx</p>
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      setPaymentMethod("paypal")
                      setCardDetails({ cardNumber: "", expiryDate: "", cvv: "", cardholderName: "" })
                    }}
                    className={`w-full p-4 rounded-xl border-2 transition-all flex items-center gap-4 ${
                      paymentMethod === "paypal"
                        ? "border-purple-500 bg-purple-600/20"
                        : "border-gray-700 hover:border-purple-500/50"
                    }`}
                  >
                    <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-xl">P</span>
                    </div>
                    <div className="text-left flex-1">
                      <h3 className="text-lg font-semibold text-white">PayPal</h3>
                      <p className="text-gray-400 text-sm">Pay securely with PayPal</p>
                    </div>
                  </button>
                </div>

                {paymentMethod === "card" && (
                  <div className="mt-6 space-y-4 p-4 bg-[#0a0e27] rounded-xl border border-purple-500/30">
                    <div>
                      <label className="block text-purple-300 mb-2 font-medium">Cardholder Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={cardDetails.cardholderName}
                        onChange={(e) => setCardDetails({ ...cardDetails, cardholderName: e.target.value })}
                        className="w-full px-4 py-3 bg-[#1a1f3a] border border-purple-500/30 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-purple-300 mb-2 font-medium">Card Number</label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        value={cardDetails.cardNumber}
                        onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
                        className="w-full px-4 py-3 bg-[#1a1f3a] border border-purple-500/30 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-purple-300 mb-2 font-medium">Expiry Date</label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          value={cardDetails.expiryDate}
                          onChange={(e) => setCardDetails({ ...cardDetails, expiryDate: e.target.value })}
                          className="w-full px-4 py-3 bg-[#1a1f3a] border border-purple-500/30 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-purple-300 mb-2 font-medium">CVV</label>
                        <input
                          type="text"
                          placeholder="123"
                          value={cardDetails.cvv}
                          onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                          className="w-full px-4 py-3 bg-[#1a1f3a] border border-purple-500/30 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                        />
                      </div>
                    </div>
                    <p className="text-gray-400 text-xs flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                      All payments are processed securely. Your card details are never stored on our servers.
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-[#1a1f3a] rounded-2xl p-4 md:p-6 border border-purple-500/20">
                <h3 className="text-xl font-bold text-white mb-4">Final Summary</h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex justify-between">
                    <span>{hotel.name}</span>
                    <span className="text-white font-semibold">{hotel.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{bookingData.roomType?.name}</span>
                    <span className="text-white font-semibold">${bookingData.roomType?.price}/night</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Check-in</span>
                    <span className="text-white font-semibold">
                      {checkInDate ? format(checkInDate, "PPP") : "Not set"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Check-out</span>
                    <span className="text-white font-semibold">
                      {checkOutDate ? format(checkOutDate, "PPP") : "Not set"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>
                      {nights} {nights === 1 ? "night" : "nights"} × ${bookingData.roomType?.price}
                    </span>
                    <span className="text-white font-semibold">${totalPrice}</span>
                  </div>
                  <div className="border-t border-purple-500/30 pt-3 mt-3 flex justify-between text-xl">
                    <span className="text-white font-bold">Total Amount</span>
                    <span className="text-purple-400 font-bold text-2xl">${totalPrice}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <Button
                  onClick={() => setStep(2)}
                  variant="outline"
                  className="border-purple-500 text-purple-300 hover:bg-purple-600/20 px-8 py-3 rounded-lg text-lg"
                >
                  ← Back
                </Button>
                <Button
                  onClick={handlePayment}
                  disabled={
                    !paymentMethod ||
                    (paymentMethod === "card" &&
                      (!cardDetails.cardNumber ||
                        !cardDetails.expiryDate ||
                        !cardDetails.cvv ||
                        !cardDetails.cardholderName))
                  }
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Confirm & Pay ${totalPrice}
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
