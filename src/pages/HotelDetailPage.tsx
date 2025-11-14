import { useParams } from 'react-router-dom'
import { hotels } from '../data/hotelData'
import HotelBooking from '../components/HotelBooking'

export default function HotelDetailPage() {
  const { id } = useParams<{ id: string }>()
  const hotel = hotels.find((h) => h.id === Number.parseInt(id || '0'))

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
