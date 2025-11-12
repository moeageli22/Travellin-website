import { NextResponse } from "next/server"
import { GroupController } from "@/backend/controllers/groupController"

const groupController = new GroupController()

export async function GET() {
  try {
    const result = await groupController.getAllGroups()
    return NextResponse.json(result, { status: 200 })
  } catch (error) {
    console.error("[API] Get groups error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}
