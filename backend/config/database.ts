// Database configuration for Travelinn
// Supports multiple database connections (PostgreSQL, MongoDB, etc.)

export const databaseConfig = {
  // PostgreSQL configuration (for production)
  postgres: {
    host: process.env.DB_HOST || "localhost",
    port: Number.parseInt(process.env.DB_PORT || "5432"),
    database: process.env.DB_NAME || "travelinn",
    user: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "",
    ssl: process.env.NODE_ENV === "production",
  },

  // MongoDB configuration (for chat/messaging)
  mongodb: {
    uri: process.env.MONGODB_URI || "mongodb://localhost:27017/travelinn",
  },

  // Redis configuration (for caching)
  redis: {
    host: process.env.REDIS_HOST || "localhost",
    port: Number.parseInt(process.env.REDIS_PORT || "6379"),
    password: process.env.REDIS_PASSWORD || "",
  },
}

// Database connection helper
export async function connectDatabase() {
  try {
    console.log("[Backend] Connecting to database...")
    // Add your database connection logic hereee
    return { success: true, message: "Database connected successfully" }
  } catch (error) {
    console.error("[Backend] Database connection failed:", error)
    return { success: false, message: "Database connection failed" }
  }
}
