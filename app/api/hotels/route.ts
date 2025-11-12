import { NextResponse } from "next/server"
import { HotelController } from "@/backend/controllers/hotelController"

const hotelController = new HotelController()

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const location = searchParams.get("location")
    const maxPrice = searchParams.get("maxPrice")

    const result = await hotelController.getAllHotels({
      location: location || undefined,
      maxPrice: maxPrice ? Number.parseInt(maxPrice) : undefined,
    })

    return NextResponse.json(result, { status: 200 })
  } catch (error) {
    console.error("[API] Get hotels error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}
