import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
})

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
})

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Arin Nigam — AI Backend & Real-Time Systems Engineer",
  description:
    "Backend engineer building production AI systems: multi-agent platforms, AI support infrastructure, and real-time concurrency layers. 36K chats/week, 80% AI deflection. Open to remote roles.",
  keywords: [
    "AI engineer",
    "backend engineer",
    "real-time systems",
    "multi-agent systems",
    "Go",
    "Python",
    "LLM",
    "remote",
  ],
  openGraph: {
    title: "Arin Nigam — AI Backend & Real-Time Systems Engineer",
    description:
      "I build AI systems that survive production. Multi-agent platforms, AI support backends, real-time infrastructure.",
    url: "https://arinnigam.vercel.app",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${display.variable} ${sans.variable} ${mono.variable} font-sans`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
