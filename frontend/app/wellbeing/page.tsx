import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Activity, Moon, Users, Shield, Phone } from "lucide-react"

const wellbeingFeatures = [
  {
    icon: Heart,
    title: "Health Monitoring",
    description: "Connect your health apps to track wellness during your trip",
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-500",
  },
  {
    icon: Activity,
    title: "Fitness Integration",
    description: "Find gyms, running routes, and wellness activities nearby",
    bgColor: "bg-red-500/10",
    iconColor: "text-red-500",
  },
  {
    icon: Moon,
    title: "Mental Wellbeing",
    description: "Access meditation, relaxation resources, and quiet spaces",
    bgColor: "bg-purple-500/10",
    iconColor: "text-purple-500",
  },
  {
    icon: Users,
    title: "Stay Connected",
    description: "Regular check-ins for solo travelers to maintain social connection",
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-500",
  },
  {
    icon: Shield,
    title: "Safety Tracking",
    description: "Share your location with trusted contacts for peace of mind",
    bgColor: "bg-teal-500/10",
    iconColor: "text-teal-500",
  },
  {
    icon: Phone,
    title: "Emergency Support",
    description: "24/7 access to emergency services and local healthcare information",
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-500",
  },
]

export default function WellbeingPage() {
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
              <Link href="/wellbeing" className="text-blue-600 hover:text-blue-700 transition-colors">
                Wellbeing
              </Link>
              <Link href="/concierge" className="text-gray-600 hover:text-gray-900 transition-colors">
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
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Health & Wellbeing Support</h1>
          <p className="text-lg text-gray-600">
            Your health and safety matter. Stay connected, supported, and secure throughout your journey.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wellbeingFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className={`${feature.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                  <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solo Traveler Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-white rounded-3xl p-12 text-center shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Traveling Alone?</h2>
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Our solo traveler support system helps you stay connected and safe. Set up check-in reminders, share your
              itinerary with loved ones, and access local support networks.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 h-auto text-base rounded-lg">
              Enable Solo Traveler Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
