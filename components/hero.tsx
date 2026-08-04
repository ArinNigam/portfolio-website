"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AgentTrace } from "@/components/agent-trace"

const metrics = [
  { value: "36K", label: "chat contacts handled per week", source: "SageAI" },
  { value: "80%", label: "resolved by AI, no human needed", source: "SageAI" },
  { value: "56%", label: "fewer human contacts per 1K rides", source: "SageAI" },
  { value: "80+", label: "daily users, 30–40 investigations/day", source: "Komo AI" },
]

const socials = [
  { href: "https://github.com/ArinNigam", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/arin-nigam", icon: Linkedin, label: "LinkedIn" },
  { href: "https://leetcode.com/u/arin_nigam", icon: Code2, label: "LeetCode" },
]

export function Hero() {
  const reduceMotion = useReducedMotion()

  const enter = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
        }

  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pt-40">
      <div className="grid-bg absolute inset-0 -z-10" />

      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Thesis */}
          <div>
            <motion.p
              {...enter(0)}
              className="mb-6 flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground"
            >
              <span className="h-2 w-2 rounded-full bg-ok pulse-soft" />
              open to remote roles · ai backend · real-time systems
            </motion.p>

            <motion.h1
              {...enter(0.1)}
              className="font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
            >
              I build AI systems that <span className="text-primary">survive production.</span>
            </motion.h1>

            <motion.p {...enter(0.22)} className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I&apos;m Arin Nigam, a backend engineer at Cityflo. I pitched, prototyped, and shipped{" "}
              <span className="text-foreground">Komo AI</span> — a multi-agent platform the whole company runs
              investigations on — and built the real-time core of <span className="text-foreground">SageAI</span>, an AI
              support backend that deflects 80% of 36,000 weekly chats.
            </motion.p>

            <motion.div {...enter(0.34)} className="mt-8 flex flex-wrap items-center gap-4">
              <Button size="lg" asChild>
                <Link href="#systems">View the systems</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/attachments/Arin_Nigam_Resume.pdf" download>
                  <ArrowDown className="mr-2 h-4 w-4" />
                  Résumé (PDF)
                </a>
              </Button>
              <div className="flex items-center gap-4 pl-1">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    <s.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Signature: live agent trace */}
          <motion.div {...enter(0.4)}>
            <AgentTrace />
          </motion.div>
        </div>

        {/* Production numbers */}
        <motion.dl
          {...enter(0.55)}
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-lg border bg-border lg:grid-cols-4"
        >
          {metrics.map((m) => (
            <div key={m.label} className="flex flex-col bg-card px-5 py-6">
              <dt className="order-2 mt-2 text-sm leading-snug text-muted-foreground">{m.label}</dt>
              <dd className="order-1 font-display text-3xl font-semibold text-foreground sm:text-4xl">{m.value}</dd>
              <p className="order-3 mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-primary/80">{m.source}</p>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
