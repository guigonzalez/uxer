"use client"

import { Badge } from "@/components/ui/badge"
import { Zap, Eye, Target, TrendingUp } from "lucide-react"

const advantages = [
  {
    icon: Eye,
    title: "Enxergar padr\u00f5es antes",
    description: "An\u00e1lise de grandes volumes de dados de usu\u00e1rio para identificar oportunidades ocultas.",
  },
  {
    icon: Zap,
    title: "Testar mais r\u00e1pido",
    description: "Prototipa\u00e7\u00e3o acelerada e testes automatizados que reduzem ciclos de valida\u00e7\u00e3o.",
  },
  {
    icon: Target,
    title: "Decidir melhor",
    description: "Insights baseados em dados reais, n\u00e3o em achismos. Decis\u00f5es com confian\u00e7a.",
  },
  {
    icon: TrendingUp,
    title: "Escalar impacto",
    description: "Automa\u00e7\u00e3o de processos repetitivos para focar no que realmente importa.",
  },
]

export function AIAdvantage() {
  return (
    <section id="ia" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-950/40 via-transparent to-primary-950/40" />
      <div className="absolute top-1/2 left-0 w-1/2 h-96 bg-primary/5 blur-3xl" />
      <div className="absolute top-1/2 right-0 w-1/2 h-96 bg-accent/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge className="mb-6">Diferencial</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              IA como <span className="text-primary text-glow">alavanca</span>,
              <br />n\u00e3o substituto.
            </h2>
            <p className="text-lg text-foreground-muted mb-8">
              Enquanto outros falam sobre IA, n\u00f3s usamos. Integramos intelig\u00eancia
              artificial em cada etapa do processo para{" "}
              <span className="text-foreground font-medium">
                potencializar a a\u00e7\u00e3o humana
              </span>
              , n\u00e3o para substitu\u00ed-la.
            </p>
            <p className="text-foreground-muted">
              O resultado? Projetos que chegam mais r\u00e1pido, com mais precis\u00e3o e
              impacto mensur\u00e1vel.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {advantages.map((item, index) => (
              <div
                key={item.title}
                className="p-6 rounded-xl border-glow bg-card/50 backdrop-blur-sm hover:bg-card transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-foreground-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
