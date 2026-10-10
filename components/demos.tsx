"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"

type Demo = {
  id: string
  title: string
  system: string
  note: string
}

// Append new recordings here — id is the YouTube video id.
const demos: Demo[] = [
  {
    id: "Je9hM2ajTNM",
    title: "Luxe operator dashboard",
    system: "cityflo luxe",
    note: "Vehicle, driver, and fare operations for the premium cab business — built solo, end to end.",
  },
  {
    id: "5G6YHZEjBc4",
    title: "Bus Rentals booking flow",
    system: "cityflo rentals",
    note: "Group commute bookings going direct-to-customer — no more manual ride confirmations.",
  },
  {
    id: "fU4Js2q2ddo",
    title: "Your Health Copilot — demo",
    system: "health copilot",
    note: "Upload personal health reports and query them through the RAG pipeline.",
  },
  {
    id: "9uBXOWyxeQs",
    title: "Your Health Copilot — walkthrough",
    system: "health copilot",
    note: "A deeper pass through the dashboard and multi-document queries.",
  },
  {
    id: "VpM866JLoPM",
    title: "Smart Insti app",
    system: "automatex winner",
    note: "The academic platform that won AutomateX 2024 — 200+ daily active users.",
  },
  {
    id: "958S_uwsUHg",
    title: "Tech Mazdoor",
    system: "cityflo ai support",
    note: "Cityflo's AI tech support agent — mention it in a group or DM it directly, and it investigates the issue.",
  },
]

function DemoCard({ demo }: { demo: Demo }) {
  const [playing, setPlaying] = useState(false)

  return (
    <article className="group overflow-hidden rounded-lg border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
      <div className="relative aspect-video bg-background">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${demo.id}?autoplay=1&rel=0`}
            title={demo.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play: ${demo.title}`}
            className="absolute inset-0 h-full w-full"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${demo.id}/hqdefault.jpg`}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover opacity-80 transition-all duration-300 group-hover:scale-[1.03] group-hover:opacity-100"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/50 bg-background/80 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                <Play className="ml-0.5 h-6 w-6" />
              </span>
            </span>
          </button>
        )}
      </div>
      <div className="p-5">
        <p className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-primary/80">{demo.system}</p>
        <h3 className="font-display text-lg font-semibold">{demo.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{demo.note}</p>
      </div>
    </article>
  )
}

export function Demos() {
  return (
    <section id="demos" className="scroll-mt-24 border-t px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="demos"
          title="Watch it run"
          lead="Screen recordings of the products above, working. No slides — just the software."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {demos.map((demo, i) => (
            <Reveal key={demo.id} delay={(i % 3) * 0.08}>
              <DemoCard demo={demo} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
