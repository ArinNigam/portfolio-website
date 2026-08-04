import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"

const layers = [
  {
    label: "ai / llm",
    items: ["Anthropic Claude SDK", "MCP", "Multi-agent orchestration", "PydanticAI", "LiteLLM", "RAG", "Voice agents (Gemini Live)", "Vector embeddings", "LangChain"],
  },
  {
    label: "backend",
    items: ["Go (Gin)", "Python (FastAPI)", "Java (Spring Boot)", "REST", "GraphQL", "Microservices"],
  },
  {
    label: "real-time",
    items: ["Redis Pub/Sub", "Goroutines & channels", "WebSockets", "LiveKit", "WebRTC", "Kafka"],
  },
  {
    label: "data & infra",
    items: ["PostgreSQL", "Aurora", "ClickHouse", "MongoDB", "Redis", "BigQuery", "Airflow"],
  },
  {
    label: "cloud / ops",
    items: ["AWS ECS Fargate", "S3", "SQS", "GCP", "Docker", "CI/CD", "Datadog", "Sentry"],
  },
  {
    label: "languages",
    items: ["Go", "Python", "Java", "TypeScript"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="stack"
          title="The stack I run"
          lead="Grouped the way the systems are layered — from the model call down to the metal."
        />

        <div className="overflow-hidden rounded-lg border">
          {layers.map((layer, i) => (
            <Reveal key={layer.label} delay={i * 0.05}>
              <div className="grid grid-cols-1 gap-2 border-b bg-card px-5 py-4 transition-colors last:border-b-0 hover:bg-accent/50 sm:grid-cols-[160px_1fr] sm:items-baseline sm:gap-6">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{layer.label}</span>
                <div className="flex flex-wrap gap-x-5 gap-y-1.5">
                  {layer.items.map((item) => (
                    <span key={item} className="text-sm text-muted-foreground">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
