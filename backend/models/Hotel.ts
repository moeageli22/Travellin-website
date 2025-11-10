// Hotel model for accommodation management

export interface Hotel {
  id: string
  name: string
  location: string
  country: string
  description: string
  amenities: string[]
  images: string[]
  pricePerNight: number
  rating: number
  reviews: number
  rooms: Room[]
  createdAt: Date
  updatedAt: Date
}

export interface Room {
  id: string
  hotelId: string
  type: string
  description: string
  price: number
  capacity: number
  amenities: string[]
  available: boolean
}

export interface Booking {
  id: string
  userId: string
  hotelId: string
  roomId: string
  checkIn: Date
  checkOut: Date
  guests: number
  totalPrice: number
  paymentMethod: string
  status: "pending" | "confirmed" | "cancelled"
  createdAt: Date
}
