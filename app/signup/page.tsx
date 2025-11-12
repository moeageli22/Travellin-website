"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { User, Mail, Lock, Eye, EyeOff, ArrowLeft } from "lucide-react"
import { supabase } from "@/lib/supabaseClient"

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
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBg((prev) => (prev + 1) % backgrounds.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    // Supabase signup logic
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match")
            return
        }

        setLoading(true)

        // Insert into users table
        const { error } = await supabase.from("users").insert([
            {
                full_name: formData.name,
                email: formData.email,
                password: formData.password,
            },
        ])

        setLoading(false)

        if (error) {
            alert("Error signing up: " + error.message)
        } else {
            alert("Signup successful! 🎉")
            setFormData({ name: "", email: "", password: "", confirmPassword: "" })
        }
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

                        {/* Form */}
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
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white h-12 text-base font-semibold shadow-lg shadow-purple-500/30 transition-all"
                            >
                                {loading ? "Creating Account..." : "Create Account"}
                            </Button>
                        </form>

                        {/* Footer Links */}
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
