// Authentication controller
import { type User, toUserProfile } from "../models/User"
import { hashPassword, comparePassword, generateToken } from "../utils/auth"

export class AuthController {
  // Register new user
  async register(data: {
    email: string
    password: string
    firstName: string
    lastName: string
  }) {
    try {
      // Check if user already exists
      // const existingUser = await findUserByEmail(data.email)

      // Hash password
      const hashedPassword = await hashPassword(data.password)

      // Create user in database
      const newUser: User = {
        id: generateId(),
        email: data.email,
        password: hashedPassword,
        firstName: data.firstName,
        lastName: data.lastName,
        interests: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      }

      // Save to database
      // await saveUser(newUser)

      // Generate JWT token
      const token = generateToken({ userId: newUser.id })

      return {
        success: true,
        user: toUserProfile(newUser),
        token,
      }
    } catch (error) {
      console.error("[Backend] Registration error:", error)
      return {
        success: false,
        message: "Registration failed",
      }
    }
  }

  // Login user
  async login(email: string, password: string) {
    try {
      // Find user by email
      // const user = await findUserByEmail(email)

      // Mock user for demonstration
      const user: User = {
        id: "1",
        email,
        password: await hashPassword(password),
        firstName: "John",
        lastName: "Doe",
        interests: ["travel", "food"],
        createdAt: new Date(),
        updatedAt: new Date(),
      }

      // Verify password
      const isValid = await comparePassword(password, user.password)

      if (!isValid) {
        return {
          success: false,
          message: "Invalid credentials",
        }
      }

      // Generate JWT token
      const token = generateToken({ userId: user.id })

      return {
        success: true,
        user: toUserProfile(user),
        token,
      }
    } catch (error) {
      console.error("[Backend] Login error:", error)
      return {
        success: false,
        message: "Login failed",
      }
    }
  }
}

function generateId(): string {
  return `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}
