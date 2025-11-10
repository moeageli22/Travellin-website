// Travelinn Backend Server
// This will be the entry point for the backend API

import express from "express"

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Travelinn API is running" })
})

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`)
})
