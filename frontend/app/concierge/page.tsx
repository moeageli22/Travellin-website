import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Hotel, Car, Utensils, Calendar, MapPin, Sparkles } from "lucide-react"

const services = [
  {
    icon: Hotel,
    title: "Accommodation Assistance",
    description: "Need help with check-in, room upgrades, or special requests?",
  },
  {
    icon: Car,
    title: "Transportation Services",
    description: "Book airport transfers, car rentals, or local transportation",
  },
  {
    icon: Utensils,
    title: "Restaurant Reservations",
    description: "Reserve tables at the best local restaurants and cafes",
  },
  {
    icon: Calendar,
    title: "Event Booking",
    description: "Get tickets to concerts, shows, and local events",
  },
  {
    icon: MapPin,
    title: "Local Recommendations",
    description: "Discover hidden gems and must-visit attractions",
  },
  {
    icon: Sparkles,
    title: "Special Occasions",
    description: "Plan celebrations, surprises, and memorable moments",
  },
]

export default function ConciergePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <span className="text-gray-900 text-xl font-semibold">Travelinn</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                Home
              </Link>
              <Link href="/hotels" className="text-gray-600 hover:text-gray-900 transition-colors">
                Hotels
              </Link>
              <Link href="/groups" className="text-gray-600 hover:text-gray-900 transition-colors">
                Groups
              </Link>
              <Link href="/wellbeing" className="text-gray-600 hover:text-gray-900 transition-colors">
                Wellbeing
              </Link>
              <Link href="/concierge" className="text-blue-600 hover:text-blue-700 transition-colors">
                Concierge
              </Link>
              <Link href="/chatbot" className="text-gray-600 hover:text-gray-900 transition-colors">
                AI Assistant
              </Link>
            </div>

            <Link href="/signin">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">Sign In</Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">24/7 Concierge Services</h1>
          <p className="text-lg text-blue-100">
            Your personal travel assistant ready to help with anything you need, anytime, anywhere.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How Can We Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="bg-blue-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Concierge</h2>
            <p className="text-gray-600">Send us a message and we'll get back to you within minutes.</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <Input placeholder="John Doe" className="bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <Input type="email" placeholder="john@example.com" className="bg-white" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <Input placeholder="How can we assist you?" className="bg-white" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <Textarea placeholder="Please describe your request in detail..." rows={6} className="bg-white" />
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 h-auto text-base">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="container mx-auto px-6 max-w-4xl text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h2>
          <p className="text-blue-100 mb-8">Our concierge team is available 24/7 via phone or chat</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 h-auto">
              Call Now: +1 (800) 123-4567
            </Button>
            <Link href="/chatbot">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-6 h-auto bg-transparent"
              >
                Chat with AI Assistant
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
