import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

type System = {
  name: string
  tag: string
  tagTone: "ok" | "warn"
  arch: string
  description: string
  metrics: string[]
  liveUrl?: string
  liveLabel?: string
  codeUrl?: string
  featured?: boolean
}

const systems: System[] = [
  {
    name: "Komo AI",
    tag: "production @ cityflo",
    tagTone: "ok",
    arch: "Python · FastAPI · Anthropic Claude SDK · MCP · AWS ECS Fargate",
    description:
      "Multi-agent service platform I pitched and took from a 6-hour hackathon prototype to company-wide production. Spec-driven agent definitions, per-agent MCP tool servers, USD-budget-bound execution, and bidirectional agent handoff across 28 integrated tools.",
    metrics: ["80+ daily users", "30–40 investigations/day", "30–60 min → 2–3 min per investigation"],
    featured: true,
  },
  {
    name: "SageAI",
    tag: "production @ cityflo",
    tagTone: "ok",
    arch: "Go · Gin · FastAPI · PydanticAI · LiteLLM · Redis Pub/Sub · PostgreSQL",
    description:
      "AI support backend handling stateful conversations across horizontally-scaled ECS. I built the real-time concurrency core — exactly-one agent spawn via Redis SetNX, cross-instance Pub/Sub — and the in-house agent service that replaced Flowise: PydanticAI agents on a conversation graph calling 20+ backend tools, a fallback-wrapped model cascade, and a realtime voice agent over LiveKit WebRTC.",
    metrics: ["36K chats/week", "80% AI deflection", "voice + chat", "20+ tools"],
    featured: true,
  },
  {
    name: "Luxe & Bus Rentals",
    tag: "production @ cityflo",
    tagTone: "ok",
    arch: "Python · Django · React · PostgreSQL · zone-based pricing engine",
    description:
      "Cityflo's new B2C subsegment, launched 2025 — I own the entire architecture end to end. Designed zone-based dynamic pricing with direct operational control, built the operator dashboard for vehicle and driver management, and shipped the booking flow now going live for direct customer bookings.",
    metrics: ["solo-owned, end to end", "APIs 1s → 200ms", "40% ops efficiency gain"],
    liveUrl: "https://luxe.cityflo.com/",
    liveLabel: "luxe.cityflo.com",
    featured: true,
  },
  {
    name: "Your Health Copilot",
    tag: "live product",
    tagTone: "warn",
    arch: "Next.js · LangChain · RAG · Supabase · AWS",
    description:
      "Full-stack dashboard where 100+ users upload and query personal health reports. RAG pipeline with 75% higher accuracy on multi-document queries; similarity search tuned for 40% lower latency.",
    metrics: ["100+ users", "40% faster retrieval"],
    liveUrl: "https://www.yourhealthcopilot.io/",
    liveLabel: "yourhealthcopilot.io",
  },
  {
    name: "GTA-VI Resume Builder",
    tag: "live product",
    tagTone: "warn",
    arch: "Three.js · LangChain · Gemini · S3 · Upstash",
    description:
      "Interactive 3D resume builder in a GTA VI-inspired world — AI-driven resume generation rendered in an explorable scene. 100+ resumes created.",
    metrics: ["100+ resumes created"],
    liveUrl: "https://gta-vi-resume.vercel.app/",
    liveLabel: "gta-vi-resume.vercel.app",
  },
  {
    name: "MySummary Pro",
    tag: "micro-saas",
    tagTone: "warn",
    arch: "Node.js · Next.js · Gemini · Docker · AWS",
    description:
      "WhatsApp AI chatbot that summarizes websites and YouTube links. Full SaaS platform with integrated analytics, handling 1,000+ monthly API calls.",
    metrics: ["1K+ API calls/month", "90% summary efficiency"],
    liveUrl: "https://mysummary.pro",
    liveLabel: "mysummary.pro",
  },
  {
    name: "WebAppScaler",
    tag: "systems deep-dive",
    tagTone: "warn",
    arch: "Node.js · Kafka · RabbitMQ · Redis · MongoDB · Docker",
    description:
      "Load-bearing architecture study: queueing, caching, and messaging patterns pushed to 10,000+ concurrent requests with 40% faster API responses.",
    metrics: ["10K+ concurrent requests"],
    codeUrl: "https://github.com/ArinNigam/WebAppScaler",
  },
]

const toneClass = {
  ok: "text-ok border-ok/30 bg-ok/10",
  warn: "text-warn border-warn/30 bg-warn/10",
}

export function Systems() {
  return (
    <section id="systems" className="scroll-mt-24 border-t px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="systems"
          title="Systems I've built"
          lead="Three run in production at Cityflo today. The rest I designed, shipped, and operate myself."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {systems.map((s, i) => (
            <Reveal key={s.name} delay={(i % 2) * 0.08} className={s.featured ? "md:col-span-1" : ""}>
              <article
                className={`group flex h-full flex-col rounded-lg border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.5)] ${
                  s.featured ? "border-primary/25" : ""
                }`}
              >
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold">{s.name}</h3>
                  <span
                    className={`shrink-0 rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${toneClass[s.tagTone]}`}
                  >
                    {s.tag}
                  </span>
                </div>

                <p className="mb-3 font-mono text-[11px] leading-relaxed text-primary/80">{s.arch}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.description}</p>

                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
                  {s.metrics.map((m) => (
                    <span key={m} className="font-mono text-xs text-foreground">
                      <span className="text-ok">▲</span> {m}
                    </span>
                  ))}
                </div>

                {(s.liveUrl || s.codeUrl) && (
                  <div className="mt-5 flex gap-3 border-t pt-4">
                    {s.liveUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={s.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-3.5 w-3.5" />
                          {s.liveLabel ?? "Live"}
                        </a>
                      </Button>
                    )}
                    {s.codeUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={s.codeUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-3.5 w-3.5" />
                          Source
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-8">
          <p className="font-mono text-xs text-muted-foreground">
            more on github — Smart Insti (AutomateX winner, 200+ DAU), PlayPals (Quark runner-up), Socio, Cricstat →{" "}
            <a
              href="https://github.com/ArinNigam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              github.com/ArinNigam
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
