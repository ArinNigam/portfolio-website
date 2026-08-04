import { Github, Linkedin, Mail, Code2 } from "lucide-react"

const socials = [
  { href: "https://github.com/ArinNigam", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/arin-nigam", icon: Linkedin, label: "LinkedIn" },
  { href: "https://leetcode.com/u/arin_nigam", icon: Code2, label: "LeetCode" },
  { href: "mailto:arin.nigam@gmail.com", icon: Mail, label: "Email" },
]

export function Footer() {
  return (
    <footer className="border-t px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} arin nigam · <span className="text-ok">all systems operational</span>
        </p>
        <div className="flex items-center gap-5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
