"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { User, Mail, Lock, Eye, EyeOff, ArrowLeft } from "lucide-react"

const backgrounds = [
  {
    url: "/new-york-city-manhattan-skyline-aerial-view.jpg",
    name: "New York City",
  },
  {
    url: "/london-westminster-palace-and-big-ben.jpg",
    name: "London",
  },
  {
    url: "/maldives-overwater-bungalows-crystal-clear-water.jpg",
    name: "Tropical Paradise",
  },
]

export default function SignUpPage() {
  const [currentBg, setCurrentBg] = useState(0)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match")
      return
    }
    // Handle sign up logic here
    console.log("Sign up:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Slideshow */}
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentBg ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${bg.url})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-purple-900/70 to-slate-900/90" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="rounded-3xl bg-slate-900/90 backdrop-blur-xl border border-purple-500/30 p-8 shadow-2xl shadow-purple-500/20">
            <div className="mb-8 text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-2xl bg-purple-500/20 p-4 backdrop-blur-sm">
                  <svg className="h-10 w-10 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>
              <h1 className="mb-2 text-3xl font-bold text-white">Create Account</h1>
              <p className="text-sm text-purple-200">Start your adventure with Travelinn today</p>
            </div>

            {/* OAuth Buttons */}
            <div className="mb-6 space-y-3">
              <Button
                variant="outline"
                className="w-full bg-white/10 border-purple-500/30 text-white hover:bg-white/20 hover:border-purple-400 transition-all"
                type="button"
              >
                <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </Button>

              <Button
                variant="outline"
                className="w-full bg-white/10 border-purple-500/30 text-white hover:bg-white/20 hover:border-purple-400 transition-all"
                type="button"
              >
                <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
                </svg>
                Continue with Facebook
              </Button>

              <Button
                variant="outline"
                className="w-full bg-white/10 border-purple-500/30 text-white hover:bg-white/20 hover:border-purple-400 transition-all"
                type="button"
              >
                <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
                </svg>
                Continue with Apple
              </Button>
            </div>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-purple-500/30" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-slate-900 px-3 text-purple-300 font-medium">Or sign up with email</span>
              </div>
            </div>

            {/* Sign Up Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white font-medium">
                  Full Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-purple-400" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="pl-11 h-12 bg-white/10 border-purple-500/30 text-white placeholder:text-slate-400 focus:border-purple-400 focus:ring-purple-400/20"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white font-medium">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-purple-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-11 h-12 bg-white/10 border-purple-500/30 text-white placeholder:text-slate-400 focus:border-purple-400 focus:ring-purple-400/20"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-white font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-purple-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    className="pl-11 pr-12 h-12 bg-white/10 border-purple-500/30 text-white placeholder:text-slate-400 focus:border-purple-400 focus:ring-purple-400/20"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-white font-medium">
                  Confirm Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-purple-400" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="pl-11 pr-12 h-12 bg-white/10 border-purple-500/30 text-white placeholder:text-slate-400 focus:border-purple-400 focus:ring-purple-400/20"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-start space-x-2 pt-2">
                <Checkbox
                  id="terms"
                  required
                  className="mt-0.5 border-purple-500/30 data-[state=checked]:bg-purple-500"
                />
                <label htmlFor="terms" className="text-sm text-purple-200 cursor-pointer leading-tight">
                  I agree to the{" "}
                  <Link href="/terms" className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white h-12 text-base font-semibold shadow-lg shadow-purple-500/30 transition-all"
              >
                Create Account
              </Button>
            </form>

            <div className="mt-6 flex flex-col gap-3">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-purple-500/20" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-slate-900 px-3 text-purple-300">Already have an account?</span>
                </div>
              </div>
              <Link href="/signin" className="w-full">
                <Button
                  variant="outline"
                  className="w-full bg-white/5 border-purple-500/30 text-white hover:bg-white/10 hover:border-purple-400 h-12 text-base font-semibold transition-all"
                >
                  Sign In Instead
                </Button>
              </Link>
            </div>

            {/* Back to Home */}
            <Link
              href="/"
              className="mt-6 flex items-center justify-center gap-2 text-sm text-purple-300 hover:text-purple-200 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
