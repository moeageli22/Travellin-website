"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Send } from "lucide-react"

export default function ChatbotPage() {
  const [message, setMessage] = useState("")

  const handleSend = () => {
    if (message.trim()) {
      console.log("[v0] Sending message:", message)
      setMessage("")
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0e27] flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-[#1a1f3a] rounded-3xl shadow-2xl border border-purple-500/30 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center">
              <div className="text-3xl">😊</div>
            </div>
            <div>
              <h2 className="text-white text-2xl font-bold">AI Travel Assistant</h2>
              <div className="flex items-center gap-2 text-purple-200">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">Online · Here to help</span>
              </div>
            </div>
          </div>
          <Link href="/">
            <Button variant="ghost" size="icon" className="text-white hover:bg-purple-600">
              <X className="w-6 h-6" />
            </Button>
          </Link>
        </div>

        {/* Chat Content */}
        <div className="p-8 space-y-6 min-h-[400px]">
          <div className="flex justify-start">
            <div className="bg-[#0a0e27] rounded-3xl rounded-tl-none px-6 py-4 max-w-md">
              <p className="text-white text-lg">Hi 👋 I can find hotels or plan your group trip!</p>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="bg-[#0a0e27] rounded-3xl rounded-tl-none px-6 py-4 max-w-md">
              <p className="text-white text-lg">Show accessible hotels nearby.</p>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-6 border-t border-purple-500/20">
          <div className="flex items-center gap-4">
            <Input
              type="text"
              placeholder="Ask me anything..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 bg-[#0a0e27] border-purple-500/30 text-white placeholder:text-gray-500 rounded-full px-6 py-6 text-lg"
            />
            <Button
              onClick={handleSend}
              className="bg-purple-600 hover:bg-purple-700 text-white rounded-full w-14 h-14 flex items-center justify-center"
            >
              <Send className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
