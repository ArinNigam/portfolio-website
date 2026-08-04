"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Send, Clock } from "lucide-react"
import emailjs from "emailjs-com"
import { useToast } from "@/components/ui/use-toast"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"

export function Contact() {
  const { toast } = useToast()
  const [sending, setSending] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "Job Opportunity",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)

    const serviceID = "service_krv6bqs"
    const templateID = "template_vyr71xj"
    const userID = "QN7cB86HPU7NAT2iz"

    emailjs.send(serviceID, templateID, formData, userID).then(
      () => {
        toast({ title: "Message sent", description: "I'll get back to you within a day." })
        setFormData({ name: "", email: "", message: "", title: "Job Opportunity" })
        setSending(false)
      },
      () => {
        toast({
          title: "Message not sent",
          description: "Something went wrong — email me directly at arin.nigam@gmail.com.",
        })
        setSending(false)
      },
    )
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="scroll-mt-24 border-t px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="contact"
          title="Let's build your AI product"
          lead="Hiring for a backend or AI systems role? Tell me what you're building."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-6">
              <a
                href="mailto:arin.nigam@gmail.com"
                className="group inline-flex items-center gap-3 font-display text-2xl font-semibold text-foreground transition-colors hover:text-primary sm:text-3xl"
              >
                <Mail className="h-6 w-6 text-primary" />
                arin.nigam@gmail.com
              </a>

              <div className="space-y-3 text-sm text-muted-foreground">
                <p className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 shrink-0 text-primary" />
                  Mumbai, India — remote-first by preference
                </p>
                <p className="flex items-center gap-3">
                  <Clock className="h-4 w-4 shrink-0 text-primary" />
                  IST (UTC+5:30) — comfortable overlap with EU all day and US mornings/evenings; async-first from
                  open-source and distributed-team work
                </p>
              </div>

              <div className="rounded-lg border bg-card p-5">
                <p className="font-mono text-xs leading-relaxed text-muted-foreground">
                  <span className="text-ok">status:</span> open to remote full-time roles
                  <br />
                  <span className="text-ok">focus:</span> AI backend · multi-agent systems · real-time infra
                  <br />
                  <span className="text-ok">response_time:</span> &lt; 24h
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-4 rounded-lg border bg-card p-6">
              <div>
                <label htmlFor="contact-title" className="mb-1.5 block font-mono text-xs text-muted-foreground">
                  reason
                </label>
                <select
                  id="contact-title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option>Job Opportunity</option>
                  <option>Project Collaboration</option>
                  <option>General Inquiry</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="contact-name" className="mb-1.5 block font-mono text-xs text-muted-foreground">
                  name
                </label>
                <Input id="contact-name" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-1.5 block font-mono text-xs text-muted-foreground">
                  email
                </label>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-1.5 block font-mono text-xs text-muted-foreground">
                  message
                </label>
                <Textarea
                  id="contact-message"
                  name="message"
                  placeholder="What are you building, and where do I fit?"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" className="group w-full" disabled={sending}>
                <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                {sending ? "Sending…" : "Send message"}
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
