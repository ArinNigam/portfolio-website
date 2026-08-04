"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"

type Tone = "ok" | "warn" | "err"

type TraceEvent = {
  t: string
  label: string
  detail: string
  ms?: number
  tone: Tone
}

type Trace = {
  title: string
  events: TraceEvent[]
  status: React.ReactNode
}

// Two real flows, kept distinct: SageAI owns the room/concurrency mechanics,
// Komo AI owns the multi-agent investigation mechanics.
const TRACES: Trace[] = [
  {
    title: "sage-ai · live room trace",
    events: [
      { t: "00:00.000", label: "POST /rooms/8f4c/messages", detail: "202 accepted", ms: 41, tone: "ok" },
      { t: "00:00.052", label: "redis.setnx room:8f4c:agent", detail: "lock acquired · ttl 30s", ms: 3, tone: "ok" },
      { t: "00:00.061", label: "agent.spawn room-goroutine", detail: "buffered channels · state isolated", ms: 9, tone: "warn" },
      { t: "00:00.084", label: "POST agent/prediction/{flow}", detail: "pydantic-ai · conversation graph", ms: 22, tone: "warn" },
      { t: "00:00.118", label: "tool.call get-ride-status", detail: "phase: within_30min", ms: 96, tone: "warn" },
      { t: "00:00.229", label: "llm.stream chat-primary", detail: "litellm · fallback cascade armed", ms: 487, tone: "ok" },
      { t: "00:00.734", label: "redis.publish room:8f4c:cmd", detail: "pub/sub → instance-2", ms: 4, tone: "ok" },
      { t: "00:00.752", label: "resolved · deflected", detail: "no human handoff needed", tone: "ok" },
    ],
    status: (
      <>
        this week <span className="text-foreground">36,218 contacts</span> · deflection{" "}
        <span className="text-ok">80.2%</span> · human contacts /1K rides <span className="text-ok">↓56%</span> · p50{" "}
        <span className="text-foreground">190ms</span>
      </>
    ),
  },
  {
    title: "komo-ai · investigation trace",
    events: [
      { t: "00:00.000", label: "POST /investigations", detail: '"why did refunds spike?"', ms: 38, tone: "ok" },
      { t: "00:00.047", label: "agent.spawn tech-mazdoor", detail: "spec-driven · budget $2.00", ms: 11, tone: "warn" },
      { t: "00:00.310", label: "tool.call clickhouse.query", detail: "refund events · last 24h", ms: 312, tone: "warn" },
      { t: "00:00.655", label: "tool.call datadog.logs", detail: "error rate · spike window", ms: 287, tone: "warn" },
      { t: "00:00.978", label: "tool.call github.commits", detail: "deploys in window · diff scan", ms: 198, tone: "warn" },
      { t: "00:01.240", label: "claude.stream analysis", detail: "$0.41 of $2.00 budget used", ms: 533, tone: "ok" },
      { t: "00:01.810", label: "agent.handoff → cx-pulse", detail: "customer impact · bidirectional", ms: 74, tone: "warn" },
      { t: "00:01.960", label: "resolved · root cause posted", detail: "3 sources cited · under budget", tone: "ok" },
    ],
    status: (
      <>
        today <span className="text-foreground">37 investigations</span> · users{" "}
        <span className="text-foreground">80+</span> · tools <span className="text-warn">28</span> · avg spend{" "}
        <span className="text-ok">$0.62</span>
      </>
    ),
  },
]

const toneText: Record<Tone, string> = {
  ok: "text-ok",
  warn: "text-warn",
  err: "text-err",
}

const toneBg: Record<Tone, string> = {
  ok: "bg-ok",
  warn: "bg-warn",
  err: "bg-err",
}

export function AgentTrace() {
  const reduceMotion = useReducedMotion()
  const [traceIdx, setTraceIdx] = useState(0)
  const [count, setCount] = useState(0)

  const trace = TRACES[traceIdx]

  useEffect(() => {
    if (reduceMotion) {
      setCount(TRACES[0].events.length)
      return
    }
    if (count < trace.events.length) {
      const id = setTimeout(() => setCount((c) => c + 1), count === 0 ? 600 : 480)
      return () => clearTimeout(id)
    }
    const id = setTimeout(() => {
      setTraceIdx((i) => (i + 1) % TRACES.length)
      setCount(0)
    }, 4200)
    return () => clearTimeout(id)
  }, [count, trace.events.length, reduceMotion])

  return (
    <div aria-hidden="true" className="select-none">
      <div className="overflow-hidden rounded-lg border bg-card shadow-[0_16px_48px_-16px_rgba(0,0,0,0.6)]">
        {/* Title bar */}
        <div className="flex items-center justify-between border-b bg-muted/60 px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-err/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-warn/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-ok/70" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">{trace.title}</span>
          </div>
          <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-ok">
            <span className="h-1.5 w-1.5 rounded-full bg-ok pulse-soft" />
            live
          </span>
        </div>

        {/* Trace lines */}
        <div className="flex h-[402px] flex-col gap-2.5 overflow-hidden px-4 py-4">
          {trace.events.slice(0, count).map((e) => (
            <motion.div
              key={`${traceIdx}-${e.label}`}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="font-mono text-[11px] leading-tight sm:text-xs"
            >
              <div className="flex items-baseline gap-3">
                <span className="shrink-0 text-muted-foreground/50">{e.t}</span>
                <span className="truncate text-foreground">{e.label}</span>
                {e.ms !== undefined && <span className={`ml-auto shrink-0 ${toneText[e.tone]}`}>{e.ms}ms</span>}
              </div>
              <div className="mt-1 flex items-center gap-3 pl-[74px] sm:pl-[82px]">
                <span
                  className={`h-[3px] rounded-full ${toneBg[e.tone]} opacity-70`}
                  style={{ width: e.ms ? `${Math.min(60, Math.max(6, e.ms / 6))}%` : "6%" }}
                />
                <span className="truncate text-muted-foreground/70">{e.detail}</span>
              </div>
            </motion.div>
          ))}
          {count < trace.events.length && (
            <span className="pl-[74px] font-mono text-xs text-primary sm:pl-[82px]">
              <span className="caret-blink">▍</span>
            </span>
          )}
        </div>

        {/* Status bar */}
        <div className="border-t bg-muted/60 px-4 py-2">
          <p className="font-mono text-[10px] text-muted-foreground sm:text-[11px]">{trace.status}</p>
        </div>
      </div>
      <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
        replays of real production traces · sage-ai ↔ komo-ai
      </p>
    </div>
  )
}
