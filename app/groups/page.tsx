"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Coffee, Dumbbell, Music, BookOpen, Gamepad2, UsersRound, X, Send, User } from "lucide-react"
import { LottieChatbot } from "@/components/lottie-chatbot"

const backgrounds = [
  { url: "/new-york-city-skyline-at-sunset-with-skyscrapers.jpg", name: "New York City" },
  { url: "/london-big-ben-and-thames-river-at-dusk.jpg", name: "London" },
  { url: "/maldives-overwater-bungalows-crystal-clear-water.jpg", name: "Paradise Beach" },
  { url: "/paris-eiffel-tower-illuminated-at-night.jpg", name: "Paris" },
  { url: "/tokyo-city-lights-and-neon-signs-at-night.jpg", name: "Tokyo" },
]

const aiTravelers = [
  {
    name: "Sarah",
    avatar: "/woman-blonde-beach.jpg",
    country: "🇺🇸",
    location: "Miami, USA",
    tags: ["Beaches", "Food", "Yoga"],
  },
  {
    name: "Luca",
    avatar: "/man-italian-surfer.jpg",
    country: "🇮🇹",
    location: "Rome, Italy",
    tags: ["Surfing", "Culture", "Coffee"],
  },
  {
    name: "Amira",
    avatar: "/woman-middle-eastern-elegant.jpg",
    country: "🇦🇪",
    location: "Dubai, UAE",
    tags: ["Luxury", "Shopping", "Adventure"],
  },
  {
    name: "Leo",
    avatar: "/man-brazilian-musician.jpg",
    country: "🇧🇷",
    location: "Rio, Brazil",
    tags: ["Music", "Nightlife", "Dance"],
  },
  {
    name: "Maya",
    avatar: "/woman-asian-photographer.jpg",
    country: "🇯🇵",
    location: "Tokyo, Japan",
    tags: ["Photography", "Art", "Tech"],
  },
  {
    name: "Kai",
    avatar: "/man-thai-chef.jpg",
    country: "🇹🇭",
    location: "Bangkok, Thailand",
    tags: ["Street Food", "Markets", "Culture"],
  },
  {
    name: "Emma",
    avatar: "/woman-british-hiker.jpg",
    country: "🇬🇧",
    location: "London, UK",
    tags: ["Hiking", "History", "Tea"],
  },
  {
    name: "Carlos",
    avatar: "/man-spanish-dancer.jpg",
    country: "🇪🇸",
    location: "Barcelona, Spain",
    tags: ["Dancing", "Wine", "Architecture"],
  },
  {
    name: "Yuki",
    avatar: "/woman-japanese-anime.jpg",
    country: "🇯🇵",
    location: "Osaka, Japan",
    tags: ["Anime", "Gaming", "Ramen"],
  },
  {
    name: "Sophie",
    avatar: "/woman-french-artist.jpg",
    country: "🇫🇷",
    location: "Paris, France",
    tags: ["Art", "Fashion", "Wine"],
  },
]

const communities = [
  {
    icon: Coffee,
    title: "Food & Dining",
    travelers: "2,341 travelers",
    bgColor: "bg-orange-500/20",
    iconColor: "text-orange-400",
    description: "Swap restaurant tips, share recipes, and discover the best street food spots around the globe.",
  },
  {
    icon: Dumbbell,
    title: "Fitness & Sports",
    travelers: "1,892 travelers",
    bgColor: "bg-red-500/20",
    iconColor: "text-red-400",
    description: "Find gym partners abroad, join running groups, or share wellness routines.",
  },
  {
    icon: Music,
    title: "Music & Nightlife",
    travelers: "3,156 travelers",
    bgColor: "bg-purple-500/20",
    iconColor: "text-purple-400",
    description: "Talk about local events, concerts, and hidden bars with fellow night owls.",
  },
  {
    icon: BookOpen,
    title: "Culture & Arts",
    travelers: "1,567 travelers",
    bgColor: "bg-blue-500/20",
    iconColor: "text-blue-400",
    description: "Discover museums, street art, and heritage tours together.",
  },
  {
    icon: Gamepad2,
    title: "Gaming & Entertainment",
    travelers: "2,089 travelers",
    bgColor: "bg-green-500/20",
    iconColor: "text-green-400",
    description: "Connect with gamers and entertainment lovers on the go.",
  },
  {
    icon: UsersRound,
    title: "Social Meetups",
    travelers: "4,234 travelers",
    bgColor: "bg-pink-500/20",
    iconColor: "text-pink-400",
    description: "Plan group adventures, coffee hangouts, or weekend city explorations.",
  },
]

