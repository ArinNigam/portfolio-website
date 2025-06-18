"use client"

import { Button } from "@/components/ui/button"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Star, Calendar, Medal, Target, BookOpen } from "lucide-react"
import { useEffect, useState } from "react"

export function Achievements() {
  const [mounted, setMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setMounted(true)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("achievements")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  // Achievements sorted by date (most recent first)
  const achievements = [
    {
      title: "1000+ Coding Questions Solved",
      date: "ongoing",
      type: "Milestone",
      description: "Ranked under 30k on LeetCode",
      icon: Target,
      color: "text-pink-500",
      category: "Coding",
    },
    {
      title: "AutomateX Hackathon Winner",
      date: "Nov 2024",
      type: "Winner",
      description: "First place in automation-focused hackathon with innovative solution",
      icon: Trophy,
      color: "text-yellow-500",
      category: "Hackathon",
    },
    {
      title: "HacktoberFest 2024",
      date: "Oct 2024",
      type: "Contributor",
      description: "Successfully completed open source contribution challenge",
      icon: Star,
      color: "text-green-500",
      category: "Open Source",
    },
    {
      title: "Meesho Dice Challenge",
      date: "Sept 2024",
      type: "Top 50",
      description: "Ranked in top 50 participants in competitive coding challenge",
      icon: Award,
      color: "text-blue-500",
      category: "Coding",
    },
    {
      title: "Quark Hackathon Runner-up",
      date: "Feb 2024",
      type: "Runner-up",
      description: "Second place at BITS Goa's Annual Tech-Fest hackathon",
      icon: Trophy,
      color: "text-orange-500",
      category: "Hackathon",
    },
    {
      title: "FOSS Overflow",
      date: "Jan 2024",
      type: "Participant",
      description: "Winter of Code Programme - Open source contribution",
      icon: Star,
      color: "text-purple-500",
      category: "Open Source",
    },
    {
      title: "JEE Mains - JEE Advanced",
      date: "Oct 2021",
      type: "Top 1%",
      description: "Achieved top 1% rank in India's most competitive engineering entrance exam",
      icon: Medal,
      color: "text-red-500",
      category: "Academic",
    },
    {
      title: "SOF National Science Olympiad",
      date: "Nov 2019",
      type: "Rank 65",
      description: "65th National Rank in Science Olympiad Foundation competition",
      icon: Target,
      color: "text-indigo-500",
      category: "Academic",
    },
    {
      title: "CBSE School Topper",
      date: "May 2019",
      type: "Top 5",
      description: "Ranked in top 5 students in CBSE board examinations",
      icon: BookOpen,
      color: "text-cyan-500",
      category: "Academic",
    }
  ]

  const categories = ["All", "Hackathon", "Academic", "Open Source", "Coding"]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredAchievements = achievements.filter(
    (achievement) => selectedCategory === "All" || achievement.category === selectedCategory,
  )

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {mounted && (
            <>
              <div
                className={`text-center mb-12 transition-all duration-1000 ${
                  isVisible ? "animate-in fade-in slide-in-from-bottom-4" : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  <span className="inline-block">Achievements &</span>{" "}
                  <span className="inline-block bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
                    Recognition
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  <span className="inline-block animate-in fade-in delay-300">A collection of</span>{" "}
                  <span className="inline-block text-primary font-semibold animate-in fade-in delay-500">
                    awards and recognitions
                  </span>{" "}
                  <span className="inline-block animate-in fade-in delay-700">earned through</span>{" "}
                  <span className="inline-block text-blue-400 font-semibold animate-in fade-in delay-900">
                    dedication and excellence
                  </span>
                </p>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {categories.map((category, index) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className={`transition-all duration-300 hover:scale-105 animate-in fade-in ${
                        selectedCategory === category ? "shadow-lg" : ""
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAchievements.map((achievement, index) => {
                  const IconComponent = achievement.icon
                  return (
                    <Card
                      key={`${achievement.title}-${selectedCategory}`}
                      className={`hover:shadow-xl transition-all duration-500 group border-2 hover:border-primary/20 ${
                        isVisible ? "animate-in fade-in slide-in-from-bottom-4" : "opacity-0 translate-y-8"
                      }`}
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div
                              className={`p-3 rounded-lg bg-muted group-hover:scale-110 transition-all duration-300 ${achievement.color.replace("text-", "bg-").replace("-500", "-500/10")}`}
                            >
                              <IconComponent
                                className={`h-6 w-6 ${achievement.color} group-hover:rotate-12 transition-transform duration-300`}
                              />
                            </div>
                            <div>
                              <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                                {achievement.title}
                              </CardTitle>
                              <CardDescription className="flex items-center gap-1 mt-1">
                                <Calendar className="h-3 w-3" />
                                {achievement.date}
                              </CardDescription>
                            </div>
                          </div>
                          <div className="flex flex-col gap-1">
                            <Badge variant="outline" className="text-xs">
                              {achievement.type}
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              {achievement.category}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm leading-relaxed">{achievement.description}</p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {filteredAchievements.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No achievements found for the selected category.</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  )
}
