import Link from "next/link"
import { Github, Linkedin, Mail, ExternalLink, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 py-6 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <Link
              href="https://github.com/arinnigam"
              className="text-muted-foreground hover:text-foreground transition-all hover:scale-110"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/arin-nigam"
              className="text-muted-foreground hover:text-foreground transition-all hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://arinnigam.vercel.app"
              className="text-muted-foreground hover:text-foreground transition-all hover:scale-110"
            >
              <ExternalLink className="h-6 w-6" />
              <span className="sr-only">Website</span>
            </Link>
            <Link
              href="mailto:arin.nigam@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-all hover:scale-110"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
          <div className="border-t py-2">
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              © {new Date().getFullYear()} Arin Nigam. Made with
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
