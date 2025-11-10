import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Coffee, Dumbbell, Music, BookOpen, Gamepad2, UsersRound } from "lucide-react"

const communities = [
  {
    icon: Coffee,
    title: "Food & Dining",
    travelers: "2,341 travelers",
    bgColor: "bg-orange-500/10",
    iconColor: "text-orange-500",
  },
  {
    icon: Dumbbell,
    title: "Fitness & Sports",
    travelers: "1,892 travelers",
    bgColor: "bg-red-500/10",
    iconColor: "text-red-500",
  },
  {
    icon: Music,
    title: "Music & Nightlife",
    travelers: "3,156 travelers",
    bgColor: "bg-purple-500/10",
    iconColor: "text-purple-500",
  },
  {
    icon: BookOpen,
    title: "Culture & Arts",
    travelers: "1,567 travelers",
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-500",
  },
  {
    icon: Gamepad2,
    title: "Gaming & Entertainment",
    travelers: "2,089 travelers",
    bgColor: "bg-green-500/10",
    iconColor: "text-green-500",
  },
  {
    icon: UsersRound,
    title: "Social Meetups",
    travelers: "4,234 travelers",
    bgColor: "bg-pink-500/10",
    iconColor: "text-pink-500",
  },
]

export default function GroupsPage() {
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
              <Link href="/groups" className="text-blue-600 hover:text-blue-700 transition-colors">
                Groups
              </Link>
              <Link href="/wellbeing" className="text-gray-600 hover:text-gray-900 transition-colors">
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Connect with Like-Minded Travelers</h1>
          <p className="text-lg text-gray-600">
            Find and connect with other travelers who share your interests. Make new friends and explore together.
          </p>
        </div>
      </section>

      {/* Communities Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communities.map((community, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className={`${community.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                  <community.icon className={`w-8 h-8 ${community.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{community.title}</h3>
                <p className="text-gray-500 mb-6">{community.travelers}</p>
                <Button variant="outline" className="w-full border-gray-300 hover:bg-gray-50 bg-transparent">
                  Join Community
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
