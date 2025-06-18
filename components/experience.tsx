"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, MapPin } from "lucide-react"
import { useEffect, useState } from "react"

export function Experience() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const experiences = [
    {
      title: "SDE Intern",
      company: "Walmart Global Tech",
      location: "Bengaluru",
      duration: "Jan 2025 - Present",
      technologies: ["Springboot", "Java", "GCP", "Kafka", "Airflow"],
      achievements: [
        "Developed 10+ REST and GraphQL API endpoints for new admin portal, going into production within 2 sprints",
        "Automated regression testing for seller-risk workflows by triggering DAGs and generating status reports stored in GCS",
        "Built regression pipeline using Airflow, BigQuery, and GCS to eliminate manual testing",
      ],
      current: true,
    },
    {
      title: "Open Source Contributor",
      company: "Palisadoes Foundation",
      location: "Remote",
      duration: "Mar 2024 – May 2024",
      technologies: ["Flutter", "React.js", "MongoDB", "GraphQL", "Docker"],
      achievements: [
        "Demonstrated adaptability in GSoC'24 environment, resolving issues and submitting multiple PRs",
        "Showcased creativity by designing Figma mockups and developing efficient GraphQL API endpoints",
        "Led discussions with 200+ developers, driving collaborative problem-solving",
      ],
    },
    {
      title: "Open Source Contributor",
      company: "OpenLake",
      location: "Remote",
      duration: "Jan 2024 - Feb 2024",
      technologies: ["Flutter", "Node.js", "MongoDB"],
      achievements: [
        "Conceptualized institute app, streamlining processes for 500+ users",
        "Championed user-centric features like customizable dashboard used by 200+ daily active users",
        "Architected and deployed 10+ RESTful API endpoints, improving server response times by 25%",
      ],
    },
    {
      title: "SDE Intern",
      company: "Shris Infotech Services",
      location: "Hyderabad",
      duration: "May 2023 – Jul 2023",
      technologies: ["Flutter", "Firebase", "AtProtocol", "Solana"],
      achievements: [
        "Contributed to cross-platform mobile app development, boosting daily active users by 25%",
        "Pioneered Solana Blockchain integration, enhancing security and cutting transaction processing time by 10%",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {mounted && (
            <>
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 animate-in fade-in slide-in-from-bottom-4">
                Work Experience
              </h2>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <Card
                    key={index}
                    className={`hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 ${
                      exp.current ? "ring-2 ring-primary/20 bg-primary/5" : ""
                    }`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <CardTitle className="flex items-center gap-2">
                            <Building className="h-5 w-5 text-primary" />
                            {exp.title}
                            {exp.current && (
                              <Badge variant="default" className="ml-2">
                                Current
                              </Badge>
                            )}
                          </CardTitle>
                          <CardDescription className="text-lg font-medium text-foreground mt-1">
                            {exp.company}
                          </CardDescription>
                        </div>
                        <div className="flex flex-col sm:items-end gap-1">
                          <Badge variant="outline" className="flex items-center gap-1 w-fit">
                            <Calendar className="h-3 w-3" />
                            {exp.duration}
                          </Badge>
                          <span className="text-sm text-muted-foreground flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-2 text-muted-foreground">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
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
