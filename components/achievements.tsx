import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"

const achievements = [
  {
    result: "winner",
    tone: "text-ok",
    title: "AutomateX Hackathon 2024",
    detail: "Smart Insti — Flutter + backend academic platform, 200+ daily active users",
  },
  {
    result: "top 50",
    tone: "text-warn",
    title: "Meesho Dice Challenge 2024",
    detail: "Pitched a 3D AR prototype for in-app product visualization",
  },
  {
    result: "runner-up",
    tone: "text-warn",
    title: "Quark Hackathon 2024 · BITS Goa",
    detail: "PlayPals — peer-to-peer activity matchmaking with Steam integration",
  },
  {
    result: "contributor",
    tone: "text-ok",
    title: "Google Summer of Code '24 · Palisadoes",
    detail: "Remote open-source work in a community of 200+ developers",
  },
  {
    result: "1000+",
    tone: "text-ok",
    title: "Problems solved",
    detail: "LeetCode global rank under 30K",
  },
]

export function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-24 border-t px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="signals" title="Competitive record" />

        <div className="divide-y rounded-lg border bg-card">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.05}>
              <div className="grid grid-cols-1 gap-1 px-5 py-4 sm:grid-cols-[130px_240px_1fr] sm:items-baseline sm:gap-6">
                <span className={`font-mono text-xs uppercase tracking-[0.2em] ${a.tone}`}>{a.result}</span>
                <span className="font-medium text-foreground">{a.title}</span>
                <span className="text-sm text-muted-foreground">{a.detail}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
