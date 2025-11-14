"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { User, Mail, Lock, Eye, EyeOff, ArrowLeft } from "lucide-react"

const backgrounds = [
    { url: "/new-york-city-manhattan-skyline-aerial-view.jpg", name: "New York City" },
    { url: "/london-westminster-palace-and-big-ben.jpg", name: "London" },
    { url: "/maldives-overwater-bungalows-crystal-clear-water.jpg", name: "Tropical Paradise" },
]

export default function SignUpPage() {
    const [currentBg, setCurrentBg] = useState(0)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [formData, setFormData] = useState({ name: "", email: "", password: "", confirmPassword: "" })
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => setCurrentBg(prev => (prev + 1) % backgrounds.length), 5000)
        return () => clearInterval(interval)
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match")
            return
        }

        setLoading(true)
        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                }),
            })

            if (!res.ok) {
                const errorData = await res.json().catch(() => ({ message: "Signup failed" }))
                alert(errorData.message)
                return
            }

            const data = await res.json()
            alert(data.message || "Account created! You can now log in.")
            // Optionally redirect to login page
            // window.location.href = "/signin"
        } catch (err) {
            console.error(err)
            alert("Something went wrong. Check the console.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Background Slideshow */}
            {backgrounds.map((bg, idx) => (
                <div
                    key={idx}
                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${idx === currentBg ? "opacity-100" : "opacity-0"}`}
                    style={{ backgroundImage: `url(${bg.url})` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-purple-900/70 to-slate-900/90" />
                </div>
            ))}

            {/* Form Container */}
            <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12">
                <div className="w-full max-w-md">
                    <div className="rounded-3xl bg-slate-900/90 backdrop-blur-xl border border-purple-500/30 p-8 shadow-2xl shadow-purple-500/20">
                        <div className="mb-8 text-center">
                            <div className="mb-4 flex justify-center">
                                <div className="rounded-2xl bg-purple-500/20 p-4 backdrop-blur-sm">
                                    <User className="h-10 w-10 text-purple-400" />
                                </div>
                            </div>
                            <h1 className="mb-2 text-3xl font-bold text-white">Create Account</h1>
                            <p className="text-sm text-purple-200">Start your adventure with Travelinn today</p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-white font-medium">Full Name</Label>
                                <Input id="name" type="text" placeholder="John Doe" value={formData.name} onChange={handleChange} className="h-12 bg-white/10 border-purple-500/30 text-white placeholder:text-slate-400 focus:border-purple-400 focus:ring-purple-400/20" required />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-white font-medium">Email Address</Label>
                                <Input id="email" type="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} className="h-12 bg-white/10 border-purple-500/30 text-white placeholder:text-slate-400 focus:border-purple-400 focus:ring-purple-400/20" required />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="password" className="text-white font-medium">Password</Label>
                                <div className="relative">
                                    <Input id="password" type={showPassword ? "text" : "password"} placeholder="••••••••" value={formData.password} onChange={handleChange} className="h-12 bg-white/10 border-purple-500/30 text-white placeholder:text-slate-400 focus:border-purple-400 focus:ring-purple-400/20" required />
                                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-400 hover:text-purple-300">
                                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="confirmPassword" className="text-white font-medium">Confirm Password</Label>
                                <div className="relative">
                                    <Input id="confirmPassword" type={showConfirmPassword ? "text" : "password"} placeholder="••••••••" value={formData.confirmPassword} onChange={handleChange} className="h-12 bg-white/10 border-purple-500/30 text-white placeholder:text-slate-400 focus:border-purple-400 focus:ring-purple-400/20" required />
                                    <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-400 hover:text-purple-300">
                                        {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center space-x-2">
                                <Checkbox id="terms" required className="border-purple-500/30 data-[state=checked]:bg-purple-500" />
                                <label htmlFor="terms" className="text-sm text-purple-200 cursor-pointer">
                                    I agree to the <Link href="/terms" className="text-purple-400 hover:text-purple-300">Terms of Service</Link> and <Link href="/privacy" className="text-purple-400 hover:text-purple-300">Privacy Policy</Link>
                                </label>
                            </div>

                            <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white h-12 font-semibold shadow-lg shadow-purple-500/30 transition-all" disabled={loading}>
                                {loading ? "Creating Account..." : "Create Account"}
                            </Button>
                        </form>

                        <div className="mt-6 text-center">
                            <span className="text-xs text-purple-300">Already have an account?</span>
                            <Link href="/signin">
                                <Button variant="outline" className="ml-2 text-white border-purple-500/30 hover:bg-white/10">Sign In Instead</Button>
                            </Link>
                        </div>

                        <Link href="/" className="mt-6 flex items-center justify-center gap-2 text-sm text-purple-300 hover:text-purple-200 transition-colors">
                            <ArrowLeft className="h-4 w-4" /> Back to home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
