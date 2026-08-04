import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { FileText, ArrowDown, ExternalLink, Github, Linkedin, Code2 } from "lucide-react"

const links = [
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/ArinNigam",
    href: "https://github.com/ArinNigam",
    note: "source for every personal project listed above",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/arin-nigam",
    href: "https://linkedin.com/in/arin-nigam",
    note: "full work history and references",
  },
  {
    icon: Code2,
    label: "LeetCode",
    value: "leetcode.com/u/arin_nigam",
    href: "https://leetcode.com/u/arin_nigam",
    note: "1000+ problems, rank under 30K",
  },
  {
    icon: ExternalLink,
    label: "Luxe by Cityflo",
    value: "luxe.cityflo.com",
    href: "https://luxe.cityflo.com/",
    note: "premium cab product I built end-to-end",
  },
  {
    icon: ExternalLink,
    label: "Your Health Copilot",
    value: "yourhealthcopilot.io",
    href: "https://www.yourhealthcopilot.io/",
    note: "live AI health product, 100+ users",
  },
  {
    icon: ExternalLink,
    label: "MySummary Pro",
    value: "mysummary.pro",
    href: "https://mysummary.pro",
    note: "WhatsApp AI summarizer micro-SaaS",
  },
]

export function Attachments() {
  return (
    <section id="attachments" className="scroll-mt-24 border-t px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="attachments"
          title="The paper trail"
          lead="Everything above is verifiable. Résumé, source code, and live products — pull whichever you need."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Résumé card */}
          <Reveal>
            <div className="flex h-full flex-col rounded-lg border border-primary/25 bg-card p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-md bg-primary/10 p-2.5">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">Résumé</h3>
                  <p className="font-mono text-xs text-muted-foreground">Arin_Nigam_Resume.pdf · 1 page · updated Jul 2026</p>
                </div>
              </div>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                One page, numbers first: Komo AI, SageAI, the Walmart risk platform, and the stack behind them. Built to be
                skimmed in 30 seconds.
              </p>
              <div className="mt-auto flex flex-wrap gap-3">
                <Button asChild>
                  <a href="/attachments/Arin_Nigam_Resume.pdf" download>
                    <ArrowDown className="mr-2 h-4 w-4" />
                    Download PDF
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/attachments/Arin_Nigam_Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Open in browser
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>

          {/* Proof links */}
          <Reveal delay={0.1}>
            <div className="grid h-full gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-2">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between bg-card p-5 transition-colors hover:bg-accent/60"
                >
                  <div className="flex items-center gap-2.5">
                    <l.icon className="h-4 w-4 text-primary" />
                    <span className="font-medium text-foreground group-hover:text-primary">{l.label}</span>
                  </div>
                  <div className="mt-3">
                    <p className="font-mono text-xs text-foreground/80">{l.value}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{l.note}</p>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