const initialMessages: Record<
  string,
  Array<{ sender: string; message: string; avatar: string; country: string; image?: string }>
> = {
  "Food & Dining": [
    {
      sender: "Kai",
      message: "Hey everyone! Just tried the best Pad Thai in Bangkok 🍜✨",
      avatar: "/man-thai-chef.jpg",
      country: "🇹🇭",
      image: "/pad-thai-thai-food.jpg",
    },
    {
      sender: "Sarah",
      message: "That sounds amazing! I'm looking for good street food spots in Asia 😍🌏",
      avatar: "/woman-blonde-beach.jpg",
      country: "🇺🇸",
    },
    {
      sender: "Sophie",
      message: "You should visit the night markets in Chiang Mai - incredible food! 🌙🍲",
      avatar: "/woman-french-artist.jpg",
      country: "🇫🇷",
    },
    {
      sender: "Carlos",
      message: "Barcelona's La Boqueria market is a must! Fresh seafood every day 🦐🐟",
      avatar: "/man-spanish-dancer.jpg",
      country: "🇪🇸",
      image: "/la-boqueria-market-barcelona.png",
    },
  ],
  "Fitness & Sports": [
    {
      sender: "Leo",
      message: "Anyone up for a beach workout in Rio tomorrow? 🏃‍♂️💪",
      avatar: "/man-brazilian-musician.jpg",
      country: "🇧🇷",
    },
    {
      sender: "Amira",
      message: "I wish! Currently in Dubai doing sunrise yoga by the beach 🧘‍♀️🌅",
      avatar: "/woman-middle-eastern-elegant.jpg",
      country: "🇦🇪",
      image: "/sunrise-yoga-beach-dubai.jpg",
    },
    {
      sender: "Emma",
      message: "That sounds perfect! I need to find a yoga studio here in London 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      avatar: "/woman-british-hiker.jpg",
      country: "🇬🇧",
    },
    {
      sender: "Sarah",
      message: "Join our Miami fitness group! We do beach runs every morning 🌊🏃‍♀️",
      avatar: "/woman-blonde-beach.jpg",
      country: "🇺🇸",
    },
  ],
  "Music & Nightlife": [
    {
      sender: "Leo",
      message: "Check out this samba club I found - the energy is incredible! 🎵💃",
      avatar: "/man-brazilian-musician.jpg",
      country: "🇧🇷",
    },
    {
      sender: "Maya",
      message: "Tokyo nightlife is amazing too! Karaoke bars everywhere 🎤🎶",
      avatar: "/woman-asian-photographer.jpg",
      country: "🇯🇵",
    },
    {
      sender: "Luca",
      message: "Rome has the best jazz clubs near Trastevere 🎺🎷",
      avatar: "/man-italian-surfer.jpg",
      country: "🇮🇹",
      image: "/jazz-club-rome-italy.jpg",
    },
    {
      sender: "Carlos",
      message: "Barcelona's flamenco shows are unforgettable! 💃🔥",
      avatar: "/man-spanish-dancer.jpg",
      country: "🇪🇸",
    },
  ],
  "Culture & Arts": [
    {
      sender: "Maya",
      message: "Just visited teamLab Borderless in Tokyo - mind blown! 🎨✨",
      avatar: "/woman-asian-photographer.jpg",
      country: "🇯🇵",
      image: "/teamlab-borderless-tokyo-art.jpg",
    },
    {
      sender: "Luca",
      message: "The Vatican Museums are a must-see if you're in Rome 🏛️🖼️",
      avatar: "/man-italian-surfer.jpg",
      country: "🇮🇹",
    },
    {
      sender: "Sophie",
      message: "The Louvre never gets old. Visited for the 10th time today! 🎨🇫🇷",
      avatar: "/woman-french-artist.jpg",
      country: "🇫🇷",
    },
    {
      sender: "Amira",
      message: "Dubai has incredible contemporary art galleries. Check out Alserkal Avenue 🖼️✨",
      avatar: "/woman-middle-eastern-elegant.jpg",
      country: "🇦🇪",
    },
  ],
  "Gaming & Entertainment": [
    {
      sender: "Yuki",
      message: "Who's into retro arcade gaming? Osaka has the best spots! 🎮👾",
      avatar: "/woman-japanese-anime.jpg",
      country: "🇯🇵",
    },
    {
      sender: "Kai",
      message: "Bangkok has amazing gaming cafes with VR setups 🥽🎮",
      avatar: "/man-thai-chef.jpg",
      country: "🇹🇭",
      image: "/gaming-cafe-vr-bangkok.jpg",
    },
    {
      sender: "Leo",
      message: "Looking for gaming buddies to explore new RPGs together 🎲⚔️",
      avatar: "/man-brazilian-musician.jpg",
      country: "🇧🇷",
    },
    {
      sender: "Maya",
      message: "Anyone playing the new Final Fantasy? Let's team up! 🎮✨",
      avatar: "/woman-asian-photographer.jpg",
      country: "🇯🇵",
    },
  ],
  "Social Meetups": [
    {
      sender: "Sarah",
      message: "Planning a beach cleanup meetup in Miami this weekend! Who's in? 🌊♻️",
      avatar: "/woman-blonde-beach.jpg",
      country: "🇺🇸",
    },
    {
      sender: "Amira",
      message: "That's awesome! We did a desert hike meetup here in Dubai last week 🏜️🥾",
      avatar: "/woman-middle-eastern-elegant.jpg",
      country: "🇦🇪",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      sender: "Kai",
      message: "I organize weekly coffee meetups for travelers in Bangkok. DM me! ☕️👋",
      avatar: "/man-thai-chef.jpg",
      country: "🇹🇭",
    },
    {
      sender: "Emma",
      message: "London pub crawl this Friday! All travelers welcome 🍺🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      avatar: "/woman-british-hiker.jpg",
      country: "🇬🇧",
    },
  ],
}

