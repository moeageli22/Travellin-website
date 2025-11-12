import { NextResponse } from "next/server"
import { HotelController } from "@/backend/controllers/hotelController"

const hotelController = new HotelController()

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // In production, you'd get userId from JWT token in Authorization header
    const authHeader = request.headers.get("authorization")
    if (!authHeader) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 })
    }

    const result = await hotelController.createBooking(body)

    if (!result.success) {
      return NextResponse.json(result, { status: 400 })
    }

    return NextResponse.json(result, { status: 201 })
  } catch (error) {
    console.error("[API] Create booking error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}
