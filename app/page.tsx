import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Systems } from "@/components/systems"
import { Demos } from "@/components/demos"
import { Skills } from "@/components/skills"
import { Achievements } from "@/components/achievements"
import { Attachments } from "@/components/attachments"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Systems />
        <Demos />
        <Skills />
        <Achievements />
        <Attachments />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