export default function GroupsPage() {
  const [currentBg, setCurrentBg] = useState(0)
  const [selectedCommunity, setSelectedCommunity] = useState<string | null>(null)
  const [chatMessages, setChatMessages] = useState<
    Array<{
      sender: string
      message: string
      avatar: string
      country: string
      isUser?: boolean
      image?: string
      isWelcome?: boolean
    }>
  >([])
  const [newMessage, setNewMessage] = useState("")
  const [showMembers, setShowMembers] = useState(false)
  const chatEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [chatMessages])

  const handleJoinCommunity = (communityTitle: string) => {
    setSelectedCommunity(communityTitle)
    const welcomeMessage = {
      sender: "Travelinn Bot",
      message: `Welcome to the ${communityTitle} community! 🎉 Feel free to introduce yourself and connect with fellow travelers! ✈️`,
      avatar: "/placeholder.svg?height=40&width=40",
      country: "🤖",
      isWelcome: true,
    }
    setChatMessages([welcomeMessage, ...(initialMessages[communityTitle] || [])])
    setShowMembers(false)
  }

  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    const userMessage = {
      sender: "You",
      message: newMessage,
      avatar: "/placeholder.svg?key=you",
      country: "🌍",
      isUser: true,
    }

    setChatMessages([...chatMessages, userMessage])
    setNewMessage("")

    setTimeout(() => {
      const randomTraveler = aiTravelers[Math.floor(Math.random() * aiTravelers.length)]
      const aiResponse = generateAIResponse(newMessage, randomTraveler, selectedCommunity || "")
      setChatMessages((prev) => [...prev, aiResponse])
    }, 1500)
  }

  const generateAIResponse = (userMsg: string, traveler: (typeof aiTravelers)[0], community: string) => {
    const lowerMsg = userMsg.toLowerCase()

    let response = ""
    let image: string | undefined

    if (lowerMsg.includes("hotel") || lowerMsg.includes("where to stay")) {
      response = `I stayed at the Coastal Dream Resort last month - absolutely loved it! 🏨✨ The staff was amazing and the location was perfect. Highly recommend! 😊`
      image = "/placeholder.svg?height=200&width=300"
    } else if (lowerMsg.includes("food") || lowerMsg.includes("restaurant") || lowerMsg.includes("eat")) {
      response = `For food, you have to try the local street markets! 🍜🌮 I found the best hidden gems by just walking around. Want some specific recommendations? 😋`
    } else if (lowerMsg.includes("beach") || lowerMsg.includes("ocean")) {
      response = `The beaches there are stunning! 🏖️ Don't miss the sunset yoga sessions by the cliffs - it's an amazing experience 🌅🧘‍♀️`
      image = "/placeholder.svg?height=200&width=300"
    } else if (lowerMsg.includes("thanks") || lowerMsg.includes("thank")) {
      response = `You're welcome! 😊 Feel free to ask me anything else about traveling. Happy to help! ✈️💜`
    } else if (lowerMsg.includes("music") || lowerMsg.includes("nightlife") || lowerMsg.includes("party")) {
      response = `The nightlife scene is incredible! 🎵🎉 There are some amazing live music venues. I can share my favorite spots if you'd like 🎶`
    } else if (lowerMsg.includes("culture") || lowerMsg.includes("museum") || lowerMsg.includes("art")) {
      response = `The local museums are fantastic! 🎨🏛️ Make sure to book tickets in advance though - they get pretty busy 🖼️`
    } else if (lowerMsg.includes("hi") || lowerMsg.includes("hello") || lowerMsg.includes("hey")) {
      response = `Hey there! 👋 Welcome to our community! What brings you here today? 😊`
    } else {
      response = `That's interesting! 🤔 I love connecting with fellow travelers. Have you explored the local area much yet? 🗺️✨`
    }

    return {
      sender: traveler.name,
      message: response,
      avatar: traveler.avatar,
      country: traveler.country,
      image,
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentBg ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${bg.url})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-800/60 to-slate-900/80" />
        </div>
      ))}

      <div className="relative z-10">
        <nav className="border-b border-white/10 bg-slate-900/40 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <Link href="/" className="flex items-center">
                <span className="text-xl font-semibold text-white">Travelinn</span>
              </Link>

              <div className="hidden md:flex items-center gap-8">
                <Link href="/" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
                <Link href="/hotels" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                  Hotels
                </Link>
                <Link href="/groups" className="text-sm font-medium text-white hover:text-white transition-colors">
                  Groups
                </Link>
                <Link
                  href="/wellbeing"
                  className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  Wellbeing
                </Link>
                <Link
                  href="/concierge"
                  className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  Concierge
                </Link>
                <Link href="/chatbot" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                  AI Assistant
                </Link>
                <Link href="/about" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </div>

              <Link href="/signin">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full px-6">
                  SIGN IN
                </Button>
              </Link>
            </div>
          </div>
        </nav>

        <section className="py-16">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Connect with Like-Minded Travelers</h1>
            <p className="text-lg text-purple-200/90">
              Find and connect with other travelers who share your interests. Make new friends and explore together.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {communities.map((community, index) => (
                <div
                  key={index}
                  className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-slate-800/60 transition-all"
                >
                  <div className={`${community.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                    <community.icon className={`w-8 h-8 ${community.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{community.title}</h3>
                  <p className="text-purple-200/70 mb-2">{community.travelers}</p>
                  <p className="text-purple-200/60 text-sm mb-6">{community.description}</p>
                  <Button
                    onClick={() => handleJoinCommunity(community.title)}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg"
                  >
                    Join Community
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <LottieChatbot />
      </div>

      {selectedCommunity && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-2xl shadow-2xl w-full max-w-6xl h-[80vh] flex overflow-hidden border border-purple-500/20">
            <div className="flex-1 flex flex-col">
              <div className="bg-slate-800/80 backdrop-blur-sm px-6 py-4 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                    {communities.find((c) => c.title === selectedCommunity)?.icon && (
                      <div className="text-white">
                        {(() => {
                          const Icon = communities.find((c) => c.title === selectedCommunity)?.icon
                          return Icon ? <Icon className="w-5 h-5" /> : null
                        })()}
                      </div>
                    )}
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-white">{selectedCommunity}</h2>
                    <p className="text-sm text-purple-200/60">
                      {communities.find((c) => c.title === selectedCommunity)?.travelers}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    onClick={() => setShowMembers(!showMembers)}
                    variant="ghost"
                    className="text-purple-200 hover:text-white hover:bg-slate-700"
                  >
                    <User className="w-5 h-5 mr-2" />
                    Members
                  </Button>
                  <button
                    onClick={() => setSelectedCommunity(null)}
                    className="text-purple-200 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {chatMessages.map((msg, idx) => (
                  <div key={idx} className={`flex items-start gap-3 ${msg.isUser ? "flex-row-reverse" : ""}`}>
                    <img
                      src={msg.avatar || "/placeholder.svg"}
                      alt={msg.sender}
                      className="w-10 h-10 rounded-full object-cover flex-shrink-0 border-2 border-purple-500/30"
                    />
                    <div className={`flex flex-col ${msg.isUser ? "items-end" : ""}`}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-semibold text-white">{msg.sender}</span>
                        <span className="text-xs">{msg.country}</span>
                      </div>
                      <div
                        className={`rounded-2xl px-4 py-2 max-w-md ${
                          msg.isUser
                            ? "bg-purple-600 text-white"
                            : msg.isWelcome
                              ? "bg-gradient-to-r from-purple-600/80 to-pink-600/80 text-white border border-purple-400/30"
                              : "bg-slate-800/60 text-purple-100 border border-white/10"
                        }`}
                      >
                        {msg.message}
                      </div>
                      {msg.image && (
                        <img
                          src={msg.image || "/placeholder.svg"}
                          alt="Shared image"
                          className="mt-2 rounded-xl max-w-sm border border-white/10"
                        />
                      )}
                    </div>
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>

              <div className="bg-slate-800/80 backdrop-blur-sm px-6 py-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Type your message..."
                    className="flex-1 bg-slate-900/60 text-white placeholder-purple-200/40 rounded-full px-6 py-3 border border-white/10 focus:outline-none focus:border-purple-500/50"
                  />
                  <Button
                    onClick={handleSendMessage}
                    className="bg-purple-600 hover:bg-purple-700 text-white rounded-full w-12 h-12 flex items-center justify-center"
                  >
                    <Send className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>

            {showMembers && (
              <div className="w-80 bg-slate-800/60 backdrop-blur-sm border-l border-white/10 p-6 overflow-y-auto">
                <h3 className="text-lg font-semibold text-white mb-4">Community Members</h3>
                <div className="space-y-3">
                  {aiTravelers.map((traveler, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-900/40 rounded-xl p-4 border border-white/10 hover:bg-slate-900/60 transition-all"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <img
                          src={traveler.avatar || "/placeholder.svg"}
                          alt={traveler.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-purple-500/30"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-white font-semibold">{traveler.name}</span>
                            <span className="text-sm">{traveler.country}</span>
                          </div>
                          <p className="text-xs text-purple-200/60">{traveler.location}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {traveler.tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="text-xs px-2 py-1 bg-purple-600/20 text-purple-200 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
