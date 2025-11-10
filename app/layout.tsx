import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Travelinn",
  description:
    "Connect with fellow travelers, find perfect accommodations, and create unforgettable experiences around the world.",
  openGraph: {
    title: "Travelinn - Your AI Travel Companion",
    description:
      "Connect with fellow travelers, find perfect accommodations, and create unforgettable experiences around the world.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Travelinn AI Assistant",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Travelinn - Your AI Travel Companion",
    description:
      "Connect with fellow travelers, find perfect accommodations, and create unforgettable experiences around the world.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
