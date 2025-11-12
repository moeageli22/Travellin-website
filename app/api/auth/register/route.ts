import { NextResponse } from "next/server"
import { AuthController } from "@/backend/controllers/authController"

const authController = new AuthController()

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, password, firstName, lastName } = body

    // Validate required fields
    if (!email || !password || !firstName || !lastName) {
      return NextResponse.json({ success: false, message: "All fields are required" }, { status: 400 })
    }

    const result = await authController.register({
      email,
      password,
      firstName,
      lastName,
    })

    if (!result.success) {
      return NextResponse.json(result, { status: 400 })
    }

    return NextResponse.json(result, { status: 201 })
  } catch (error) {
    console.error("[API] Registration error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}
