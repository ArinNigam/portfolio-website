"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Users, TrendingUp, Zap, Clock, Activity, Database } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export function Projects() {
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

    const element = document.getElementById("projects")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  // Projects sorted by date (most recent first)
  const projects = [
    {
      title: "MySummary Pro",
      description:
        "AI-powered Micro-SaaS platform with WhatsApp chatbot integration for summarizing websites and YouTube links with 90% efficiency. Handles 1000+ monthly API calls with integrated analytics.",
      image: "/images/my_summary.png",
      technologies: ["Node.js", "Next.js", "Docker", "AWS", "AI/ML"],
      liveUrl: "https://mysummary.pro",
      githubUrl: "https://www.linkedin.com/company/mysummary-pro/",
      status: "Live",
      date: "Dec 2024 - Present",
      metrics: [
        { icon: Users, label: "1000+ API calls/month" },
        { icon: TrendingUp, label: "90% efficiency" },
      ],
    },
    {
      title: "WebAppScaler",
      description:
        "High-performance web application with optimized API response times and robust messaging system. Built to handle massive concurrent loads with advanced caching and queue management.",
      image: "/images/web_app_scale.png",
      technologies: ["HTML", "Node.js", "MongoDB", "Redis", "RabbitMQ", "Kafka", "Docker"],
      liveUrl: "https://www.canva.com/design/DAGSCiNK3rY/MD_cRhnVT53Xqy7Z_nB9xw/edit?utm_content=DAGSCiNK3rY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      githubUrl: "https://github.com/ArinNigam/WebAppScaler",
      status: "Completed",
      date: "Sept 2024 - Oct 2024",
      metrics: [
        { icon: Zap, label: "40% faster API response" },
        { icon: Activity, label: "10,000+ concurrent requests" },
        { icon: Database, label: "50% improved data processing" },
      ],
    },
    {
      title: "Socio",
      description:
        "Full-featured social media platform with real-time chat, post creation, liking, commenting, and friend connections. Supports 100+ concurrent users with WebSocket integration.",
      image: "/images/socio.png",
      technologies: ["React", "Node.js", "Express", "MongoDB", "WebSockets"],
      liveUrl: "https://socio-client-arin-nigams-projects.vercel.app/",
      githubUrl: "https://github.com/arinnigam/socio",
      status: "Completed",
      date: "Jun 2024 - Jul 2024",
      metrics: [
        { icon: Users, label: "100+ concurrent users" },
        { icon: TrendingUp, label: "30% engagement increase" },
      ],
    },
    {
      title: "Old Portfolio Website",
      description:
        "Personal portfolio website showcasing my skills, projects, and experience. Built with Flutter Web optimized for performance and SEO.",
      image: "/images/portfolio.png",
      technologies: ["Flutter", "Dart", "Firebase"],
      liveUrl: "https://arinnigam.github.io/Portfolio",
      githubUrl: "https://github.com/ArinNigam/Portfolio",
      status: "Completed",
      date: "May 2024",
      metrics: [
        { icon: Users, label: "200+ users visits" },
        { icon: Zap, label: "Showcases projects, experience" },
      ],
    },
    {
      title: "Talawa",
      description:
        "Open-source community platform for event management and collaboration. Features event creation, RSVP management, and real-time notifications.",
      image: "/images/talawa.png",
      technologies: ["Flutter", "Firebase", "Node.js", "Express", "MongoDB"],
      liveUrl: "https://drive.google.com/file/d/1XbJiNv23t3_8HTlgFg6jdTbE0gk67Fw5/view?usp=drive_link",
      githubUrl: "https://github.com/ArinNigam/Talawa",
      status: "Completed",
      date: "Mar 2024 - May 2024",
      metrics: [
        { icon: Users, label: "1000+ Active Developers Community" },
        { icon: Activity, label: "50% Increase in traffic" },
      ],
    },
    {
      title: "Smart Insti App",
      description:
        "This app aims to solve the day-to-day problems that students and faculty face in Colleges. This could include features like Time Table, Classroom Vacancy, Lost and Found, Chatrooms.",
      image: "/images/smart_insti_app.png",
      technologies: ["Flutter", "Firebase", "Node.js", "Express", "MongoDB"],
      liveUrl: "https://www.youtube.com/watch?v=VpM866JLoPM",
      githubUrl: "https://github.com/ArinNigam/Smart-Insti-App",
      status: "Completed",
      date: "Jan 2024 - Mar 2024",
      metrics: [
        { icon: Users, label: "100+ active users" },
        { icon: Activity, label: "1000+ API Requests" },
      ],
    },

    {
      title: "PlayPals",
      description:
        "Gaming platform with innovative matchmaking algorithm and Steam API integration. Used by 50+ users during BITS Goa's Annual Tech-Fest with 50% increase in user connections.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Reclaim Protocol"],
      liveUrl: "https://www.loom.com/share/b63b7db3dec44fcea50398caf84b42f0",
      githubUrl: "https://github.com/shadab375/play_pals",
      status: "Completed",
      date: "Feb 2024",
      metrics: [
        { icon: Users, label: "50+ active users" },
        { icon: Zap, label: "35% faster data retrieval" },
      ],
    },
    {
      title: "Cricstat",
      description:
        "Live cricket score mobile application with real-time updates, match schedules, and player search functionality. Handles 100+ daily API requests with 99.9% uptime reliability.",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=300&fit=crop",
      technologies: ["Flutter", "Firebase", "Cricket API", "Dart"],
      liveUrl: "https://github.com/ArinNigam/Cricstat",
      githubUrl: "https://github.com/ArinNigam/Cricstat",
      status: "Completed",
      date: "Sept 2023 - Oct 2023",
      metrics: [
        { icon: Activity, label: "100+ daily API requests" },
        { icon: Clock, label: "99.9% uptime" },
      ],
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
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
                  <span className="inline-block">Featured</span>{" "}
                  <span className="inline-block bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
                    Projects
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  <span className="inline-block animate-fade delay-300">Here are some of my</span>{" "}
                  <span className="inline-block text-primary font-semibold animate-fade delay-500">
                    recent projects
                  </span>{" "}
                  <span className="inline-block animate-fade delay-700">
                    that showcase my skills and passion for
                  </span>{" "}
                  <span className="inline-block text-blue-400 font-semibold animate-fade delay-900">
                    innovative development
                  </span>
                </p>
              </div>
              <div className="grid lg:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <Card
                    key={index}
                    className={`overflow-hidden hover:shadow-xl transition-all duration-500 group border-2 hover:border-primary/20 ${
                      isVisible ? "animate-fade slide-in-from-bottom-4" : "opacity-0 translate-y-8"
                    }`}
                    style={{ animationDelay: `${(index + 1) * 200}ms` }}
                  >
                    <div className="aspect-video overflow-hidden relative">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 right-4 flex gap-2">
                        <Badge variant={project.status === "Live" ? "default" : "secondary"} className="animate-pulse">
                          {project.status}
                        </Badge>
                      </div>
                      <div className="absolute top-4 left-4">
                        <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                          {project.date}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                        <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {project.title}
                        </span>
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed group-hover:text-muted-foreground/80 transition-colors">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="grid grid-cols-1 gap-2 py-2">
                        {project.metrics.map((metric, metricIndex) => {
                          const IconComponent = metric.icon
                          return (
                            <div
                              key={metricIndex}
                              className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary/80 transition-colors"
                            >
                              <IconComponent className="h-4 w-4 text-primary animate-pulse" />
                              <span className="font-medium">{metric.label}</span>
                            </div>
                          )
                        })}
                      </div>

                      <div className="flex gap-3 pt-2">
                        <Button
                          size="sm"
                          asChild
                          className="flex-1 group/btn hover:scale-105 transition-all duration-300"
                        >
                          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                            Live Demo
                          </Link>
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          asChild
                          className="flex-1 hover:scale-105 transition-all duration-300"
                        >
                          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
