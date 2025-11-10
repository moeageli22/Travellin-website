"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { CreditCard, Check } from "lucide-react"
import { useSearchParams, useRouter } from "next/navigation"

const hotels = [
  {
    id: 1,
    name: "Azure Paradise Resort",
    rooms: [
      { id: 1, type: "Overwater Villa", price: 450 },
      { id: 2, type: "Beach Villa", price: 380 },
      { id: 3, type: "Family Suite", price: 650 },
      { id: 4, type: "Presidential Suite", price: 1200 },
    ],
  },
  {
    id: 2,
    name: "Skyline Grand Hotel",
    rooms: [
      { id: 1, type: "Deluxe Room", price: 380 },
      { id: 2, type: "Executive Suite", price: 550 },
      { id: 3, type: "Penthouse", price: 1500 },
    ],
  },
  {
    id: 3,
    name: "Mountain Vista Lodge",
    rooms: [
      { id: 1, type: "Mountain View Room", price: 320 },
      { id: 2, type: "Alpine Suite", price: 480 },
      { id: 3, type: "Chalet", price: 800 },
    ],
  },
  {
    id: 4,
    name: "Royal Elegance Suite",
    rooms: [
      { id: 1, type: "Classic Room", price: 520 },
      { id: 2, type: "Luxury Suite", price: 780 },
      { id: 3, type: "Royal Penthouse", price: 2000 },
    ],
  },
  {
    id: 5,
    name: "Modern Heights Hotel",
    rooms: [
      { id: 1, type: "Standard Room", price: 290 },
      { id: 2, type: "Deluxe Room", price: 420 },
      { id: 3, type: "Executive Suite", price: 650 },
    ],
  },
  {
    id: 6,
    name: "Coastal Dream Resort",
    rooms: [
      { id: 1, type: "Garden View Room", price: 395 },
      { id: 2, type: "Ocean View Suite", price: 580 },
      { id: 3, type: "Private Villa", price: 950 },
    ],
  },
]

