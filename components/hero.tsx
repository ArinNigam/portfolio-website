"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Code } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const [currentSkill, setCurrentSkill] = useState(0)

  const skills = [
    "Software Engineer",
    "Full-Stack Developer",
    "React.js Expert",
    "Node.js Developer",
    "Spring Boot Developer",
    "Flutter Developer",
  ]

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [skills.length])

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center">
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>

        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary/30 rounded-full animate-fade delay-300"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-blue-500/40 rounded-full animate-fade delay-700"></div>
        <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-purple-500/30 rounded-full animate-fade delay-1000"></div>
      </div>

      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          {mounted && (
            <div className="space-y-8">
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <Badge variant="outline" className="mb-6 animate-pulse border-primary/50 text-green-500">
                  Available for Full-Time Opportunities
                </Badge>

                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight space-x-4">
                    <span className="inline-block animate-in fade-in slide-in-from-left-8 duration-1000">Hi, I'm </span>
                    <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-purple-500 animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
                      Arin Nigam
                    </span>
                  </h1>

                  {/* Animated typing effect for skills */}
                  <div className="h-16 flex items-center justify-center">
                    <p className="text-2xl sm:text-3xl text-muted-foreground">
                      <span className="animate-in fade-in slide-in-from-bottom-4 delay-700">I'm a </span>
                        <span
                        key={currentSkill}
                        className="text-primary font-semibold animate-in fade-in slide-in-from-left-4 duration-1000 ease-linear transition-all delay-800"
                        >
                        {skills[currentSkill]}
                      </span>
                      <span className="animate-pulse fade-in text-primary">|</span>
                    </p>
                  </div>
                </div>

                <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 delay-1000 leading-relaxed">
                  <span className="inline-block animate-in fade-in delay-1200">
                    Software Development Engineer passionate about
                  </span>{" "}
                  <span className="inline-block animate-in fade-in delay-1400 text-primary font-medium">
                    building scalable web applications
                  </span>{" "}
                  <span className="inline-block animate-in fade-in delay-1600">and</span>{" "}
                  <span className="inline-block animate-in fade-in delay-1800 text-blue-400 font-medium">
                    innovative solutions
                  </span>
                </p>

                <div className="flex flex-wrap justify-center gap-2 mb-8 animate-in fade-in slide-in-from-bottom-4 delay-1000">
                  {["Springboot", "Node.js", "AWS", "GCP", "React.js", "Flutter", "LangChain"].map((skill, index) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="animate-in fade-in hover:scale-110 transition-all duration-300 cursor-default"
                      style={{ animationDelay: `${1200 + index * 100}ms` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-in fade-in slide-in-from-bottom-4 delay-1400">
                  <Button size="lg" asChild className="group hover:scale-105 transition-all duration-300">
                    <Link href="#projects">
                      <Code className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                      View My Work
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="group hover:scale-105 transition-all duration-300"
                  >
                    <Link href="#contact">
                      <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                      Get In Touch
                    </Link>
                  </Button>
                </div>

                <div className="flex justify-center space-x-6 animate-in fade-in slide-in-from-bottom-4 delay-1600">
                  {[
                    { href: "https://github.com/arinnigam", icon: Github, label: "GitHub" },
                    { href: "https://linkedin.com/in/arin-nigam", icon: Linkedin, label: "LinkedIn" },
                    { href: "https://arinnigam.vercel.app", icon: ExternalLink, label: "Website" },
                    { href: "mailto:arin.nigam@gmail.com", icon: Mail, label: "Email" },
                    { href: "https://leetcode.com/u/arin_nigam", icon: Code, label: "LeetCode" },
                  ].map((social, index) => {
                    const IconComponent = social.icon
                    return (
                      <Link
                        key={social.label}
                        href={social.href}
                        className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1 animate-in fade-in"
                        style={{ animationDelay: `${1800 + index * 100}ms` }}
                      >
                        <IconComponent className="h-6 w-6" />
                        <span className="sr-only">{social.label}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
