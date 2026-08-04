import type React from "react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { Badge } from "@/components/ui/badge"

type Role = {
  company: string
  title: string
  duration: string
  location: string
  current?: boolean
  stack: string[]
  bullets: React.ReactNode[]
}

const roles: Role[] = [
  {
    company: "Cityflo",
    title: "Software Development Engineer",
    duration: "Jul 2025 – Present",
    location: "Mumbai",
    current: true,
    stack: ["Go", "Python", "FastAPI", "Claude SDK", "Redis", "PostgreSQL", "AWS ECS Fargate"],
    bullets: [
      <>
        Pitched, prototyped in a 6-hour hackathon, and shipped <strong className="font-medium text-foreground">Komo AI</strong> to
        production — a multi-agent service platform now used company-wide by{" "}
        <strong className="font-medium text-foreground">80+ people</strong> across engineering, ops, support, and founders —
        cutting investigation time from <strong className="font-medium text-foreground">30–60 minutes to 2–3 minutes</strong>{" "}
        across 30–40 daily investigations.
      </>,
      <>
        Designed the agent framework itself: spec-driven agent definitions, per-agent MCP tool servers, USD-budget-bound
        execution, and bidirectional agent handoff. Shipped two agents — Tech Mazdoor (17 tools) and CX-Pulse (11 tools) —
        integrating Aurora, ClickHouse, GitHub, Datadog, Sentry, Airflow, Celery, Linear, and CleverTap.
      </>,
      <>
        Built core components of <strong className="font-medium text-foreground">SageAI</strong>, Cityflo&apos;s AI customer
        support backend in Go — <strong className="font-medium text-foreground">36K chat contacts/week</strong> with an{" "}
        <strong className="font-medium text-foreground">80% AI deflection rate</strong>, cutting human-handled contacts per
        1,000 rides by 56%. Owned the LLM integration, AI→human handoff orchestration, and ticket sync.
      </>,
      <>
        Replaced SageAI&apos;s Flowise layer with an{" "}
        <strong className="font-medium text-foreground">in-house agent service</strong> — FastAPI + PydanticAI agents on a
        conversation graph exposing 20+ tools across ride, ticket, payment, and driver domains, a fallback-wrapped LLM
        cascade via LiteLLM, and a realtime voice agent (Gemini Live over LiveKit WebRTC, call recordings to S3).
      </>,
      <>
        Engineered SageAI&apos;s per-room concurrency layer for stateful AI conversations across horizontally-scaled ECS:
        goroutine-per-room with buffered channels, Redis SetNX locks for exactly-one agent spawn, and Redis Pub/Sub for
        cross-instance command delivery.
      </>,
      <>
        Own Cityflo&apos;s new B2C subsegment — <strong className="font-medium text-foreground">Luxe</strong> premium cabs
        and <strong className="font-medium text-foreground">Bus Rentals</strong> — end to end: zone-based dynamic pricing
        with direct ops control, an operator dashboard that lifted ops efficiency 40%, API latency cut from 1s to 200ms,
        and a direct customer booking flow now going live.
      </>,
    ],
  },
  {
    company: "Walmart Global Tech",
    title: "Software Engineer Intern",
    duration: "Jan 2025 – Jun 2025",
    location: "Bengaluru",
    stack: ["Java", "Spring Boot", "GraphQL", "MongoDB", "Airflow", "BigQuery", "Kafka"],
    bullets: [
      <>
        Built admin portal APIs across BFF, adapter, and service layers for Confido, Walmart&apos;s seller-risk governance
        platform — replacing manual Postman/DB operations for 40+ risk analysts with RBAC-gated workflows, dual-admin
        approval flows, and SSO integration.
      </>,
      <>
        Built a regression automation framework (Airflow DAGs, BigQuery validation, Kafka outcome consumer) covering 5
        production risk strategies — cutting validation cycles from{" "}
        <strong className="font-medium text-foreground">6–8 hours to under 30 minutes</strong>, enabling daily runs that
        previously ran weekly.
      </>,
    ],
  },
  {
    company: "Palisadoes Foundation · GSoC '24",
    title: "Open Source Contributor",
    duration: "Mar 2024 – May 2024",
    location: "Remote",
    stack: ["Flutter", "React", "GraphQL", "MongoDB", "Docker"],
    bullets: [
      <>
        Contributed to Talawa in a fully-remote, async GSoC environment — designed Figma mockups, shipped GraphQL API
        endpoints, and led discussions in a community of 200+ developers.
      </>,
    ],
  },
  {
    company: "OpenLake",
    title: "Open Source Contributor",
    duration: "Jan 2024 – Feb 2024",
    location: "Remote",
    stack: ["Flutter", "Node.js", "MongoDB"],
    bullets: [
      <>
        Conceptualized and built an institute app serving 500+ users with 200+ daily actives; architected 10+ REST endpoints,
        improving server response times by 25%.
      </>,
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="experience"
          title="Where I've shipped"
          lead="Production systems with real users and real numbers — plus remote, async open-source work."
        />

        <div className="relative space-y-10 border-l border-border pl-8 lg:space-y-12">
          {roles.map((role, i) => (
            <Reveal key={role.company} delay={i * 0.08}>
              <article className="relative">
                <span
                  className={`absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-background ${
                    role.current ? "bg-ok pulse-soft" : "bg-muted-foreground/50"
                  }`}
                />
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="font-display text-xl font-semibold sm:text-2xl">{role.company}</h3>
                  <span className="text-sm text-muted-foreground">{role.title}</span>
                  <span className="ml-auto font-mono text-xs text-muted-foreground">
                    {role.duration} · {role.location}
                  </span>
                </div>
                <ul className="mt-4 space-y-3">
                  {role.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {role.stack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="font-mono text-[11px] font-normal">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12">
          <p className="font-mono text-xs text-muted-foreground">
            <span className="text-primary">edu:</span> B.E. — BITS Pilani · CGPA 8.1/10 · Jul 2021 – Jul 2025
          </p>
        </Reveal>
      </div>
    </section>
  )
}