export default function CheckoutPage() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const hotelId = Number.parseInt(searchParams.get("hotel") || "0")
  const roomId = Number.parseInt(searchParams.get("room") || "0")
  const checkIn = searchParams.get("checkIn") || ""
  const checkOut = searchParams.get("checkOut") || ""
  const guests = Number.parseInt(searchParams.get("guests") || "2")

  const hotel = hotels.find((h) => h.id === hotelId)
  const room = hotel?.rooms.find((r) => r.id === roomId)
  const nights =
    checkIn && checkOut
      ? Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24))
      : 0
  const subtotal = room && nights > 0 ? room.price * nights : 0
  const taxes = subtotal * 0.12
  const total = subtotal + taxes

  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal" | "apple">("card")
  const [cardNumber, setCardNumber] = useState("")
  const [cardName, setCardName] = useState("")
  const [expiry, setExpiry] = useState("")
  const [cvv, setCvv] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)

  const handlePayment = () => {
    if (paymentMethod === "card") {
      if (!cardNumber || !cardName || !expiry || !cvv) {
        alert("Please fill in all card details")
        return
      }
    }
    setShowSuccess(true)
    setTimeout(() => {
      router.push("/hotels")
    }, 3000)
  }

  if (!hotel || !room) {
    return <div>Booking information not found</div>
  }

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-[#0a0e27] flex items-center justify-center">
        <div className="bg-[#1a1f3a] rounded-2xl p-8 border border-purple-500/20 text-center max-w-md">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Booking Confirmed!</h2>
          <p className="text-purple-300 mb-4">Your reservation has been successfully processed.</p>
          <p className="text-gray-400">Redirecting to hotels page...</p>
        </div>
      </div>
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
          <Link href={`/hotels/booking/${hotelId}`} className="text-purple-400 hover:text-purple-300 mb-6 inline-block">
            ← Back to Booking
          </Link>

          <h1 className="text-4xl font-bold text-white mb-8">Checkout</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-[#1a1f3a] rounded-2xl p-6 border border-purple-500/20">
                <h2 className="text-2xl font-bold text-white mb-6">Payment Method</h2>

                <div className="space-y-4 mb-6">
                  <div
                    onClick={() => setPaymentMethod("card")}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex items-center gap-4 ${
                      paymentMethod === "card"
                        ? "border-purple-500 bg-purple-500/10"
                        : "border-purple-500/20 hover:border-purple-500/40"
                    }`}
                  >
                    <CreditCard className="w-6 h-6 text-purple-400" />
                    <div>
                      <div className="text-white font-semibold">Credit or Debit Card</div>
                      <div className="text-sm text-gray-400">Visa, Mastercard, Amex</div>
                    </div>
                  </div>

                  <div
                    onClick={() => setPaymentMethod("paypal")}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex items-center gap-4 ${
                      paymentMethod === "paypal"
                        ? "border-purple-500 bg-purple-500/10"
                        : "border-purple-500/20 hover:border-purple-500/40"
                    }`}
                  >
                    <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center text-white font-bold text-xs">
                      PP
                    </div>
                    <div>
                      <div className="text-white font-semibold">PayPal</div>
                      <div className="text-sm text-gray-400">Pay with your PayPal account</div>
                    </div>
                  </div>

                  <div
                    onClick={() => setPaymentMethod("apple")}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex items-center gap-4 ${
                      paymentMethod === "apple"
                        ? "border-purple-500 bg-purple-500/10"
                        : "border-purple-500/20 hover:border-purple-500/40"
                    }`}
                  >
                    <div className="w-6 h-6 bg-black rounded flex items-center justify-center text-white font-bold text-xs"></div>
                    <div>
                      <div className="text-white font-semibold">Apple Pay</div>
                      <div className="text-sm text-gray-400">Pay with Apple Pay</div>
                    </div>
                  </div>
                </div>

                {paymentMethod === "card" && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="cardNumber" className="text-white mb-2 block">
                        Card Number
                      </Label>
                      <Input
                        id="cardNumber"
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className="bg-[#0a0e27] border-purple-500/30 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cardName" className="text-white mb-2 block">
                        Cardholder Name
                      </Label>
                      <Input
                        id="cardName"
                        type="text"
                        placeholder="John Doe"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        className="bg-[#0a0e27] border-purple-500/30 text-white"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry" className="text-white mb-2 block">
                          Expiry Date
                        </Label>
                        <Input
                          id="expiry"
                          type="text"
                          placeholder="MM/YY"
                          value={expiry}
                          onChange={(e) => setExpiry(e.target.value)}
                          className="bg-[#0a0e27] border-purple-500/30 text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv" className="text-white mb-2 block">
                          CVV
                        </Label>
                        <Input
                          id="cvv"
                          type="text"
                          placeholder="123"
                          value={cvv}
                          onChange={(e) => setCvv(e.target.value)}
                          className="bg-[#0a0e27] border-purple-500/30 text-white"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === "paypal" && (
                  <div className="text-center py-8">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg">
                      Continue with PayPal
                    </Button>
                  </div>
                )}

                {paymentMethod === "apple" && (
                  <div className="text-center py-8">
                    <Button className="bg-black hover:bg-gray-900 text-white px-8 py-3 rounded-lg">Pay</Button>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-[#1a1f3a] rounded-2xl p-6 border border-purple-500/20 sticky top-24">
                <h2 className="text-2xl font-bold text-white mb-4">Order Summary</h2>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-300">
                    <span>Hotel:</span>
                    <span className="text-white font-semibold">{hotel.name}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Room Type:</span>
                    <span className="text-white font-semibold">{room.type}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Check-in:</span>
                    <span className="text-white font-semibold">{checkIn}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Check-out:</span>
                    <span className="text-white font-semibold">{checkOut}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Guests:</span>
                    <span className="text-white font-semibold">{guests}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Nights:</span>
                    <span className="text-white font-semibold">{nights}</span>
                  </div>
                </div>

                <div className="border-t border-purple-500/20 pt-4 mb-6 space-y-2">
                  <div className="flex justify-between text-gray-300">
                    <span>Subtotal:</span>
                    <span className="text-white">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Taxes & Fees:</span>
                    <span className="text-white">${taxes.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold text-white pt-2 border-t border-purple-500/20">
                    <span>Total:</span>
                    <span className="text-purple-400">${total.toFixed(2)}</span>
                  </div>
                </div>

                <Button
                  onClick={handlePayment}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg"
                >
                  Complete Booking
                </Button>

                <p className="text-xs text-gray-400 text-center mt-4">
                  By completing this booking, you agree to the terms and conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
