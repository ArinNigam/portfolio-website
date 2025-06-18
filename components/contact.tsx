"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import emailjs from "emailjs-com"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { useToast } from "@/components/ui/use-toast"

export function Contact() {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "Title",
    message: "",
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const serviceID = "service_krv6bqs"
    const templateID = "template_vyr71xj"
    const userID = "QN7cB86HPU7NAT2iz"

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(
        (response) => {
          toast({
            title: "Success",
            description: "Message sent successfully!"
          })
        },
        (error) => {
          toast({
            title: "Error",
            description: "Failed to send message. Please try again later."
          })
        }
      )

    // Reset form
    setFormData({ name: "", email: "", message: "", title: "Title" })
  }


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {mounted && (
            <>
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 animate-in fade-in slide-in-from-bottom-4">
                Get In Touch
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6 animate-in fade-in slide-in-from-left-4 delay-300">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">{"Let's work together"}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      I'm currently looking for full-time opportunities and exciting projects. Whether you have a
                      question, want to discuss a project, or just want to connect, feel free to reach out!
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 group">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <span>arin.nigam@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3 group">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <span>+91 7042052330</span>
                    </div>
                    <div className="flex items-center space-x-3 group">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <span>Mumbai, Maharashtra</span>
                    </div>
                  </div>
                </div>

                <Card className="animate-in fade-in slide-in-from-right-4 delay-500">
                  <CardHeader>
                    <CardTitle>Send a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and I'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <button
                              type="button"
                              className="block w-full rounded-md border bg-[#020817] px-3 py-2 text-left text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm transition-all focus:scale-[1.02]"
                            >
                              {formData.title || "Select a Title"}
                            </button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-full">
                            <DropdownMenuItem
                              onClick={() => setFormData({ ...formData, title: "General Inquiry" })}
                            >
                              General Inquiry
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => setFormData({ ...formData, title: "Project Collaboration" })}
                            >
                              Project Collaboration
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => setFormData({ ...formData, title: "Job Opportunity" })}
                            >
                              Job Opportunity
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => setFormData({ ...formData, title: "Other" })}
                            >
                              Other
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <div>
                        <Input
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="transition-all focus:scale-[1.02]"
                        />
                      </div>
                      <div>
                        <Input
                          name="email"
                          type="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="transition-all focus:scale-[1.02]"
                        />
                      </div>
                      <div>
                        <Textarea
                          name="message"
                          placeholder="Your Message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="transition-all focus:scale-[1.02]"
                        />
                      </div>
                      <Button type="submit" className="w-full group">
                        <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
