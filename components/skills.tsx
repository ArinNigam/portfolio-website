"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Smartphone, Cloud, Wrench, Brain } from "lucide-react"
import { useEffect, useState } from "react"

export function Skills() {
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

    const element = document.getElementById("skills")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: Code,
      skills: ["C++", "Java", "JavaScript", "TypeScript", "Python", "React.js", "Node.js", "Flutter", "Dart"],
      color: "text-blue-500",
      description: "Modern programming languages and frameworks",
    },
    {
      title: "Databases & Backend",
      icon: Database,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "GraphQL", "REST APIs", "Express.js"],
      color: "text-green-500",
      description: "Database management and backend technologies",
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: ["Flutter", "Java", "Firebase", "Android", "Cross-platform"],
      color: "text-purple-500",
      description: "Cross-platform mobile app development",
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["Google Cloud Platform", "Amazon Web Services", "Docker", "Kubernetes", "CI/CD", "Kafka", "Airflow"],
      color: "text-orange-500",
      description: "Cloud infrastructure and deployment",
    },
    {
      title: "Tools & Others",
      icon: Wrench,
      skills: ["Git", "Figma", "Postman", "Jira", "VS Code", "Copilot"],
      color: "text-red-500",
      description: "Development tools and utilities",
    },
    {
      title: "Emerging Tech",
      icon: Brain,
      skills: ["Blockchain", "Solana", "AI/ML", "Web3"],
      color: "text-indigo-500",
      description: "Interested in Emerging technologies",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {mounted && (
            <>
              <div
                className={`text-center mb-12 transition-all duration-1000 ${
                  isVisible ? "animate-fade slide-in-from-bottom-4" : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  <span className="inline-block">Skills &</span>{" "}
                  <span className="inline-block bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
                    Technologies
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  <span className="inline-block animate-fade delay-300">A comprehensive toolkit of</span>{" "}
                  <span className="inline-block text-primary font-semibold animate-fade delay-500">
                    modern technologies
                  </span>{" "}
                  <span className="inline-block animate-fade delay-700">and</span>{" "}
                  <span className="inline-block text-blue-400 font-semibold animate-fade delay-900">
                    development skills
                  </span>
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category, index) => {
                  const IconComponent = category.icon
                  return (
                    <Card
                      key={index}
                      className={`hover:shadow-xl transition-all duration-500 group border-2 hover:border-primary/20 ${
                        isVisible ? "animate-fade slide-in-from-bottom-4" : "opacity-0 translate-y-8"
                      }`}
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-3">
                          <div
                            className={`p-2 rounded-lg bg-muted group-hover:scale-110 transition-all duration-300 ${category.color.replace("text-", "bg-").replace("-500", "-500/10")}`}
                          >
                            <IconComponent
                              className={`h-5 w-5 ${category.color} group-hover:rotate-12 transition-transform duration-300`}
                            />
                          </div>
                          <div>
                            <div className="group-hover:text-primary transition-colors duration-300">
                              {category.title}
                            </div>
                            <p className="text-xs text-muted-foreground font-normal mt-1">{category.description}</p>
                          </div>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill, skillIndex) => (
                            <Badge
                              key={skillIndex}
                              variant="secondary"
                              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default hover:scale-110 animate-fade"
                              style={{ animationDelay: `${index * 150 + skillIndex * 50}ms` }}
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
