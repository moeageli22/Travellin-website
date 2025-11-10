import { hotels } from "./hotel-data"
import HotelBooking from "./hotel-booking"

export default async function HotelDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params
  const hotel = hotels.find((h) => h.id === Number.parseInt(resolvedParams.id))

  if (!hotel) {
    return (
      <div className="min-h-screen bg-[#0a0e27] flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Hotel Not Found</h1>
          <p className="text-gray-400 mb-6">The hotel you're looking for doesn't exist.</p>
          <a href="/hotels" className="text-purple-400 hover:text-purple-300 underline">
            Return to Hotels
          </a>
        </div>
      </div>
    )
  }

  return <HotelBooking hotel={hotel} />
}
