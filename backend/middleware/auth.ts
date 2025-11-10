// Authentication middleware for protected routes
import { verifyToken } from "../utils/auth"

export async function authMiddleware(req: any, res: any, next: Function) {
  try {
    // Get token from Authorization header
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: No token provided",
      })
    }

    const token = authHeader.substring(7)

    // Verify token
    const decoded = verifyToken(token)

    if (!decoded) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: Invalid token",
      })
    }

    // Attach user info to request
    req.user = decoded

    next()
  } catch (error) {
    console.error("[Backend] Auth middleware error:", error)
    return res.status(500).json({
      success: false,
      message: "Authentication error",
    })
  }
}
