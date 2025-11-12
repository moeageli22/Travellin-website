import { NextResponse } from "next/server"
import { HotelController } from "@/backend/controllers/hotelController"

const hotelController = new HotelController()

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const result = await hotelController.getHotelById(id)

    if (!result.success) {
      return NextResponse.json(result, { status: 404 })
    }

    return NextResponse.json(result, { status: 200 })
  } catch (error) {
    console.error("[API] Get hotel error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}
