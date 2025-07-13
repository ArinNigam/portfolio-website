"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, MapPin, Calendar, Code, Coffee, Lightbulb, Award, Users, Target } from "lucide-react"
import { useEffect, useState } from "react"

export function About() {
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

    const element = document.getElementById("about")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          {mounted && (
            <>
              <h2
                className={`text-3xl sm:text-4xl font-bold text-center mb-16 transition-all duration-1000 ${
                  isVisible ? "animate-in fade-in slide-in-from-bottom-4" : "opacity-0 translate-y-8"
                }`}
              >
                <span className="inline-block">About</span>{" "}
                <span className="inline-block text-primary animate-in">Me</span>
              </h2>

              <div className="grid lg:grid-cols-3 gap-16">
                {/* Column 1: Profile & Introduction */}
                <div
                  className={`space-y-6 transition-all duration-1000 delay-300 ${
                    isVisible ? "animate-in fade-in slide-in-from-left-4" : "opacity-0 -translate-x-8"
                  }`}
                >
                  <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-0">
                      <img
                        src="/images/profile_pic.png"
                        alt="Arin Nigam"
                        className="w-full h-auto rounded-lg group-hover:scale-105 transition-transform duration-300"
                      />
                    </CardContent>
                  </Card>

                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-primary">Arin Nigam</h3>
                    <p className="text-muted-foreground">Software Development Engineer</p>
                    <div className="flex justify-center gap-2">
                      <Badge variant="secondary" className="animate-in bg-green-500/10 text-green-500">
                        Available for Hire
                      </Badge>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-1 gap-3">
                    <div className="text-center p-4 bg-background rounded-lg border hover:shadow-md transition-all duration-300 group">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <Code className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                        <span className="font-semibold text-sm">Experience</span>
                      </div>
                      <p className="text-xl font-bold text-primary">2+ Years</p>
                    </div>
                    <div className="text-center p-4 bg-background rounded-lg border hover:shadow-md transition-all duration-300 group">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <Lightbulb className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                        <span className="font-semibold text-sm">Projects</span>
                      </div>
                      <p className="text-xl font-bold text-primary">15+</p>
                    </div>
                    
                  </div>
                </div>

                {/* Column 2: About Description & Skills */}
                <div
                  className={`space-y-6 transition-all duration-1000 delay-500 ${
                    isVisible ? "animate-in fade-in slide-in-from-bottom-4" : "opacity-0 translate-y-8"
                  }`}
                >
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                        Who I Am
                      </span>
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      I'm a passionate Software Development Engineer pursuing B.E. in Electrical & Electronics from{" "}
                      <span className="text-blue-400 font-semibold">BITS Pilani, Goa</span>. With experience at{" "}
                      <span className="text-primary font-semibold">Walmart Global Tech</span> and contributions to
                      open-source projects, I specialize in full-stack development, mobile applications and emerging
                      technologies like <span className="text-green-400 font-semibold">AI/ML and blockchain</span>.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                        What I Do
                      </span>
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-background rounded-lg border hover:shadow-sm transition-all">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-in"></div>
                        <span className="text-sm text-muted-foreground">
                          Growing with the latest technologies and frameworks
                        </span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-background rounded-lg border hover:shadow-sm transition-all">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-in"></div>
                        <span className="text-sm text-muted-foreground">
                          Building scalable AI products and applications
                        </span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-background rounded-lg border hover:shadow-sm transition-all">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-in"></div>
                        <span className="text-sm text-muted-foreground">
                          Contribute to open-source projects and communities
                        </span>
                      </div>
                      
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                        Core Values
                      </span>
                    </h3>
                    <div className="space-y-4">
                      {/* ARIN Acronym */}
                      <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 p-4 rounded-lg border">
                        <div className="grid grid-cols-1 gap-2">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl font-bold text-primary">A</span>
                            <span className="text-sm font-medium">Ambitious</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-2xl font-bold text-primary">R</span>
                            <span className="text-sm font-medium">Resilient</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-2xl font-bold text-primary px-1">I</span>
                            <span className="text-sm font-medium">Innovative</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-2xl font-bold text-primary">N</span>
                            <span className="text-sm font-medium">Never-give-up</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column 3: Education & Achievements */}
                <div
                  className={`space-y-6 transition-all duration-1000 delay-700 ${
                    isVisible ? "animate-in fade-in slide-in-from-right-4" : "opacity-0 translate-x-8"
                  }`}
                >
                  {/* Education Card */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary animate-fade" />
                      <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                        Education
                      </span>
                    </h3>
                    <Card className="p-6 hover:shadow-md transition-all duration-300">
                      <div className="space-y-4">
                        {/* Logo Space */}
                        <div className="flex items-center justify-center mb-4">
                          <div className="w-16 h-16 rounded-full flex items-center justify-center">
                            <img
                              src="/images/bits_pilani.png"
                              alt="BITS Pilani Logo"
                            />
                          </div>
                        </div>

                        <div className="text-center space-y-2">
                          <h4 className="font-bold text-lg">BITS Pilani</h4>
                          <p className="text-muted-foreground font-medium">Birla Institute of Technology And Science</p>
                          <p className="text-sm text-muted-foreground">B.E. Electrical & Electronics</p>
                        </div>

                        <div className="flex items-center justify-center gap-4">
                          <Badge variant="secondary">CGPA: 8.08/10.0</Badge>
                        </div>

                        <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            Zuarinagar, Goa
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            Expected July 2025
                          </span>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Current Focus */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-center">
                      <span className="bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent">
                        Currently Working On
                      </span>
                    </h3>
                    <div className="space-y-3">
                      <Card className="p-4 hover:shadow-sm transition-all duration-300 border-l-4 border-l-red-500">
                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm">Backend Engineer @ Cityflo</h4>
                          <p className="text-xs text-muted-foreground">Building scalable APIs and automation systems</p>
                          <Badge variant="outline">
                            Current
                          </Badge>
                        </div>
                      </Card>
                      <Card className="p-4 hover:shadow-sm transition-all duration-300 border-l-4 border-l-blue-500">
                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm">Health Copilot</h4>
                          <p className="text-xs text-muted-foreground">Building AI health agent</p>
                          <Badge variant="outline">
                            Ongoing
                          </Badge>
                        </div>
                      </Card>
                      <Card className="p-4 hover:shadow-sm transition-all duration-300 border-l-4 border-l-green-500">
                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm">MySummary Pro</h4>
                          <p className="text-xs text-muted-foreground">AI-powered SaaS platform development</p>
                          <Badge variant="outline">
                            Live
                          </Badge>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
